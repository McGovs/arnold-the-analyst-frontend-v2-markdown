// src/pages/Support.tsx
import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';

export default function Support() {
  return (
    <main className="pt-20 pb-16 px-6 flex-grow">
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
              { q: "How do I install Arnold in my Slack workspace?", a: "Go to the top navigation bar or the homepage and click the '14 Day Free Trial' button." },
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
  );
}
