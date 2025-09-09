import React from 'react';
import EmbeddableChatbot from '../components/EmbeddableChatbot';

export default function EmbedDemo() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Website with Embedded Chatbot</h1>

        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h2 className="text-xl font-semibold mb-4">Sample Website Content</h2>
          <p className="text-gray-600 mb-4">
            This is a demonstration of how the chatbot can be embedded into any website. The chatbot appears as a
            floating widget in the bottom-right corner.
          </p>
          <p className="text-gray-600 mb-4">
            Users can click on the bot icon to open the chat interface and ask questions about your data. The queries
            are processed through your n8n workflow and BigQuery database to provide intelligent responses.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-medium text-blue-900 mb-2">Integration Features:</h3>
            <ul className="text-blue-800 text-sm space-y-1">
              <li>• Connects to your n8n workflow</li>
              <li>• Queries BigQuery database</li>
              <li>• Returns natural language responses</li>
              <li>• Embeddable on any website</li>
              <li>• Responsive design</li>
            </ul>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h2 className="text-xl font-semibold mb-4">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-600 font-bold">1</span>
              </div>
              <h3 className="font-medium mb-2">User Asks Question</h3>
              <p className="text-sm text-gray-600">User types a question about their data in natural language</p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-600 font-bold">2</span>
              </div>
              <h3 className="font-medium mb-2">n8n Processes Query</h3>
              <p className="text-sm text-gray-600">Your n8n workflow interprets the question and queries BigQuery</p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-600 font-bold">3</span>
              </div>
              <h3 className="font-medium mb-2">AI Responds</h3>
              <p className="text-sm text-gray-600">The chatbot returns a clear, natural language response with insights</p>
            </div>
          </div>
        </div>
      </div>

      {/* Embeddable Chatbot */}
      <EmbeddableChatbot title="Arnold The Analyst" placeholder="Ask about your data..." position="bottom-right" />
    </div>
  );
}