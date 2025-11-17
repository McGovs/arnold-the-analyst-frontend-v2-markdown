const Terms: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-blue-600 mb-8">
        Terms of Service for Arnold The Analyst
      </h1>
      
      <div className="space-y-6 text-gray-700">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <p className="font-semibold">Effective Date: January 14, 2025</p>
          <p className="font-semibold">Last Updated: January 14, 2025</p>
        </div>

        <section>
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">1. Acceptance of Terms</h2>
          <p>
            By installing and using Arnold The Analyst ("Arnold"), you agree to these Terms of Service. 
            If you do not agree, do not use Arnold.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">2. Service Description</h2>
          <p>
            Arnold is a Slack-based assistant that helps users query Google Analytics 4 data using 
            natural language. Arnold translates queries into SQL and executes them against the user's 
            BigQuery dataset.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">3. User Responsibilities</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>You must have authorization to access the Google Analytics data you query</li>
            <li>You are responsible for the accuracy of your queries</li>
            <li>You must comply with Google Analytics Terms of Service</li>
            <li>You must not use Arnold for illegal purposes or to violate third-party rights</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">4. Service Availability</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Arnold is provided "as is" without guarantees of uptime</li>
            <li>We strive for 99% uptime but do not guarantee continuous availability</li>
            <li>Scheduled maintenance will be communicated in advance when possible</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">5. Data Usage</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Arnold accesses only the Google Analytics data you authorize</li>
            <li>All queries are initiated by you - Arnold does not access data proactively</li>
            <li>See our Privacy Policy for details on data collection and storage</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">6. Billing and Payments</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Subscription fees are charged monthly or annually as selected</li>
            <li>Prices are subject to change with 30 days notice</li>
            <li>Refunds are handled on a case-by-case basis</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">7. Termination</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>You may terminate your use of Arnold at any time by uninstalling the app</li>
            <li>We reserve the right to terminate access for violations of these terms</li>
            <li>Upon termination, your data will be deleted as outlined in the Privacy Policy</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">8. Limitation of Liability</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Arnold is provided without warranties of any kind</li>
            <li>We are not liable for any indirect, incidental, or consequential damages</li>
            <li>Our total liability is limited to the amount you paid in the last 12 months</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">9. Changes to Terms</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>We may update these terms at any time</li>
            <li>Continued use after changes constitutes acceptance</li>
            <li>Material changes will be communicated via email</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">10. Contact</h2>
          <p>
            <span className="font-semibold">Operator:</span> Cian McGovern<br />
            <span className="font-semibold">Location:</span> Ireland<br />
            <span className="font-semibold">Contact:</span> <a href="mailto:cian@arnoldtheanalyst.com" className="text-blue-600 hover:underline">cian@arnoldtheanalyst.com</a><br />
            <span className="font-semibold">Website:</span> <a href="https://arnoldtheanalyst.com" className="text-blue-600 hover:underline">https://arnoldtheanalyst.com</a>
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">11. Governing Law</h2>
          <p>
            These terms are governed by the laws of Ireland. Any disputes will be resolved in Irish courts.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Terms;
