// src/pages/Description.tsx
import React from 'react';
import EmbeddableChatbot from '../components/EmbeddableChatbot';

export default function Description() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Arnold The Analyst — GA4 Answers on Demand</h1>

        <div className="bg-white p-6 rounded-lg shadow-sm mb-6 space-y-4">
          <p className="text-gray-700">
            Arnold is a chat interface that lets your team ask plain-English questions about GA4 and get trustworthy
            answers pulled from your <span className="font-medium">BigQuery export</span>.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-lg font-semibold mb-2">What it does</h2>
              <ul className="text-gray-700 list-disc list-inside space-y-1">
                <li>Translates natural language → <span className="font-medium">SQL</span> automatically</li>
                <li>Runs queries against your GA4 <span className="font-medium">BigQuery</span> dataset</li>
                <li>Returns clear explanations plus tables (exportable to Google Sheets)</li>
                <li>Handles everyday KPIs and deeper cohort/retention analysis</li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-2">Why agencies use it</h2>
              <ul className="text-gray-700 list-disc list-inside space-y-1">
                <li>Faster client answers—minutes, not hours</li>
                <li>Consistency from a single source of truth (GA4 BigQuery)</li>
                <li>Scales across accounts with the same workflow</li>
                <li>Non-technical friendly—no SQL required</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h2 className="text-xl font-semibold mb-3">How it works</h2>
          <ol className="text-gray-700 list-decimal list-inside space-y-1">
            <li>Type a question in chat</li>
            <li>Arnold generates and validates SQL</li>
            <li>BigQuery runs the query</li>
            <li>You get an explanation + table, with optional <span className="font-medium">Export to Sheets</span></li>
          </ol>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h2 className="text-xl font-semibold mb-3">Demo dataset & timing</h2>
          <p className="text-gray-700">
            The demo uses the Google Merchandise Store dataset (Nov 1, 2020 → Jan 31, 2021).
            Typical response time is <span className="font-medium">1–2 minutes</span>; complex cohort queries can take
            up to <span className="font-medium">5 minutes</span>.
          </p>
          <div className="mt-4">
            <h3 className="font-medium mb-2">Great starter queries</h3>
            <ul className="text-gray-700 list-disc list-inside space-y-1">
              <li>Top products by revenue in December 2020</li>
              <li>AOV by channel for Nov–Dec 2020</li>
              <li>New vs returning users by week</li>
              <li>Conversion rate by device category in December 2020</li>
              <li>Repeat purchase rate within 30 days for December 2020</li>
            </ul>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-3">Data & security</h2>
          <ul className="text-gray-700 list-disc list-inside space-y-1">
            <li>Your data stays in your <span className="font-medium">Google Cloud</span> project</li>
            <li>Arnold runs read-only queries you initiate</li>
            <li>Optional SSO / magic links for access control</li>
          </ul>
          <p className="text-gray-700 mt-4">
            Ready to use Arnold on client data? We can connect your GA4 BigQuery in under a day.
          </p>
        </div>
      </div>

      {/* Optional floating demo widget */}
      <EmbeddableChatbot title="Arnold The Analyst" placeholder="Ask about your GA4 data..." position="bottom-right" />
    </div>
  );
}


