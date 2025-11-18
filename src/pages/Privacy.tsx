import React from 'react';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gray-100 p-8 font-sans antialiased">
      <div className="max-w-4xl mx-auto">
        {/* Main title */}
        <h1 className="text-3xl font-bold mb-6 text-blue-600">
          Privacy Policy & Terms of Service
        </h1>

        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <p className="text-gray-700 mb-4">
            <strong>Effective Date:</strong> November 18, 2025<br />
            <strong>Last Updated:</strong> November 18, 2025
          </p>
        </div>

        {/* Table of Contents */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h2 className="text-xl font-semibold mb-3 text-blue-600">Contents</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Privacy Policy</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Introduction</li>
                <li>• Information We Collect</li>
                <li>• How We Use Your Information</li>
                <li>• Data Security & Retention</li>
                <li>• Your Rights (GDPR/CCPA)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Terms of Service</h3>
              <ul className="text-sm text-gray-600 space-y-1">
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
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg mb-6">
          <h1 className="text-2xl font-bold text-blue-800">PRIVACY POLICY</h1>
        </div>

        {/* Section 1 */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h2 className="text-xl font-semibold mb-3 text-blue-600">1. Introduction</h2>
          <p className="text-gray-700 mb-4">
            Welcome to Arnold The Analyst ("Arnold," "we," "us," or "our"). Arnold is a Google Analytics 4 assistant that operates within a web interface and within Slack workspaces to help users query and analyze both their own analytics data and the publicly available Google Merchant Store GA4 BigQuery data using natural language.
          </p>
          <p className="text-gray-700 mb-4">
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use Arnold through Slack. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not use Arnold.
          </p>
          <p className="text-gray-700">
            <strong>Operator:</strong> Cian McGovern<br />
            <strong>Location:</strong> Ireland<br />
            <strong>Contact:</strong> cian@arnoldtheanalyst.com<br />
            <strong>Website:</strong> https://arnoldtheanalyst.com
          </p>
          <p className="text-gray-700 mt-4">
            Arnold is intended for business use only and is not directed to individuals under 18 years of age.
          </p>
        </div>

        {/* Section 2 */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h2 className="text-xl font-semibold mb-3 text-blue-600">2. Information We Collect</h2>
          
          <h3 className="text-lg font-semibold mb-2 text-gray-800">2.1 Information You Provide Directly</h3>
          <p className="text-gray-700 mb-3">When you install and use the Arnold Slack app, we collect:</p>
          <ul className="text-gray-700 list-disc list-inside space-y-1 mb-4">
            <li><strong>Slack Workspace Information:</strong> Your Slack workspace ID, workspace name, and the user ID of the person who installed Arnold</li>
            <li><strong>Slack User Information:</strong> Your Slack user ID and username when you interact with Arnold</li>
            <li><strong>Google Analytics Authorization:</strong> OAuth access tokens and refresh tokens that allow Arnold to access your Google Analytics data on your behalf</li>
            <li><strong>Analytics Configuration:</strong> The Google Analytics 4 property IDs and BigQuery dataset identifiers you select for Arnold to query</li>
            <li><strong>Query Information:</strong> The natural language questions and commands you send to Arnold via Slack</li>
          </ul>

          <h3 className="text-lg font-semibold mb-2 text-gray-800">2.2 Information Collected Automatically</h3>
          <ul className="text-gray-700 list-disc list-inside space-y-1 mb-4">
            <li><strong>Usage Data:</strong> Information about how you interact with Arnold, including timestamps of queries and responses</li>
            <li><strong>Technical Data:</strong> Server logs, including IP addresses, request types, and error messages for troubleshooting and security purposes</li>
            <li><strong>Cookies:</strong> Our website (arnoldtheanalyst.com) uses essential cookies to maintain session state and ensure proper functionality</li>
          </ul>

          <h3 className="text-lg font-semibold mb-2 text-gray-800">2.3 Information from Third Parties</h3>
          <ul className="text-gray-700 list-disc list-inside space-y-1">
            <li><strong>Slack API:</strong> We receive information from Slack about your workspace and user identity to authenticate you and deliver Arnold's responses</li>
            <li><strong>Google Analytics API:</strong> We access your Google Analytics data solely when you request analytics insights, using the permissions you explicitly grant</li>
          </ul>
        </div>

        {/* Section 3 */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h2 className="text-xl font-semibold mb-3 text-blue-600">3. How We Use Your Information</h2>
          <p className="text-gray-700 mb-3">We use the information we collect for the following purposes:</p>

          <h3 className="text-lg font-semibold mb-2 text-gray-800">3.1 Core Service Delivery</h3>
          <ul className="text-gray-700 list-disc list-inside space-y-1 mb-4">
            <li><strong>Authentication:</strong> To verify your identity within Slack and ensure secure access</li>
            <li><strong>Analytics Queries:</strong> To access your Google Analytics data and generate insights in response to your requests</li>
            <li><strong>Response Generation:</strong> To process your natural language queries and provide accurate analytics answers</li>
            <li><strong>Data Output:</strong> To create Google Sheets exports containing the data requested derived from your Google Analytics data</li>
          </ul>

          <h3 className="text-lg font-semibold mb-2 text-gray-800">3.2 Service Improvement</h3>
          <ul className="text-gray-700 list-disc list-inside space-y-1 mb-4">
            <li><strong>Performance Optimization:</strong> To improve Arnold's query accuracy and response quality</li>
            <li><strong>Bug Fixes:</strong> To identify and resolve technical issues</li>
            <li><strong>Feature Development:</strong> To understand usage patterns and develop new features</li>
          </ul>

          <h3 className="text-lg font-semibold mb-2 text-gray-800">3.3 Communication</h3>
          <ul className="text-gray-700 list-disc list-inside space-y-1 mb-4">
            <li><strong>Service Updates:</strong> To notify you of important changes to Arnold's functionality</li>
            <li><strong>Support:</strong> To respond to your inquiries and provide customer assistance</li>
          </ul>

          <h3 className="text-lg font-semibold mb-2 text-gray-800">3.4 Legal Compliance</h3>
          <ul className="text-gray-700 list-disc list-inside space-y-1 mb-4">
            <li><strong>Regulatory Requirements:</strong> To comply with applicable laws and regulations</li>
            <li><strong>Terms Enforcement:</strong> To enforce our Terms of Service and prevent misuse</li>
          </ul>

          <p className="text-gray-700 font-medium">
            We do not use your information for advertising, marketing to third parties, or any purpose unrelated to providing and improving Arnold's core analytics functionality.
          </p>
        </div>

        {/* Section 4 */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h2 className="text-xl font-semibold mb-3 text-blue-600">4. How We Share Your Information</h2>
          <p className="text-gray-700 mb-3">We do not sell, rent, or trade your personal information. We share information only in the following limited circumstances:</p>

          <h3 className="text-lg font-semibold mb-2 text-gray-800">4.1 Service Providers</h3>
          <p className="text-gray-700 mb-2">We use trusted third-party service providers to help operate Arnold:</p>
          <ul className="text-gray-700 list-disc list-inside space-y-1 mb-4">
            <li><strong>Railway:</strong> Cloud infrastructure provider that hosts our databases and application servers</li>
            <li><strong>Slack:</strong> Communication platform through which Arnold operates</li>
            <li><strong>Google Cloud Platform:</strong> For accessing Google Analytics data via authorized API calls</li>
            <li><strong>n8n:</strong> Workflow automation platform for processing and routing queries</li>
          </ul>
          <p className="text-gray-700 mb-4">
            These providers have access to your information only to perform specific tasks on our behalf and are obligated to protect your information and use it only for the purposes we specify.
          </p>

          <h3 className="text-lg font-semibold mb-2 text-gray-800">4.2 Legal Requirements</h3>
          <p className="text-gray-700 mb-4">
            We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., court orders, subpoenas, or government regulations).
          </p>

          <h3 className="text-lg font-semibold mb-2 text-gray-800">4.3 Business Transfers</h3>
          <p className="text-gray-700 mb-4">
            If Arnold is involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction. We will provide notice before your information is transferred and becomes subject to a different privacy policy.
          </p>

          <h3 className="text-lg font-semibold mb-2 text-gray-800">4.4 With Your Consent</h3>
          <p className="text-gray-700">
            We may share your information for any other purpose with your explicit consent.
          </p>
        </div>

        {/* Section 5 */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h2 className="text-xl font-semibold mb-3 text-blue-600">5. Data Security</h2>
          <p className="text-gray-700 mb-3">We implement appropriate technical and organizational security measures to protect your information:</p>

          <h3 className="text-lg font-semibold mb-2 text-gray-800">5.1 Encryption</h3>
          <ul className="text-gray-700 list-disc list-inside space-y-1 mb-4">
            <li><strong>Data in Transit:</strong> All data transmitted between Arnold's servers, Slack, and Google Analytics is encrypted using TLS/SSL</li>
            <li><strong>Data at Rest:</strong> Sensitive information, including Google OAuth tokens, is encrypted in our databases</li>
            <li><strong>Token Storage:</strong> OAuth refresh tokens are stored encrypted and are never logged or exposed</li>
          </ul>

          <h3 className="text-lg font-semibold mb-2 text-gray-800">5.2 Access Controls</h3>
          <ul className="text-gray-700 list-disc list-inside space-y-1 mb-4">
            <li><strong>Least Privilege:</strong> Only authorized systems and personnel have access to user data</li>
            <li><strong>Authentication:</strong> Multi-factor authentication is required for administrative access</li>
            <li><strong>Monitoring:</strong> We monitor our systems for unauthorized access attempts</li>
          </ul>

          <h3 className="text-lg font-semibold mb-2 text-gray-800">5.3 Infrastructure Security</h3>
          <ul className="text-gray-700 list-disc list-inside space-y-1 mb-4">
            <li><strong>Secure Hosting:</strong> Our infrastructure is hosted on Railway, which maintains SOC 2 compliance and industry-standard security practices</li>
            <li><strong>Regular Updates:</strong> We keep our software dependencies and systems up to date with security patches</li>
            <li><strong>Backups:</strong> Regular encrypted backups ensure data recovery capability</li>
          </ul>

          <p className="text-gray-700 font-medium">
            However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee absolute security.
          </p>
        </div>

        {/* Section 6 */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h2 className="text-xl font-semibold mb-3 text-blue-600">6. Data Retention</h2>

          <h3 className="text-lg font-semibold mb-2 text-gray-800">6.1 Active Users</h3>
          <p className="text-gray-700 mb-4">
            We retain your information for as long as your Slack workspace has Arnold installed and you maintain an active connection to Google Analytics.
          </p>

          <h3 className="text-lg font-semibold mb-2 text-gray-800">6.2 Inactive Users</h3>
          <ul className="text-gray-700 list-disc list-inside space-y-1 mb-4">
            <li><strong>Disconnected Accounts:</strong> If you disconnect Arnold using <code className="bg-gray-100 px-1 py-0.5 rounded">/arnold-disconnect</code>, we delete your Google OAuth tokens immediately and delete all associated query logs within <strong>30 days</strong></li>
            <li><strong>Uninstalled Workspaces:</strong> If Arnold is uninstalled from your Slack workspace, we retain workspace installation data for <strong>30 days</strong> before automatic deletion</li>
            <li><strong>Query Logs:</strong> We retain query logs for <strong>30 days</strong> for troubleshooting and service improvement, after which they are automatically deleted</li>
          </ul>

          <h3 className="text-lg font-semibold mb-2 text-gray-800">6.3 Legal Retention</h3>
          <p className="text-gray-700 mb-4">
            We may retain certain information for longer periods if required by law or to resolve disputes, enforce our agreements, or protect our legal rights.
          </p>

          <h3 className="text-lg font-semibold mb-2 text-gray-800">6.4 Manual Deletion</h3>
          <p className="text-gray-700">
            You may request immediate deletion of your data at any time by contacting cian@arnoldtheanalyst.com. We will process deletion requests within 30 days.
          </p>
        </div>

        {/* Section 7 */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h2 className="text-xl font-semibold mb-3 text-blue-600">7. Your Rights and Choices</h2>
          <p className="text-gray-700 mb-3">Depending on your location, you may have certain rights regarding your personal information:</p>

          <h3 className="text-lg font-semibold mb-2 text-gray-800">7.1 Access and Portability</h3>
          <p className="text-gray-700 mb-4">
            You have the right to request access to the personal information we hold about you and receive a copy in a structured, machine-readable format.
          </p>

          <h3 className="text-lg font-semibold mb-2 text-gray-800">7.2 Correction</h3>
          <p className="text-gray-700 mb-4">
            You have the right to request correction of inaccurate or incomplete personal information.
          </p>

          <h3 className="text-lg font-semibold mb-2 text-gray-800">7.3 Deletion</h3>
          <p className="text-gray-700 mb-2">You have the right to request deletion of your personal information, subject to certain legal exceptions. You can:</p>
          <ul className="text-gray-700 list-disc list-inside space-y-1 mb-4">
            <li>Use <code className="bg-gray-100 px-1 py-0.5 rounded">/arnold-disconnect</code> in Slack to immediately disconnect your Google Analytics account</li>
            <li>Uninstall Arnold from your Slack workspace to remove all workspace data</li>
            <li>Contact us at cian@arnoldtheanalyst.com to request complete data deletion</li>
          </ul>

          <h3 className="text-lg font-semibold mb-2 text-gray-800">7.4 Objection and Restriction</h3>
          <p className="text-gray-700 mb-4">
            You have the right to object to or request restriction of certain processing activities.
          </p>

          <h3 className="text-lg font-semibold mb-2 text-gray-800">7.5 Withdraw Consent</h3>
          <p className="text-gray-700 mb-4">
            Where we rely on your consent to process personal information, you have the right to withdraw that consent at any time. This will not affect the lawfulness of processing before withdrawal.
          </p>

          <h3 className="text-lg font-semibold mb-2 text-gray-800">7.6 Lodge a Complaint</h3>
          <p className="text-gray-700 mb-4">
            If you believe we have not complied with applicable data protection laws, you have the right to lodge a complaint with your local data protection authority.
          </p>

          <p className="text-gray-700 font-medium">
            To exercise any of these rights, please contact us at cian@arnoldtheanalyst.com. We will respond to your request within 30 days.
          </p>
        </div>

        {/* Section 8 */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h2 className="text-xl font-semibold mb-3 text-blue-600">8. International Data Transfers</h2>
          <p className="text-gray-700 mb-4">
            Arnold is operated from Ireland, but our service providers may process data in other jurisdictions, including the United States. By using Arnold, you acknowledge that your information may be transferred to and processed in countries other than your country of residence.
          </p>
          <p className="text-gray-700 mb-2">We ensure that appropriate safeguards are in place for international transfers:</p>
          <ul className="text-gray-700 list-disc list-inside space-y-1">
            <li><strong>EU-US Data Transfers:</strong> We rely on Standard Contractual Clauses (SCCs) and ensure our US-based service providers comply with GDPR requirements</li>
            <li><strong>Adequate Protection:</strong> We only transfer data to jurisdictions with adequate data protection laws or use approved transfer mechanisms</li>
          </ul>
        </div>

        {/* Section 9 */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h2 className="text-xl font-semibold mb-3 text-blue-600">9. GDPR Compliance (European Users)</h2>
          <p className="text-gray-700 mb-3">If you are located in the European Economic Area (EEA), UK, or Switzerland, the following additional provisions apply:</p>

          <h3 className="text-lg font-semibold mb-2 text-gray-800">9.1 Legal Basis for Processing</h3>
          <p className="text-gray-700 mb-2">We process your personal data under the following legal bases:</p>
          <ul className="text-gray-700 list-disc list-inside space-y-1 mb-4">
            <li><strong>Contract Performance:</strong> Processing necessary to provide Arnold's services to you</li>
            <li><strong>Legitimate Interests:</strong> To improve our services, ensure security, and prevent fraud</li>
            <li><strong>Consent:</strong> Where you have provided explicit consent (e.g., granting Google Analytics access)</li>
            <li><strong>Legal Obligation:</strong> Where required by applicable law</li>
          </ul>

          <h3 className="text-lg font-semibold mb-2 text-gray-800">9.2 Data Protection Officer</h3>
          <p className="text-gray-700 mb-4">
            For GDPR-related inquiries, please contact: cian@arnoldtheanalyst.com
          </p>

          <h3 className="text-lg font-semibold mb-2 text-gray-800">9.3 Your GDPR Rights</h3>
          <p className="text-gray-700 mb-2">In addition to the rights listed in Section 7, you have:</p>
          <ul className="text-gray-700 list-disc list-inside space-y-1">
            <li>The right to data portability in a machine-readable format</li>
            <li>The right to object to automated decision-making (note: Arnold does not make automated decisions that significantly affect you)</li>
            <li>Enhanced rights to erasure ("right to be forgotten")</li>
          </ul>
        </div>

        {/* Section 10 */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h2 className="text-xl font-semibold mb-3 text-blue-600">10. CCPA Compliance (California Users)</h2>
          <p className="text-gray-700 mb-3">If you are a California resident, the California Consumer Privacy Act (CCPA) provides you with specific rights:</p>

          <h3 className="text-lg font-semibold mb-2 text-gray-800">10.1 Categories of Information Collected</h3>
          <p className="text-gray-700 mb-2">As detailed in Section 2, we collect:</p>
          <ul className="text-gray-700 list-disc list-inside space-y-1 mb-4">
            <li>Identifiers (Slack user ID, workspace ID)</li>
            <li>Internet activity (usage data, queries)</li>
            <li>Professional information (workspace name, business context)</li>
          </ul>

          <h3 className="text-lg font-semibold mb-2 text-gray-800">10.2 Your CCPA Rights</h3>
          <ul className="text-gray-700 list-disc list-inside space-y-1 mb-4">
            <li><strong>Right to Know:</strong> Request disclosure of personal information collected, used, or shared</li>
            <li><strong>Right to Delete:</strong> Request deletion of personal information we have collected</li>
            <li><strong>Right to Opt-Out:</strong> We do not sell personal information, so opt-out is not applicable</li>
            <li><strong>Right to Non-Discrimination:</strong> We will not discriminate against you for exercising your CCPA rights</li>
          </ul>

          <h3 className="text-lg font-semibold mb-2 text-gray-800">10.3 Exercising Your Rights</h3>
          <p className="text-gray-700 mb-4">
            To exercise your CCPA rights, contact cian@arnoldtheanalyst.com. We will verify your identity before processing requests.
          </p>

          <h3 className="text-lg font-semibold mb-2 text-gray-800">10.4 Do Not Sell</h3>
          <p className="text-gray-700 font-medium">
            We do not sell your personal information to third parties, and we have not sold personal information in the past 12 months.
          </p>
        </div>

        {/* Section 11 */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h2 className="text-xl font-semibold mb-3 text-blue-600">11. Cookies and Tracking Technologies</h2>

          <h3 className="text-lg font-semibold mb-2 text-gray-800">11.1 Website Cookies</h3>
          <p className="text-gray-700 mb-2">Our website (arnoldtheanalyst.com) uses essential cookies to:</p>
          <ul className="text-gray-700 list-disc list-inside space-y-1 mb-4">
            <li>Maintain session state during your visit</li>
            <li>Ensure proper functionality of interactive features</li>
            <li>Remember your preferences (if applicable)</li>
          </ul>
          <p className="text-gray-700 mb-4">
            We do not use tracking cookies, advertising cookies, or third-party analytics cookies on our website.
          </p>

          <h3 className="text-lg font-semibold mb-2 text-gray-800">11.2 Slack Integration</h3>
          <p className="text-gray-700 mb-4">
            Arnold operates within Slack and does not set cookies directly. However, Slack may use cookies as described in Slack's privacy policy.
          </p>

          <h3 className="text-lg font-semibold mb-2 text-gray-800">11.3 Managing Cookies</h3>
          <p className="text-gray-700">
            You can control cookies through your browser settings. Note that disabling essential cookies may affect the functionality of our website.
          </p>
        </div>

        {/* Section 12 */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h2 className="text-xl font-semibold mb-3 text-blue-600">12. Third-Party Links and Services</h2>
          <p className="text-gray-700 mb-4">
            Arnold may contain links to third-party websites or integrate with third-party services (Slack, Google Analytics). This privacy policy applies only to Arnold. We are not responsible for the privacy practices of third parties. We encourage you to review the privacy policies of:
          </p>
          <ul className="text-gray-700 list-disc list-inside space-y-1">
            <li><strong>Slack:</strong> <a href="https://slack.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://slack.com/privacy-policy</a></li>
            <li><strong>Google Analytics:</strong> <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://policies.google.com/privacy</a></li>
          </ul>
        </div>

        {/* Section 13 */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h2 className="text-xl font-semibold mb-3 text-blue-600">13. Payment Information</h2>
          <p className="text-gray-700 mb-4">
            <strong>Arnold is currently free to use.</strong> We do not collect, process, or store any payment information (credit card numbers, billing addresses, etc.) at this time.
          </p>
          <p className="text-gray-700 mb-2">If we introduce paid features in the future, we will:</p>
          <ul className="text-gray-700 list-disc list-inside space-y-1">
            <li>Update this privacy policy before collecting any payment data</li>
            <li>Notify all users of the changes via Slack and email</li>
            <li>Use secure, PCI-compliant third-party payment processors (such as Stripe)</li>
            <li>Never store credit card information directly on our servers</li>
          </ul>
        </div>

        {/* Section 14 */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h2 className="text-xl font-semibold mb-3 text-blue-600">14. Children's Privacy</h2>
          <p className="text-gray-700 mb-4">
            Arnold is intended for business use only and is not directed to individuals under 18 years of age. We do not knowingly collect personal information from children under 18.
          </p>
          <p className="text-gray-700">
            If we become aware that we have collected personal information from a child under 18, we will take steps to delete such information immediately. If you believe we have inadvertently collected information from a minor, please contact us at cian@arnoldtheanalyst.com.
          </p>
        </div>

        {/* Section 15 */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h2 className="text-xl font-semibold mb-3 text-blue-600">15. Changes to This Privacy Policy</h2>
          <p className="text-gray-700 mb-3">We may update this privacy policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors.</p>

          <h3 className="text-lg font-semibold mb-2 text-gray-800">15.1 Notification of Changes</h3>
          <ul className="text-gray-700 list-disc list-inside space-y-1 mb-4">
            <li><strong>Material Changes:</strong> If we make material changes that affect how we use your personal information, we will notify you via Slack and/or email at least 30 days before the changes take effect</li>
            <li><strong>Minor Changes:</strong> For non-material changes, we will update the "Last Updated" date at the top of this policy</li>
          </ul>

          <h3 className="text-lg font-semibold mb-2 text-gray-800">15.2 Continued Use</h3>
          <p className="text-gray-700 mb-4">
            Your continued use of Arnold after any changes to this privacy policy constitutes your acceptance of the updated policy.
          </p>

          <h3 className="text-lg font-semibold mb-2 text-gray-800">15.3 Review Policy</h3>
          <p className="text-gray-700">
            We encourage you to review this privacy policy periodically to stay informed about how we protect your information.
          </p>
        </div>

        {/* Section 16 */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h2 className="text-xl font-semibold mb-3 text-blue-600">16. Business Use Only</h2>
          <p className="text-gray-700 mb-2">Arnold is designed and intended exclusively for business and professional use. By using Arnold, you represent that:</p>
          <ul className="text-gray-700 list-disc list-inside space-y-1">
            <li>You are using Arnold on behalf of a business or organization</li>
            <li>You are at least 18 years of age</li>
            <li>You have the authority to bind your organization to this privacy policy and our Terms of Service</li>
            <li>You will not use Arnold for personal, family, or household purposes</li>
          </ul>
        </div>

        {/* Section 17 */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h2 className="text-xl font-semibold mb-3 text-blue-600">17. Data Processing Agreement (DPA)</h2>
          <p className="text-gray-700">
            If you are an enterprise customer subject to GDPR or similar data protection regulations, we can provide a Data Processing Agreement (DPA) upon request. The DPA will outline the specific terms under which we process personal data on your behalf. Please contact cian@arnoldtheanalyst.com to request a DPA.
          </p>
        </div>

        {/* Section 18 */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h2 className="text-xl font-semibold mb-3 text-blue-600">18. Contact Us</h2>
          <p className="text-gray-700 mb-3">If you have questions, concerns, or requests regarding this privacy policy or our data practices, please contact us:</p>
          <p className="text-gray-700 mb-4">
            <strong>Email:</strong> cian@arnoldtheanalyst.com<br />
            <strong>Website:</strong> <a href="https://arnoldtheanalyst.com" className="text-blue-600 hover:underline">https://arnoldtheanalyst.com</a><br />
            <strong>Operator:</strong> Cian McGovern<br />
            <strong>Location:</strong> Ireland
          </p>
          <p className="text-gray-700 font-medium">
            Response Time: We aim to respond to all inquiries within 5 business days and will resolve requests within 30 days.
          </p>
        </div>

        {/* Section 19 */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h2 className="text-xl font-semibold mb-3 text-blue-600">19. Definitions</h2>
          <p className="text-gray-700 mb-3">For clarity, the following terms used in this privacy policy have the following meanings:</p>
          <ul className="text-gray-700 space-y-2">
            <li><strong>"Arnold" or "Service":</strong> The Arnold The Analyst application and all associated services</li>
            <li><strong>"You" or "User":</strong> The individual or organization using Arnold</li>
            <li><strong>"Personal Information":</strong> Any information that identifies, relates to, or could reasonably be linked to you</li>
            <li><strong>"Processing":</strong> Any operation performed on personal data, including collection, storage, use, or deletion</li>
            <li><strong>"Workspace":</strong> A Slack workspace where Arnold is installed</li>
          </ul>
        </div>

        {/* Section 20 */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h2 className="text-xl font-semibold mb-3 text-blue-600">20. Legal Compliance Summary</h2>
          <p className="text-gray-700 mb-3">Arnold complies with the following data protection frameworks and regulations:</p>
          <ul className="text-gray-700 list-disc list-inside space-y-1 mb-4">
            <li>✅ <strong>GDPR</strong> (General Data Protection Regulation) - EU</li>
            <li>✅ <strong>CCPA</strong> (California Consumer Privacy Act) - California, USA</li>
            <li>✅ <strong>UK GDPR</strong> - United Kingdom</li>
            <li>✅ <strong>Swiss Federal Act on Data Protection</strong> - Switzerland</li>
            <li>✅ Data protection principles aligned with international best practices</li>
          </ul>
          <p className="text-gray-700">
            We are committed to maintaining compliance as regulations evolve and will update our practices accordingly.
          </p>
        </div>

        {/* ========== TERMS OF SERVICE SECTION ========== */}
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg mb-6 mt-12">
          <h1 className="text-2xl font-bold text-blue-800">TERMS OF SERVICE</h1>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h2 className="text-xl font-semibold mb-3 text-blue-600">1. Acceptance of Terms</h2>
          <p className="text-gray-700">
            By installing and using Arnold The Analyst ("Arnold"), you agree to these Terms of Service. 
            If you do not agree, do not use Arnold.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h2 className="text-xl font-semibold mb-3 text-blue-600">2. Service Description</h2>
          <p className="text-gray-700">
            Arnold is a Slack-based assistant that helps users query Google Analytics 4 data using 
            natural language.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h2 className="text-xl font-semibold mb-3 text-blue-600">3. User Responsibilities</h2>
          <ul className="text-gray-700 list-disc list-inside space-y-2">
            <li>You must have authorization to access the Google Analytics data you query</li>
            <li>You are responsible for the accuracy of your queries</li>
            <li>You must comply with Google Analytics Terms of Service</li>
            <li>You must not use Arnold for illegal purposes or to violate third-party rights</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h2 className="text-xl font-semibold mb-3 text-blue-600">4. Service Availability</h2>
          <ul className="text-gray-700 list-disc list-inside space-y-2">
            <li>Arnold is provided "as is" without guarantees of uptime</li>
            <li>We strive for 99.99% uptime but do not guarantee continuous availability</li>
            <li>Scheduled maintenance will be communicated in advance when possible</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h2 className="text-xl font-semibold mb-3 text-blue-600">5. Data Usage</h2>
          <ul className="text-gray-700 list-disc list-inside space-y-2">
            <li>Arnold accesses only the Google Analytics data you authorize</li>
            <li>All queries are initiated by you - Arnold does not access data proactively</li>
            <li>See Privacy Policy above for details on data collection and storage</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h2 className="text-xl font-semibold mb-3 text-blue-600">6. Billing and Payments</h2>
          <ul className="text-gray-700 list-disc list-inside space-y-2">
            <li>Subscription fees are charged monthly or annually as selected</li>
            <li>Prices are subject to change with 30 days notice</li>
            <li>Refunds are handled on a case-by-case basis</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h2 className="text-xl font-semibold mb-3 text-blue-600">7. Termination</h2>
          <ul className="text-gray-700 list-disc list-inside space-y-2">
            <li>You may terminate your use of Arnold at any time by uninstalling the app</li>
            <li>We reserve the right to terminate access for violations of these terms</li>
            <li>Upon termination, your data will be deleted as outlined in the Privacy Policy above</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h2 className="text-xl font-semibold mb-3 text-blue-600">8. Limitation of Liability</h2>
          <ul className="text-gray-700 list-disc list-inside space-y-2">
            <li>Arnold is provided without warranties of any kind</li>
            <li>We are not liable for any indirect, incidental, or consequential damages</li>
            <li>Our total liability is limited to the amount you paid in the last 12 months</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h2 className="text-xl font-semibold mb-3 text-blue-600">9. Changes to Terms</h2>
          <ul className="text-gray-700 list-disc list-inside space-y-2">
            <li>We may update these terms at any time</li>
            <li>Continued use after changes constitutes acceptance</li>
            <li>Material changes will be communicated via email</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h2 className="text-xl font-semibold mb-3 text-blue-600">10. Contact</h2>
          <p className="text-gray-700">
            <span className="font-semibold">Operator:</span> Cian McGovern<br />
            <span className="font-semibold">Location:</span> Ireland<br />
            <span className="font-semibold">Contact:</span> <a href="mailto:cian@arnoldtheanalyst.com" className="text-blue-600 hover:underline">cian@arnoldtheanalyst.com</a><br />
            <span className="font-semibold">Website:</span> <a href="https://arnoldtheanalyst.com" className="text-blue-600 hover:underline">https://arnoldtheanalyst.com</a>
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h2 className="text-xl font-semibold mb-3 text-blue-600">11. Governing Law</h2>
          <p className="text-gray-700">
            These terms are governed by the laws of Ireland. Any disputes will be resolved in Irish courts.
          </p>
        </div>

        {/* Final statement */}
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg mb-6">
          <p className="text-gray-800 font-medium">
            By using Arnold The Analyst, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy and Terms of Service.
          </p>
        </div>

        {/* Version info */}
        <div className="text-center text-gray-500 text-sm">
          <p>This document was last updated on November 18, 2025.</p>
        </div>
      </div>
    </div>
  );
}
