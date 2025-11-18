// src/App.tsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import ChatInterface from './components/ChatInterface';
import Description from './pages/Description';
import Privacy from './pages/Privacy';
import { MessageCircle } from 'lucide-react';

// Main App Component with Tabs (for homepage)
function AppWithTabs() {
  const [currentPage, setCurrentPage] = useState<'chat' | 'description' | 'privacy'>('chat');
  const navigate = useNavigate();

  // Handle tab clicks
  const handleTabClick = (page: 'chat' | 'description' | 'privacy') => {
    if (page === 'privacy') {
      navigate('/privacy-terms');  // ← CHANGED from '/privacy'
    } else {
      setCurrentPage(page);
    }
  };

  return (
    <div className="min-h-screen">
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <MessageCircle className="w-6 h-6 text-blue-600" />
              <span className="font-semibold text-gray-900">GA4 Analytics Assistant</span>
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => handleTabClick('chat')}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  currentPage === 'chat'
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                Arnold
              </button>
              <button
                onClick={() => handleTabClick('description')}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  currentPage === 'description'
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                About Arnold
              </button>
              <button
                onClick={() => handleTabClick('privacy')}
                className="px-3 py-2 text-sm font-medium rounded-md transition-colors text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              >
                Privacy, Terms  {/* ← CHANGED from 'Privacy & Terms' */}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className={currentPage === 'chat' ? '' : 'hidden'}>
        <ChatInterface />
      </div>
      <div className={currentPage === 'description' ? '' : 'hidden'}>
        <Description />
      </div>
    </div>
  );
}

// Standalone Privacy & Terms Page
function PrivacyPage() {
  const navigate = useNavigate();
  
  return (
    <div>
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <MessageCircle className="w-6 h-6 text-blue-600" />
              <span className="font-semibold text-gray-900">GA4 Analytics Assistant</span>
            </div>
            <button
              onClick={() => navigate('/')}
              className="px-3 py-2 text-sm font-medium rounded-md transition-colors text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            >
              ← Back to Home
            </button>
          </div>
        </div>
      </nav>
      <Privacy />
    </div>
  );
}

// Main App with Router
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppWithTabs />} />
        <Route path="/privacy-terms" element={<PrivacyPage />} />  {/* ← CHANGED from '/privacy' */}
      </Routes>
    </Router>
  );
}

export default App;
