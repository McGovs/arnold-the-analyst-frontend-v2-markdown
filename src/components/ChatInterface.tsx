import React, { useEffect, useState } from 'react';
import { useChat } from '../hooks/useChat';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/Card';
import { ScrollArea } from './ui/ScrollArea';
import { Send, Bot, User, Wifi, WifiOff, Clock, X, Trash2 } from 'lucide-react';
import MarkdownRenderer from './MarkdownRenderer';

export default function ChatInterface() {
  const { 
    messages, 
    input, 
    handleInputChange, 
    handleSubmit, 
    isLoading, 
    loadingStartTime,
    connectionStatus,
    cancelRequest,
    clearChat,
    sessionId
  } = useChat();
  
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

  const formatElapsedTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getLoadingMessage = (seconds: number) => {
    if (seconds < 30) {
      return "Analyzing your query...";
    } else if (seconds < 60) {
      return "Examining the GA4 BigQuery table schema...";
    } else if (seconds < 120) {
      return "Translating your query into SQL before executing...";
    } else if (seconds < 240) {
      return "Almost there! Complex queries can take up to 5 minutes...";
    } else {
      return "Final processing steps...";
    }
  };

  const ConnectionIndicator = () => (
    <div className="flex items-center gap-2 text-xs">
      {connectionStatus === 'connected' ? (
        <>
          <Wifi className="w-3 h-3 text-green-500" />
          <span className="text-green-600">Connected</span>
        </>
      ) : connectionStatus === 'timeout' ? (
        <>
          <Clock className="w-3 h-3 text-orange-500" />
          <span className="text-orange-600">Processing timeout</span>
        </>
      ) : (
        <>
          <WifiOff className="w-3 h-3 text-red-500" />
          <span className="text-red-600">Disconnected</span>
        </>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Your Google Analytics Assistant</h1>
          <p className="text-gray-600">Ask questions about your data and get insights powered by AI and BigQuery</p>
        </div>

        <Card className="w-full max-w-2xl mx-auto shadow-lg">
          <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-t-lg">
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Bot className="w-5 h-5" />
                Arnold The Analyst
              </div>
              <div className="flex items-center gap-3">
                <ConnectionIndicator />
                {messages.length > 0 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearChat}
                    className="text-white hover:bg-white/20 p-1 h-6 w-6"
                    title="Clear chat history"
                  >
                    <Trash2 className="w-3 h-3" />
                  </Button>
                )}
              </div>
            </CardTitle>
          </CardHeader>

          <CardContent className="p-0">
            <ScrollArea className="h-[500px] p-4">
              {messages.length === 0 && (
                <div className="text-center text-gray-500 mt-8">
                  <Bot className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                  <p className="text-lg font-medium mb-2">I'm Arnold, Your Personal Google Analytics Data Analyst :)</p>
                  <div className="mt-4 text-xs text-left bg-gray-50 p-3 rounded-lg">
                    <p className="font-medium mb-2">Example queries:</p>
                    <ul className="space-y-1">
                      <li>
                        • "Which month had the most number of page views?" - <strong>Less than 1 min</strong>
                      </li>
                      <li>
                        • "Show me the user add-to-cart to checkout completion rate, in January 2021 by product category. Identify which categories underperformed." - <strong>1 to 2 mins</strong>
                      </li>
                      <li>
                        • "Compare the 30-day repeat purchase rates for new customers from mobile vs. desktop in Dec-20. Please output repeat purchase rate for the top three countries across each device type." - <strong>2 to 4 mins</strong>
                      </li>
                    </ul>
                    <p className="font-medium mb-2 mt-4">Data Source:</p>
                    <p className="text-gray-600">
                      The data is drawn from publicly available Google Merchant Store data. This data covers a three
                      month time period from <strong>November 1st 2020 to January 2021</strong>.
                    </p>
                    <div className="mt-4 p-2 bg-blue-50 rounded border-l-4 border-blue-400">
                      <p className="text-blue-800 font-medium text-xs">💡 Performance Note</p>
                      <p className="text-blue-700 text-xs">
                        Very complex queries can take up to 5 minutes. You can safely switch tabs while waiting.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-3 mb-4 ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  {message.role === "assistant" && (
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <Bot className="w-4 h-4 text-blue-600" />
                    </div>
                  )}

                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.role === "user" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-900"
                    }`}
                  >
                    {message.role === "assistant" ? (
                      <MarkdownRenderer content={message.content} />
                    ) : (
                      <p className="whitespace-pre-wrap">{message.content}</p>
                    )}
                    <div className="text-xs opacity-70 mt-1">
                      {new Date(message.timestamp).toLocaleTimeString()}
                    </div>
                  </div>

                  {message.role === "user" && (
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                      <User className="w-4 h-4 text-white" />
                    </div>
                  )}
                </div>
              ))}

              {isLoading && (
                <div className="flex gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4 text-blue-600" />
                  </div>
                  <div className="bg-gray-100 p-3 rounded-lg flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                        <div
                          className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.1s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                        <span className="text-sm text-gray-600 ml-2">{getLoadingMessage(elapsedTime)}</span>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={cancelRequest}
                        className="text-gray-500 hover:text-gray-700 p-1 h-6 w-6"
                        title="Cancel request"
                      >
                        <X className="w-3 h-3" />
                      </Button>
                    </div>
                    
                    {elapsedTime > 0 && (
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <Clock className="w-3 h-3" />
                        <span>Elapsed: {formatElapsedTime(elapsedTime)}</span>
                        <span className="text-gray-400">•</span>
                        <span>Max: 5:00</span>
                      </div>
                    )}
                    
                    {elapsedTime > 0 && (
                      <div className="mt-2">
                        <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
                          <span>Time Elapsed</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5">
                          <div 
                            className="bg-gradient-to-r from-blue-500 to-indigo-500 h-1.5 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${Math.min((elapsedTime / 300) * 100, 100)}%` }}
                          ></div>
                        </div>
                      </div>
                    )}
                    
                    {elapsedTime > 60 && (
                      <div className="mt-2 text-xs text-blue-600 bg-blue-50 p-2 rounded">
                        💡 You can safely switch tabs while waiting.
                      </div>
                    )}
                  </div>
                </div>
              )}
            </ScrollArea>
          </CardContent>

          <CardFooter className="border-t bg-gray-50">
            <form onSubmit={handleSubmit} className="flex w-full gap-2">
              <Input
                value={input}
                onChange={handleInputChange}
                placeholder="Ask me about your data..."
                disabled={isLoading}
                className="flex-1"
              />
              <Button type="submit" disabled={isLoading || !input.trim()}>
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </CardFooter>
        </Card>

        {messages.length > 0 && (
          <div className="text-center mt-4">
            <p className="text-xs text-gray-500">
              Session ID: {sessionId.split('_')[2]} • 
              Chat history will clear when you close this tab
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
