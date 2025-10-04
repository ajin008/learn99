"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Copy, Check, ArrowRight, Key, Sparkles } from "lucide-react";
import { useState } from "react";

export default function GeneratePasswordPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [copied, setCopied] = useState(false);

  const password = searchParams.get("pass") || "N/A";

  const copyToClipboard = async () => {
    if (password) {
      await navigator.clipboard.writeText(password);
      setCopied(true);
      toast.success("Password copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-12 overflow-hidden relative bg-gradient-to-br from-background via-background to-primary/5">
      {/* Background Decoration */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute -left-40 top-1/2 h-96 w-96 rounded-full bg-success/20 blur-3xl" />
        <div className="absolute right-20 bottom-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
      </div>

      {/* Animated Confetti Particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full"
          style={{
            background: ["#1a237e", "#bfa76f", "#c5e4ca"][i % 3],
            left: `${20 + i * 10}%`,
            top: "20%",
          }}
          animate={{
            y: [0, -100, 500],
            x: [0, Math.random() * 100 - 50],
            opacity: [0, 1, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.2,
            ease: "easeOut",
          }}
        />
      ))}

      <div className="max-w-lg w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl ring-1 ring-black/5 overflow-hidden"
        >
          {/* Success Header Gradient */}
          <div className="relative h-2 bg-gradient-to-r from-green-500 via-success to-accent">
            <motion.div
              className="absolute inset-0 bg-white/30"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
          </div>

          <div className="p-8 sm:p-10">
            {/* Success Icon */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-success to-green-500 shadow-lg"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Check className="h-10 w-10 text-white" strokeWidth={3} />
              </motion.div>
            </motion.div>

            {/* Header Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-center mb-8"
            >
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-success/30 px-4 py-1.5 text-xs font-medium text-green-900">
                <Sparkles className="h-3.5 w-3.5" />
                Payment Successful
              </div>
              <h1 className="text-3xl font-bold text-primary mb-3 sm:text-4xl">
                Welcome to Vibe Coding! 🎉
              </h1>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Your account has been created successfully. We've generated a secure password for
                you. Save it in a safe place!
              </p>
            </motion.div>

            {/* Password Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mb-8"
            >
              <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-primary">
                <Key className="h-4 w-4" />
                Your Secure Password
              </div>
              <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 p-[2px]">
                <div className="relative rounded-2xl bg-white p-5">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex-1 overflow-hidden">
                      <code className="block font-mono text-lg font-bold text-primary break-all sm:text-xl">
                        {password}
                      </code>
                    </div>
                    <motion.button
                      onClick={copyToClipboard}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm transition-all shadow-sm ${
                        copied
                          ? "bg-success text-green-900"
                          : "bg-primary text-white hover:bg-primary/90"
                      }`}
                    >
                      {copied ? (
                        <>
                          <Check className="h-4 w-4" />
                          <span className="hidden sm:inline">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-4 w-4" />
                          <span className="hidden sm:inline">Copy</span>
                        </>
                      )}
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Login Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <motion.button
                onClick={() => router.push("/login")}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group w-full px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-primary/90 text-white font-semibold shadow-lg hover:shadow-xl transition-all text-base sm:text-lg relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Continue to Login
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-accent/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
              </motion.button>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="mt-6 text-center"
            >
              <p className="text-xs text-gray-500">
                Need help?{" "}
                <a
                  href="/support"
                  className="text-accent hover:text-primary transition-colors font-medium"
                >
                  Contact Support
                </a>
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="mt-6 text-center"
        >
          <p className="text-sm text-gray-600">
            🚀 Ready to start your coding journey? Let's begin!
          </p>
        </motion.div>
      </div>
    </section>
  );
}
