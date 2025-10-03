"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();
  const handleSignUp = () => {
    router.push("/signup");
  };
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-8 sm:py-12 overflow-hidden relative">
      {/* Animated background gradient */}
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

      {/* Floating particles for visual interest */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full blur-2xl"
      />
      <motion.div
        animate={{
          y: [0, 30, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-40 right-10 w-32 h-32 bg-primary/20 rounded-full blur-2xl"
      />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Mobile-First Layout: Image First on Mobile */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-4 md:gap-8 items-center">
          {/* Mobile: Image appears FIRST (top) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex justify-center items-center w-full md:order-2 -mt-4 md:mt-0"
          >
            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative w-full max-w-[280px] sm:max-w-sm md:max-w-md"
            >
              {/* Glowing background circle */}
              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-accent/30 rounded-full blur-3xl"
              />

              {/* Avatar Image */}
              <div className="relative z-10">
                <Image
                  src="/3d_3.png"
                  alt="AI Career Assistant"
                  width={500}
                  height={500}
                  className="w-full h-auto drop-shadow-2xl"
                  priority
                />
              </div>

              {/* Floating badges - responsive positioning */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-4 -left-2 sm:top-10 sm:-left-4 bg-white rounded-lg shadow-xl px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold z-20"
              >
                🎯 Interview Ready
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="absolute bottom-12 -right-2 sm:bottom-20 sm:-right-4 bg-white rounded-lg shadow-xl px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold z-20"
              >
                ✨ AI Powered
              </motion.div>

              {/* Price tag badge - eye-catching */}
              <motion.div
                initial={{ scale: 0, rotate: -45 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                className="absolute -top-2 -right-2 sm:top-0 sm:right-0 bg-accent text-white rounded-full shadow-2xl px-4 py-2 sm:px-5 sm:py-3 text-sm sm:text-base font-bold z-20 border-4 border-white"
              >
                ₹99 Only!
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-center md:text-left space-y-4 sm:space-y-6 md:order-1"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <span className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-xs sm:text-sm font-semibold">
                🚀 AI-Powered Career Toolkit
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            >
              Land Your{" "}
              <span className="text-accent relative">
                Dream Job
                <motion.span
                  className="absolute -bottom-1 left-0 right-0 h-1 bg-accent/30"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                />
              </span>{" "}
              with AI
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-sm sm:text-base md:text-lg text-primary/70 max-w-md mx-auto md:mx-0"
            >
              Crack interviews, ace aptitude tests, and get your resume shortlisted with our
              AI-powered toolkit.{" "}
              <span className="text-accent font-semibold">All for just ₹99.</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4"
            >
              <motion.button
                onClick={handleSignUp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-shadow text-sm sm:text-base"
              >
                Get Started for ₹99 →
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-primary text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all text-sm sm:text-base"
              >
                Explore Features
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator - Hidden on mobile for space */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="hidden sm:block absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-3 bg-primary/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
