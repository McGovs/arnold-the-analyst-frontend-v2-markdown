// src/pages/Description.tsx
import React from 'react';
// import EmbeddableChatbot from '../components/EmbeddableChatbot'; // ← no longer needed

export default function Description() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Arnold The Analyst — GA4 Answers on Demand</h1>

        {/* ... all your content stays unchanged ... */}

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

      {/* Removed the mini chat widget */}
      {/* <EmbeddableChatbot title="Arnold The Analyst" placeholder="Ask about your GA4 data..." position="bottom-right" /> */}
    </div>
  );
}
