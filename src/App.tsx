import React, { useState } from 'react';
import ChatInterface from './components/ChatInterface';
import EmbedDemo from './pages/EmbedDemo';
import { MessageCircle, Home } from 'lucide-react';

function App() {
  const [currentPage, setCurrentPage] = useState<'chat' | 'embed'>('chat');

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <MessageCircle className="w-6 h-6 text-blue-600" />
              <span className="font-semibold text-gray-900">GA4 Analytics Assistant</span>
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => setCurrentPage('chat')}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  currentPage === 'chat'
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                Chat Interface
              </button>
              <button
                onClick={() => setCurrentPage('embed')}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  currentPage === 'embed'
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                Embed Demo
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      {currentPage === 'chat' ? <ChatInterface /> : <EmbedDemo />}
    </div>
  );
}

export default App;