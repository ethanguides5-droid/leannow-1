import { ArrowLeft, Shield } from 'lucide-react';

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white py-12 px-4" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="max-w-4xl mx-auto">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-[#4A4A4A] hover:text-[#F6A800] transition-colors mb-8"
          style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </a>

        <div className="bg-gradient-to-b from-[#FFFFFF] to-[#F5F6F7] rounded-lg shadow-xl overflow-hidden border-2 border-[#E6EDF4] p-8 md:p-12">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-[#4A4A4A] rounded-full flex items-center justify-center">
                <Shield className="w-10 h-10 text-[#F6A800]" />
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#4A4A4A] uppercase" style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.06em' }}>
              Privacy Policy
            </h1>

            <p className="text-[#7C8CA1] text-sm" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
              Last Updated: November 2025
            </p>
          </div>

          <div className="space-y-8 text-[#4A4A4A]" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, lineHeight: '1.8' }}>
            <section>
              <h2 className="text-2xl font-bold mb-4 text-[#4A4A4A] uppercase" style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.05em' }}>
                1. Introduction
              </h2>
              <p className="text-[#7C8CA1] mb-4">
                LeanNow ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or purchase our nutraceutical products.
              </p>
              <p className="text-[#7C8CA1]">
                By using our website or services, you agree to the collection and use of information in accordance with this policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-[#4A4A4A] uppercase" style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.05em' }}>
                2. Information We Collect
              </h2>

              <h3 className="text-xl font-bold mb-3 text-[#4A4A4A]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Personal Information
              </h3>
              <p className="text-[#7C8CA1] mb-4">
                When you place an order or register on our site, we may collect:
              </p>
              <ul className="list-disc list-inside text-[#7C8CA1] mb-4 space-y-2 ml-4">
                <li>Name and contact information (email address, phone number)</li>
                <li>Billing and shipping addresses</li>
                <li>Payment information (processed securely through third-party payment processors)</li>
                <li>Order history and preferences</li>
                <li>Health-related information you voluntarily provide</li>
              </ul>

              <h3 className="text-xl font-bold mb-3 text-[#4A4A4A]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Automatically Collected Information
              </h3>
              <p className="text-[#7C8CA1] mb-4">
                We automatically collect certain information when you visit our website:
              </p>
              <ul className="list-disc list-inside text-[#7C8CA1] mb-4 space-y-2 ml-4">
                <li>IP address and browser type</li>
                <li>Device information and operating system</li>
                <li>Pages visited and time spent on our site</li>
                <li>Referring website addresses</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-[#4A4A4A] uppercase" style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.05em' }}>
                3. How We Use Your Information
              </h2>
              <p className="text-[#7C8CA1] mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-[#7C8CA1] mb-4 space-y-2 ml-4">
                <li>Process and fulfill your orders</li>
                <li>Communicate with you about your orders and our products</li>
                <li>Send promotional emails and marketing communications (with your consent)</li>
                <li>Improve our products, services, and website experience</li>
                <li>Prevent fraud and enhance security</li>
                <li>Comply with legal obligations and regulatory requirements</li>
                <li>Respond to customer service requests</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-[#4A4A4A] uppercase" style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.05em' }}>
                4. Information Sharing and Disclosure
              </h2>
              <p className="text-[#7C8CA1] mb-4">
                We do not sell or rent your personal information to third parties. We may share your information with:
              </p>
              <ul className="list-disc list-inside text-[#7C8CA1] mb-4 space-y-2 ml-4">
                <li><strong>Service Providers:</strong> Third-party vendors who help us operate our business (payment processors, shipping companies, email service providers)</li>
                <li><strong>Legal Requirements:</strong> When required by law, court order, or to protect our rights and safety</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
              </ul>
              <p className="text-[#7C8CA1]">
                All third-party service providers are contractually obligated to maintain the confidentiality and security of your information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-[#4A4A4A] uppercase" style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.05em' }}>
                5. Data Security
              </h2>
              <p className="text-[#7C8CA1] mb-4">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc list-inside text-[#7C8CA1] mb-4 space-y-2 ml-4">
                <li>SSL/TLS encryption for data transmission</li>
                <li>Secure payment processing systems</li>
                <li>Regular security assessments and updates</li>
                <li>Limited access to personal information by authorized personnel only</li>
              </ul>
              <p className="text-[#7C8CA1]">
                However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-[#4A4A4A] uppercase" style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.05em' }}>
                6. Your Rights and Choices
              </h2>
              <p className="text-[#7C8CA1] mb-4">
                You have the following rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside text-[#7C8CA1] mb-4 space-y-2 ml-4">
                <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal obligations)</li>
                <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications at any time</li>
                <li><strong>Data Portability:</strong> Request transfer of your data in a structured format</li>
              </ul>
              <p className="text-[#7C8CA1]">
                To exercise these rights, please contact us at <a href="mailto:leannow@contact.com" className="text-[#F6A800] hover:text-[#4A4A4A] font-semibold">leannow@contact.com</a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-[#4A4A4A] uppercase" style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.05em' }}>
                7. Marketing Communications
              </h2>
              <p className="text-[#7C8CA1] mb-4">
                With your consent, we may send you promotional emails about our products, special offers, and health information. You can opt out at any time by:
              </p>
              <ul className="list-disc list-inside text-[#7C8CA1] mb-4 space-y-2 ml-4">
                <li>Clicking the "unsubscribe" link in any promotional email</li>
                <li>Contacting us at <a href="mailto:leannow@contact.com" className="text-[#F6A800] hover:text-[#4A4A4A] font-semibold">leannow@contact.com</a></li>
                <li>Updating your preferences in your account settings</li>
              </ul>
              <p className="text-[#7C8CA1]">
                Please note that even if you opt out of marketing communications, we will still send transactional emails related to your orders.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-[#4A4A4A] uppercase" style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.05em' }}>
                8. Cookies and Tracking Technologies
              </h2>
              <p className="text-[#7C8CA1] mb-4">
                We use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and understand user preferences. You can control cookies through your browser settings, but disabling cookies may affect your ability to use certain features of our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-[#4A4A4A] uppercase" style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.05em' }}>
                9. Third-Party Links
              </h2>
              <p className="text-[#7C8CA1] mb-4">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any personal information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-[#4A4A4A] uppercase" style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.05em' }}>
                10. Children's Privacy
              </h2>
              <p className="text-[#7C8CA1] mb-4">
                Our products and services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-[#4A4A4A] uppercase" style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.05em' }}>
                11. International Data Transfers
              </h2>
              <p className="text-[#7C8CA1] mb-4">
                Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy and applicable data protection laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-[#4A4A4A] uppercase" style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.05em' }}>
                12. Data Retention
              </h2>
              <p className="text-[#7C8CA1] mb-4">
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law. When information is no longer needed, we securely delete or anonymize it.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-[#4A4A4A] uppercase" style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.05em' }}>
                13. Changes to This Privacy Policy
              </h2>
              <p className="text-[#7C8CA1] mb-4">
                We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of significant changes by posting the updated policy on our website with a new "Last Updated" date. Your continued use of our services after changes are posted constitutes acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-[#4A4A4A] uppercase" style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.05em' }}>
                14. Contact Information
              </h2>
              <p className="text-[#7C8CA1] mb-4">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-[#F8FBFF] rounded-lg p-6 border-2 border-[#E6EDF4]">
                <p className="text-[#4A4A4A] font-semibold mb-2">Email:</p>
                <a href="mailto:leannow@contact.com" className="text-[#F6A800] hover:text-[#4A4A4A] font-bold text-lg">leannow@contact.com</a>

                <p className="text-[#4A4A4A] font-semibold mt-4 mb-2">Mailing Address:</p>
                <p className="text-[#7C8CA1]">
                  6 Danbury Ct, Linford Wood<br />
                  Milton Keynes MK14 6PL<br />
                  United Kingdom
                </p>
              </div>
            </section>

            <section className="bg-[#F8FBFF] rounded-lg p-6 border-2 border-[#E6EDF4] mt-8">
              <p className="text-[#7C8CA1] text-center font-semibold">
                By using LeanNow products and services, you acknowledge that you have read and understood this Privacy Policy.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
