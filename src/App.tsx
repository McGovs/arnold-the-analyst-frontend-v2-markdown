import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Description from './pages/Description';
import Privacy from './pages/Privacy';
import Pricing from './pages/Pricing';
import SlackInstall from './pages/SlackInstall';
import Support from './pages/Support';
import Video from './pages/Video';
import ThankYou from './pages/ThankYou';
import ChatInterface from './components/ChatInterface';
import { BarChart3, Slack } from 'lucide-react';

const TRIAL_URL = 'https://tally.so/r/eqRRVO';

function PageWrapper({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-slate-50">
      <nav className="bg-white shadow-sm border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-2.5 hover:opacity-80"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-4 h-4 text-white" />
              </div>
              <span className="font-semibold text-slate-900">Arnold</span>
            </button>
            
              href={TRIAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-slate-800 px-3 py-1.5 rounded border border-slate-300 text-sm font-bold hover:bg-slate-50 shadow-sm"
            >
              <Slack className="w-4 h-4" />
              <span>14 Day Free Trial</span>
            </a>
          </div>
        </div>
      </nav>
      {children}
    </div>
  );
}

function DemoPage() {
  return (
    <PageWrapper>
      <ChatInterface />
    </PageWrapper>
  );
}

function AboutPage() {
  return (
    <PageWrapper>
      <Description />
    </PageWrapper>
  );
}

function SlackInstallPage() {
  return (
    <PageWrapper>
      <SlackInstall />
    </PageWrapper>
  );
}

function VideoPage() {
  return (
    <PageWrapper>
      <Video />
    </PageWrapper>
  );
}

export default function App() {
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
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </Router>
  );
}
