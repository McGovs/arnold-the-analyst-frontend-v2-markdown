// src/pages/Support.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Mail, BarChart3 } from 'lucide-react';
import SlackInstallButton from '../components/SlackInstallButton';

export default function Support() {
  const navigate = useNavigate();

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
                  className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
                >
                  Pricing
                </button>
                <button
                  onClick={() => navigate('/support')}
                  className="text-sm font-medium text-blue-600"
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

        {/* MAIN CONTENT — Moved up closer to nav */}
        <main className="pt-20 pb-16 px-6">
          <div className="max-w-4xl mx-auto">
            {/* Contact Card */}
            <div className="bg-white rounded-2xl shadow-lg p-10 text-center mb-12">
              <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Arnold The Analyst <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Support</span>
              </h1>
              <p className="text-lg text-slate-600 mb-6 max-w-2xl mx-auto">
                For support questions, feature requests, or technical issues, please email:
              </p>
              <a
                href="mailto:cian@arnoldtheanalyst.com"
                className="text-2xl font-bold text-blue-600 hover:underline block mb-3"
              >
                cian@arnoldtheanalyst.com
              </a>
              <p className="text-base text-slate-500">
                Expect a response within 12 hours.
              </p>
            </div>

          {/* FAQ Section */}
          <div className="bg-white rounded-2xl shadow-lg p-10">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-8">
            {[
              { q: "How do I install Arnold in my Slack workspace?", a: "Go to the top navigation bar or the homepage and click the 'Try Arnold In Slack' button. You need admin rights for your Slack workspace." },
              { q: "How do I connect my Google Analytics account?", a: "After installing, execute '/arnold-connect' in Slack — you will then be taken to the Google OAuth sign in." },
              { q: "What data does Arnold access?", a: "Read-only access to your GA4 properties. Google Analytics OAuth access tokens expire after 1 hour and no data is stored permanently." },
              { q: "Can I export results?", a: 'Yes! Arnold links to a Google Sheets file with the data along with every answer.' },
              { q: "How much does it cost?", a: "Arnold is currently free during the beta period. Paid plans coming 2026 with grandfathered prices in place for early users." },
              ].map((faq, i) => (
            <div key={i} className="border-b border-slate-100 pb-6 last:border-0">
              <h3 className="text-lg font-semibold text-blue-600 mb-2">{faq.q}</h3>
                <p className="text-base text-slate-600 leading-relaxed">{faq.a}</p>
            </div>
              ))}
            </div>
          </div>

            {/* Final CTA */}
            <div className="text-center py-12">
              <p className="text-2xl text-slate-600 mb-6">Still have questions?</p>
              <a
                href="mailto:cian@arnoldtheanalyst.com"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-xl text-lg font-bold hover:bg-blue-700 transition-shadow shadow-lg"
              >
                Email Support <ArrowRight className="w-5 h-5" />
              </a>
            </div>
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
                Support & FAQ
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
