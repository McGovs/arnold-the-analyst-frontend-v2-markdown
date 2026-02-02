// src/pages/Privacy.tsx
import React from 'react';

export default function Privacy() {
  return (
    <main className="pt-20 pb-16 px-6 flex-grow">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
          Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Policy</span>
        </h1>

        <div className="bg-white p-6 rounded-2xl shadow-lg mb-6">
          <p className="text-slate-700">
            <strong>Effective Date:</strong> November 18, 2025<br />
            <strong>Last Updated:</strong> November 18, 2025
          </p>
        </div>

        {/* PRIVACY POLICY */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 rounded-2xl mb-6">
          <h2 className="text-2xl font-bold text-white">PRIVACY POLICY</h2>
        </div>

        {/* 1. Introduction */}
        <div className="bg-white p-6 rounded-2xl shadow-lg mb-6">
          <h3 className="text-xl font-semibold mb-3 text-blue-600">1. Introduction</h3>
          <p className="text-slate-700 mb-4">
            Arnold The Analyst ("Arnold", "we", "us") is a Slack-based analytics assistant that allows authorized users to query their Google Analytics 4 (GA4) data using natural language.
          </p>
          <p className="text-slate-700 mb-4">
            Arnold processes data under Article 6(1)(b) of the GDPR (performance of a contract) and, where applicable,
            Article 6(1)(f) (legitimate interests in providing, maintaining, and securing the service).
            Arnold acts solely as a data processor and transient processing layer for data accessed on your behalf.
            This policy explains how data is accessed, processed, secured, and retained.
          </p>
          <p className="text-slate-700">
            <strong>Operator:</strong> Cian McGovern<br />
            <strong>Location:</strong> Ireland<br />
            <strong>Contact:</strong> cian@arnoldtheanalyst.com<br />
            <strong>Website:</strong> https://arnoldtheanalyst.com
          </p>
        </div>

        {/* 2. Information We Collect */}
        <div className="bg-white p-6 rounded-2xl shadow-lg mb-6">
          <h3 className="text-xl font-semibold mb-3 text-blue-600">2. Information We Collect</h3>
          <ul className="text-slate-700 list-disc list-inside space-y-1">
            <li>Slack workspace and user identifiers</li>
            <li>Google OAuth authorization tokens</li>
            <li>GA4 property IDs explicitly selected by the user</li>
            <li>Natural-language queries submitted to Arnold</li>
            <li>Operational logs for security, auditing, and reliability</li>
          </ul>
        </div>

        {/* 3. How We Use Data */}
        <div className="bg-white p-6 rounded-2xl shadow-lg mb-6">
          <h3 className="text-xl font-semibold mb-3 text-blue-600">3. How We Use Your Information</h3>
          <p className="text-slate-700 mb-3">
            Arnold processes data solely to deliver the analytics responses explicitly requested by authorized users.
          </p>
          <ul className="text-slate-700 list-disc list-inside space-y-1">
            <li>Secure authentication and authorization</li>
            <li>Execution of GA4 queries initiated by the user</li>
            <li>Transformation of GA4 data into structured outputs</li>
            <li>Generation of natural-language summaries from aggregate, non-user-level metrics</li>
            <li>Service reliability, monitoring, and abuse prevention</li>
          </ul>
        </div>

        {/* 4. Data Sharing & Sub-Processors */}
        <div className="bg-white p-6 rounded-2xl shadow-lg mb-6">
          <h3 className="text-xl font-semibold mb-3 text-blue-600">4. Data Sharing & Sub-Processors</h3>
          <p className="text-slate-700 mb-3">
            Arnold does not sell or monetize customer data. Data is shared only with vetted sub-processors
            strictly as required to deliver the service.
          </p>
          <ul className="text-slate-700 list-disc list-inside space-y-1">
            <li><strong>Google Cloud Platform:</strong> Primary hosting and processing infrastructure</li>
            <li><strong>Google Analytics API:</strong> Accessed only on explicit user request</li>
            <li><strong>Slack:</strong> Used solely to deliver responses to authorized users</li>
            <li>
              <strong>AI Providers (OpenAI, Anthropic):</strong> Act as stateless sub-processors and receive only
              limited, aggregate GA4 metrics (e.g. sessions, users, pageviews) to generate natural-language summaries
            </li>
          </ul>
          <p className="text-slate-700 mt-3">
            Arnold does not intentionally process or transmit personally identifiable information (PII) and is designed
            to operate on aggregate, non-user-level analytics data only. No raw GA4 event data or credentials are shared
            with AI providers. All sub-processors operate under appropriate contractual and data protection safeguards.
          </p>
        </div>

        {/* 5. Data Security */}
        <div className="bg-white p-6 rounded-2xl shadow-lg mb-6">
          <h3 className="text-xl font-semibold mb-3 text-blue-600">5. Data Security</h3>
          <ul className="text-slate-700 list-disc list-inside space-y-1">
            <li>Encryption of data in transit and at rest</li>
            <li>OAuth-scoped, least-privilege access controls</li>
            <li>Isolated infrastructure hosted on Google Cloud</li>
            <li>No credential or raw analytics data exposure to AI vendors</li>
          </ul>
          <p className="text-slate-700 mt-3">
            In the event of a data security incident affecting customer data, Arnold will notify affected customers
            without undue delay in accordance with applicable data protection laws.
          </p>
        </div>

        {/* 6. Data Retention */}
        <div className="bg-white p-6 rounded-2xl shadow-lg mb-6">
          <h3 className="text-xl font-semibold mb-3 text-blue-600">6. Data Retention</h3>
          <ul className="text-slate-700 list-disc list-inside space-y-1">
            <li>OAuth tokens revoked immediately upon disconnect</li>
            <li>No persistent storage of raw GA4 event-level data</li>
            <li>Operational metadata retained for up to 30 days</li>
            <li>Workspace-related data deleted within 30 days of uninstall</li>
          </ul>
        </div>

        {/* 7. Your Data Protection Rights */}
        <div className="bg-white p-6 rounded-2xl shadow-lg mb-6">
          <h3 className="text-xl font-semibold mb-3 text-blue-600">7. Your Data Protection Rights</h3>
          <p className="text-slate-700">
            Where applicable under GDPR, users have the right to request access to, correction of, or deletion of
            personal data, as well as to restrict or object to certain processing activities.
            Requests can be submitted to cian@arnoldtheanalyst.com and will be handled within statutory timelines.
          </p>
        </div>

        {/* CONTACT */}
        <div className="bg-white p-6 rounded-2xl shadow-lg mb-6">
          <h3 className="text-xl font-semibold mb-3 text-blue-600">Contact</h3>
          <p className="text-slate-700">
            Email: cian@arnoldtheanalyst.com<br />
            Location: Ireland
          </p>
        </div>
      </div>
    </main>
  );
}
