"use client";

import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/20 py-12 px-6">
      <div className="max-w-3xl mx-auto bg-white/70 backdrop-blur-sm shadow-md rounded-2xl p-8">
        {/* Header */}
        <h1 className="text-3xl font-bold text-primary mb-4">Privacy Policy</h1>
        <p className="text-gray-600 mb-8">
          At <span className="font-semibold">Vibe Coding for Non-Techies</span>, your privacy is
          important to us. This Privacy Policy explains how we collect, use, and protect your
          personal information.
        </p>

        {/* Sections */}
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-primary mb-2">1. Information We Collect</h2>
            <p>
              We may collect personal details such as your{" "}
              <span className="font-medium">name, email address, and password</span>
              when you sign up for the course. This information is necessary to provide you with
              access to the course content.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mb-2">
              2. How We Use Your Information
            </h2>
            <p>We use your information to:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>Provide you access to the course content</li>
              <li>Communicate important updates or changes</li>
              <li>Maintain and improve our platform</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mb-2">3. Data Security</h2>
            <p>
              We implement security measures to protect your data. However, please note that no
              system is 100% secure, and we cannot guarantee absolute protection of your
              information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mb-2">4. Sharing of Information</h2>
            <p>
              We do <span className="font-semibold">not sell or share</span> your personal
              information with third parties. Your data is used only to operate and improve this
              course platform.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mb-2">5. Cookies & Tracking</h2>
            <p>
              Our platform may use cookies or similar technologies to enhance your experience. These
              are only used for basic functionality, not for advertising or tracking across
              websites.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mb-2">6. Your Rights</h2>
            <p>
              You have the right to update or delete your account information at any time from your
              profile settings. If you wish to permanently delete your data, please contact us.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mb-2">7. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please reach out to us at{" "}
              <a
                href="mailto:support@vibecoding.com"
                className="text-primary font-medium hover:underline"
              >
                support@vibecoding.com
              </a>
              .
            </p>
          </section>
        </div>

        {/* Footer */}
        <div className="mt-10 text-sm text-gray-500">
          <p>By using our platform, you agree to this Privacy Policy.</p>
          <Link href="/" className="mt-6 inline-block text-primary hover:underline">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
