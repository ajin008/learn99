"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { createOrderAndPay } from "../../lib/payments/razorpay";
import { toast } from "sonner";
import { Loader } from "lucide-react";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
  });

  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      await createOrderAndPay({
        username: formData.username,
        email: formData.email,
        router,
      });
    } catch (error) {
      console.error("Payment failed:", error);
      toast.error("Payment could not be completed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-hidden relative">
      {/* Animated background gradient - Reduced opacity for mobile */}
      <motion.div
        className="absolute inset-0 opacity-20 sm:opacity-30"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, #1a237e 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, #bfa76f 0%, transparent 50%)",
            "radial-gradient(circle at 50% 80%, #c5e4ca 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, #1a237e 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Floating particles - Smaller on mobile */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-16 left-4 w-12 h-12 bg-accent/20 rounded-full blur-xl sm:top-20 sm:left-10 sm:w-20 sm:h-20 sm:blur-2xl"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-32 right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl sm:bottom-40 sm:right-10 sm:w-32 sm:h-32 sm:blur-2xl"
      />

      <div className="max-w-md w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-white/80 backdrop-blur-lg rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl p-6 sm:p-8 lg:p-10"
        >
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-center mb-6 sm:mb-8"
          >
            <span className="inline-block bg-accent/10 text-accent px-3 py-1.5 rounded-full text-xs font-semibold mb-3 sm:px-4 sm:py-2 sm:text-sm">
              🚀 Join 5,000+ Non-Techies Already Learning Vibe Coding
            </span>
            <h1 className="text-2xl font-bold text-primary mb-2 sm:text-3xl lg:text-4xl">
              Start Your <span className="text-accent">Vibe Coding Journey</span> Today
            </h1>
            <p className="text-primary/60 text-xs sm:text-sm lg:text-base">
              No coding required. Just prompts, creativity, and results — for only ₹99.
            </p>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            onSubmit={handleSubmit}
            className="space-y-4 sm:space-y-6"
          >
            {/* Name Field */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <label htmlFor="username" className="block text-sm font-semibold text-primary mb-2">
                Name (or Username)
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2.5 sm:px-4 sm:py-3 bg-white border-2 border-primary/20 rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-primary placeholder:text-primary/40 text-sm sm:text-base"
                  placeholder="Enter your name or username"
                />
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: formData.username ? 1 : 0 }}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-green-500 text-sm sm:text-base"
                >
                  ✓
                </motion.div>
              </div>
            </motion.div>

            {/* Email Field */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <label htmlFor="email" className="block text-sm font-semibold text-primary mb-2">
                Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2.5 sm:px-4 sm:py-3 bg-white border-2 border-primary/20 rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-primary placeholder:text-primary/40 text-sm sm:text-base"
                  placeholder="Enter your email"
                />
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: formData.email ? 1 : 0 }}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-green-500 text-sm sm:text-base"
                >
                  ✓
                </motion.div>
              </div>
            </motion.div>

            {/* Submit Button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <motion.button
                disabled={loading}
                type="submit"
                whileHover={{ scale: loading ? 1 : 1.02 }}
                whileTap={{ scale: loading ? 1 : 0.98 }}
                className={`w-full px-6 py-3.5 rounded-lg font-semibold shadow-lg transition-all text-sm sm:text-base relative overflow-hidden group ${
                  loading ? "bg-primary/60 cursor-not-allowed" : "bg-primary hover:shadow-xl"
                } text-white`}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {loading ? (
                    <>
                      <Loader className="h-4 w-4 sm:h-5 sm:w-5 animate-spin" />
                      <span>Processing...</span>
                    </>
                  ) : (
                    "Get Instant Access – ₹99"
                  )}
                </span>
                {!loading && (
                  <motion.div
                    className="absolute inset-0 bg-accent/20"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                  />
                )}
              </motion.button>
            </motion.div>

            {/* Features List */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="space-y-2 sm:space-y-3 pt-2"
            >
              <div className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-primary/70">
                <div className="w-4 h-4 mt-0.5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 sm:w-5 sm:h-5">
                  <span className="text-accent text-xs">✓</span>
                </div>
                <span>Learn coding concepts without writing code</span>
              </div>
              <div className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-primary/70">
                <div className="w-4 h-4 mt-0.5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 sm:w-5 sm:h-5">
                  <span className="text-accent text-xs">✓</span>
                </div>
                <span>Create websites & projects using AI prompts</span>
              </div>
              <div className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-primary/70">
                <div className="w-4 h-4 mt-0.5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 sm:w-5 sm:h-5">
                  <span className="text-accent text-xs">✓</span>
                </div>
                <span>Lifetime access for just ₹99</span>
              </div>
            </motion.div>
          </motion.form>
        </motion.div>

        {/* Additional info below form */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-4 sm:mt-6 text-center"
        >
          <p className="text-xs sm:text-sm text-primary/60">
            By joining, you agree to our{" "}
            <a href="#" className="text-accent hover:underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-accent hover:underline">
              Privacy Policy
            </a>
            . No spam, ever.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
