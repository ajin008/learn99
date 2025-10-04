// src/app/generate-password/page.tsx
"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { toast } from "sonner";

export default function GeneratePasswordPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const password = searchParams.get("pass") || "N/A";

  const copyToClipboard = async () => {
    if (password) {
      await navigator.clipboard.writeText(password);
      toast.info("Password copied to clipboard!");
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-12 bg-[#f7f8fc]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full text-center"
      >
        <h1 className="text-3xl font-bold text-[#1a237e] mb-4">🎉 Payment Successful!</h1>
        <p className="text-gray-600 mb-6">
          Welcome to <span className="font-semibold text-[#bfa76f]">Vibe Coding</span>. Your account
          has been created. Use this password to log in securely.
        </p>

        {/* Password */}
        <div className="bg-gray-100 rounded-lg p-4 mb-6 flex items-center justify-between">
          <span className="font-mono text-gray-800">{password}</span>
          <button
            onClick={copyToClipboard}
            className="ml-2 px-3 py-1 text-sm bg-[#1a237e] text-white rounded hover:bg-[#0f1659] transition"
          >
            Copy
          </button>
        </div>

        <button
          onClick={() => router.push("/login")}
          className="w-full px-4 py-3 bg-[#1a237e] text-white font-semibold rounded-lg hover:bg-[#0f1659] transition"
        >
          Continue to Dashboard →
        </button>
      </motion.div>
    </section>
  );
}
