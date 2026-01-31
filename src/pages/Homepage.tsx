import React from 'react';
import { FC } from "react";
import { useNavigate } from 'react-router-dom';
import {
  MessageCircle,
  Clock,
  Zap,
  BarChart3,
  Slack,
} from 'lucide-react';

const TRIAL_URL = 'https://tally.so/r/eqRRVO';

const SlackLogo = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 122.8 122.8"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="#E01E5A" d="M25.8 77.6c0 7.1-5.8 12.9-12.9 12.9S0 84.7 0 77.6s5.8-12.9 12.9-12.9h12.9v12.9z"/>
    <path fill="#E01E5A" d="M32.3 77.6c0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9v32.3c0 7.1-5.8 12.9-12.9 12.9s-12.9-5.8-12.9-12.9V77.6z"/>
    <path fill="#36C5F0" d="M45.2 25.8c-7.1 0-12.9-5.8-12.9-12.9S38.1 0 45.2 0s12.9 5.8 12.9 12.9v12.9H45.2z"/>
    <path fill="#36C5F0" d="M45.2 32.3c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9H12.9C5.8 58.1 0 52.3 0 45.2s5.8-12.9 12.9-12.9h32.3z"/>
    <path fill="#2EB67D" d="M97 45.2c0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9-5.8 12.9-12.9 12.9H97V45.2z"/>
    <path fill="#2EB67D" d="M90.5 45.2c0 7.1-5.8 12.9-12.9 12.9s-12.9-5.8-12.9-12.9V12.9C64.7 5.8 70.5 0 77.6 0s12.9 5.8 12.9 12.9v32.3z"/>
    <path fill="#ECB22E" d="M77.6 97c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9-12.9-5.8-12.9-12.9V97h12.9z"/>
    <path fill="#ECB22E" d="M77.6 90.5c-7.1 0-12.9-5.8-12.9-12.9s5.8-12.9 12.9-12.9h32.3c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9H77.6z"/>
  </svg>
);

export default function Homepage() {
  const navigate = useNavigate();
  const contactUrl = 'https://calendly.com/cian-arnoldtheanalyst/30min';

  const TrialCTA = ({ className = '' }: { className?: string }) => (
    <a
      href={TRIAL_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      <Slack className="w-4 h-4" />
      <span>14 Day Free Trial</span>
    </a>
  );

  return (
    <div
      className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-blue-50/30"
      style={{ fontFamily: "'Playfair Display', serif" }}
    >
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,700&display=swap"
        rel="stylesheet"
      />

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-slate-100 z-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-4 h-4 text-white" />
              </div>
              <span className="font-semibold text-slate-900 tracking-tight">
                Arnold
              </span>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => navigate('/')} className="text-sm font-medium text-blue-600">
                Home
              </button>
              <button onClick={() => navigate('/pricing')} className="text-sm text-slate-600 hover:text-slate-900">
                Pricing
              </button>
              <button onClick={() => navigate('/support')} className="text-sm text-slate-600 hover:text-slate-900">
                Support &amp; FAQ
              </button>
              <button onClick={() => navigate('/privacy-terms')} className="text-sm text-slate-600 hover:text-slate-900">
                Privacy &amp; Terms
              </button>
            </div>

            <TrialCTA className="hidden sm:inline-flex items-center gap-2 bg-white text-slate-800 px-3 py-1.5 rounded border border-slate-300 text-sm font-bold hover:bg-slate-50 transition-colors shadow-sm" />
          </div>
        </div>
      </nav>

      {/* HERO */}
      <main className="pt-24 pb-4 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full px-3 py-1 mb-4 shadow-sm">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-xs text-slate-600">Built for digital agencies</span>
          </div>

          <h1 className="text-[1.35rem] sm:text-2xl md:text-3xl lg:text-4xl tracking-tight leading-normal mb-5">
            <span className="text-slate-900 font-bold">Talk To Your GA4 Data </span>
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              In Slack.
            </span>
            <br />
            <span className="text-slate-900 font-bold">Insights In </span>
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              20s.
            </span>
          </h1>

          <div className="relative max-w-xl mx-auto mb-5">
            <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl border border-slate-200 shadow-xl overflow-hidden">
              <video autoPlay loop muted playsInline className="w-full h-full object-contain">
                <source src="/demo.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-3">
            <TrialCTA className="inline-flex items-center gap-2 bg-white text-slate-800 px-5 py-2.5 rounded border-2 border-slate-300 text-base font-bold hover:bg-slate-50 hover:border-slate-400 transition-colors shadow-sm" />
          </div>

          <p className="text-sm text-slate-500 mb-3">
            Switch clients in one click • Delivered in Slack • Exported to Sheets
          </p>

          <a
            href={contactUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-white text-slate-700 px-4 py-2 rounded-full text-sm font-bold border-2 border-slate-300 hover:bg-slate-50"
          >
            Questions? Lets chat
          </a>
        </div>
      </main>

      {/* FEATURES */}
      <section className="py-16 px-6 border-t border-slate-100">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          <Feature icon={<MessageCircle />} title="Natural Language" />
          <Feature icon={<Clock />} title="Instant Answers" />
          <Feature icon={<Zap />} title="Lives In Slack 24/7" />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 px-6 border-t border-slate-100">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <span className="text-sm text-slate-600">Arnold The Analyst</span>
          <div className="flex gap-6 text-sm text-slate-500">
            <button onClick={() => navigate('/support')}>Support &amp; FAQ</button>
            <button onClick={() => navigate('/privacy-terms')}>Privacy &amp; Terms</button>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Feature({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="text-center p-6">
      <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mx-auto mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-slate-900 mb-2">{title}</h3>
    </div>
  );
}
