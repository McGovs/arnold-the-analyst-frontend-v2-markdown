// src/pages/Support.tsx
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Support() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isSupportOpen, setIsSupportOpen] = useState(false);

  const faqs = [
    {
      q: 'How do I install Arnold in my Slack workspace?',
      a: "Go to the homepage or top navigation bar and click the '14 Day Free Trial' button.",
    },
    {
      q: 'How do I connect my Google Analytics account?',
      a: "After installing Arnold, run '/arnold-connect' in Slack. You will be redirected to Google OAuth to grant read-only access.",
    },
    {
      q: 'What data does Arnold access?',
      a: 'Arnold has read-only access to your GA4 properties. OAuth tokens expire after one hour and no raw GA4 data is stored permanently.',
    },
    {
      q: 'Can I export results?',
      a: 'Yes. Every response includes a link to a Google Sheets file containing the underlying data.',
    },
    {
      q: 'How much does Arnold cost?',
      a: 'Arnold is currently free during beta. Paid plans will launch in 2026, with grandfathered pricing for early users.',
    },
  ];

  const questionClass =
    'text-base font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600';

  return (
    <main className="pt-20 pb-16 px-6 flex-grow">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-2xl md:text-3xl lg:text-4xl tracking-tight leading-normal font-bold text-slate-900 mb-4">
            Support &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              FAQ
            </span>
          </h1>
          <p className="text-xl text-slate-600">
            Answers to common questions and how to get help
          </p>
        </div>

        {/* FAQ Card */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden mb-8">

          {/* FAQ Header */}
          <div className="px-6 py-4 bg-slate-50 border-b border-slate-200">
            <h2 className="text-lg font-semibold text-slate-900">
              Frequently Asked Questions
            </h2>
          </div>

          {/* FAQ Items */}
          <div>
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-slate-100 last:border-0">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                >
                  <h3 className={questionClass}>
                    {faq.q}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openFaq === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pt-6 pb-6 text-base text-slate-600 leading-relaxed">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Still Have Questions */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <button
            onClick={() => setIsSupportOpen(!isSupportOpen)}
            className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
          >
            <h2 className="text-lg font-semibold text-slate-900">
              Still have questions?
            </h2>
            <ChevronDown
              className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${
                isSupportOpen ? 'rotate-180' : ''
              }`}
            />
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              isSupportOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="px-6 pt-6 pb-6 border-t border-slate-100 text-base text-slate-600">
              For support questions, feature requests, or technical issues, email{' '}
              <a
                href="mailto:cian@arnoldtheanalyst.com"
                className="font-medium text-blue-600 hover:underline"
              >
                cian@arnoldtheanalyst.com
              </a>
              . We typically respond within 12 hours.
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
