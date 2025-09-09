export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
}

export interface SessionData {
  sessionId: string;
  messages: Message[];
  lastActivity: number;
}

export interface ChatConfig {
  onError?: (error: Error) => void;
}

export type ConnectionStatus = 'connected' | 'disconnected' | 'timeout';