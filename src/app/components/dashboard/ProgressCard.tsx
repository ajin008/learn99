"use client";

import { motion, Variants } from "framer-motion";
import { CheckCircle, PlayCircle, Trophy, Star } from "lucide-react";

interface ProgressCardProps {
  completedModules?: number;
  totalModules?: number;
}

export const ProgressCard = ({ completedModules = 3, totalModules = 6 }: ProgressCardProps) => {
  const progress = Math.round((completedModules / totalModules) * 100);
  const isCompleted = progress === 100;

  // ✅ Properly typed progress animation variants
  const progressVariants: Variants = {
    initial: { width: 0 },
    animate: {
      width: `${progress}%`,
      transition: {
        duration: 1.2,
        ease: "easeOut",
        delay: 0.3,
      },
    },
  };

  // Floating stars animation
  const starVariants: Variants = {
    animate: {
      y: [0, -10, 0],
      opacity: [0.7, 1, 0.7],
      scale: [1, 1.1, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white/80 backdrop-blur-lg rounded-2xl p-4 sm:p-6 shadow-sm ring-1 ring-black/5 mb-10"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4 sm:mb-6">
        <div className="flex-1">
          <h2 className="text-lg sm:text-xl font-bold text-primary mb-1">Course Progress</h2>
          <p className="text-gray-600 text-xs sm:text-sm">Vibe Coding for Non-Techies</p>
        </div>

        {/* Percentage */}
        <motion.div
          className="text-right flex-shrink-0"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <motion.div
            key={progress}
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            className="text-2xl sm:text-3xl font-bold text-primary mb-1"
          >
            {progress}%
          </motion.div>
          <div className="text-xs text-gray-500">
            {completedModules}/{totalModules} modules
          </div>
        </motion.div>
      </div>

      {/* Progress Bar */}
      <div className="mb-4 sm:mb-6">
        <div className="flex justify-between items-center mb-2 sm:mb-3">
          <span className="text-sm font-medium text-primary">Your journey</span>
          <span className="text-xs sm:text-sm text-gray-500">
            {completedModules} of {totalModules} completed
          </span>
        </div>

        {/* ✅ Fixed main progress bar */}
        <div className="w-full bg-gray-100 rounded-full h-2.5 sm:h-3 overflow-hidden">
          <motion.div
            variants={progressVariants}
            initial="initial"
            animate="animate"
            className="h-full rounded-full bg-gradient-to-r from-primary to-accent relative"
          >
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatDelay: 2,
                ease: "easeInOut",
              }}
              className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            />
          </motion.div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 sm:gap-4">
        {/* Completed */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center p-3 rounded-xl bg-green-50 border border-green-200"
        >
          <CheckCircle className="mx-auto mb-2 h-5 w-5 text-green-600" />
          <div className="text-lg font-bold text-green-600">{completedModules}</div>
          <div className="text-xs text-gray-600">Done</div>
        </motion.div>

        {/* In Progress */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center p-3 rounded-xl bg-blue-50 border border-blue-200"
        >
          <PlayCircle className="mx-auto mb-2 h-5 w-5 text-blue-600" />
          <div className="text-lg font-bold text-blue-600">
            {completedModules < totalModules ? 1 : 0}
          </div>
          <div className="text-xs text-gray-600">Current</div>
        </motion.div>

        {/* Total */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center p-3 rounded-xl bg-gradient-to-br from-accent/10 to-amber-50 border border-accent/20"
        >
          <Trophy className="mx-auto mb-2 h-5 w-5 text-accent" />
          <div className="text-lg font-bold text-accent">{totalModules}</div>
          <div className="text-xs text-gray-600">Total</div>
        </motion.div>
      </div>

      {/* Completion Celebration */}
      {isCompleted && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="mt-4 p-4 bg-gradient-to-r from-accent to-amber-500 rounded-xl text-center text-white relative overflow-hidden"
        >
          <motion.div variants={starVariants} animate="animate" className="absolute top-2 left-4">
            <Star className="h-3 w-3 text-yellow-200" fill="currentColor" />
          </motion.div>
          <motion.div
            variants={starVariants}
            animate="animate"
            transition={{ delay: 0.5 }}
            className="absolute top-4 right-4"
          >
            <Star className="h-2 w-2 text-yellow-200" fill="currentColor" />
          </motion.div>
          <motion.div
            variants={starVariants}
            animate="animate"
            transition={{ delay: 1 }}
            className="absolute bottom-3 left-6"
          >
            <Star className="h-2.5 w-2.5 text-yellow-200" fill="currentColor" />
          </motion.div>

          <div className="flex items-center justify-center gap-2 relative z-10">
            <Trophy className="h-5 w-5" />
            <span className="text-sm font-semibold">Course Mastered! 🎉</span>
          </div>
          <p className="text-xs text-amber-100 mt-1">You've completed all modules! Amazing work!</p>
        </motion.div>
      )}

      {/* Encouragement */}
      {!isCompleted && progress > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-3 text-center"
        >
          <p className="text-xs text-gray-500">
            {progress < 50 && "Keep going! You're making great progress! 💪"}
            {progress >= 50 && progress < 100 && "You're more than halfway there! 🚀"}
          </p>
        </motion.div>
      )}
    </motion.div>
  );
};
