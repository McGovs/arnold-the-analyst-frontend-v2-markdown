// src/pages/Homepage.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MessageCircle, Slack, Play, ArrowRight, BarChart3, Clock, Zap } from 'lucide-react';

export default function Homepage() {
  const navigate = useNavigate();
  
  const slackInstallUrl = "https://slack.com/oauth/v2/authorize?client_id=134528973318.9712045945332&scope=app_mentions:read,channels:history,channels:join,channels:manage,channels:read,chat:write,chat:write.public,commands,groups:history,groups:read,im:history,im:write,mpim:history,users:read&user_scope=";

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-blue-50/30">
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
                Live Demo
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
                Privacy
              </button>
            </div>

            <a
              href={slackInstallUrl}
              className="hidden sm:inline-flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors"
            >
              <Slack className="w-4 h-4" />
              Add to Slack
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section - Compact to fit above fold */}
      <main className="pt-20 pb-6 px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Social Proof Badge */}
          <div className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full px-3 py-1.5 mb-4 shadow-sm">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
            <span className="text-xs text-slate-600">Trusted by digital marketing agencies</span>
          </div>

          {/* Main Headline - Reduced size */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-[1.15] mb-6">
            Ask your GA4 data anything
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              — insights in 20 seconds
            </span>
          </h1>

          {/* GIF Placeholder - Reduced size */}
          <div className="relative max-w-2xl mx-auto mb-6">
            <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl border border-slate-200 shadow-xl shadow-slate-200/50 overflow-hidden">
              {/* Replace this div with your actual GIF */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400">
                <Play className="w-12 h-12 mb-2 opacity-50" />
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
            <div className="absolute -top-3 -right-3 w-20 h-20 bg-blue-500/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-3 -left-3 w-24 h-24 bg-indigo-500/10 rounded-full blur-2xl"></div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4">
            <a
              href={slackInstallUrl}
              className="inline-flex items-center gap-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl text-base font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5"
            >
              <Slack className="w-4 h-4" />
              Add to Slack
              <ArrowRight className="w-4 h-4" />
            </a>
            
            <button
              onClick={() => navigate('/demo')}
              className="inline-flex items-center gap-2 bg-white text-slate-700 px-5 py-3 rounded-xl text-base font-medium border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all"
            >
              <Play className="w-4 h-4" />
              Try Live Demo
            </button>
          </div>

          <p className="text-sm text-slate-500">
            Free to try • Works with any GA4 property • No BigQuery required
          </p>
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
                Ask questions the way you'd ask a colleague. No SQL or technical knowledge needed.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Instant Answers</h3>
              <p className="text-slate-600">
                Get insights in seconds, not hours. Complex queries answered in under 3 minutes.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Always Available</h3>
              <p className="text-slate-600">
                Arnold lives in Slack. Your team can get answers 24/7 without waiting for analysts.
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
              Privacy & Terms
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
