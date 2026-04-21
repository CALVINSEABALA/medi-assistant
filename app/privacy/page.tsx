export const metadata = {
  title: "Privacy Policy | Medi Assistant",
  description: "How Medi Assistant protects your privacy and data",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-warm-50 py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
          <h1 className="text-3xl font-bold text-warm-900 mb-2">Privacy Policy</h1>
          <p className="text-warm-500 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="prose prose-warm max-w-none">
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-warm-900 mb-3">1. Introduction</h2>
              <p className="text-warm-600 mb-4">
                Medi Assistant ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our WhatsApp-based health and wellness assistant service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-warm-900 mb-3">2. Information We Collect</h2>
              <p className="text-warm-600 mb-4">We collect the following types of information:</p>
              <ul className="list-disc pl-6 text-warm-600 space-y-2">
                <li><strong>WhatsApp Information:</strong> Your phone number and WhatsApp profile information when you initiate a conversation with our assistant.</li>
                <li><strong>Conversation Data:</strong> Messages and health-related information you share during conversations with Amani.</li>
                <li><strong>Usage Data:</strong> Information about how you interact with our service, including frequency and duration of conversations.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-warm-900 mb-3">3. How We Use Your Information</h2>
              <p className="text-warm-600 mb-4">We use your information to:</p>
              <ul className="list-disc pl-6 text-warm-600 space-y-2">
                <li>Provide health and wellness guidance and support</li>
                <li>Personalize your experience with Amani</li>
                <li>Improve our services and AI responses</li>
                <li>Send you health tips and wellness updates (with your consent)</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-warm-900 mb-3">4. Data Security</h2>
              <p className="text-warm-600 mb-4">
                We implement appropriate technical and organizational measures to protect your personal information. WhatsApp conversations are end-to-end encrypted. However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-warm-900 mb-3">5. Data Sharing</h2>
              <p className="text-warm-600 mb-4">We do not sell your personal information. We may share data with:</p>
              <ul className="list-disc pl-6 text-warm-600 space-y-2">
                <li>Service providers who assist in operating our service (under strict confidentiality agreements)</li>
                <li>Legal authorities when required by law</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-warm-900 mb-3">6. Your Rights</h2>
              <p className="text-warm-600 mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 text-warm-600 space-y-2">
                <li>Access your personal data</li>
                <li>Request correction or deletion of your data</li>
                <li>Opt-out of communications</li>
                <li>Request data portability</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-warm-900 mb-3">7. Children's Privacy</h2>
              <p className="text-warm-600 mb-4">
                Our service is not intended for individuals under 18 years of age. We do not knowingly collect personal information from children.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-warm-900 mb-3">8. Contact Us</h2>
              <p className="text-warm-600">
                If you have questions about this Privacy Policy, please contact us at:{" "}
                <a href="mailto:privacy@mediassistant.co.za" className="text-teal-600 hover:underline">
                  privacy@mediassistant.co.za
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
