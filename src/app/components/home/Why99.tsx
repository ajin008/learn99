"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const benefits = [
  {
    icon: "💰",
    label: "One-Time Payment",
    desc: "No subscriptions",
  },
  {
    icon: "♾️",
    label: "Lifetime Access",
    desc: "Use it forever",
  },
  {
    icon: "🇮🇳",
    label: "Made for India",
    desc: "Local job market",
  },
  {
    icon: "⚡",
    label: "Instant Access",
    desc: "Start immediately",
  },
];

export default function Why99() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Why Just ₹99?
          </h2>
        </motion.div>

        {/* Price Comparison Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-2xl" />

            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12">
              {/* Original Price */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-center"
              >
                <div className="text-white/60 text-sm sm:text-base font-semibold mb-2">
                  Original Value
                </div>
                <div className="relative inline-block">
                  <div className="text-4xl sm:text-5xl font-bold text-white/40 line-through">
                    ₹4,999
                  </div>
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : {}}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="absolute top-1/2 left-0 right-0 h-1 bg-red-400 origin-left"
                  />
                </div>
              </motion.div>

              {/* Arrow */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6, duration: 0.4 }}
                className="text-3xl sm:text-4xl text-accent hidden sm:block"
              >
                →
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6, duration: 0.4 }}
                className="text-3xl text-accent block sm:hidden"
              >
                ↓
              </motion.div>

              {/* Special Price */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-center"
              >
                <div className="text-accent text-sm sm:text-base font-semibold mb-2">
                  Special Launch Price
                </div>
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white"
                >
                  ₹99
                </motion.div>
                <div className="mt-2 inline-block bg-success/30 text-success px-4 py-1 rounded-full text-sm font-semibold">
                  98% OFF
                </div>
              </motion.div>
            </div>

            {/* Limited time badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="text-center mt-8"
            >
              <span className="inline-block bg-accent text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                🔥 Limited Time Offer
              </span>
            </motion.div>
          </div>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="bg-background rounded-2xl p-4 sm:p-6 text-center shadow-md hover:shadow-xl transition-all"
            >
              <div className="text-3xl sm:text-4xl mb-2">{benefit.icon}</div>
              <div className="font-bold text-primary text-sm sm:text-base mb-1">
                {benefit.label}
              </div>
              <div className="text-xs sm:text-sm text-primary/60">{benefit.desc}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-base sm:text-lg text-primary/70 leading-relaxed">
            We believe every Indian student deserves access to quality placement preparation without
            breaking the bank. That's why we're offering our complete AI-powered toolkit at an
            unbeatable price.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 1, duration: 0.5 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-primary text-white px-8 py-4 rounded-lg font-semibold 
                shadow-lg hover:shadow-xl transition-all inline-flex items-center justify-center gap-2"
            >
              Claim Your Spot for ₹99
              <span className="text-xl">🚀</span>
            </motion.button>

            <div className="text-sm text-primary/60">
              <span className="font-semibold text-accent">2,847</span> students joined today
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
