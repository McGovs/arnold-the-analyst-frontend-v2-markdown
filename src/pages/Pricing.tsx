// src/pages/Pricing.tsx
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Pricing() {
  const [isMonthlyOpen, setIsMonthlyOpen] = useState(false);
  const [isAnnualOpen, setIsAnnualOpen] = useState(false);
  const [isValueCalcOpen, setIsValueCalcOpen] = useState(false);

  const monthlyTiers = [
    { tier: 'Starter', queries: 150, price: 75, timeSaved: '7.5 hours', value: 300 },
    { tier: 'Pro', queries: 300, price: 150, timeSaved: '15 hours', value: 600 },
    { tier: 'Elite', queries: 600, price: 300, timeSaved: '30 hours', value: 1200 },
  ];

  const annualTiers = [
    { tier: 'Starter', queries: 1800, price: 750, timeSaved: '90 hours', value: 3750 },
    { tier: 'Pro', queries: 3600, price: 1500, timeSaved: '180 hours', value: 7500 },
    { tier: 'Elite', queries: 7200, price: 3000, timeSaved: '360 hours', value: 15000 },
  ];

  const PricingTable = ({
    tiers,
    queriesLabel,
    priceLabel,
    timeLabel,
    valueLabel,
  }: {
    tiers: any[];
    queriesLabel: string;
    priceLabel: string;
    timeLabel: string;
    valueLabel: string;
  }) => (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden mb-8">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              <th className="px-6 py-4 text-center text-lg font-semibold text-slate-900">Tier</th>
              <th className="px-6 py-4 text-center text-lg font-semibold text-slate-900">{queriesLabel}</th>
              <th className="px-6 py-4 text-center text-lg font-semibold text-slate-900">{priceLabel}</th>
              <th className="px-6 py-4 text-center text-lg font-semibold text-slate-900">{timeLabel}</th>
              <th className="px-6 py-4 text-center text-lg font-semibold text-slate-900">{valueLabel}</th>
            </tr>
          </thead>
          <tbody>
            {tiers.map((tier, index) => (
              <tr
                key={tier.tier}
                className={`border-b border-slate-100 ${index % 2 === 1 ? 'bg-slate-50/50' : ''}`}
              >
                <td className="px-6 py-4 text-center text-base font-medium text-slate-900">{tier.tier}</td>
                <td className="px-6 py-4 text-center text-base text-slate-600">{tier.queries}</td>
                <td className="px-6 py-4 text-center text-base text-slate-900 font-medium">
                  ${tier.price.toLocaleString()}
                </td>
                <td className="px-6 py-4 text-center text-base text-slate-600">{tier.timeSaved}</td>
                <td className="px-6 py-4 text-center text-base font-semibold text-green-600">
                  ${tier.value.toLocaleString()}
                </td>
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
  );

  const Dropdown = ({
    title,
    open,
    toggle,
    children,
  }: {
    title: React.ReactNode;
    open: boolean;
    toggle: () => void;
    children: React.ReactNode;
  }) => (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden mb-8">
      <button
        onClick={toggle}
        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
      >
        <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
        <ChevronDown
          className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-6 pt-4 border-t border-slate-100">{children}</div>
      </div>
    </div>
  );

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
            Every plan delivers a 4X or more return on your investment
          </p>
        </div>

        {/* Monthly Pricing */}
        <Dropdown
          title="Monthly Pricing"
          open={isMonthlyOpen}
          toggle={() => setIsMonthlyOpen(!isMonthlyOpen)}
        >
          <PricingTable
            tiers={monthlyTiers}
            queriesLabel="Queries Per Month"
            priceLabel="Price Per Month"
            timeLabel="Est. Time Saved Per Month"
            valueLabel="Monthly Value Passed To You"
          />
        </Dropdown>

        {/* Annual Pricing */}
        <Dropdown
          title={
            <>
              Annual Pricing –{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                12 Months Of Value For The Price Of 10
              </span>
            </>
          }
          open={isAnnualOpen}
          toggle={() => setIsAnnualOpen(!isAnnualOpen)}
        >
          <PricingTable
            tiers={annualTiers}
            queriesLabel="Queries Per Year"
            priceLabel="Price Per Year"
            timeLabel="Est. Time Saved Per Year"
            valueLabel="Annual Value Passed To You"
          />
        </Dropdown>

        {/* Value Calculation */}
        <Dropdown
          title="How We Calculate Value Passed To You"
          open={isValueCalcOpen}
          toggle={() => setIsValueCalcOpen(!isValueCalcOpen)}
        >
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
        </Dropdown>

      </div>
    </main>
  );
}
