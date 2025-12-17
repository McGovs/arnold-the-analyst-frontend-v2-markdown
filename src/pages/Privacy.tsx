// src/pages/Privacy.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BarChart3 } from 'lucide-react';
import SlackInstallButton from '../components/SlackInstallButton';

export default function Privacy() {
  const navigate = useNavigate();

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,700&display=swap"
        rel="stylesheet"
      />

      <div className="min-h-screen bg-slate-50" style={{ fontFamily: "'Playfair Display', serif" }}>
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
                <button onClick={() => navigate('/')} className="text-sm text-slate-600 hover:text-slate-900">
                  Home
                </button>
                <button onClick={() => navigate('/pricing')} className="text-sm text-slate-600 hover:text-slate-900">
                  Pricing
                </button>
                <button onClick={() => navigate('/support')} className="text-sm text-slate-600 hover:text-slate-900">
                  Support & FAQ
                </button>
                <button onClick={() => navigate('/privacy-terms')} className="text-sm font-medium text-blue-600">
                  Privacy & Terms
                </button>
              </div>

              <SlackInstallButton className="hidden sm:inline-flex items-center gap-2 bg-white text-slate-800 px-3 py-1.5 rounded border border-slate-300 text-sm font-bold hover:bg-slate-50 transition-colors shadow-sm" />
            </div>
          </div>
        </nav>

        {/* MAIN CONTENT */}
        <main className="pt-20 pb-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
              Privacy Policy & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Terms of Service</span>
            </h1>

            <div className="bg-white p-6 rounded-2xl shadow-lg mb-6">
              <p className="text-slate-700">
                <strong>Effective Date:</strong> November 18, 2025<br />
                <strong>Last Updated:</strong> November 18, 2025
              </p>
            </div>

            {/* PRIVACY POLICY */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 rounded-2xl mb-6">
              <h1 className="text-2xl font-bold text-white">PRIVACY POLICY</h1>
            </div>

            {/* 1. Introduction */}
            <div className="bg-white p-6 rounded-2xl shadow-lg mb-6">
              <h2 className="text-xl font-semibold mb-3 text-blue-600">1. Introduction</h2>
              <p className="text-slate-700 mb-4">
                Arnold The Analyst ("Arnold", "we", "us") is a Slack-based analytics assistant that allows authorized users to query their Google Analytics 4 data using natural language.
              </p>
              <p className="text-slate-700 mb-4">
                Arnold acts as the data processor and system of record for all data accessed and processed on your behalf. This policy explains how data is accessed, processed, secured, and retained.
              </p>
              <p className="text-slate-700">
                <strong>Operator:</strong> Cian McGovern<br />
                <strong>Location:</strong> Ireland<br />
                <strong>Contact:</strong> cian@arnoldtheanalyst.com<br />
                <strong>Website:</strong> https://arnoldtheanalyst.com
              </p>
            </div>

            {/* 2. Information We Collect */}
            <div className="bg-white p-6 rounded-2xl shadow-lg mb-6">
              <h2 className="text-xl font-semibold mb-3 text-blue-600">2. Information We Collect</h2>
              <ul className="text-slate-700 list-disc list-inside space-y-1">
                <li>Slack workspace and user identifiers</li>
                <li>Google OAuth authorization tokens</li>
                <li>GA4 property IDs explicitly selected by the user</li>
                <li>Natural-language queries submitted to Arnold</li>
                <li>Operational logs for security and reliability</li>
              </ul>
            </div>

            {/* 3. How We Use Data */}
            <div className="bg-white p-6 rounded-2xl shadow-lg mb-6">
              <h2 className="text-xl font-semibold mb-3 text-blue-600">3. How We Use Your Information</h2>
              <p className="text-slate-700 mb-3">
                Arnold processes data solely to deliver the analytics responses explicitly requested by users.
              </p>
              <ul className="text-slate-700 list-disc list-inside space-y-1">
                <li>Secure authentication and authorization</li>
                <li>Execution of GA4 queries</li>
                <li>Transformation of GA4 data into structured outputs</li>
                <li>Generation of natural-language summaries from aggregate metrics only</li>
                <li>Service reliability and security monitoring</li>
              </ul>
            </div>

            {/* 4. Data Sharing & Custody */}
            <div className="bg-white p-6 rounded-2xl shadow-lg mb-6">
              <h2 className="text-xl font-semibold mb-3 text-blue-600">4. Data Sharing & Custody</h2>
              <p className="text-slate-700 mb-3">
                Arnold remains the system of record and data custodian throughout the entire data flow.
              </p>
              <ul className="text-slate-700 list-disc list-inside space-y-1">
                <li><strong>Google Cloud Platform:</strong> Primary hosting and processing environment</li>
                <li><strong>Google Analytics API:</strong> Accessed only on user request</li>
                <li><strong>Slack:</strong> Used solely to deliver responses</li>
                <li><strong>AI Providers (OpenAI, Anthropic):</strong> Receive only limited, aggregate GA metrics (e.g. sessions, users, pageviews) to generate natural-language summaries</li>
              </ul>
              <p className="text-slate-700 mt-3">
                No raw event data, user identifiers, credentials, video IDs, or PII are ever shared. AI providers act as stateless sub-processors and do not retain or train on API data.
              </p>
            </div>

            {/* 5. Security */}
            <div className="bg-white p-6 rounded-2xl shadow-lg mb-6">
              <h2 className="text-xl font-semibold mb-3 text-blue-600">5. Data Security</h2>
              <ul className="text-slate-700 list-disc list-inside space-y-1">
                <li>Encrypted data in transit and at rest</li>
                <li>OAuth-scoped, least-privilege access</li>
                <li>Infrastructure hosted and isolated on Google Cloud</li>
                <li>No credential or PII exposure to AI vendors</li>
              </ul>
            </div>

            {/* 6. Retention */}
            <div className="bg-white p-6 rounded-2xl shadow-lg mb-6">
              <h2 className="text-xl font-semibold mb-3 text-blue-600">6. Data Retention</h2>
              <ul className="text-slate-700 list-disc list-inside space-y-1">
                <li>OAuth tokens revoked immediately on disconnect</li>
                <li>No persistent storage of raw GA event data</li>
                <li>Operational metadata retained for up to 30 days</li>
                <li>Workspace data deleted within 30 days of uninstall</li>
              </ul>
            </div>

            {/* CONTACT */}
            <div className="bg-white p-6 rounded-2xl shadow-lg mb-6">
              <h2 className="text-xl font-semibold mb-3 text-blue-600">Contact</h2>
              <p className="text-slate-700">
                Email: cian@arnoldtheanalyst.com<br />
                Location: Ireland
              </p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
