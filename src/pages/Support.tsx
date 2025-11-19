import React from 'react';

export default function Support() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        
        <div className="bg-white rounded-lg shadow-xl p-12 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Arnold The Analyst Support
          </h1>
          
          <p className="text-xl text-gray-600 mb-8">
            Get help with Arnold and your Google Analytics 4 queries
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded">
            <h3 className="font-semibold text-gray-900 mb-2">Contact Us</h3>
            <p className="text-gray-700 mb-4">
              For support questions, feature requests, or technical issues, please email:
            </p>
            <a 
              href="mailto:cian@arnoldtheanalyst.com" 
              className="text-xl font-semibold text-blue-600 hover:underline"
            >
              cian@arnoldtheanalyst.com
            </a>
            <p className="text-sm text-gray-600 mt-4">
              We typically respond within 24 hours during business days.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How do I install Arnold in my Slack workspace?
              </h3>
              <p className="text-gray-700">
                Visit our <a href="/slack-install" className="text-blue-600 hover:underline">installation page</a> and click the Add to Slack button. You will need admin permissions in your Slack workspace to install Arnold.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How do I connect my Google Analytics account?
              </h3>
              <p className="text-gray-700">
                After installing Arnold in Slack, use the <code className="bg-gray-100 px-2 py-1 rounded">/arnold-connect</code> command. Arnold will guide you through authorizing access to your GA4 data.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What Google Analytics data does Arnold need access to?
              </h3>
              <p className="text-gray-700">
                Arnold needs read-only access to your Google Analytics 4 properties and BigQuery datasets. Arnold only accesses your data when you explicitly ask a question.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What kind of questions can I ask Arnold?
              </h3>
              <p className="text-gray-700 mb-2">
                You can ask Arnold about your GA4 metrics in plain English. Examples:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>What were my top 10 pages last month?</li>
                <li>Show me traffic sources for the last 7 days</li>
                <li>What is my conversion rate by device?</li>
                <li>Compare sessions this month vs last month</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How do I disconnect Arnold from my Google Analytics?
              </h3>
              <p className="text-gray-700">
                Use the <code className="bg-gray-100 px-2 py-1 rounded">/arnold-disconnect</code> command in Slack. This will immediately revoke Arnold's access to your GA4 data.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Does Arnold store my analytics data?
              </h3>
              <p className="text-gray-700">
                No. Arnold queries your data in real-time and does not store your analytics data. We only store your OAuth tokens (encrypted) and query logs for 30 days for troubleshooting. See our <a href="/privacy-terms" className="text-blue-600 hover:underline">Privacy Policy</a> for details.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What are the requirements to use Arnold?
              </h3>
              <p className="text-gray-700 mb-2">
                You need:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>A Slack workspace (free or paid)</li>
                <li>A Google account with access to your GA4 data</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How much does Arnold cost?
              </h3>
              <p className="text-gray-700">
                Arnold is currently free during our beta period. Pricing will be announced before any charges are introduced, and existing users will be grandfathered into preferential rates.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Arnold is not responding. What should I do?
              </h3>
              <p className="text-gray-700">
                First, check that Arnold has been invited to the Slack channel where you are asking questions. If Arnold still does not respond, please email us at <a href="mailto:cian@arnoldtheanalyst.com" className="text-blue-600 hover:underline">cian@arnoldtheanalyst.com</a> with details about the issue.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Can I export my query results?
              </h3>
              <p className="text-gray-700">
                Yes! Arnold can automatically export query results to Google Sheets. Just ask Arnold to export your results after receiving an answer.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Common Commands
          </h2>
          <div className="space-y-3">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <code className="text-blue-600 font-semibold">/arnold-connect</code>
              <p className="text-gray-700 mt-1">Connect Arnold to your Google Analytics account</p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <code className="text-blue-600 font-semibold">/arnold-disconnect</code>
              <p className="text-gray-700 mt-1">Disconnect Arnold from your Google Analytics account</p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <code className="text-blue-600 font-semibold">@Arnold [your question]</code>
              <p className="text-gray-700 mt-1">Ask Arnold a question about your analytics data</p>
            </div>
          </div>
        </div>

        <div className="bg-blue-600 rounded-lg p-8 text-center text-white mb-8">
          <h2 className="text-2xl font-bold mb-4">
            Still Need Help?
          </h2>
          <p className="text-xl mb-6">
            We are here to help you get the most out of Arnold
          </p>
          <a 
            href="mailto:cian@arnoldtheanalyst.com"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Email Support
          </a>
        </div>

        <div className="text-center">
          <p className="text-gray-600">
            <a href="/" className="text-blue-600 hover:underline">Back to Home</a> | <a href="/privacy-terms" className="text-blue-600 hover:underline">Privacy Policy</a> | <a href="/slack-install" className="text-blue-600 hover:underline">Install Arnold</a>
          </p>
        </div>

      </div>
    </div>
  );
}
