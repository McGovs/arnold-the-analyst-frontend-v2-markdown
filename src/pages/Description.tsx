// src/pages/Description.tsx
import React from 'react';

export default function Description() {
  return (
    <div className="min-h-screen bg-gray-50 p-8 font-sans antialiased">
      <div className="max-w-3xl mx-auto space-y-10">

        {/* Page Title */}
        <h1 className="text-4xl font-bold text-slate-800 text-center">
          Arnold The Analyst — GA4 Answers in Slack
        </h1>

        {/* Intro Card */}
        <div className="bg-white p-8 rounded-2xl shadow-sm space-y-4">
          <p className="text-slate-700 text-lg leading-relaxed">
            Arnold is your always-on GA4 analyst living directly inside Slack.
            Ask a plain-English question about your GA4 property and Arnold
            returns a clean, accurate answer in seconds—no dashboards, no digging,
            no waiting on an analyst.
          </p>
          <p className="text-slate-700 text-lg leading-relaxed">
            Built by an experienced digital analytics specialist, Arnold gives
            agencies fast, trustworthy insights without ever opening the GA4 UI.
          </p>
        </div>

        {/* What Arnold Does */}
        <div className="bg-white p-8 rounded-2xl shadow-sm space-y-6">
          <h2 className="text-2xl font-semibold text-slate-800">What Arnold Does</h2>
          <ul className="space-y-3 text-slate-700 list-disc list-inside">
            <li>Understands natural-language questions in Slack</li>
            <li>Pulls the right metrics and dimensions from GA4 automatically</li>
            <li>Returns concise, reliable insights instantly</li>
          </ul>
        </div>

        {/* Why Agencies Love It */}
        <div className="bg-white p-8 rounded-2xl shadow-sm space-y-6">
          <h2 className="text-2xl font-semibold text-slate-800">Why Agencies Love It</h2>
          <ul className="space-y-3 text-slate-700 list-disc list-inside">
            <li>Removes the need to click around GA4’s confusing UI</li>
            <li>Saves hours of reporting and analysis time each week</li>
            <li>Makes insights accessible to account managers and marketers</li>
            <li>Keeps teams aligned with fast, consistent answers</li>
          </ul>
        </div>

        {/* How It Works */}
        <div className="bg-white p-8 rounded-2xl shadow-sm space-y-6">
          <h2 className="text-2xl font-semibold text-slate-800">How It Works</h2>
          <ol className="space-y-3 text-slate-700 list-decimal list-inside">
            <li>Add Arnold to your Slack workspace</li>
            <li>Ask a question about your GA4 property</li>
            <li>Arnold replies with a clean, contextual, analyst-level insight</li>
          </ol>
          <p className="text-slate-700 pt-3">
            No setup. No configs. No SQL. No BigQuery. Just ask.
          </p>
        </div>

        {/* Starter Queries */}
        <div className="bg-white p-8 rounded-2xl shadow-sm space-y-6">
          <h2 className="text-2xl font-semibold text-slate-800">Great Starter Questions</h2>
          <ul className="space-y-3 text-slate-700 list-disc list-inside">
            <li>“Which channels drove the most conversions last week?”</li>
            <li>“What’s our top page for engaged sessions this month?”</li>
            <li>“Did our new landing page improve conversion rate?”</li>
            <li>“How many returning users did we have yesterday?”</li>
            <li>“What’s the 7-day traffic trend?”</li>
          </ul>
        </div>

        {/* Data & Security */}
        <div className="bg-white p-8 rounded-2xl shadow-sm space-y-6">
          <h2 className="text-2xl font-semibold text-slate-800">Data &amp; Security</h2>
          <ul className="space-y-3 text-slate-700 list-disc list-inside">
            <li>Arnold reads your GA4 data securely</li>
            <li>No data is stored or written anywhere</li>
            <li>Your team initiates every request from Slack</li>
          </ul>
        </div>

      </div>
    </div>
  );
}
