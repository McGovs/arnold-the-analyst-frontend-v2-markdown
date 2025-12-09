// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Description from './pages/Description';
import Privacy from './pages/Privacy';
import Pricing from './pages/Pricing';
import SlackInstall from './pages/SlackInstall';
import Support from './pages/Support';
import Video from './pages/Video';
import ChatInterface from './components/ChatInterface';
import { BarChart3 } from 'lucide-react';

// Wrapper for pages that need the simple nav with back button
function PageWrapper({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-slate-50">
      <nav className="bg-white shadow-sm border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <button 
              onClick={() => navigate('/')}
              className="flex items-center gap-2.5 hover:opacity-80 transition-opacity"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-4 h-4 text-white" />
              </div>
              <span className="font-semibold text-slate-900 tracking-tight">Arnold</span>
            </button>
            <button
              onClick={() => navigate('/')}
              className="px-3 py-2 text-sm font-medium rounded-md transition-colors text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            >
              ← Back to Home
            </button>
          </div>
        </div>
      </nav>
      {children}
    </div>
  );
}

// Demo page - shows the ChatInterface
function DemoPage() {
  return (
    <PageWrapper>
      <ChatInterface />
    </PageWrapper>
  );
}

// About page
function AboutPage() {
  return (
    <PageWrapper>
      <Description />
    </PageWrapper>
  );
}

// Slack Install page
function SlackInstallPage() {
  return (
    <PageWrapper>
      <SlackInstall />
    </PageWrapper>
  );
}

// Video Tour page
function VideoPage() {
  return (
    <PageWrapper>
      <Video />
    </PageWrapper>
  );
}

// Main App with Router
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/demo" element={<DemoPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/privacy-terms" element={<Privacy />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/slack-install" element={<SlackInstallPage />} />
        <Route path="/support" element={<Support />} />
        <Route path="/video-tour" element={<VideoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
