"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-gray-200/50 bg-white/40 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Simple centered layout */}
        <div className="py-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/60 backdrop-blur-sm ring-1 ring-black/5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary/80">
                <span className="text-sm font-bold text-white">L</span>
              </div>
              <span className="text-lg font-bold text-primary">Learn@99</span>
            </div>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="flex justify-center items-center gap-6 mb-6"
          >
            <Link
              href="/about"
              className="text-sm text-gray-600 hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-sm text-gray-600 hover:text-primary transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/privacy"
              className="text-sm text-gray-600 hover:text-primary transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-gray-600 hover:text-primary transition-colors"
            >
              Terms
            </Link>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <p className="text-xs text-gray-500">
              © {currentYear} Vibe Coding. Crafted for non-techies.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};
