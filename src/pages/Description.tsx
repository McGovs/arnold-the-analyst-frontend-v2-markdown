// src/pages/Description.tsx
import React from 'react';
// import EmbeddableChatbot from '../components/EmbeddableChatbot'; // removed

export default function Description() {
  return (
    // Force same font as chat: font-sans (optionally antialiased)
    <div className="min-h-screen bg-gray-100 p-8 font-sans antialiased">
      <div className="max-w-4xl mx-auto">
        {/* Main title */}
        <h1 className="text-3xl font-bold mb-6 text-blue-600">
          Arnold The Analyst — GA4 Answers on Demand
        </h1>

        <div className="bg-white p-6 rounded-lg shadow-sm mb-6 space-y-4">
          <p className="text-gray-700">
            Arnold is an always-on analyst that lets your team <span className="font-medium">ask plain-English questions about GA4 and get accurate
            answers within minutes</span>. Built by a digital analytics expert with more than eight years of experience navigating Google Analytics' quirks and limitations, <span className="font-medium">Arnold delivers senior-level insights at software speed</span>.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-lg font-semibold mb-2 text-blue-600">What it does</h2>
              <ul className="text-gray-700 list-disc list-inside space-y-1">
                <li>Translates natural language → <span className="font-medium">SQL</span></li>
                <li>Runs queries against your <span className="font-medium">GA4 BigQuery</span> dataset</li>
                <li>Returns clear answers & the data in <span className="font-medium">Google Sheets</span></li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-2 text-blue-600">Why clients love it</h2>
              <ul className="text-gray-700 list-disc list-inside space-y-1">
                <li>Saves hours on manual exports and dashboard edits</li>
                <li>Bypasses GA4’s convoluted UI and incomplete data</li>
                <li>Delivers consistent, accurate answers from BigQuery</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h2 className="text-xl font-semibold mb-3 text-blue-600">How it works</h2>
          <ol className="text-gray-700 list-decimal list-inside space-y-1">
            <li>Type your query</li>
            <li>Arnold generates and validates SQL</li>
            <li>The SQL code is executed in BigQuery</li>
            <li>Arnold outputs a clear, natural language answer along with a Google Sheets export</li>
          </ol>
        </div>

        {/* tighter spacing below this card: mb-3 instead of mb-6 */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-3">
          <h2 className="text-xl font-semibold mb-3 text-blue-600">Demo dataset &amp; timing</h2>
          <p className="text-gray-700">
            The demo uses the Google Merchandise Store dataset (Nov 1, 2020 → Jan 31, 2021).
            Typical response time is <span className="font-medium">1–2 minutes</span>; more complex queries can take
            up to <span className="font-medium">5 minutes</span>.
          </p>
          <div className="mt-4">
            <h3 className="font-medium mb-2 text-blue-600">Great starter queries</h3>
            <ul className="text-gray-700 list-disc list-inside space-y-1">
              <li>Top products by purchase revenue in December 2020</li>
              <li>Average order value by traffic source in November 2020</li>
              <li>New vs. returning users by week</li>
              <li>Conversion rate by device type in January 2021 vs. December 2020</li>
              <li>User repeat purchase rate within 30 days for December 2020</li>
            </ul>
          </div>
        </div>

        {/* sits closer now because previous card's mb is smaller */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-3 text-blue-600">Data &amp; security</h2>
          <ul className="text-gray-700 list-disc list-inside space-y-1">
            <li>Your data stays in your <span className="font-medium">Google Cloud</span> project</li>
            <li>Arnold runs <span className="font-medium">read-only queries</span> that you initiate. Arnold never writes or alters your data.</li>
            <li>SSO/magic links for <span className="font-medium">access control</span></li>
          </ul>
          {/* more breathing room before the closing sentence: mt-6 */}
          <p className="text-gray-700 mt-6">
            Ready to use Arnold on your data or your clients' data? We can set up your GA4 BigQuery export, connect it to Arnold, and fine-tune according to your dataset before pushing <span className="font-medium">live in under three working days</span>.
          </p>
        </div>
      </div>

      {/* Floating demo widget intentionally removed */}
      {/* <EmbeddableChatbot title="Arnold The Analyst" placeholder="Ask about your GA4 data..." position="bottom-right" /> */}
    </div>
  );
}
