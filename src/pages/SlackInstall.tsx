import React from 'react';

export default function SlackInstall() {
  const slackUrl = "https://slack.com/oauth/v2/authorize?client_id=134528973318.9712045945332&scope=app_mentions:read,channels:history,channels:join,channels:read,chat:write,chat:write.public,commands,groups:history,groups:read,im:history,im:write,mpim:history,users:read&user_scope=";

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        
        <div className="bg-white rounded-lg shadow-xl p-12 text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Install Arnold The Analyst for Slack
          </h1>
          
          <p className="text-xl text-gray-600 mb-8">
            Query your Google Analytics 4 data using plain English directly in Slack
          </p>

          <a href={slackUrl} target="_blank" rel="noopener noreferrer">
            <img src="https://platform.slack-edge.com/img/add_to_slack.png" alt="Add to Slack" />
          </a>

          <p className="text-sm text-gray-500 mt-6">
            By installing Arnold, you agree to our Privacy Policy and Terms of Service
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Features
          </h2>
          <ul className="space-y-2 text-gray-700">
            <li>Ask questions in plain English and get GA4 data instantly</li>
            <li>Secure and private - your data stays yours</li>
            <li>Export results to Google Sheets</li>
            <li>Works directly in Slack</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <ol className="space-y-2 text-gray-700 list-decimal list-inside">
            <li>Click Add to Slack above</li>
            <li>Authorize Arnold in your workspace</li>
            <li>Use /arnold-connect to link your GA4 account</li>
            <li>Start asking questions about your analytics</li>
          </ol>
        </div>

        <div className="bg-blue-600 rounded-lg p-8 text-center text-white mb-8">
          <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="mb-6">Install Arnold in your Slack workspace today</p>
          <a href={slackUrl} target="_blank" rel="noopener noreferrer">
            <img src="https://platform.slack-edge.com/img/add_to_slack.png" alt="Add to Slack" />
          </a>
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-600">
            Need help? Email cian@arnoldtheanalyst.com
          </p>
        </div>

      </div>
    </div>
  );
}
