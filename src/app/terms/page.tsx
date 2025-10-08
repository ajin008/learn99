"use client";

import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/20 py-12 px-6">
      <div className="max-w-3xl mx-auto bg-white/70 backdrop-blur-sm shadow-md rounded-2xl p-8">
        {/* Header */}
        <h1 className="text-3xl font-bold text-primary mb-4">Terms & Conditions</h1>
        <p className="text-gray-600 mb-8">
          Welcome to <span className="font-semibold">Vibe Coding for Non-Techies</span>. By
          accessing or purchasing our mini-course, you agree to the following terms.
        </p>

        {/* Sections */}
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-primary mb-2">1. Course Overview</h2>
            <p>
              This mini-course —{" "}
              <span className="font-medium">
                "Vibe Coding for Non-Techies — Learn to Build Apps & Automations with Just Prompts"
              </span>{" "}
              — is designed for individuals who want to quickly learn how to build apps and
              automations without traditional coding knowledge. The focus is on solving the pain
              point:{" "}
              <em>
                "I don’t know how to code, but I want to build something / save time / automate my
                work."
              </em>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mb-2">2. Pricing</h2>
            <p>
              The course is offered as a <span className="font-medium">₹99 Mini-Course</span>. This
              is a one-time payment that grants you access to the learning materials.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mb-2">3. No Refund Policy</h2>
            <p>
              Please note that all purchases are final. Since this is a digital product,
              <span className="font-medium text-red-600"> we do not provide refunds</span>. Make
              sure you have read the course details before making a purchase.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mb-2">4. Access & Usage</h2>
            <p>
              Once enrolled, you are granted personal, non-transferable access to the course
              materials. Sharing or distributing the content is strictly prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mb-2">5. Disclaimer</h2>
            <p>
              This course is for educational purposes only. Results may vary depending on your level
              of practice and implementation. We are not liable for any direct or indirect damages
              resulting from the use of this course.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mb-2">6. Contact</h2>
            <p>
              For questions or support, contact us at{" "}
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
            By purchasing this course, you acknowledge that you have read, understood, and agree to
            these Terms & Conditions.
          </p>
          <Link href="/" className="mt-6 inline-block text-primary hover:underline">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
