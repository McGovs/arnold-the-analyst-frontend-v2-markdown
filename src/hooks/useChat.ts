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

const SESSION_TIMEOUT = 5 * 60 * 1000; // 5 minutes
const POLL_TIMEOUT = 30000; // 30 seconds per poll request
const POLL_INTERVAL = 10000; // 10 seconds between polls
const MAX_POLL_ATTEMPTS = 30; // ~5 minutes total with 10s interval

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

  // Webhook URLs from environment variables
  const MAIN_WEBHOOK_URL = import.meta.env.VITE_N8N_MAIN_WEBHOOK_URL;
  const POLLING_WEBHOOK_URL = import.meta.env.VITE_N8N_POLLING_WEBHOOK_URL;

  // Validate environment variables
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
        lastActivity: Date.now()
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
    if (messages.length > 0) {
      saveSession(messages);
    }
  }, [messages, saveSession]);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  }, []);

  const cancelRequest = useCallback(() => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
      abortControllerRef.current = null;
      setIsLoading(false);
      setLoadingStartTime(null);
      setConnectionStatus('connected');
      setPollingQueryId(null);
      setPollAttempts(0);
    }
  }, []);

  // Updated polling function to use the polling webhook
  const pollForResult = useCallback(async (queryId: string) => {
    if (!isLoading || !queryId || pollAttempts >= MAX_POLL_ATTEMPTS) return;

    const controller = new AbortController();
    abortControllerRef.current = controller;
    const timeoutId = setTimeout(() => controller.abort(), POLL_TIMEOUT);

    try {
      if (!POLLING_WEBHOOK_URL) {
        throw new Error('Polling webhook URL not configured. Please check your environment variables.');
      }

      console.log('Polling with query_id:', queryId);
      console.log('Poll attempt:', pollAttempts + 1);

      // Use POST request with query_id in JSON body for polling webhook
      const response = await fetch(POLLING_WEBHOOK_URL, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        mode: 'cors',
        signal: controller.signal,
        body: JSON.stringify({ query_id: queryId }),
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Polling response:', data);

      // Check if still processing
      if (data.status === 'processing') {
        setPollAttempts(prev => prev + 1);
        return; // Continue polling
      }

      // Processing completed
      let botResponse = data.response || data.result || "Sorry, I couldn't retrieve the data.";
      
      const assistantMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: botResponse,
        timestamp: Date.now()
      };

      setMessages(prev => {
        // Remove the "Processing your query..." message and add the real response
        const filteredMessages = prev.filter(msg => 
          !(msg.role === 'assistant' && msg.content.includes('Processing your query'))
        );
        return [...filteredMessages, assistantMsg];
      });

      setPollingQueryId(null);
      setIsLoading(false);
      setLoadingStartTime(null);
      setPollAttempts(0);
      setConnectionStatus('connected');

    } catch (error) {
      clearTimeout(timeoutId);
      console.error('Polling error:', error);

      if (error instanceof Error && error.name === 'AbortError') {
        if (pollAttempts < MAX_POLL_ATTEMPTS - 1) {
          setPollAttempts(prev => prev + 1);
          return;
        }
      }

      // Max attempts reached or other error
      setMessages(prev => {
        const filteredMessages = prev.filter(msg => 
          !(msg.role === 'assistant' && msg.content.includes('Processing your query'))
        );
        return [...filteredMessages, {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: 'Error processing query. The request may have timed out. Please try again with a simpler query.',
          timestamp: Date.now()
        }];
      });

      setPollingQueryId(null);
      setIsLoading(false);
      setLoadingStartTime(null);
      setPollAttempts(0);
      setConnectionStatus('timeout');
    } finally {
      abortControllerRef.current = null;
    }
  }, [isLoading, pollAttempts]);

  // Polling effect
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (pollingQueryId && isLoading) {
      // Start polling immediately, then continue at intervals
      pollForResult(pollingQueryId);
      
      interval = setInterval(() => {
        pollForResult(pollingQueryId);
      }, POLL_INTERVAL);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [pollingQueryId, isLoading, pollForResult]);

  // Updated sendMessage function to use the main webhook
  const sendMessage = useCallback(async (userMessage: string) => {
    if (!userMessage.trim()) return;

    cancelRequest();

    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: userMessage,
      timestamp: Date.now()
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

      // Use POST request to main webhook for initial submission
      const response = await fetch(MAIN_WEBHOOK_URL, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json', 
          'Accept': 'application/json' 
        },
        mode: 'cors',
        signal: abortControllerRef.current.signal,
        body: JSON.stringify({ 
          query: userMessage, 
          sessionId: sessionIdRef.current 
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Initial response from main webhook:', data);

      // Check if async processing started
      if (data.status === 'processing' && data.query_id) {
        console.log('Starting async polling with query_id:', data.query_id);
        setPollingQueryId(data.query_id);
        
        // Add processing message
        const processingMsg: Message = {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: 'Processing your query... This may take up to 5 minutes.',
          timestamp: Date.now()
        };
        setMessages(prev => [...prev, processingMsg]);
        
        abortControllerRef.current = null; // Clear after initial success
        return;
      }

      // Direct response (synchronous processing)
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
        timestamp: Date.now()
      };

      setMessages(prev => [...prev, assistantMsg]);
      setIsLoading(false);
      setLoadingStartTime(null);

    } catch (error) {
      console.error('Main webhook error:', error);
      
      let errorMessage = "Sorry, I couldn't retrieve the data. Please try again later.";
      
      if (error instanceof Error) {
        if (error.name === 'AbortError') {
          errorMessage = connectionStatus === 'timeout'
            ? "The query took longer than 5 minutes. Please try simplifying your question."
            : "Request was cancelled.";
        } else if (error.message.includes('HTTP error')) {
          errorMessage = "Connection issue with analytics service. Check your internet and try again.";
        }
      }

      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: errorMessage,
        timestamp: Date.now()
      }]);

      setIsLoading(false);
      setLoadingStartTime(null);
      setConnectionStatus('disconnected');
    } finally {
      abortControllerRef.current = null;
    }
  }, [cancelRequest, connectionStatus, pollForResult]);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const message = input;
    setInput('');
    sendMessage(message);
  }, [input, isLoading, sendMessage]);

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
    sessionId: sessionIdRef.current
  };
}