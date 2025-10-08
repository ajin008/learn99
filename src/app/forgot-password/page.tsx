"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Mail, Search, Copy, Check, Eye, EyeOff, AlertCircle } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";
import { retrieveAcc } from "@/utils/auth";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [retrievedPassword, setRetrievedPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const success = await retrieveAcc(email);

      if (success && success.password) {
        setRetrievedPassword(success.password);
        setIsSubmitted(true);
        toast.success("Password retrieved successfully!");
      } else {
        const errorMessage = success?.error || "No account found with this email address";
        setError(errorMessage);
        toast.error(errorMessage);
      }
    } catch (error) {
      console.log(error);
      const errorMessage = "Failed to retrieve password. Please try again.";
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopyPassword = async () => {
    try {
      await navigator.clipboard.writeText(retrievedPassword);
      setCopied(true);
      toast.success("Password copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.log(err);
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = retrievedPassword;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      toast.success("Password copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleReset = () => {
    setEmail("");
    setRetrievedPassword("");
    setIsSubmitted(false);
    setShowPassword(false);
    setCopied(false);
    setError("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30 py-6 sm:py-8 px-4 sm:px-6 lg:px-8">
      {/* Back Button */}
      <div className="max-w-md mx-auto mb-6 sm:mb-8">
        <Link
          href="/login"
          className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors group"
        >
          <motion.div whileHover={{ x: -2 }} transition={{ duration: 0.2 }}>
            <ArrowLeft className="h-4 w-4" />
          </motion.div>
          Back to Login
        </Link>
      </div>

      {/* Main Card */}
      <div className="max-w-md mx-auto">
        {/* Header Section */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="mb-3 sm:mb-4 inline-flex items-center gap-1.5 rounded-full bg-success/30 px-3 py-1.5 text-xs font-medium text-green-900">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-600 opacity-75"></span>
              <span className="relative inline-flex h-full w-full rounded-full bg-green-600"></span>
            </span>
            Account Recovery
          </div>

          <h1 className="mb-2 sm:mb-3 text-xl sm:text-2xl font-bold leading-tight text-primary lg:text-3xl">
            Retrieve Your Password
          </h1>

          <p className="text-xs sm:text-sm text-gray-600 lg:text-base">
            Enter your email address to retrieve your password from our database.
          </p>
        </div>

        {/* Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-xl sm:rounded-2xl bg-white/60 backdrop-blur-sm p-4 sm:p-6 lg:p-8 shadow-sm ring-1 ring-black/5"
        >
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              {/* Email Input */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-primary">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your registered email"
                    className="block w-full pl-10 pr-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-white/80 backdrop-blur-sm border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 placeholder:text-gray-400 text-sm sm:text-base"
                  />
                </div>
                <p className="text-xs text-gray-500">
                  We'll search our database for your account password
                </p>
              </div>

              {/* Error Message */}
              {error && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="p-3 rounded-lg bg-red-50 border border-red-200"
                >
                  <div className="flex items-start gap-2">
                    <AlertCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <p className="text-xs sm:text-sm text-red-700">{error}</p>
                  </div>
                </motion.div>
              )}

              {/* Search Button */}
              <motion.button
                type="submit"
                disabled={isLoading || !email}
                whileHover={{ scale: isLoading || !email ? 1 : 1.02 }}
                whileTap={{ scale: isLoading || !email ? 1 : 0.98 }}
                className="w-full flex items-center justify-center gap-2 px-4 sm:px-6 py-3 rounded-lg sm:rounded-xl bg-gradient-to-br from-primary to-primary/80 text-white font-semibold shadow-sm hover:shadow-md transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-sm sm:text-base"
              >
                {isLoading ? (
                  <>
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    <span>Searching Database...</span>
                  </>
                ) : (
                  <>
                    <Search className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span>Retrieve Password</span>
                  </>
                )}
              </motion.button>
            </form>
          ) : (
            /* Success State with Password Display */
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-4 sm:space-y-6"
            >
              {/* Success Icon */}
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-green-100">
                  <div className="flex h-8 w-8 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-green-200">
                    <Check className="h-4 w-4 sm:h-6 sm:w-6 text-green-600" />
                  </div>
                </div>
              </div>

              {/* Success Message */}
              <div className="text-center space-y-2 sm:space-y-3">
                <h3 className="text-lg font-semibold text-primary">
                  Password Retrieved Successfully!
                </h3>
                <p className="text-xs sm:text-sm text-gray-600">
                  Here's your password for:
                  <br />
                  <span className="font-medium text-primary">{email}</span>
                </p>
              </div>

              {/* Password Display Box */}
              <div className="space-y-2 sm:space-y-3">
                <label className="text-sm font-medium text-primary">Your Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={retrievedPassword}
                    readOnly
                    className="w-full pl-3 pr-20 sm:pr-24 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-gray-50 border border-gray-200 font-mono text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center gap-1 pr-2">
                    {/* Toggle Visibility Button */}
                    <button
                      onClick={() => setShowPassword(!showPassword)}
                      className="p-1.5 sm:p-2 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      {showPassword ? (
                        <EyeOff className="h-3 w-3 sm:h-4 sm:w-4 text-gray-500" />
                      ) : (
                        <Eye className="h-3 w-3 sm:h-4 sm:w-4 text-gray-500" />
                      )}
                    </button>

                    {/* Copy Button */}
                    <button
                      onClick={handleCopyPassword}
                      className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg bg-primary text-white text-xs sm:text-sm font-medium hover:bg-primary/90 transition-colors"
                    >
                      {copied ? (
                        <Check className="h-3 w-3 sm:h-4 sm:w-4" />
                      ) : (
                        <Copy className="h-3 w-3 sm:h-4 sm:w-4" />
                      )}
                      {copied ? "Copied!" : "Copy"}
                    </button>
                  </div>
                </div>
                <p className="text-xs text-gray-500">
                  Copy this password and use it to login. For security reasons, please change your
                  password after logging in.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-2 sm:pt-4">
                <button
                  onClick={handleReset}
                  className="flex-1 py-2.5 sm:py-3 px-4 rounded-lg sm:rounded-xl bg-gray-100 text-gray-700 font-medium hover:bg-gray-200 transition-colors text-xs sm:text-sm"
                >
                  Search Another Email
                </button>
                <Link
                  href="/login"
                  className="flex-1 py-2.5 sm:py-3 px-4 rounded-lg sm:rounded-xl bg-primary text-white font-medium hover:bg-primary/90 transition-colors text-xs sm:text-sm text-center"
                >
                  Go to Login
                </Link>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Security Notice */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-4 sm:mt-6 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-amber-50 border border-amber-200"
        >
          <div className="flex items-start gap-2 sm:gap-3">
            <div className="flex h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 items-center justify-center rounded-full bg-amber-100">
              <span className="text-xs font-bold text-amber-600">!</span>
            </div>
            <div>
              <p className="text-xs sm:text-sm font-medium text-amber-800">Security Notice</p>
              <p className="text-xs text-amber-700 mt-0.5 sm:mt-1">
                For security best practices, we recommend changing your password after logging in.
                This feature is for account recovery purposes only.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Additional Help */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-4 sm:mt-6 text-center"
        >
          <p className="text-xs text-gray-500">
            Still having trouble?{" "}
            <a
              href="mailto:support@vibecoding.com"
              className="font-medium text-primary hover:text-primary/80 transition-colors"
            >
              Contact our support team
            </a>
          </p>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="max-w-md mx-auto mt-8 sm:mt-12 text-center">
        <p className="text-xs text-gray-400">
          © 2025 Vibe Coding for Non-Techies. All rights reserved.
        </p>
      </div>
    </div>
  );
}
