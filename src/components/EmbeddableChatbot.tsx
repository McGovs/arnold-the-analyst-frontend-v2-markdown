import React, { useState, useEffect } from 'react';
import { useChat } from '../hooks/useChat';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/Card';
import { ScrollArea } from './ui/ScrollArea';
import { Send, Bot, User, Minimize2, Maximize2, X, Clock, Wifi, WifiOff, Trash2 } from 'lucide-react';

interface EmbeddableChatbotProps {
  title?: string;
  placeholder?: string;
  position?: "bottom-right" | "bottom-left" | "top-right" | "top-left";
}

export default function EmbeddableChatbot({
  title = "Arnold The Analyst",
  placeholder = "Ask me about your data...",
  position = "bottom-right",
}: EmbeddableChatbotProps) {
  const { 
    messages, 
    input, 
    handleInputChange, 
    handleSubmit, 
    isLoading, 
    loadingStartTime,
    connectionStatus,
    cancelRequest,
    clearChat
  } = useChat();
  
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  // Update elapsed time during loading
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isLoading && loadingStartTime) {
      interval = setInterval(() => {
        setElapsedTime(Math.floor((Date.now() - loadingStartTime) / 1000));
      }, 1000);
    } else {
      setElapsedTime(0);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isLoading, loadingStartTime]);

  const positionClasses = {
    "bottom-right": "bottom-4 right-4",
    "bottom-left": "bottom-4 left-4",
    "top-right": "top-4 right-4",
    "top-left": "top-4 left-4",
  };

  const formatElapsedTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getLoadingMessage = (seconds: number) => {
    if (seconds < 30) {
      return "Analyzing...";
    } else if (seconds < 60) {
      return "Processing...";
    } else if (seconds < 120) {
      return "BigQuery running...";
    } else {
      return "Almost done...";
    }
  };

  const ConnectionIndicator = () => (
    <div className="flex items-center gap-1">
      {connectionStatus === 'connected' ? (
        <Wifi className="w-3 h-3 text-green-400" />
      ) : connectionStatus === 'timeout' ? (
        <Clock className="w-3 h-3 text-orange-400" />
      ) : (
        <WifiOff className="w-3 h-3 text-red-400" />
      )}
    </div>
  );

  if (!isOpen) {
    return (
      <div className={`fixed ${positionClasses[position]} z-50`}>
        <div className="relative">
          <Button
            onClick={() => setIsOpen(true)}
            className="w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg relative"
          >
            <Bot className="w-6 h-6" />
          </Button>
          {isLoading && (
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={`fixed ${positionClasses[position]} z-50`}>
      <Card className={`w-80 shadow-xl transition-all duration-300 ${isMinimized ? "h-14" : "h-96"}`}>
        <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-3 rounded-t-lg">
          <CardTitle className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <Bot className="w-4 h-4" />
              {title}
              <ConnectionIndicator />
            </div>
            <div className="flex items-center gap-1">
              {messages.length > 0 && !isMinimized && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearChat}
                  className="text-white hover:bg-white/20 p-1 h-6 w-6"
                  title="Clear chat"
                >
                  <Trash2 className="w-3 h-3" />
                </Button>
              )}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMinimized(!isMinimized)}
                className="text-white hover:bg-white/20 p-1 h-6 w-6"
              >
                {isMinimized ? <Maximize2 className="w-3 h-3" /> : <Minimize2 className="w-3 h-3" />}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 p-1 h-6 w-6"
              >
                <X className="w-3 h-3" />
              </Button>
            </div>
          </CardTitle>
        </CardHeader>

        {!isMinimized && (
          <>
            <CardContent className="p-0">
              <ScrollArea className="h-64 p-3">
                {messages.length === 0 && (
                  <div className="text-center text-gray-500 mt-4">
                    <Bot className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                    <p className="text-xs mb-2">Ask me about your data!</p>
                    <div className="text-xs bg-blue-50 p-2 rounded text-left">
                      <p className="font-medium text-blue-800 mb-1">💡 Tip</p>
                      <p className="text-blue-700">Complex queries may take up to 5 minutes. You can switch tabs while waiting.</p>
                    </div>
                  </div>
                )}

                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex gap-2 mb-3 ${message.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    {message.role === "assistant" && (
                      <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                        <Bot className="w-3 h-3 text-blue-600" />
                      </div>
                    )}

                    <div
                      className={`max-w-[75%] p-2 rounded-lg text-xs ${
                        message.role === "user" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-900"
                      }`}
                    >
                      <p className="whitespace-pre-wrap">{message.content}</p>
                      <div className="text-xs opacity-70 mt-1">
                        {new Date(message.timestamp).toLocaleTimeString()}
                      </div>
                    </div>

                    {message.role === "user" && (
                      <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                        <User className="w-3 h-3 text-white" />
                      </div>
                    )}
                  </div>
                ))}

                {isLoading && (
                  <div className="flex gap-2 mb-3">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <Bot className="w-3 h-3 text-blue-600" />
                    </div>
                    <div className="bg-gray-100 p-2 rounded-lg flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-1">
                          <div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce"></div>
                          <div
                            className="w-1 h-1 bg-gray-400 rounded-full animate-bounce"
                            style={{ animationDelay: "0.1s" }}
                          ></div>
                          <div
                            className="w-1 h-1 bg-gray-400 rounded-full animate-bounce"
                            style={{ animationDelay: "0.2s" }}
                          ></div>
                          <span className="text-xs text-gray-600 ml-1">{getLoadingMessage(elapsedTime)}</span>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={cancelRequest}
                          className="text-gray-400 hover:text-gray-600 p-0 h-4 w-4"
                        >
                          <X className="w-2 h-2" />
                        </Button>
                      </div>
                      
                      {elapsedTime > 0 && (
                        <div className="flex items-center gap-1 text-xs text-gray-500">
                          <Clock className="w-2 h-2" />
                          <span>{formatElapsedTime(elapsedTime)}/5:00</span>
                        </div>
                      )}
                      
                      {elapsedTime > 0 && (
                        <div className="mt-1">
                          <div className="w-full bg-gray-200 rounded-full h-1">
                            <div 
                              className="bg-gradient-to-r from-blue-500 to-indigo-500 h-1 rounded-full transition-all duration-1000 ease-out"
                              style={{ width: `${Math.min((elapsedTime / 300) * 100, 100)}%` }}
                            ></div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </ScrollArea>
            </CardContent>

            <CardFooter className="border-t bg-gray-50 p-2">
              <form onSubmit={handleSubmit} className="flex w-full gap-2">
                <Input
                  value={input}
                  onChange={handleInputChange}
                  placeholder={placeholder}
                  disabled={isLoading}
                  className="flex-1 text-xs h-8"
                />
                <Button type="submit" disabled={isLoading || !input.trim()} size="sm" className="h-8 w-8 p-0">
                  <Send className="w-3 h-3" />
                </Button>
              </form>
            </CardFooter>
          </>
        )}
      </Card>
    </div>
  );
}