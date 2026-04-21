export const metadata = {
  title: "Terms of Service | Medi Assistant",
  description: "Terms and conditions for using Medi Assistant",
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-warm-50 py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
          <h1 className="text-3xl font-bold text-warm-900 mb-2">Terms of Service</h1>
          <p className="text-warm-500 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="prose prose-warm max-w-none">
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-warm-900 mb-3">1. Acceptance of Terms</h2>
              <p className="text-warm-600 mb-4">
                By accessing or using Medi Assistant ("the Service"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-warm-900 mb-3">2. Description of Service</h2>
              <p className="text-warm-600 mb-4">
                Medi Assistant is an AI-powered health and wellness assistant delivered via WhatsApp. The Service provides general wellness information, mental health support resources, and health guidance. The Service is operated by Medi Assistant (Pty) Ltd, a company registered in South Africa.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-warm-900 mb-3">3. Not Medical Advice</h2>
              <p className="text-warm-600 mb-4">
                <strong>IMPORTANT:</strong> Medi Assistant provides general wellness information and support only. It is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
              </p>
              <p className="text-warm-600 mb-4">
                Never disregard professional medical advice or delay in seeking it because of something you have read or received through Medi Assistant.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-warm-900 mb-3">4. Eligibility</h2>
              <p className="text-warm-600 mb-4">You must be at least 18 years old to use the Service. By using the Service, you represent and warrant that:</p>
              <ul className="list-disc pl-6 text-warm-600 space-y-2">
                <li>You are 18 years of age or older</li>
                <li>You have the legal capacity to enter into these Terms</li>
                <li>You will use the Service in accordance with these Terms</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-warm-900 mb-3">5. WhatsApp Integration</h2>
              <p className="text-warm-600 mb-4">
                The Service operates through WhatsApp. By using the Service, you:</p>
              <ul className="list-disc pl-6 text-warm-600 space-y-2">
                <li>Consent to receive messages via WhatsApp</li>
                <li>Understand that standard messaging rates may apply</li>
                <li>Acknowledge that WhatsApp's terms of service also apply</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-warm-900 mb-3">6. User Conduct</h2>
              <p className="text-warm-600 mb-4">You agree not to:</p>
              <ul className="list-disc pl-6 text-warm-600 space-y-2">
                <li>Use the Service for any illegal purpose</li>
                <li>Share false or misleading information</li>
                <li>Attempt to gain unauthorized access to the Service</li>
                <li>Interfere with other users' use of the Service</li>
                <li>Use the Service for emergency medical situations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-warm-900 mb-3">7. Limitation of Liability</h2>
              <p className="text-warm-600 mb-4">
                To the fullest extent permitted by law, Medi Assistant shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of the Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-warm-900 mb-3">8. Contact Information</h2>
              <p className="text-warm-600">
                For questions about these Terms, please contact us at:{" "}
                <a href="mailto:legal@mediassistant.co.za" className="text-teal-600 hover:underline">
                  legal@mediassistant.co.za
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
