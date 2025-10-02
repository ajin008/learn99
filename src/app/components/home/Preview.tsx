"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const previews = [
  {
    id: "resume",
    icon: "📄",
    title: "Resume Templates",
    subtitle: "Professional & ATS-Friendly",
    features: ["10+ Templates", "AI Suggestions", "One-Click Export"],
    color: "from-primary/10 to-primary/5",
    accentColor: "text-primary",
  },
  {
    id: "interview",
    icon: "🎤",
    title: "Mock Interviews",
    subtitle: "HR + Technical Practice",
    features: ["Real Questions", "AI Feedback", "Voice Practice"],
    color: "from-accent/10 to-accent/5",
    accentColor: "text-accent",
  },
  {
    id: "aptitude",
    icon: "🧠",
    title: "Aptitude Tests",
    subtitle: "With Step-by-Step Solutions",
    features: ["500+ Questions", "Video Explanations", "Time Tracking"],
    color: "from-success/30 to-success/10",
    accentColor: "text-success",
  },
];

export default function Preview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-16 sm:py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-x-1/2" />
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl translate-x-1/2" />

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
            Sneak Peek
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary">
            See What's Inside
          </h2>
          <p className="mt-4 text-primary/70 max-w-2xl mx-auto text-base sm:text-lg">
            Explore the tools that will transform your placement preparation
          </p>
        </motion.div>

        {/* Preview Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-3 mb-12"
        >
          {previews.map((preview, index) => (
            <motion.div
              key={preview.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.15, duration: 0.6 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              onClick={() => setActiveTab(index)}
              className={`
                relative bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl 
                transition-all duration-300 cursor-pointer border-2
                ${activeTab === index ? "border-primary" : "border-transparent"}
              `}
            >
              {/* Gradient background */}
              <div
                className={`
                absolute inset-0 bg-gradient-to-br ${preview.color} 
                rounded-2xl transition-opacity duration-300
                ${activeTab === index ? "opacity-100" : "opacity-50"}
              `}
              />

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="text-5xl sm:text-6xl mb-4"
                >
                  {preview.icon}
                </motion.div>

                {/* Title */}
                <h3 className={`font-bold text-xl sm:text-2xl mb-2 ${preview.accentColor}`}>
                  {preview.title}
                </h3>

                {/* Subtitle */}
                <p className="text-primary/60 text-sm mb-4">{preview.subtitle}</p>

                {/* Features */}
                <ul className="space-y-2">
                  {preview.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.5 + index * 0.1 + idx * 0.1 }}
                      className="flex items-center text-sm text-primary/70"
                    >
                      <span className="mr-2 text-success">✓</span>
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                {/* View button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`
                    mt-6 w-full py-3 rounded-lg font-semibold transition-all
                    ${
                      activeTab === index
                        ? "bg-primary text-white shadow-lg"
                        : "bg-primary/10 text-primary hover:bg-primary/20"
                    }
                  `}
                >
                  Preview
                </motion.button>
              </div>

              {/* Active indicator */}
              {activeTab === index && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute -top-2 -right-2 bg-primary text-white w-8 h-8 rounded-full 
                    flex items-center justify-center text-sm font-bold shadow-lg"
                >
                  ✓
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Interactive Demo Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden"
        >
          {/* Tab Navigation */}
          <div className="flex border-b border-primary/10">
            {previews.map((preview, index) => (
              <button
                key={preview.id}
                onClick={() => setActiveTab(index)}
                className={`
                  flex-1 px-4 py-4 sm:py-6 font-semibold text-sm sm:text-base
                  transition-all relative
                  ${activeTab === index ? "text-primary" : "text-primary/50 hover:text-primary/70"}
                `}
              >
                <span className="inline sm:hidden">{preview.icon}</span>
                <span className="hidden sm:inline">
                  {preview.icon} {preview.title}
                </span>

                {activeTab === index && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-primary"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="p-8 sm:p-12 min-h-[300px] sm:min-h-[400px]">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="text-6xl sm:text-8xl mb-6">{previews[activeTab].icon}</div>
              <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
                {previews[activeTab].title}
              </h3>
              <p className="text-primary/70 mb-8 max-w-2xl mx-auto text-sm sm:text-base">
                {previews[activeTab].subtitle}
              </p>

              {/* Feature showcase */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
                {previews[activeTab].features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-background rounded-xl p-4 shadow-md"
                  >
                    <div className="text-2xl mb-2">✨</div>
                    <div className="text-sm font-semibold text-primary">{feature}</div>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 bg-primary text-white px-8 py-4 rounded-lg font-semibold 
                  shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-2"
              >
                Try This Feature
                <span className="text-xl">→</span>
              </motion.button>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="text-center mt-8 text-sm text-primary/60"
        >
          <p>✨ And many more features included in the complete package</p>
        </motion.div>
      </div>
    </section>
  );
}
