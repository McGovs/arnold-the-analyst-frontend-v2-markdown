import { useState, useCallback, useEffect, useRef } from 'react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
}

interface ChatConfig {
  onError?: (error: Error) => void;
}

interface SessionData {
  sessionId: string;
  messages: Message[];
  lastActivity: number;
}

const SESSION_TIMEOUT = 5 * 60 * 1000;         // 5 minutes
const POLL_TIMEOUT = 25_000;                   // 25s per poll request (network timeout)
const POLL_INTERVAL = 5_000;                   // 5 seconds between poll attempts
const MAX_POLL_ATTEMPTS = 100;                 // cap attempts
const MAX_TOTAL_MS = 10 * 60 * 1000;           // hard cap: 10 minutes

function sleep(ms: number) {
  return new Promise<void>(res => setTimeout(res, ms));
}

export function useChat(config?: ChatConfig) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [loadingStartTime, setLoadingStartTime] = useState<number | null>(null);
  const [connectionStatus, setConnectionStatus] = useState<'connected' | 'disconnected' | 'timeout'>('connected');
  const [pollingQueryId, setPollingQueryId] = useState<string | null>(null);
  const [pollAttempts, setPollAttempts] = useState(0);

  const abortControllerRef = useRef<AbortController | null>(null);
  const sessionIdRef = useRef<string>('');
  const pollingLoopActiveRef = useRef(false);        // prevents overlapping loops
  const cancelledRef = useRef(false);                // explicit cancel flag

  // Webhook URLs from environment variables
  const MAIN_WEBHOOK_URL = import.meta.env.VITE_N8N_MAIN_WEBHOOK_URL;
  const POLLING_WEBHOOK_URL = import.meta.env.VITE_N8N_POLLING_WEBHOOK_URL;

  if (!MAIN_WEBHOOK_URL || !POLLING_WEBHOOK_URL) {
    console.error('Missing webhook URLs in environment variables');
    console.error('MAIN_WEBHOOK_URL:', MAIN_WEBHOOK_URL);
    console.error('POLLING_WEBHOOK_URL:', POLLING_WEBHOOK_URL);
  }

  // Generate unique session ID
  const generateSessionId = useCallback(() => {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }, []);

  // Load session data from sessionStorage
  const loadSession = useCallback(() => {
    try {
      const sessionData = sessionStorage.getItem('chatbot_session');
      if (sessionData) {
        const parsed: SessionData = JSON.parse(sessionData);
        const now = Date.now();
        if (now - parsed.lastActivity < SESSION_TIMEOUT) {
          sessionIdRef.current = parsed.sessionId;
          setMessages(parsed.messages);
          return;
        }
      }
    } catch (error) {
      console.warn('Failed to load session data:', error);
    }
    sessionIdRef.current = generateSessionId();
    setMessages([]);
  }, [generateSessionId]);

  // Save session data to sessionStorage
  const saveSession = useCallback((updatedMessages: Message[]) => {
    try {
      const sessionData: SessionData = {
        sessionId: sessionIdRef.current,
        messages: updatedMessages,
        lastActivity: Date.now(),
      };
      sessionStorage.setItem('chatbot_session', JSON.stringify(sessionData));
    } catch (error) {
      console.warn('Failed to save session data:', error);
    }
  }, []);

  // Clear session on tab close
  useEffect(() => {
    const handleBeforeUnload = () => {
      sessionStorage.removeItem('chatbot_session');
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, []);

  // Load session on mount
  useEffect(() => {
    loadSession();
  }, [loadSession]);

  // Save session whenever messages change
  useEffect(() => {
    if (messages.length > 0) saveSession(messages);
  }, [messages, saveSession]);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  }, []);

  const cancelRequest = useCallback(() => {
    cancelledRef.current = true;
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
      abortControllerRef.current = null;
    }
    pollingLoopActiveRef.current = false;
    setIsLoading(false);
    setLoadingStartTime(null);
    setConnectionStatus('connected');
    setPollingQueryId(null);
    setPollAttempts(0);
  }, []);

  /** Single poll attempt (no looping). Returns the parsed JSON or throws. */
  const singlePoll = useCallback(async (queryId: string) => {
    if (!POLLING_WEBHOOK_URL) {
      throw new Error('Polling webhook URL not configured. Please check your environment variables.');
    }

    const controller = new AbortController();
    abortControllerRef.current = controller;

    const to = setTimeout(() => controller.abort(), POLL_TIMEOUT);
    try {
      console.log('Polling with query_id:', queryId, 'attempt:', pollAttempts + 1);

      const response = await fetch(POLLING_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        mode: 'cors',
        signal: controller.signal,
        body: JSON.stringify({ query_id: queryId }),
      });

      clearTimeout(to);

      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

      const data = await response.json();
      console.log('Polling response:', data);
      return data;
    } finally {
      abortControllerRef.current = null;
    }
  }, [POLLING_WEBHOOK_URL, pollAttempts]);

  /** Polling loop: ensures strict 5s spacing and 10m cap. */
  useEffect(() => {
    if (!pollingQueryId || !isLoading) return;
    if (pollingLoopActiveRef.current) return; // already running

    pollingLoopActiveRef.current = true;
    cancelledRef.current = false;

    (async () => {
      const startedAt = Date.now();
      let attempts = 0;

      try {
        while (!cancelledRef.current) {
          // Stop if caps hit
          const elapsed = Date.now() - startedAt;
          if (elapsed > MAX_TOTAL_MS) {
            throw new Error('timeout');
          }
          if (attempts >= MAX_POLL_ATTEMPTS) {
            throw new Error('max_polls_reached');
          }

          // Do one poll
          const data = await singlePoll(pollingQueryId);

          if (data?.status === 'done') {
            const botResponse =
              data.response || data.result || "Sorry, I couldn't retrieve the data.";

            const assistantMsg: Message = {
              id: (Date.now() + 1).toString(),
              role: 'assistant',
              content: botResponse,
              timestamp: Date.now(),
            };

            setMessages(prev => {
              const filtered = prev.filter(
                msg => !(msg.role === 'assistant' && msg.content.includes('Processing your query'))
              );
              return [...filtered, assistantMsg];
            });

            setPollingQueryId(null);
            setIsLoading(false);
            setLoadingStartTime(null);
            setPollAttempts(0);
            setConnectionStatus('connected');
            return; // success
          }

          // Still processing → wait 5s EXACTLY before next attempt
          attempts += 1;
          setPollAttempts(attempts);
          await sleep(POLL_INTERVAL);
        }
      } catch (err) {
        console.error('Polling loop error:', err);

        const msg =
          err instanceof Error && err.message === 'timeout'
            ? 'The query took longer than 10 minutes. Please try simplifying your question.'
            : 'Error processing query. The request may have timed out. Please try again with a simpler query.';

        setMessages(prev => {
          const filtered = prev.filter(
            msg => !(msg.role === 'assistant' && msg.content.includes('Processing your query'))
          );
          return [
            ...filtered,
            {
              id: (Date.now() + 1).toString(),
              role: 'assistant',
              content: msg,
              timestamp: Date.now(),
            },
          ];
        });

        setPollingQueryId(null);
        setIsLoading(false);
        setLoadingStartTime(null);
        setPollAttempts(0);
        setConnectionStatus(err instanceof Error && err.message === 'timeout' ? 'timeout' : 'disconnected');
      } finally {
        pollingLoopActiveRef.current = false;
      }
    })();

    // Cleanup if deps change
    return () => {
      // Nothing: loop watches cancelledRef
    };
  }, [pollingQueryId, isLoading, singlePoll]);

  // Send message to main webhook → kicks off polling if needed
  const sendMessage = useCallback(
    async (userMessage: string) => {
      if (!userMessage.trim()) return;

      cancelRequest();

      const userMsg: Message = {
        id: Date.now().toString(),
        role: 'user',
        content: userMessage,
        timestamp: Date.now(),
      };

      setMessages(prev => [...prev, userMsg]);
      setIsLoading(true);
      setLoadingStartTime(Date.now());
      setConnectionStatus('connected');
      setPollAttempts(0);

      abortControllerRef.current = new AbortController();

      try {
        if (!MAIN_WEBHOOK_URL) {
          throw new Error('Main webhook URL not configured. Please check your environment variables.');
        }

        console.log('Sending initial query to main webhook:', MAIN_WEBHOOK_URL);
        console.log('Query:', userMessage);

        const response = await fetch(MAIN_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          mode: 'cors',
          signal: abortControllerRef.current.signal,
          body: JSON.stringify({
            query: userMessage,
            sessionId: sessionIdRef.current,
          }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Initial response from main webhook:', data);

        // Async path
        if (data.status === 'processing' && data.query_id) {
          console.log('Starting async polling with query_id:', data.query_id);
          setPollingQueryId(data.query_id);

          const processingMsg: Message = {
            id: (Date.now() + 1).toString(),
            role: 'assistant',
            content: 'Processing your query... This may take up to 10 minutes.',
            timestamp: Date.now(),
          };
          setMessages(prev => [...prev, processingMsg]);

          abortControllerRef.current = null;
          return;
        }

        // Sync path
        let botResponse = data.response || data.result || "Sorry, I couldn't retrieve the data.";
        if (Array.isArray(data) && data.length > 0 && data[0].response) {
          botResponse = data[0].response;
        } else if (typeof data === 'string') {
          botResponse = data;
        }

        const assistantMsg: Message = {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: botResponse,
          timestamp: Date.now(),
        };

        setMessages(prev => [...prev, assistantMsg]);
        setIsLoading(false);
        setLoadingStartTime(null);
      } catch (error) {
        console.error('Main webhook error:', error);

        let errorMessage = "Sorry, I couldn't retrieve the data. Please try again later.";

        if (error instanceof Error) {
          if (error.name === 'AbortError') {
            errorMessage =
              connectionStatus === 'timeout'
                ? 'The query took longer than 10 minutes. Please try simplifying your question.'
                : 'Request was cancelled.';
          } else if (error.message.includes('HTTP error')) {
            errorMessage = 'Connection issue with analytics service. Check your internet and try again.';
          }
        }

        setMessages(prev => [
          ...prev,
          {
            id: (Date.now() + 1).toString(),
            role: 'assistant',
            content: errorMessage,
            timestamp: Date.now(),
          },
        ]);

        setIsLoading(false);
        setLoadingStartTime(null);
        setConnectionStatus('disconnected');
      } finally {
        abortControllerRef.current = null;
      }
    },
    [cancelRequest, connectionStatus, MAIN_WEBHOOK_URL]
  );

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (!input.trim() || isLoading) return;
      const message = input;
      setInput('');
      sendMessage(message);
    },
    [input, isLoading, sendMessage]
  );

  const clearChat = useCallback(() => {
    setMessages([]);
    sessionStorage.removeItem('chatbot_session');
    sessionIdRef.current = generateSessionId();
    cancelRequest();
  }, [generateSessionId, cancelRequest]);

  return {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    isLoading,
    loadingStartTime,
    connectionStatus,
    sendMessage,
    cancelRequest,
    clearChat,
    sessionId: sessionIdRef.current,
    pollAttempts,
  };
}
