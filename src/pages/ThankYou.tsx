// src/pages/ThankYou.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BarChart3 } from 'lucide-react';

export default function ThankYou() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50" style={{ fontFamily: "system-ui, sans-serif" }}>
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
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-16 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-slate-900 mb-6">
            You’re all set 🙌
          </h1>
          
          <p className="text-lg text-slate-600 mb-8">
            I’ll pop you an email within 12 hours to confirm that the 14 day free trial for your Slack workspace has been set up and make sure everything’s working well on your side.
          </p>

          <p className="text-lg text-slate-600 mb-8">
            Cian
          </p>
          
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center justify-center bg-white text-slate-700 px-6 py-3 rounded-full text-sm font-bold border-2 border-slate-300 hover:border-slate-400 hover:bg-slate-50"
          >
            Back to Home
          </button>
        </div>
      </main>
    </div>
  );
}
