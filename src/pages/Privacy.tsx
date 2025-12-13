// src/pages/Privacy.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BarChart3 } from 'lucide-react';
import SlackInstallButton from '../components/SlackInstallButton';

export default function Privacy() {
  const navigate = useNavigate();

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,700&display=swap"
        rel="stylesheet"
      />

      <div
        className="min-h-screen bg-slate-50"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        {/* NAV BAR */}
        <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-slate-100 z-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center justify-between h-14">
              <button
                onClick={() => navigate('/')}
                className="flex items-center gap-2.5 hover:opacity-80 transition-opacity"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-4 h-4 text-white" />
                </div>
                <span className="font-semibold text-slate-900 tracking-tight">Arnold</span>
              </button>

              <div className="hidden md:flex items-center gap-8">
                <button
                  onClick={() => navigate('/')}
                  className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
                >
                  Home
                </button>
                <button
                  onClick={() => navigate('/pricing')}
                  className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
                >
                  Pricing
                </button>
                <button
                  onClick={() => navigate('/support')}
                  className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
                >
                  Support & FAQ
                </button>
                <button
                  onClick={() => navigate('/privacy-terms')}
                  className="text-sm font-medium text-blue-600"
                >
                  Privacy & Terms
                </button>
              </div>

              <SlackInstallButton className="hidden sm:inline-flex items-center gap-2 bg-white text-slate-800 px-3 py-1.5 rounded border border-slate-300 text-sm font-bold hover:bg-slate-50 transition-colors shadow-sm" />
            </div>
          </div>
        </nav>

        {/* MAIN CONTENT */}
        <main className="pt-20 pb-16 px-6">
          <div className="max-w-4xl mx-auto">
            {/* Main title */}
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
              Privacy Policy & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Terms of Service</span>
            </h1>

            <div className="bg-white p-6 rounded-2xl shadow-lg mb-6">
              <p className="text-slate-700 mb-4">
                <strong>Effective Date:</strong> November 18, 2025<br />
                <strong>Last Updated:</strong> November 18, 2025
              </p>
            </div>

            {/* Table of Contents */}
            <div className="bg-white p-6 rounded-2xl shadow-lg mb-6">
              <h2 className="text-xl font-semibold mb-3 text-blue-600">Contents</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2">Privacy Policy</h3>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Introduction</li>
                    <li>• Information We Collect</li>
                    <li>• How We Use Your Information</li>
                    <li>• Data Security & Retention</li>
                    <li>• Your Rights (GDPR/CCPA)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2">Terms of Service</h3>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Acceptance of Terms</li>
                    <li>• Service Description</li>
                    <li>• User Responsibilities</li>
                    <li>• Liability & Termination</li>
                    <li>• Contact Information</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* ========== PRIVACY POLICY SECTION ========== */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 rounded-2xl mb-6">
              <h1 className="text-2xl font-bold text-white">PRIVACY POLICY</h1>
            </div>

            {/* Section 1 */}
            <div className="bg-white p-6 rounded-2xl shadow-lg mb-6">
              <h2 className="text-xl font-semibold mb-3 text-blue-600">1. Introduction</h2>
              <p className="text-slate-700 mb-4">
                Welcome to Arnold The Analyst ("Arnold," "we," "us," or "our"). Arnold is a Google Analytics 4 assistant that operates within Slack workspaces to help users query and analyze both their own Google Analytics data using natural language.
              </p>
              <p className="text-slate-700 mb-4">
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use Arnold through Slack. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not use Arnold.
              </p>
              <p className="text-slate-700">
                <strong>Operator:</strong> Cian McGovern<br />
                <strong>Location:</strong> Ireland<br />
                <strong>Contact:</strong> cian@arnoldtheanalyst.com<br />
                <strong>Website:</strong> https://arnoldtheanalyst.com
              </p>
              <p className="text-slate-700 mt-4">
                Arnold is intended for business use only and is not directed to individuals under 18 years of age.
              </p>
            </div>

            {/* Section 2 */}
            <div className="bg-white p-6 rounded-2xl shadow-lg mb-6">
              <h2 className="text-xl font-semibold mb-3 text-blue-600">2. Information We Collect</h2>
              
              <h3 className="text-lg font-semibold mb-2 text-slate-800">2.1 Information You Provide Directly</h3>
              <p className="text-slate-700 mb-3">When you install and use the Arnold Slack app, we collect:</p>
              <ul className="text-slate-700 list-disc list-inside space-y-1 mb-4">
                <li><strong>Slack Workspace Information:</strong> Your Slack workspace ID, workspace name, and the user ID of the person who installed Arnold</li>
                <li><strong>Slack User Information:</strong> Your Slack user ID and username when you interact with Arnold</li>
                <li><strong>Google Analytics Authorization:</strong> OAuth access tokens and refresh tokens that allow Arnold to access your Google Analytics data on your behalf</li>
                <li><strong>Analytics Configuration:</strong> The Google Analytics 4 property IDs you select for Arnold to query</li>
                <li><strong>Query Information:</strong> The natural language questions and commands you send to Arnold via Slack</li>
              </ul>

              <h3 className="text-lg font-semibold mb-2 text-slate-800">2.2 Information Collected Automatically</h3>
              <ul className="text-slate-700 list-disc list-inside space-y-1 mb-4">
                <li><strong>Usage Data:</strong> Information about how you interact with Arnold, including timestamps of queries and responses</li>
                <li><strong>Technical Data:</strong> Server logs, including IP addresses, request types, and error messages for troubleshooting and security purposes</li>
                <li><strong>Cookies:</strong> Our website, (arnoldtheanalyst.com), uses essential cookies to maintain session state and ensure proper functionality</li>
              </ul>

              <h3 className="text-lg font-semibold mb-2 text-slate-800">2.3 Information from Third Parties</h3>
              <ul className="text-slate-700 list-disc list-inside space-y-1">
                <li><strong>Slack API:</strong> We receive information from Slack about your workspace and user identity to authenticate you and deliver Arnold's responses</li>
                <li><strong>Google Analytics API:</strong> We access your Google Analytics data solely when you request analytics insights, using the permissions you explicitly grant</li>
              </ul>
            </div>

            {/* Sections 3-20 abbreviated for length - keeping same structure */}
            <div className="bg-white p-6 rounded-2xl shadow-lg mb-6">
              <h2 className="text-xl font-semibold mb-3 text-blue-600">3. How We Use Your Information</h2>
              <p className="text-slate-700 mb-3">We use the information we collect for the following purposes:</p>
              <ul className="text-slate-700 list-disc list-inside space-y-1 mb-4">
                <li><strong>Authentication:</strong> To verify your identity within Slack and ensure secure access</li>
                <li><strong>Analytics Queries:</strong> To access your Google Analytics data and generate insights in response to your requests</li>
                <li><strong>Response Generation:</strong> To process your natural language queries and provide accurate analytics answers</li>
                <li><strong>Service Improvement:</strong> To improve Arnold's query accuracy and response quality</li>
              </ul>
              <p className="text-slate-700 font-medium">
                We do not use your information for advertising, marketing to third parties, or any purpose unrelated to providing and improving Arnold's core analytics functionality.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg mb-6">
              <h2 className="text-xl font-semibold mb-3 text-blue-600">4. How We Share Your Information</h2>
              <p className="text-slate-700 mb-3">We do not sell, rent, or trade your personal information. We share information only with trusted service providers:</p>
              <ul className="text-slate-700 list-disc list-inside space-y-1">
                <li><strong>Railway:</strong> Cloud infrastructure provider</li>
                <li><strong>Slack:</strong> Communication platform</li>
                <li><strong>Google Cloud Platform:</strong> For accessing Google Analytics data</li>
                <li><strong>n8n:</strong> Workflow automation platform</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg mb-6">
              <h2 className="text-xl font-semibold mb-3 text-blue-600">5. Data Security</h2>
              <ul className="text-slate-700 list-disc list-inside space-y-1">
                <li><strong>Encryption:</strong> All data is encrypted in transit (TLS/SSL) and at rest</li>
                <li><strong>Access Controls:</strong> Only authorized systems and personnel have access to user data</li>
                <li><strong>Secure Hosting:</strong> Infrastructure hosted on Railway with SOC 2 compliance</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg mb-6">
              <h2 className="text-xl font-semibold mb-3 text-blue-600">6. Data Retention</h2>
              <ul className="text-slate-700 list-disc list-inside space-y-1">
                <li>OAuth tokens deleted immediately upon disconnect</li>
                <li>Query logs retained for 30 days</li>
                <li>Workspace data deleted 30 days after uninstall</li>
                <li>Request immediate deletion at cian@arnoldtheanalyst.com</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg mb-6">
              <h2 className="text-xl font-semibold mb-3 text-blue-600">7. Your Rights</h2>
              <ul className="text-slate-700 list-disc list-inside space-y-1">
                <li>Access and portability of your data</li>
                <li>Correction of inaccurate information</li>
                <li>Deletion via /arnold-disconnect or by contacting us</li>
                <li>Withdraw consent at any time</li>
              </ul>
              <p className="text-slate-700 mt-4">Contact cian@arnoldtheanalyst.com to exercise these rights.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg mb-6">
              <h2 className="text-xl font-semibold mb-3 text-blue-600">8-10. GDPR & CCPA Compliance</h2>
              <p className="text-slate-700 mb-3">Arnold complies with:</p>
              <ul className="text-slate-700 list-disc list-inside space-y-1">
                <li>✅ GDPR (General Data Protection Regulation) - EU</li>
                <li>✅ CCPA (California Consumer Privacy Act) - California, USA</li>
                <li>✅ UK GDPR - United Kingdom</li>
                <li>✅ Swiss Federal Act on Data Protection</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg mb-6">
              <h2 className="text-xl font-semibold mb-3 text-blue-600">11. Contact Us</h2>
              <p className="text-slate-700">
                <strong>Email:</strong> cian@arnoldtheanalyst.com<br />
                <strong>Website:</strong> <a href="https://arnoldtheanalyst.com" className="text-blue-600 hover:underline">https://arnoldtheanalyst.com</a><br />
                <strong>Operator:</strong> Cian McGovern<br />
                <strong>Location:</strong> Ireland
              </p>
            </div>

            {/* ========== TERMS OF SERVICE SECTION ========== */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 rounded-2xl mb-6 mt-12">
              <h1 className="text-2xl font-bold text-white">TERMS OF SERVICE</h1>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg mb-6">
              <h2 className="text-xl font-semibold mb-3 text-blue-600">1. Acceptance of Terms</h2>
              <p className="text-slate-700">
                By installing and using Arnold The Analyst ("Arnold"), you agree to these Terms of Service. 
                If you do not agree, do not use Arnold.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg mb-6">
              <h2 className="text-xl font-semibold mb-3 text-blue-600">2. Service Description</h2>
              <p className="text-slate-700">
                Arnold is a Slack-based assistant that helps users query Google Analytics 4 data using 
                natural language.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg mb-6">
              <h2 className="text-xl font-semibold mb-3 text-blue-600">3. User Responsibilities</h2>
              <ul className="text-slate-700 list-disc list-inside space-y-2">
                <li>You must have authorization to access the Google Analytics data you query</li>
                <li>You are responsible for the accuracy of your queries</li>
                <li>You must comply with Google Analytics Terms of Service</li>
                <li>You must not use Arnold for illegal purposes or to violate third-party rights</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg mb-6">
              <h2 className="text-xl font-semibold mb-3 text-blue-600">4. Service Availability</h2>
              <ul className="text-slate-700 list-disc list-inside space-y-2">
                <li>Arnold is provided "as is" without guarantees of uptime</li>
                <li>We strive for 99.99% uptime but do not guarantee continuous availability</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg mb-6">
              <h2 className="text-xl font-semibold mb-3 text-blue-600">5. Limitation of Liability</h2>
              <ul className="text-slate-700 list-disc list-inside space-y-2">
                <li>Arnold is provided without warranties of any kind</li>
                <li>We are not liable for any indirect, incidental, or consequential damages</li>
                <li>Our total liability is limited to the amount you paid in the last 12 months</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg mb-6">
              <h2 className="text-xl font-semibold mb-3 text-blue-600">6. Contact</h2>
              <p className="text-slate-700">
                <strong>Operator:</strong> Cian McGovern<br />
                <strong>Location:</strong> Ireland<br />
                <strong>Contact:</strong> <a href="mailto:cian@arnoldtheanalyst.com" className="text-blue-600 hover:underline">cian@arnoldtheanalyst.com</a><br />
                <strong>Website:</strong> <a href="https://arnoldtheanalyst.com" className="text-blue-600 hover:underline">https://arnoldtheanalyst.com</a>
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg mb-6">
              <h2 className="text-xl font-semibold mb-3 text-blue-600">7. Governing Law</h2>
              <p className="text-slate-700">
                These terms are governed by the laws of Ireland. Any disputes will be resolved in Irish courts.
              </p>
            </div>

            {/* Final statement */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 rounded-2xl mb-6">
              <p className="text-white font-medium">
                By using Arnold The Analyst, you acknowledge that you have read, understood, and agree to be bound by the Privacy Policy and Terms of Service.
              </p>
            </div>

            {/* Version info */}
            <div className="text-center text-slate-500 text-sm">
              <p>This document was last updated on November 18, 2025.</p>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="py-8 px-6 border-t border-slate-100 bg-white">
          <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-md flex items-center justify-center">
                <BarChart3 className="w-3 h-3 text-white" />
              </div>
              <span className="text-sm text-slate-600">Arnold The Analyst</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-slate-500">
              <button onClick={() => navigate('/support')} className="hover:text-slate-700 transition-colors">
                Support & FAQ
              </button>
              <button onClick={() => navigate('/privacy-terms')} className="hover:text-slate-700 transition-colors">
                Privacy & Terms
              </button>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
