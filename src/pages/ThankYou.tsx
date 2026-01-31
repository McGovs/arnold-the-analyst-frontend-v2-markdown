// src/pages/ThankYou.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BarChart3 } from 'lucide-react';
import SlackInstallButton from '../components/SlackInstallButton';

export default function ThankYou() {
  const navigate = useNavigate();

  return (
    <div 
      className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-blue-50/30"
      style={{ fontFamily: "'Playfair Display', serif" }}
    >
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,700&display=swap" rel="stylesheet" />

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
                className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
              >
                Pricing
              </button>
              <button 
                onClick={() => navigate('/support')}
                className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
              >
                Support &amp; FAQ
              </button>
              <button 
                onClick={() => navigate('/privacy-terms')}
                className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
              >
                Privacy &amp; Terms
              </button>
            </div>

            <SlackInstallButton className="hidden sm:inline-flex items-center gap-2 bg-white text-slate-800 px-3 py-1.5 rounded border border-slate-300 text-sm font-bold hover:bg-slate-50 transition-colors shadow-sm" />
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-16 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <BarChart3 className="w-8 h-8 text-white" />
          </div>
          
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Thank You
          </h1>
          
          <p className="text-lg text-slate-600 mb-8">
            Thank you for your interest in the 14 day free trial. Cian will be in touch to confirm.
          </p>
          
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center justify-center bg-white text-slate-700 px-6 py-3 rounded-full text-sm font-bold border-2 border-slate-300 hover:border-slate-400 hover:bg-slate-50 transition-all"
          >
            Back to Home
          </button>
        </div>
      </main>

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
              Support &amp; FAQ
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
