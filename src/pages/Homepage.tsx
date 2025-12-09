// src/pages/Homepage.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MessageCircle, Slack, Play, ArrowRight, BarChart3, Clock, Zap } from 'lucide-react';

export default function Homepage() {
  const navigate = useNavigate();
  
  const slackInstallUrl = "https://slack.com/oauth/v2/authorize?client_id=134528973318.9712045945332&scope=app_mentions:read,channels:history,channels:join,channels:manage,channels:read,chat:write,chat:write.public,commands,groups:history,groups:read,im:history,im:write,mpim:history,users:read&user_scope=";

  // TODO: Replace with your actual video walkthrough URL
  const videoWalkthroughUrl = "/demo";

  // TODO: Replace with your actual contact/calendly URL
  const contactUrl = "/support";

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
                onClick={() => navigate('/demo')}
                className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
              >
                Video Tour
              </button>
              <button 
                onClick={() => navigate('/about')}
                className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => navigate('/support')}
                className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
              >
                Support
              </button>
              <button 
                onClick={() => navigate('/privacy-terms')}
                className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
              >
                Privacy &amp; Terms
              </button>
            </div>

            {/* Slack-style Add to Slack button (nav) - opens in new tab */}
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

      {/* Hero Section */}
      <main className="pt-24 pb-4 px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Social Proof Badge */}
          <div className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full px-3 py-1 mb-4 shadow-sm">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
            <span className="text-xs text-slate-600">Purpose-built for digital agencies</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl tracking-tight leading-normal mb-5">
            <span className="text-slate-900 font-bold">Ask Google Analytics anything.</span>
            <br />
            <span className="text-slate-900 font-bold">Get insights in </span>
            <span className="font-bold italic text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              20 seconds.
            </span>
          </h1>

          {/* GIF Placeholder */}
          <div className="relative max-w-xl mx-auto mb-5">
            <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl border border-slate-200 shadow-xl shadow-slate-200/50 overflow-hidden">
              {/* Replace this div with your actual GIF */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400">
                <Play className="w-10 h-10 mb-2 opacity-50" />
                <span className="text-sm font-medium">Demo GIF goes here</span>
                <span className="text-xs mt-1">Place your GIF in /public/demo.gif</span>
              </div>
              {/* Uncomment this when you have your GIF ready:
              <img 
                src="/demo.gif" 
                alt="Arnold answering a GA4 question in Slack"
                className="w-full h-full object-cover"
              />
              */}
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-3 -right-3 w-16 h-16 bg-blue-500/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-3 -left-3 w-20 h-20 bg-indigo-500/10 rounded-full blur-2xl"></div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-3">
            {/* Slack-style Add to Slack button (main CTA) - opens in new tab */}
            <a
              href={slackInstallUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-slate-800 px-5 py-2.5 rounded border-2 border-slate-300 text-base font-bold hover:bg-slate-50 hover:border-slate-400 transition-colors shadow-sm"
            >
              <svg width="18" height="18" viewBox="0 0 123 123" fill="none" xmlns="http://www.w3.org/2000/svg">
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
            
            {/* Arnold In Action button */}
            <a
              href={videoWalkthroughUrl}
              className="inline-flex items-center gap-1.5 bg-blue-500 text-white px-4 py-2.5 rounded-lg text-sm font-bold shadow-sm"
            >
              <Play className="w-3.5 h-3.5" />
              Arnold In Action
            </a>
          </div>

          <p className="text-sm text-slate-500 mb-3">
            Free to try • Works with any GA4 property
          </p>

          {/* Contact CTA - opens in new tab */}
          <a
            href={contactUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-white text-slate-700 px-8 py-2 rounded-full text-sm font-bold border-2 border-slate-300 hover:border-slate-400 hover:bg-slate-50 transition-all"
          >
            Want more info? Let's chat
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
                Ask questions the way you'd ask a colleague. No SQL or technical GA4 knowledge needed.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Instant Answers</h3>
              <p className="text-slate-600">
                Get insights in seconds, not hours. Queries answered in 20 seconds on average.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Always Available</h3>
              <p className="text-slate-600">
                Arnold lives in Slack. Marketers & managers get instant answers. Analysts get their time back.
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
              Support
            </button>
            <button onClick={() => navigate('/privacy-terms')} className="hover:text-slate-700 transition-colors">
              Privacy &amp; Terms
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
