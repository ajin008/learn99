"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface ModuleCardProps {
  id: number;
  title: string;
  completed: boolean;
  description: string;
  duration: string;
  icon: string;
}

export default function ModuleCard({
  id,
  title,
  completed,
  description,
  duration,
  icon,
}: ModuleCardProps) {
  return (
    <Link href={completed ? `/dashboard/modules/${id}` : "#"}>
      <motion.div
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        className={`
          bg-white rounded-2xl p-5 border-2 transition-all duration-200
          ${
            completed
              ? "border-success/20 hover:border-success/40 cursor-pointer shadow-sm hover:shadow-md"
              : "border-primary/5 opacity-60 cursor-not-allowed"
          }
        `}
      >
        <div className="flex items-start gap-4">
          {/* Icon */}
          <div
            className={`
            w-12 h-12 rounded-xl flex items-center justify-center text-lg flex-shrink-0
            ${completed ? "bg-success/20 text-success" : "bg-primary/10 text-primary/60"}
          `}
          >
            {icon}
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2 mb-2">
              <h3 className="font-semibold text-primary text-base leading-tight">{title}</h3>
              {completed ? (
                <div className="flex items-center gap-1 bg-success/10 text-success px-2 py-1 rounded-full text-xs font-medium flex-shrink-0">
                  <span>✓</span>
                  <span>Done</span>
                </div>
              ) : (
                <div className="flex items-center gap-1 bg-primary/5 text-primary/60 px-2 py-1 rounded-full text-xs font-medium flex-shrink-0">
                  <span>🔒</span>
                  <span>Locked</span>
                </div>
              )}
            </div>

            <p className="text-primary/60 text-sm mb-3 line-clamp-2">{description}</p>

            <div className="flex items-center justify-between">
              <span className="text-xs text-primary/40 font-medium">{duration}</span>
              {completed && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-primary/40 text-sm font-medium hover:text-accent transition-colors"
                >
                  Review →
                </motion.div>
              )}
            </div>
          </div>
        </div>

        {/* Progress indicator for completed modules */}
        {completed && (
          <div className="mt-4 pt-4 border-t border-success/10">
            <div className="flex items-center gap-2 text-xs text-success">
              <div className="w-2 h-2 bg-success rounded-full"></div>
              <span>Completed and ready to review</span>
            </div>
          </div>
        )}
      </motion.div>
    </Link>
  );
}
