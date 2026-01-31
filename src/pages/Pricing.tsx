// src/pages/Pricing.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BarChart3, ChevronDown } from 'lucide-react';
import SlackInstallButton from '../components/SlackInstallButton';

export default function Pricing() {
  const navigate = useNavigate();
  const [isValueCalcOpen, setIsValueCalcOpen] = useState(false);

  const pricingTiers = [
    { tier: 'Starter', queries: 150, price: 75, timeSaved: '7.5 hours', value: 300 },
    { tier: 'Pro', queries: 300, price: 150, timeSaved: '15 hours', value: 600 },
    { tier: 'Elite', queries: 600, price: 300, timeSaved: '30 hours', value: 1200 },
  ];

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,700&display=swap"
        rel="stylesheet"
      />

      <div
        className="min-h-screen bg-slate-50 flex flex-col"
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

        {/* MAIN CONTENT */}
        <main className="pt-20 pb-16 px-6 flex-grow">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-2xl md:text-3xl lg:text-4xl tracking-tight leading-normal font-bold text-slate-900 mb-4">
                Simple, Transparent{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  Pricing
                </span>
              </h1>
              <p className="text-xl text-slate-600">
                Every plan delivers a 5x return on your investment.
              </p>
            </div>

            {/* Pricing Table */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden mb-8">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200">
                      <th className="px-6 py-4 text-left text-base font-semibold text-slate-900">Tier</th>
                      <th className="px-6 py-4 text-left text-base font-semibold text-slate-900">Queries/Month</th>
                      <th className="px-6 py-4 text-left text-base font-semibold text-slate-900">Price</th>
                      <th className="px-6 py-4 text-left text-base font-semibold text-slate-900">Time Saved</th>
                      <th className="px-6 py-4 text-left text-base font-semibold text-slate-900">Value to You</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pricingTiers.map((tier, index) => (
                      <tr
                        key={tier.tier}
                        className={`border-b border-slate-100 ${index % 2 === 1 ? 'bg-slate-50/50' : ''}`}
                      >
                        <td className="px-6 py-4 text-base font-medium text-slate-900">{tier.tier}</td>
                        <td className="px-6 py-4 text-base text-slate-600">{tier.queries}</td>
                        <td className="px-6 py-4 text-base text-slate-900 font-medium">${tier.price}/mo</td>
                        <td className="px-6 py-4 text-base text-slate-600">{tier.timeSaved}</td>
                        <td className="px-6 py-4 text-base font-semibold text-green-600">${tier.value.toLocaleString()}</td>
                      </tr>
                    ))}
                    <tr className="bg-gradient-to-r from-blue-50 to-indigo-50">
                      <td className="px-6 py-4 text-base font-medium text-slate-900">Enterprise</td>
                      <td className="px-6 py-4 text-base text-slate-600">Custom</td>
                      <td colSpan={3} className="px-6 py-4 text-base text-slate-600 italic">
                        Chat to Sales for custom pricing
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* How We Calculate Value - Collapsible */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
              <button
                onClick={() => setIsValueCalcOpen(!isValueCalcOpen)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
              >
                <h2 className="text-lg font-semibold text-slate-900">How We Calculate Value To You</h2>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${
                    isValueCalcOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isValueCalcOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 border-t border-slate-100 pt-4">
                  <ul className="space-y-3 text-slate-600">
                    <li className="flex items-start gap-3 text-base">
                      <span className="text-blue-600 font-bold">→</span>
                      <span>3 minutes saved per query</span>
                    </li>
                    <li className="flex items-start gap-3 text-base">
                      <span className="text-blue-600 font-bold">→</span>
                      <span>Analyst time valued at $50/hour</span>
                    </li>
                    <li className="flex items-start gap-3 text-base">
                      <span className="text-blue-600 font-bold">→</span>
                      <span>
                        <strong>You keep 80% of the value</strong> — Arnold pays for itself 4x over
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="py-8 px-6 border-t border-slate-100 bg-white mt-auto">
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
