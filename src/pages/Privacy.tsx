// src/pages/Privacy.tsx
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Privacy() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const sectionTitleClass =
    'text-lg font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600';

  return (
    <main className="pt-20 pb-16 px-6 flex-grow">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-2xl md:text-3xl lg:text-4xl tracking-tight leading-normal font-bold text-slate-900 mb-4">
            Privacy{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Policy
            </span>
          </h1>
          <p className="text-base text-slate-600">
            How We Access, Process, and Protect Your Data
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">

          {/* Metadata bar — BLUE */}
          <div className="px-6 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-sm text-white font-medium">
            Effective Date: January 30, 2026 &nbsp;·&nbsp; Last Updated: January 30, 2026
          </div>

          {/* 1. Introduction */}
          <div className="px-6 py-6">
            <h2 className={sectionTitleClass}>1. Introduction</h2>
            <p className="text-base text-slate-600 leading-relaxed mb-4">
              Arnold The Analyst ("Arnold", "we", "us") is a Slack-based analytics assistant that allows authorized
              users to query Google Analytics 4 (GA4) data using natural language.
            </p>
            <p className="text-base text-slate-600 leading-relaxed mb-4">
              Arnold processes data under Article 6(1)(b) of the GDPR (performance of a contract) and, where applicable,
              Article 6(1)(f) (legitimate interests in providing, maintaining, and securing the service).
              Arnold acts solely as a data processor and transient processing layer for data accessed on your behalf.
            </p>
            <p className="text-base text-slate-600 leading-relaxed">
              <strong>Operator:</strong> Cian McGovern<br />
              <strong>Location:</strong> Ireland<br />
              <strong>Contact:</strong> cian@arnoldtheanalyst.com<br />
              <strong>Website:</strong> https://arnoldtheanalyst.com
            </p>
          </div>

          <div className="border-t border-slate-100" />

          {/* 2. Information We Collect */}
          <div className="px-6 py-6">
            <h2 className={sectionTitleClass}>2. Information We Collect</h2>
            <ul className="list-disc list-inside space-y-1 text-base text-slate-600">
              <li>Slack workspace and user identifiers</li>
              <li>Google OAuth authorization tokens</li>
              <li>GA4 property IDs explicitly selected by the user</li>
              <li>Natural-language queries submitted to Arnold</li>
              <li>Operational logs for security, auditing, and reliability</li>
            </ul>
          </div>

          <div className="border-t border-slate-100" />

          {/* 3. How We Use Data */}
          <div className="px-6 py-6">
            <h2 className={sectionTitleClass}>3. How We Use Your Information</h2>
            <p className="text-base text-slate-600 mb-3">
              Arnold processes data solely to deliver the analytics responses explicitly requested by authorized users.
            </p>
            <ul className="list-disc list-inside space-y-1 text-base text-slate-600">
              <li>Secure authentication and authorization</li>
              <li>Execution of GA4 queries initiated by the user</li>
              <li>Transformation of GA4 data into structured outputs</li>
              <li>Generation of natural-language summaries from aggregate, non-user-level metrics</li>
              <li>Service reliability, monitoring, and abuse prevention</li>
            </ul>
          </div>

          <div className="border-t border-slate-100" />

          {/* 4. Data Sharing */}
          <div className="px-6 py-6">
            <h2 className={sectionTitleClass}>4. Data Sharing & Sub-Processors</h2>
            <p className="text-base text-slate-600 mb-3">
              Arnold does not sell or monetize customer data. Data is shared only with vetted sub-processors
              strictly as required to deliver the service.
            </p>
            <ul className="list-disc list-inside space-y-1 text-base text-slate-600 mb-3">
              <li><strong>Google Cloud Platform:</strong> Primary hosting and processing infrastructure</li>
              <li><strong>Google Analytics API:</strong> Accessed only on explicit user request</li>
              <li><strong>Slack:</strong> Used solely to deliver responses</li>
              <li><strong>AI Providers (OpenAI, Anthropic):</strong> Receive limited, aggregate GA4 metrics only</li>
            </ul>
            <p className="text-base text-slate-600">
              Arnold does not intentionally process or transmit personally identifiable information (PII).
            </p>
          </div>

          <div className="border-t border-slate-100" />

          {/* 5. Data Security */}
          <div className="px-6 py-6">
            <h2 className={sectionTitleClass}>5. Data Security</h2>
            <ul className="list-disc list-inside space-y-1 text-base text-slate-600 mb-3">
              <li>Encryption of data in transit and at rest</li>
              <li>OAuth-scoped, least-privilege access controls</li>
              <li>Isolated infrastructure hosted on Google Cloud</li>
              <li>No credential or raw analytics data exposure to AI vendors</li>
            </ul>
            <p className="text-base text-slate-600">
              Arnold will notify affected customers of security incidents without undue delay.
            </p>
          </div>

          <div className="border-t border-slate-100" />

          {/* 6. Data Retention */}
          <div className="px-6 py-6">
            <h2 className={sectionTitleClass}>6. Data Retention</h2>
            <ul className="list-disc list-inside space-y-1 text-base text-slate-600">
              <li>OAuth tokens revoked immediately upon disconnect</li>
              <li>No persistent storage of raw GA4 event-level data</li>
              <li>Operational metadata retained for up to 30 days</li>
              <li>Workspace data deleted within 30 days of uninstall</li>
            </ul>
          </div>

          <div className="border-t border-slate-100" />

          {/* 7. Rights – Collapsible */}
          <button
            onClick={() => toggleSection('rights')}
            className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
          >
            <h2 className={sectionTitleClass}>7. Your Data Protection Rights</h2>
            <ChevronDown
              className={`w-5 h-5 text-slate-400 transition-transform ${
                openSection === 'rights' ? 'rotate-180' : ''
              }`}
            />
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ${
              openSection === 'rights' ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="px-6 pb-6 text-base text-slate-600">
              You may request access to, correction of, or deletion of personal data by emailing
              <strong> cian@arnoldtheanalyst.com</strong>.
            </div>
          </div>

          <div className="border-t border-slate-100" />

          {/* Contact */}
          <div className="px-6 py-6">
            <h2 className={sectionTitleClass}>Contact</h2>
            <p className="text-base text-slate-600">
              Email: cian@arnoldtheanalyst.com<br />
              Location: Ireland
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}
