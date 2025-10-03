"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { easeOut } from "framer-motion";
import { useRouter } from "next/navigation";

const features = [
  {
    title: "AI Website Builder 🌐",
    desc: "Make your first personal website in 10 minutes — just by prompting AI.",
    icon: "🌐",
    gradient: "from-primary/10 to-accent/10",
  },
  {
    title: "No-Code App Projects 📱",
    desc: "Turn ideas into working apps like to-do lists, portfolio sites, or expense trackers.",
    icon: "📱",
    gradient: "from-accent/10 to-success/30",
  },
  {
    title: "Everyday Automations ⚡",
    desc: "Learn to connect tools (Google Sheets, Email, Notion) with AI for time-saving hacks.",
    icon: "⚡",
    gradient: "from-success/30 to-primary/10",
  },
  {
    title: "50+ Ready Prompts 🎁",
    desc: "Copy-paste prompts for websites, apps, automations, and debugging. Just vibe and build.",
    icon: "🎁",
    gradient: "from-accent/10 to-primary/10",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOut,
    },
  },
};

export default function ValueProps() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const router = useRouter();

  const handleSignUp = () => {
    router.push("/signup");
  };

  return (
    <section className="py-16 sm:py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

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
            👉 What You'll Build With Vibe Coding
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary">
            Create Without Code
          </h2>
          <p className="mt-4 text-primary/70 max-w-2xl mx-auto text-base sm:text-lg">
            AI + Prompts = Your ideas turned into real apps & automations — no coding required.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 },
              }}
              className="group relative"
            >
              <div
                className={`
                relative bg-white rounded-2xl p-6 sm:p-8 
                shadow-lg hover:shadow-2xl transition-all duration-300
                border border-primary/5 overflow-hidden
              `}
              >
                {/* Gradient background */}
                <div
                  className={`
                  absolute inset-0 bg-gradient-to-br ${feature.gradient} 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300
                `}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="text-5xl sm:text-6xl mb-4 inline-block"
                  >
                    {feature.icon}
                  </motion.div>

                  {/* Title */}
                  <h3 className="font-bold text-lg sm:text-xl text-primary mb-2 group-hover:text-accent transition-colors">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-primary/70 text-sm sm:text-base leading-relaxed">
                    {feature.desc}
                  </p>
                </div>

                {/* Hover effect corner accent */}
                <div
                  className="
                  absolute top-0 right-0 w-20 h-20 bg-accent/10 rounded-bl-full
                  scale-0 group-hover:scale-100 transition-transform duration-300
                "
                />
              </div>

              {/* Number indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="absolute -top-3 -right-3 w-8 h-8 bg-primary text-white rounded-full 
                  flex items-center justify-center text-sm font-bold shadow-lg z-20"
              >
                {index + 1}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-12 sm:mt-16"
          onClick={handleSignUp}
        >
          <p className="text-primary/70 mb-6 text-sm sm:text-base">
            Learn Vibe Coding for Just <span className="text-accent font-bold text-xl">₹99</span> —
            Lifetime Access, Beginner Friendly
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-white px-8 py-4 rounded-lg font-semibold 
              shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-2"
          >
            Start Vibe Coding
            <span className="text-xl">→</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
