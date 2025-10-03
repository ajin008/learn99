"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const steps = [
  {
    num: "1",
    icon: "💳",
    title: "Pay ₹99",
    text: "One-time payment, lifetime access",
    color: "from-primary to-primary/80",
  },
  {
    num: "2",
    icon: "⚡",
    title: "Get Instant Access",
    text: "Start learning vibe coding today with ready-to-use prompts",
    color: "from-accent to-accent/80",
  },
  {
    num: "3",
    icon: "🚀",
    title: "Build Without Coding",
    text: "Create websites, apps, and automations — even if you've never coded before",
    color: "from-success/70 to-success/50",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const router = useRouter();

  const handleSignUp = () => {
    router.push("/signup");
  };

  return (
    <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4"
          >
            👉 How Vibe Coding Works
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary">
            Simple 3-Step Process
          </h2>
          <p className="mt-4 text-primary/70 max-w-2xl mx-auto text-base sm:text-lg">
            Get started in minutes with our simple 3-step process
          </p>
        </motion.div>

        {/* Steps - Desktop View */}
        <div className="hidden md:block relative">
          {/* Connecting line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
            className="absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-success/70 origin-left"
            style={{ width: "calc(100% - 120px)", marginLeft: "60px" }}
          />

          <div className="flex justify-between items-start max-w-5xl mx-auto relative">
            {steps.map((step, index) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.2, duration: 0.6 }}
                className="flex-1 flex flex-col items-center relative"
              >
                {/* Number circle with icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{
                    delay: 0.5 + index * 0.2,
                    duration: 0.5,
                    type: "spring",
                    stiffness: 200,
                  }}
                  whileHover={{ scale: 1.1 }}
                  className={`
                    relative w-28 h-28 rounded-full bg-gradient-to-br ${step.color}
                    shadow-2xl flex flex-col items-center justify-center text-white
                    mb-6 z-10
                  `}
                >
                  <div className="text-3xl mb-1">{step.icon}</div>
                  <div className="text-sm font-bold opacity-80">Step {step.num}</div>

                  {/* Pulse effect */}
                  <motion.div
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                    className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.color}`}
                  />
                </motion.div>

                {/* Content card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.7 + index * 0.2, duration: 0.6 }}
                  whileHover={{ y: -5 }}
                  className="bg-background rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all text-center"
                >
                  <h3 className="font-bold text-xl text-primary mb-2">{step.title}</h3>
                  <p className="text-primary/70 text-sm leading-relaxed">{step.text}</p>
                </motion.div>

                {/* Arrow for non-last items */}
                {index < steps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.8 + index * 0.2, duration: 0.5 }}
                    className="absolute top-12 -right-12 text-4xl text-accent hidden lg:block"
                  >
                    →
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Steps - Mobile View */}
        <div className="md:hidden space-y-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.2, duration: 0.6 }}
              className="relative"
            >
              <div className="flex items-start gap-4">
                {/* Number circle */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{
                    delay: 0.5 + index * 0.2,
                    duration: 0.5,
                    type: "spring",
                  }}
                  className={`
                    flex-shrink-0 w-20 h-20 rounded-full bg-gradient-to-br ${step.color}
                    shadow-xl flex flex-col items-center justify-center text-white
                  `}
                >
                  <div className="text-2xl mb-1">{step.icon}</div>
                  <div className="text-xs font-bold opacity-80">{step.num}</div>
                </motion.div>

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.2, duration: 0.6 }}
                  className="flex-1 bg-background rounded-xl p-4 shadow-lg"
                >
                  <h3 className="font-bold text-lg text-primary mb-1">{step.title}</h3>
                  <p className="text-primary/70 text-sm">{step.text}</p>
                </motion.div>
              </div>

              {/* Connecting line for mobile */}
              {index < steps.length - 1 && (
                <motion.div
                  initial={{ scaleY: 0 }}
                  animate={isInView ? { scaleY: 1 } : {}}
                  transition={{ delay: 0.7 + index * 0.2, duration: 0.5 }}
                  className="absolute left-10 top-20 w-0.5 h-6 bg-gradient-to-b from-primary to-accent origin-top"
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="text-center mt-12 sm:mt-16"
        >
          <motion.button
            onClick={handleSignUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-primary to-primary/90 text-white px-10 py-5 
              rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all 
              inline-flex items-center gap-3"
          >
            <span>Start Vibe Coding Today for Just ₹99</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-2xl"
            >
              →
            </motion.span>
          </motion.button>

          <p className="mt-4 text-sm text-primary/60">
            Join <span className="font-bold text-accent">10,000+</span> beginners already building
            with AI
          </p>
        </motion.div>
      </div>
    </section>
  );
}
