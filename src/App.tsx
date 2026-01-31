import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, Link, useLocation } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Description from './pages/Description';
import Privacy from './pages/Privacy';
import Pricing from './pages/Pricing';
import SlackInstall from './pages/SlackInstall';
import Support from './pages/Support';
import Video from './pages/Video';
import ThankYou from './pages/ThankYou';
import ChatInterface from './components/ChatInterface';
import { BarChart3, Menu, X } from 'lucide-react';
import SlackInstallButton from './components/SlackInstallButton';

function PageWrapper({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Helper to highlight active link
  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Load the Playfair Display font globally */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,700&display=swap"
        rel="stylesheet"
      />

      <div 
        className="min-h-screen bg-slate-50 flex flex-col" 
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        {/* GLOBAL NAV BAR - Styled to match Pricing.tsx exactly */}
        <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-slate-100 z-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center justify-between h-14">
              {/* Logo Section */}
              <button
                onClick={() => {
                  navigate('/');
                  setIsMenuOpen(false);
                }}
                className="flex items-center gap-2.5 hover:opacity-80 transition-opacity"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-4 h-4 text-white" />
                </div>
                <span className="font-semibold text-slate-900 tracking-tight">Arnold</span>
              </button>

              {/* Desktop Links - Matches Pricing.tsx style */}
              <div className="hidden md:flex items-center gap-8">
                <button
                  onClick={() => navigate('/')}
                  className={`text-sm transition-colors ${isActive('/') ? 'font-medium text-blue-600' : 'text-slate-600 hover:text-slate-900'}`}
                >
                  Home
                </button>
                <button
                  onClick={() => navigate('/pricing')}
                  className={`text-sm transition-colors ${isActive('/pricing') ? 'font-medium text-blue-600' : 'text-slate-600 hover:text-slate-900'}`}
                >
                  Pricing
                </button>
                <button
                  onClick={() => navigate('/support')}
                  className={`text-sm transition-colors ${isActive('/support') ? 'font-medium text-blue-600' : 'text-slate-600 hover:text-slate-900'}`}
                >
                  Support & FAQ
                </button>
                <button
                  onClick={() => navigate('/privacy-terms')}
                  className={`text-sm transition-colors ${isActive('/privacy-terms') ? 'font-medium text-blue-600' : 'text-slate-600 hover:text-slate-900'}`}
                >
                  Privacy & Terms
                </button>
              </div>

              {/* Desktop CTA */}
              <div className="hidden sm:block">
                <SlackInstallButton className="inline-flex items-center gap-2 bg-white text-slate-800 px-3 py-1.5 rounded border border-slate-300 text-sm font-bold hover:bg-slate-50 transition-colors shadow-sm" />
              </div>

              {/* Mobile Burger Menu Button */}
              <div className="md:hidden flex items-center">
                <button
                  onClick={toggleMenu}
                  className="text-slate-600 hover:text-slate-900 focus:outline-none"
                  aria-label="Toggle menu"
                >
                  {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu Overlay */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-b border-slate-100 px-6 py-4 space-y-4 shadow-lg animate-in slide-in-from-top duration-200">
              <Link to="/" className="block text-base text-slate-700 font-medium" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <Link to="/pricing" className="block text-base text-slate-700 font-medium" onClick={() => setIsMenuOpen(false)}>
                Pricing
              </Link>
              <Link to="/support" className="block text-base text-slate-700 font-medium" onClick={() => setIsMenuOpen(false)}>
                Support & FAQ
              </Link>
              <Link to="/privacy-terms" className="block text-base text-slate-700 font-medium" onClick={() => setIsMenuOpen(false)}>
                Privacy & Terms
              </Link>
              <div className="pt-2 border-t border-slate-50">
                <SlackInstallButton className="w-full flex items-center justify-center gap-2 bg-slate-900 text-white px-4 py-3 rounded-lg text-sm font-bold hover:bg-slate-800 transition-colors" />
              </div>
            </div>
          )}
        </nav>

        {/* Dynamic Page Content */}
        <div className="flex-grow">
          {children}
        </div>
      </div>
    </>
  );
}

// Ensure every page is wrapped for consistency
function WrappedHomepage() { return <PageWrapper><Homepage /></PageWrapper>; }
function WrappedPricing() { return <PageWrapper><Pricing /></PageWrapper>; }
function DemoPage() { return <PageWrapper><ChatInterface /></PageWrapper>; }
function AboutPage() { return <PageWrapper><Description /></PageWrapper>; }
function SlackInstallPage() { return <PageWrapper><SlackInstall /></PageWrapper>; }
function VideoPage() { return <PageWrapper><Video /></PageWrapper>; }
function SupportPage() { return <PageWrapper><Support /></PageWrapper>; }
function PrivacyPage() { return <PageWrapper><Privacy /></PageWrapper>; }

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WrappedHomepage />} />
        <Route path="/demo" element={<DemoPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/privacy-terms" element={<PrivacyPage />} />
        <Route path="/pricing" element={<WrappedPricing />} />
        <Route path="/slack-install" element={<SlackInstallPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/video-tour" element={<VideoPage />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </Router>
  );
}
