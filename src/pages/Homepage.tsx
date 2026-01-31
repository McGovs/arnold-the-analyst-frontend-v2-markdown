// src/pages/Homepage.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MessageCircle, Clock, Zap, BarChart3 } from 'lucide-react';
import SlackInstallButton from '../components/SlackInstallButton';

export default function Homepage() {
  const navigate = useNavigate();

  const contactUrl = "https://calendly.com/cian-arnoldtheanalyst/30min";

  return (
    <div 
      className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-blue-50/30"
      style={{ fontFamily: "'Playfair Display', serif" }}
    >
      {/* Google Fonts - Playfair Display with all variants */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,700&display=swap" rel="stylesheet" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-slate-100 z-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-4 h-4 text-white" />
              </div>
              <span className="font-semibold text-slate-900 tracking-tight">Arnold</span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <button 
                onClick={() => navigate('/')}
                className="text-sm font-medium text-blue-600"
              >
                Home
              </button>
              <button 
                onClick={() => navigate('/pricing')}
                className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
              >
                Pricing
              </button>
              <button 
                onClick={() => navigate('/support')}
                className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
              >
                Support & FAQ
              </button>
              <button 
                onClick={() => navigate('/privacy-terms')}
                className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
              >
                Privacy & Terms
              </button>
            </div>

            <SlackInstallButton className="hidden sm:inline-flex items-center gap-2 bg-white text-slate-800 px-3 py-1.5 rounded border border-slate-300 text-sm font-bold hover:bg-slate-50 transition-colors shadow-sm" />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="pt-24 pb-4 px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Social Proof Badge */}
          <div className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full px-3 py-1 mb-4 shadow-sm">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
            <span className="text-xs text-slate-600">Built for digital agencies</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-[1.35rem] sm:text-2xl md:text-3xl lg:text-4xl tracking-tight leading-normal mb-5">
            <span className="text-slate-900 font-bold">Talk To Your GA4 Data </span>
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Without Leaving Slack.</span>
            <br />
            <span className="text-slate-900 font-bold">Insights In </span>
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">20s.</span>
          </h1>

          {/* Demo Video */}
          <div className="relative max-w-xl mx-auto mb-5">
            <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl border border-slate-200 shadow-xl shadow-slate-200/50 overflow-hidden">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-contain"
              >
                <source src="/demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-3 -right-3 w-16 h-16 bg-blue-500/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-3 -left-3 w-20 h-20 bg-indigo-500/10 rounded-full blur-2xl"></div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-3">
            <SlackInstallButton className="inline-flex items-center gap-2 bg-white text-slate-800 px-5 py-2.5 rounded border-2 border-slate-300 text-base font-bold hover:bg-slate-50 hover:border-slate-400 transition-colors shadow-sm" />
          </div>

          <p className="text-sm text-slate-500 mb-3">
            Switch clients in one click • Delivered in Slack • Exported to Sheets
          </p>

          {/* Contact CTA */}
          
            href={contactUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-white text-slate-700 px-4 py-2 rounded-full text-sm font-bold border-2 border-slate-300 hover:border-slate-400 hover:bg-slate-50 transition-all"
          >
            Questions? Let&apos;s chat
          </a>
        </div>
      </main>

      {/* Features Section */}
      <section className="py-16 px-6 border-t border-slate-100">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Natural Language</h3>
              <p className="text-slate-600">
                Ask questions the way you&apos;d ask a colleague. No SQL or technical GA4 knowledge needed.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Instant Answers</h3>
              <p className="text-slate-600">
                Cut time to insights by over 90%. Your questions are answered in 20 seconds on average.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Lives In Slack 24/7</h3>
              <p className="text-slate-600">
                Managers and marketers don&apos;t have to wait on analysts. Analysts claim back their time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-100">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-md flex items-center justify-center">
              <BarChart3 className="w-3 h-3 text-white" />
            </div>
            <span className="text-sm text-slate-600">Arnold The Analyst</span>
          </div>
          
          <div className="flex items-center gap-6 text-sm text-slate-500">
            <button onClick={() => navigate('/support')} className="hover:text-slate-700 transition-colors">
              Support & FAQ
            </button>
            <button onClick={() => navigate('/privacy-terms')} className="hover:text-slate-700 transition-colors">
              Privacy & Terms
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
