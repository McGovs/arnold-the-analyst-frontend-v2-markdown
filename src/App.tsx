// src/App.tsx
import React, { useState } from 'react';
import ChatInterface from './components/ChatInterface';
import Description from './pages/Description';
import Privacy from './pages/Privacy';
import { MessageCircle } from 'lucide-react';

function App() {
  const [currentPage, setCurrentPage] = useState<'chat' | 'description' | 'privacy'>('chat');

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
                aria-selected={currentPage === 'chat'}
              >
                Arnold
              </button>
              <button
                onClick={() => setCurrentPage('description')}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  currentPage === 'description'
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
                aria-selected={currentPage === 'description'}
              >
                About Arnold
              </button>
              <button
                onClick={() => setCurrentPage('privacy')}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  currentPage === 'privacy'
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
                aria-selected={currentPage === 'privacy'}
              >
                Privacy Policy
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Page Content: keep all mounted, toggle visibility */}
      <div className={currentPage === 'chat' ? '' : 'hidden'}>
        <ChatInterface />
      </div>
      <div className={currentPage === 'description' ? '' : 'hidden'}>
        <Description />
      </div>
      <div className={currentPage === 'privacy' ? '' : 'hidden'}>
        <Privacy />
      </div>
    </div>
  );
}

export default App;
