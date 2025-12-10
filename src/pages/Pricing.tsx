// src/pages/Pricing.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BarChart3 } from 'lucide-react';

export default function Pricing() {
  const navigate = useNavigate();

  const slackInstallUrl =
    "https://slack.com/oauth/v2/authorize?client_id=134528973318.9712045945332&scope=app_mentions:read,channels:history,channels:join,channels:manage,channels:read,chat:write,chat:write.public,commands,groups:history,groups:read,im:history,im:write,mpim:history,users:read&user_scope=";

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,700&display=swap"
        rel="stylesheet"
      />

      <div
        className="min-h-screen bg-slate-50"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        {/* NAV BAR */}
        <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-slate-100 z-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center justify-between h-14">
              <button
                onClick={() => navigate('/')}
                className="flex items-center gap-2.5 hover:opacity-80 transition-opacity"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-4 h-4 text-white" />
                </div>
                <span className="font-semibold text-slate-900 tracking-tight">Arnold</span>
              </button>

              <div className="hidden md:flex items-center gap-8">
                <button
                  onClick={() => navigate('/')}
                  className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
                >
                  Home
                </button>
                <button
                  onClick={() => navigate('/pricing')}
                  className="text-sm font-medium text-blue-600"
                >
                  Pricing
                </button>
                <button
                  onClick={() => navigate('/support')}
                  className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
                >
                  Support & FAQs
                </button>
                <button
                  onClick={() => navigate('/privacy-terms')}
                  className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
                >
                  Privacy & Terms
                </button>
              </div>

              <a
                href={slackInstallUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 bg-white text-slate-800 px-3 py-1.5 rounded border border-slate-300 text-sm font-bold hover:bg-slate-50 transition-colors shadow-sm"
              >
                <svg width="14" height="14" viewBox="0 0 123 123" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M25.8 77.6C25.8 84.7 20 90.5 12.9 90.5C5.8 90.5 0 84.7 0 77.6C0 70.5 5.8 64.7 12.9 64.7H25.8V77.6Z" fill="#E01E5A"/>
                  <path d="M32.3 77.6C32.3 70.5 38.1 64.7 45.2 64.7C52.3 64.7 58.1 70.5 58.1 77.6V109.9C58.1 117 52.3 122.8 45.2 122.8C38.1 122.8 32.3 117 32.3 109.9V77.6Z" fill="#E01E5A"/>
                  <path d="M45.2 25.8C38.1 25.8 32.3 20 32.3 12.9C32.3 5.8 38.1 0 45.2 0C52.3 0 58.1 5.8 58.1 12.9V25.8H45.2Z" fill="#36C5F0"/>
                  <path d="M45.2 32.3C52.3 32.3 58.1 38.1 58.1 45.2C58.1 52.3 52.3 58.1 45.2 58.1H12.9C5.8 58.1 0 52.3 0 45.2C0 38.1 5.8 32.3 12.9 32.3H45.2Z" fill="#36C5F0"/>
                  <path d="M97 45.2C97 38.1 102.8 32.3 109.9 32.3C117 32.3 122.8 38.1 122.8 45.2C122.8 52.3 117 58.1 109.9 58.1H97V45.2Z" fill="#2EB67D"/>
                  <path d="M90.5 45.2C90.5 52.3 84.7 58.1 77.6 58.1C70.5 58.1 64.7 52.3 64.7 45.2V12.9C64.7 5.8 70.5 0 77.6 0C84.7 0 90.5 5.8 90.5 12.9V45.2Z" fill="#2EB67D"/>
                  <path d="M77.6 97C84.7 97 90.5 102.8 90.5 109.9C90.5 117 84.7 122.8 77.6 122.8C70.5 122.8 64.7 117 64.7 109.9V97H77.6Z" fill="#ECB22E"/>
                  <path d="M77.6 90.5C70.5 90.5 64.7 84.7 64.7 77.6C64.7 70.5 70.5 64.7 77.6 64.7H109.9C117 64.7 122.8 70.5 122.8 77.6C122.8 84.7 117 90.5 109.9 90.5H77.6Z" fill="#ECB22E"/>
                </svg>
                Add Arnold to Slack
              </a>
            </div>
          </div>
        </nav>

        {/* MAIN CONTENT */}
        <main className="pt-20 pb-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Pricing <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Coming Soon</span>
            </h1>
            <p className="text-xl text-slate-600">
              Arnold is currently free during beta. Paid plans will be announced in 2026.
            </p>
          </div>
        </main>

        {/* Footer */}
        <footer className="py-8 px-6 border-t border-slate-100 bg-white">
          <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-md flex items-center justify-center">
                <BarChart3 className="w-3 h-3 text-white" />
              </div>
              <span className="text-sm text-slate-600">Arnold The Analyst</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-slate-500">
              <button onClick={() => navigate('/support')} className="hover:text-slate-700 transition-colors">
                Support & FAQs
              </button>
              <button onClick={() => navigate('/privacy-terms')} className="hover:text-slate-700 transition-colors">
                Privacy & Terms
              </button>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
