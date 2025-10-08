"use client";

import Link from "next/link";

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/20 py-12 px-6">
      <div className="max-w-3xl mx-auto bg-white/70 backdrop-blur-sm shadow-md rounded-2xl p-8">
        {/* Header */}
        <h1 className="text-3xl font-bold text-primary mb-4">Refund Policy</h1>
        <p className="text-gray-600 mb-8">
          Thank you for choosing <span className="font-semibold">Vibe Coding for Non-Techies</span>.
          We value your trust in us. Please read our refund policy carefully.
        </p>

        {/* Sections */}
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-primary mb-2">1. One-Time Payment</h2>
            <p>
              Our mini-course —{" "}
              <span className="font-medium">
                "Vibe Coding for Non-Techies — Learn to Build Apps & Automations with Just Prompts"
              </span>{" "}
              — is offered as a one-time purchase of <span className="font-medium">₹99</span>. This
              payment grants you personal access to the course content.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mb-2">2. No Refunds</h2>
            <p>
              Please note that{" "}
              <span className="font-semibold text-red-600">
                all payments are final and non-refundable
              </span>
              . Since this is a digital product with instant access, we cannot provide refunds under
              any circumstances.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mb-2">3. Access to Course</h2>
            <p>
              Upon successful payment, you will immediately receive access to the course materials.
              This access is personal and non-transferable. Sharing or distributing the course
              content is strictly prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mb-2">4. Questions & Support</h2>
            <p>
              If you have any issues accessing the course or need support, please contact us at{" "}
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
          <p>
            By purchasing this course, you acknowledge and agree that you have read and understood
            our Refund Policy.
          </p>
          <Link href="/" className="mt-6 inline-block text-primary hover:underline">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
