"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function FinalCTA() {
  const router = useRouter();

  const handleSignUp = () => {
    router.push("/signup");
  };

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Animated background gradient matching hero */}
      <motion.div
        className="absolute inset-0 opacity-30"
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

      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-primary/90" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
            🚀 No Experience Needed
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight"
        >
          Start Vibe Coding Today — <span className="text-accent">No Experience Needed</span> 🚀
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-6 text-base sm:text-lg text-white/80 max-w-2xl mx-auto"
        >
          Learn to build websites, apps, and automations with just prompts. No coding, no stress —
          all for just ₹99.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
        >
          <motion.button
            onClick={handleSignUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-accent text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-shadow text-lg"
          >
            Get Instant Access – ₹99
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all"
          >
            View Free Demo
          </motion.button>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-6 sm:gap-8 mt-12 text-white/70"
        >
          <div className="flex items-center gap-2">
            <span className="text-2xl">✅</span>
            <span className="text-sm font-medium">Instant Access</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">♾️</span>
            <span className="text-sm font-medium">Lifetime Updates</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">🔒</span>
            <span className="text-sm font-medium">Beginner-Friendly & Risk-Free</span>
          </div>
        </motion.div>

        {/* Footer with Terms & Contact */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 pt-8 border-t border-white/20"
        >
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 text-white/60 text-xs sm:text-sm">
            <a href="/terms" className="hover:text-white transition-colors">
              Terms & Conditions
            </a>
            <span className="hidden sm:block">•</span>
            <a href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <span className="hidden sm:block">•</span>
            <a href="/refund" className="hover:text-white transition-colors">
              Refund Policy
            </a>
            <span className="hidden sm:block">•</span>
            <a href="mailto:support@vibecoding.com" className="hover:text-white transition-colors">
              Contact: support@vibecoding.com
            </a>
          </div>
          <p className="mt-4 text-white/40 text-xs">© 2024 Vibe Coding. All rights reserved.</p>
        </motion.div>

        {/* Glowing accent effect */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/20 rounded-full blur-3xl pointer-events-none"
        />
      </div>
    </section>
  );
}
