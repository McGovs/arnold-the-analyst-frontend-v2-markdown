// src/pages/Pricing.tsx
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Pricing() {
  const [isValueCalcOpen, setIsValueCalcOpen] = useState(false);

  const pricingTiers = [
    { tier: 'Starter', queries: 150, price: 75, timeSaved: '7.5 hours', value: 3600 },
    { tier: 'Pro', queries: 300, price: 150, timeSaved: '15 hours', value: 7200 },
    { tier: 'Elite', queries: 600, price: 300, timeSaved: '30 hours', value: 14400 },
  ];

  return (
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
            Every plan delivers a 4X return on your investment
          </p>
        </div>

        {/* Pricing Table */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden mb-8">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="px-6 py-4 text-center text-lg font-semibold text-slate-900">Tier</th>
                  <th className="px-6 py-4 text-center text-lg font-semibold text-slate-900">Queries Per Month</th>
                  <th className="px-6 py-4 text-center text-lg font-semibold text-slate-900">Price Per Month</th>
                  <th className="px-6 py-4 text-center text-lg font-semibold text-slate-900">Time Saved Per Month</th>
                  <th className="px-6 py-4 text-center text-lg font-semibold text-slate-900">Annual Value Passed to You</th>
                </tr>
              </thead>
              <tbody>
                {pricingTiers.map((tier, index) => (
                  <tr
                    key={tier.tier}
                    className={`border-b border-slate-100 ${index % 2 === 1 ? 'bg-slate-50/50' : ''}`}
                  >
                    <td className="px-6 py-4 text-center text-base font-medium text-slate-900">{tier.tier}</td>
                    <td className="px-6 py-4 text-center text-base text-slate-600">{tier.queries}</td>
                    <td className="px-6 py-4 text-center text-base text-slate-900 font-medium">${tier.price}</td>
                    <td className="px-6 py-4 text-center text-base text-slate-600">{tier.timeSaved}</td>
                    <td className="px-6 py-4 text-center text-base font-semibold text-green-600">${tier.value.toLocaleString()}</td>
                  </tr>
                ))}
                <tr className="bg-gradient-to-r from-blue-50 to-indigo-50">
                  <td className="px-6 py-4 text-center text-base font-medium text-slate-900">Enterprise</td>
                  <td className="px-6 py-4 text-center text-base text-slate-600">Custom</td>
                  <td colSpan={3} className="px-6 py-4 text-center text-base text-slate-600 italic">
                    Speak To Sales For Custom Pricing
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
                  <span>Conservative estimate of 3 minutes saved per query</span>
                </li>
                <li className="flex items-start gap-3 text-base">
                  <span className="text-blue-600 font-bold">→</span>
                  <span>Arnold user time valued at $50/hour on average</span>
                </li>
                <li className="flex items-start gap-3 text-base">
                  <span className="text-blue-600 font-bold">→</span>
                  <span>
                    <strong>You keep 80% of the value generated with a 4X ROI.</strong>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
