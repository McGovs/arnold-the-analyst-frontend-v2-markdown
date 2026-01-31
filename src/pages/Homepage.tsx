import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MessageCircle,
  Clock,
  Zap,
} from 'lucide-react';
// Import the shared button component
import SlackInstallButton from '../components/SlackInstallButton';

export default function Homepage() {
  const navigate = useNavigate();
  const contactUrl = 'https://calendly.com/cian-arnoldtheanalyst/30min';

  return (
    <div 
      className="bg-gradient-to-b from-slate-50 via-white to-blue-50/30 min-h-screen"
      style={{ fontFamily: "'Playfair Display', serif" }}
    >
      {/* HERO */}
      <main className="pt-24 pb-4 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full px-3 py-1 mb-4 shadow-sm">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-xs text-slate-600">Built for digital agencies</span>
          </div>

          <h1 className="text-[1.35rem] sm:text-2xl md:text-3xl lg:text-4xl tracking-tight leading-normal mb-5 font-bold text-slate-900">
            <span>Talk To Your GA4 Data </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              In Slack
            </span>
            <br />
            <span>Insights In </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              20s
            </span>
          </h1>

          <div className="relative max-w-xl mx-auto mb-5">
            <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl border border-slate-200 shadow-xl overflow-hidden">
              <video autoPlay loop muted playsInline className="w-full h-full object-contain">
                <source src="/demo.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          {/* REPLACED TrialCTA with SlackInstallButton */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-3">
            <SlackInstallButton 
              className="inline-flex items-center gap-2 bg-white text-slate-800 px-5 py-2.5 rounded border-2 border-slate-300 text-base font-bold hover:bg-slate-50 hover:border-slate-400 transition-colors shadow-sm" 
            />
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
          <span className="text-sm text-slate-600 font-semibold">Arnold The Analyst</span>
          <div className="flex gap-6 text-sm text-slate-500">
            <button onClick={() => navigate('/support')} className="hover:text-slate-900 transition-colors">Support & FAQ</button>
            <button onClick={() => navigate('/privacy-terms')} className="hover:text-slate-900 transition-colors">Privacy & Terms</button>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Feature({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="text-center p-6">
      <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mx-auto mb-4 text-blue-600">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
    </div>
  );
}
