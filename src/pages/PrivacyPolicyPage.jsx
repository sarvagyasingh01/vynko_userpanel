import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="w-full bg-white text-black">
       <div className="w-full px-4 pt-6 pb-12">
        {/* Title */}
        <h1 className="text-4xl font-bold mb-1">Privacy Policy</h1>
        <p className="text-sm text-gray-600 mb-6">
          Effective Date: (when we launch we’ll change it)
        </p>

        {/* Intro */}
        <p className="mb-6 leading-relaxed">
          Welcome to <span className="font-semibold">VYNKO</span> (“we,” “our,”
          or “us”). Your privacy is important to us, and this Privacy Policy
          outlines how we collect, use, disclose, and protect your information
          when you visit our website{" "}
          <span className="font-medium">www.vynko.in</span> (the “Site”), or
          interact with us through our services, purchases, and social media.
        </p>
        <p className="mb-10 leading-relaxed">
          By using our Site or purchasing our products, you agree to the
          collection and use of information in accordance with this policy.
        </p>

        {/* Section 1 */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
          <p className="mb-4">
            We may collect the following types of personal and non-personal
            information:
          </p>

          <h3 className="text-xl font-semibold mb-2">
            a. Personal Information
          </h3>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Name</li>
            <li>Phone number</li>
            <li>Email address</li>
            <li>Shipping/billing address</li>
            <li>
              Payment information (processed through secure third-party payment
              gateways)
            </li>
            <li>IP address, browser data, and device info</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">
            b. Non-Personal Information
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Analytics and usage data (e.g., pages visited, time spent,
              referring URLs)
            </li>
            <li>Cookies and tracking technologies (see Section 6)</li>
          </ul>
        </section>

        {/* Section 2 */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">
            2. How We Use Your Information
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Process orders and deliver products</li>
            <li>Improve your shopping experience</li>
            <li>Communicate with you (emails, SMS, WhatsApp)</li>
            <li>Send marketing/promotional offers (with your consent)</li>
            <li>Respond to customer service requests</li>
            <li>Detect fraud or misuse</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">3. Sharing of Information</h2>
          <p className="mb-4">
            We do not sell your personal information. However, we may share data
            with trusted third parties:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Payment gateways for transaction processing</li>
            <li>Logistics partners for order fulfillment</li>
            <li>Marketing tools (e.g., email platforms like Mailchimp)</li>
            <li>Analytics providers (e.g., Google Analytics)</li>
            <li>Legal authorities when required by law</li>
          </ul>
          <p>
            All third-party services are obligated to use your data responsibly.
          </p>
        </section>

        {/* Section 4 */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">4. Your Rights & Choices</h2>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Access, update, or delete your personal information</li>
            <li>
              Opt out of promotional emails/SMS by clicking “unsubscribe” or
              contacting us
            </li>
            <li>Disable cookies in your browser settings (see Section 6)</li>
          </ul>
          <p>
            To exercise these rights, email us at
            <span className="font-medium"> support@vynko.in</span>.
          </p>
        </section>

        {/* Section 5 */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">5. Data Security</h2>
          <p className="leading-relaxed">
            We take reasonable security measures to protect your data from loss,
            misuse, or unauthorized access. However, no method of transmission
            over the internet is 100% secure. You use the Site at your own risk.
          </p>
        </section>

        {/* Section 6 */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">
            6. Cookies & Tracking Technologies
          </h2>
          <p className="mb-4">
            Our Site uses cookies and similar technologies to:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Remember your preferences</li>
            <li>Improve website performance</li>
            <li>Analyze traffic</li>
          </ul>
          <p>
            You can manage cookie settings through your browser. Disabling
            cookies may affect your experience on our Site.
          </p>
        </section>

        {/* Section 7 */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">7. Children’s Privacy</h2>
          <p>
            Our website and services are not intended for children under the age
            of 13. We do not knowingly collect data from minors.
          </p>
        </section>

        {/* Section 8 */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">
            8. Changes to This Privacy Policy
          </h2>
          <p>
            We may update this policy from time to time. Any changes will be
            posted on this page with the revised date. We recommend reviewing it
            periodically.
          </p>
        </section>

        {/* Section 9 */}
        <section>
          <h2 className="text-2xl font-bold mb-4">9. Contact Us</h2>
          <p className="mb-2">
            If you have any questions about this Privacy Policy or your data,
            contact us at:
          </p>
          <p className="font-semibold">VYNKO</p>
          <p>Email: support@vynko.in</p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
