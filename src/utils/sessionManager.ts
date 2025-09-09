import { Message, SessionData } from '../types/chat';

const SESSION_STORAGE_KEY = 'chatbot_session';
const SESSION_TIMEOUT = 5 * 60 * 1000; // 5 minutes

export class SessionManager {
  private static instance: SessionManager;
  private sessionId: string = '';

  private constructor() {
    this.initializeSession();
    this.setupCleanupHandlers();
  }

  public static getInstance(): SessionManager {
    if (!SessionManager.instance) {
      SessionManager.instance = new SessionManager();
    }
    return SessionManager.instance;
  }

  private generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private initializeSession(): void {
    try {
      const sessionData = sessionStorage.getItem(SESSION_STORAGE_KEY);
      if (sessionData) {
        const parsed: SessionData = JSON.parse(sessionData);
        const now = Date.now();
        
        // Check if session is still valid
        if (now - parsed.lastActivity < SESSION_TIMEOUT) {
          this.sessionId = parsed.sessionId;
          return;
        }
      }
    } catch (error) {
      console.warn('Failed to load session data:', error);
    }
    
    // Create new session
    this.sessionId = this.generateSessionId();
  }

  private setupCleanupHandlers(): void {
    // Clear session on tab close
    window.addEventListener('beforeunload', () => {
      this.clearSession();
    });

    // Handle page visibility changes (tab switching)
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden) {
        // Tab became visible again, update last activity
        this.updateLastActivity();
      }
    });
  }

  public getSessionId(): string {
    return this.sessionId;
  }

  public saveMessages(messages: Message[]): void {
    try {
      const sessionData: SessionData = {
        sessionId: this.sessionId,
        messages,
        lastActivity: Date.now()
      };
      sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(sessionData));
    } catch (error) {
      console.warn('Failed to save session data:', error);
    }
  }

  public loadMessages(): Message[] {
    try {
      const sessionData = sessionStorage.getItem(SESSION_STORAGE_KEY);
      if (sessionData) {
        const parsed: SessionData = JSON.parse(sessionData);
        const now = Date.now();
        
        // Check if session is still valid and matches current session
        if (parsed.sessionId === this.sessionId && now - parsed.lastActivity < SESSION_TIMEOUT) {
          return parsed.messages;
        }
      }
    } catch (error) {
      console.warn('Failed to load session data:', error);
    }
    
    return [];
  }

  public clearSession(): void {
    try {
      sessionStorage.removeItem(SESSION_STORAGE_KEY);
    } catch (error) {
      console.warn('Failed to clear session data:', error);
    }
  }

  public updateLastActivity(): void {
    try {
      const sessionData = sessionStorage.getItem(SESSION_STORAGE_KEY);
      if (sessionData) {
        const parsed: SessionData = JSON.parse(sessionData);
        parsed.lastActivity = Date.now();
        sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(parsed));
      }
    } catch (error) {
      console.warn('Failed to update last activity:', error);
    }
  }

  public isSessionValid(): boolean {
    try {
      const sessionData = sessionStorage.getItem(SESSION_STORAGE_KEY);
      if (sessionData) {
        const parsed: SessionData = JSON.parse(sessionData);
        const now = Date.now();
        return parsed.sessionId === this.sessionId && now - parsed.lastActivity < SESSION_TIMEOUT;
      }
    } catch (error) {
      console.warn('Failed to check session validity:', error);
    }
    
    return false;
  }
}