import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, Link } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Description from './pages/Description';
import Privacy from './pages/Privacy';
import Pricing from './pages/Pricing';
import SlackInstall from './pages/SlackInstall';
import Support from './pages/Support';
import Video from './pages/Video';
import ThankYou from './pages/ThankYou';
import ChatInterface from './components/ChatInterface';
import { BarChart3, Slack, Menu, X } from 'lucide-react';

const TRIAL_URL = 'https://tally.so/r/eqRRVO';

function PageWrapper({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-slate-50">
      <nav className="bg-white shadow-sm border-b border-slate-100 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button
              onClick={() => {
                navigate('/');
                setIsMenuOpen(false);
              }}
              className="flex items-center gap-2.5 hover:opacity-80"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-4 h-4 text-white" />
              </div>
              <span className="font-semibold text-slate-900">Arnold</span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <Link to="/pricing" className="text-sm font-medium text-slate-600 hover:text-slate-900">Pricing</Link>
              <Link to="/support" className="text-sm font-medium text-slate-600 hover:text-slate-900">Support</Link>
              <a
                href={TRIAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-slate-800 px-3 py-1.5 rounded border border-slate-300 text-sm font-bold hover:bg-slate-50 shadow-sm"
              >
                <Slack className="w-4 h-4" />
                <span>14 Day Free Trial</span>
              </a>
            </div>

            {/* Mobile Menu Button (Burger) */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="text-slate-600 hover:text-slate-900 focus:outline-none p-2"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-100 px-4 pt-2 pb-6 space-y-4 shadow-lg animate-in slide-in-from-top duration-200">
            <Link 
              to="/pricing" 
              className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              to="/support" 
              className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Support
            </Link>
            <div className="pt-2">
              <a
                href={TRIAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-slate-900 text-white px-4 py-3 rounded-lg text-sm font-bold hover:bg-slate-800 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <Slack className="w-5 h-5" />
                <span>Start 14 Day Free Trial</span>
              </a>
            </div>
          </div>
        )}
      </nav>
      {/* Note: If your Homepage.tsx also contains a <nav>, 
          you should remove it from that file to avoid double-navs.
      */}
      {children}
    </div>
  );
}

// Helper components to wrap pages in the PageWrapper
function WrappedHomepage() {
  return (
    <PageWrapper>
      <Homepage />
    </PageWrapper>
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
        {/* ✅ FIXED: Now using WrappedHomepage */}
        <Route path="/" element={<WrappedHomepage />} />
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
