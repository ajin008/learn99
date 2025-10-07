"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Loader, Mail, Lock, Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { verifyLogin } from "@/utils/loginUtils";

export default function LoginPage() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await verifyLogin(formData);

      if (!res) {
        toast.error("Login failed");
      } else {
        toast.success("Login successful 🎉");
        router.push("/dashboard");
      }
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-hidden relative bg-gradient-to-br from-background via-background to-primary/5">
      {/* Background Decoration - Reduced blur for mobile */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-accent/10 blur-2xl sm:blur-3xl sm:-right-40 sm:-top-40 sm:h-80 sm:w-80" />
        <div className="absolute -left-20 top-1/2 h-72 w-72 rounded-full bg-primary/5 blur-2xl sm:blur-3xl sm:-left-40 sm:h-96 sm:w-96" />
        <div className="absolute right-10 bottom-10 h-48 w-48 rounded-full bg-success/20 blur-2xl sm:blur-3xl sm:right-20 sm:bottom-20 sm:h-64 sm:w-64" />
      </div>

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
          className="bg-white/80 backdrop-blur-lg rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl ring-1 ring-black/5 overflow-hidden"
        >
          {/* Header with gradient accent */}
          <div className="relative h-1.5 sm:h-2 bg-gradient-to-r from-primary via-accent to-primary">
            <div className="absolute inset-0 animate-pulse bg-white/30" />
          </div>

          <div className="p-6 sm:p-8 lg:p-10">
            {/* Logo/Icon - Smaller on mobile */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="mx-auto mb-4 sm:mb-6 flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary to-primary/80 shadow-lg"
            >
              <svg
                className="h-6 w-6 sm:h-8 sm:w-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </motion.div>

            {/* Header Text - Adjusted for mobile */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-center mb-6 sm:mb-8"
            >
              <h1 className="text-2xl font-bold text-primary mb-2 sm:text-3xl lg:text-4xl">
                Welcome Back!
              </h1>
              <p className="text-gray-600 text-xs sm:text-sm lg:text-base">
                Continue your coding journey with us
              </p>
            </motion.div>

            {/* Form */}
            <motion.form
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              onSubmit={handleSubmit}
              className="space-y-4 sm:space-y-5"
            >
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
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-10 py-3 bg-white border-2 border-gray-200 rounded-lg sm:rounded-xl focus:border-primary focus:outline-none focus:ring-2 sm:focus:ring-4 focus:ring-primary/10 transition-all text-primary placeholder:text-gray-400 text-sm sm:text-base"
                    placeholder="Enter your email"
                  />
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: formData.email ? 1 : 0 }}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500"
                  >
                    <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </motion.div>
                </div>
              </motion.div>

              {/* Password Field */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <label htmlFor="password" className="block text-sm font-semibold text-primary">
                    Password
                  </label>
                  <Link
                    href="/forgot-password"
                    className="text-xs text-accent hover:text-primary transition-colors font-medium"
                  >
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    <Lock className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-10 py-3 bg-white border-2 border-gray-200 rounded-lg sm:rounded-xl focus:border-primary focus:outline-none focus:ring-2 sm:focus:ring-4 focus:ring-primary/10 transition-all text-primary placeholder:text-gray-400 text-sm sm:text-base"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary transition-colors p-1"
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 sm:h-5 sm:w-5" />
                    ) : (
                      <Eye className="h-4 w-4 sm:h-5 sm:w-5" />
                    )}
                  </button>
                </div>
              </motion.div>

              {/* Remember Me */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="flex items-center"
              >
                <input
                  type="checkbox"
                  id="remember"
                  className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-2 focus:ring-primary/20"
                />
                <label htmlFor="remember" className="ml-2 text-xs sm:text-sm text-gray-600">
                  Remember me for 30 days
                </label>
              </motion.div>

              {/* Submit Button */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <motion.button
                  disabled={loading}
                  type="submit"
                  whileHover={{ scale: loading ? 1 : 1.02 }}
                  whileTap={{ scale: loading ? 1 : 0.98 }}
                  className={`w-full px-6 py-3.5 rounded-lg sm:rounded-xl font-semibold shadow-lg transition-all text-sm sm:text-base relative overflow-hidden group ${
                    loading
                      ? "bg-primary/60 cursor-not-allowed"
                      : "bg-gradient-to-r from-primary to-primary/90 hover:shadow-xl"
                  } text-white`}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {loading ? (
                      <>
                        <Loader className="h-4 w-4 sm:h-5 sm:w-5 animate-spin" />
                        <span>Signing in...</span>
                      </>
                    ) : (
                      <>
                        Sign In
                        <svg
                          className="h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                          />
                        </svg>
                      </>
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
            </motion.form>

            {/* Divider */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="relative my-6 sm:my-8"
            >
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-xs sm:text-sm">
                <span className="px-3 bg-white text-gray-500">New to Vibe Coding?</span>
              </div>
            </motion.div>

            {/* Sign Up Link */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="text-center"
            >
              <Link
                href="/signup"
                className="inline-flex items-center justify-center w-full px-4 py-3 rounded-lg sm:rounded-xl border-2 border-primary/20 bg-white text-primary font-semibold hover:bg-primary/5 hover:border-primary/40 transition-all text-sm sm:text-base"
              >
                Create New Account
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Additional info below form */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          className="mt-4 sm:mt-6 text-center"
        >
          <p className="text-xs sm:text-sm text-gray-600">
            Protected by industry-standard encryption 🔒
          </p>
        </motion.div>
      </div>
    </section>
  );
}
