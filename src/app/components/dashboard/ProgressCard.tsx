"use client";

import { motion } from "framer-motion";

interface ProgressCardProps {
  progress: number;
}

export default function ProgressCard({ progress }: ProgressCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-primary/5 p-6 mb-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-primary">Your Learning Journey</h2>
        <span className="text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
          {progress}% Complete
        </span>
      </div>

      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between text-sm text-primary/60 mb-2">
          <span>Course Progress</span>
          <span>{progress}%</span>
        </div>
        <div className="w-full bg-primary/10 rounded-full h-2.5">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="bg-gradient-to-r from-primary to-accent h-2.5 rounded-full shadow-sm"
          />
        </div>
      </div>

      {/* CTA Button */}
      <button
        className="w-full bg-primary text-white px-6 py-3.5 rounded-xl font-semibold 
                        hover:bg-primary/90 active:scale-95 transition-all duration-200 
                        shadow-md hover:shadow-lg flex items-center justify-center gap-2 group"
      >
        Continue Learning
        <span className="group-hover:translate-x-1 transition-transform">→</span>
      </button>
    </div>
  );
}
