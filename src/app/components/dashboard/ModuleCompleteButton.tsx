"use client";

import React, { useEffect, useState } from "react";
import { checkIsCompleted, markCompleted } from "@/utils/DashboardUtils";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Loader } from "lucide-react";

interface ModuleCompleteButtonProps {
  moduleId: string;
  email: string;
}

export const ModuleCompleteButton: React.FC<ModuleCompleteButtonProps> = ({ moduleId, email }) => {
  const [completed, setCompleted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const isCompleted = async () => {
      const success = await checkIsCompleted({ moduleId, email });
      if (success) setCompleted(true);
      setIsChecking(false);
    };
    isCompleted();
  }, [moduleId, email]);

  const handleComplete = async () => {
    setLoading(true);
    const success = await markCompleted({ moduleId, email });
    setLoading(false);

    if (success) setCompleted(true);
  };

  if (isChecking) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="flex items-center justify-center px-6 py-3 rounded-xl bg-gray-100/60 backdrop-blur-sm ring-1 ring-black/5"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Loader className="h-4 w-4 text-gray-400" />
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.button
      onClick={handleComplete}
      disabled={completed || loading}
      whileHover={{
        scale: completed || loading ? 1 : 1.02,
        y: completed || loading ? 0 : -1,
        transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] },
      }}
      whileTap={{
        scale: completed || loading ? 1 : 0.98,
        transition: { duration: 0.15, ease: "easeIn" },
      }}
      className={`
        relative flex items-center justify-center gap-3 px-6 py-3 rounded-xl font-medium
        backdrop-blur-sm ring-1 ring-black/5 overflow-hidden
        ${
          completed
            ? "bg-[#bfa76f] text-white shadow-lg shadow-[#bfa76f]/25 cursor-default"
            : loading
              ? "bg-blue-500/90 text-white cursor-wait"
              : "bg-gradient-to-br from-blue-500 to-blue-600 text-white hover:shadow-md hover:shadow-blue-500/25"
        }
        disabled:cursor-not-allowed
      `}
    >
      {/* Background transition effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary to-primary/85 text-white"
        initial={false}
        animate={{
          opacity: completed ? 0 : loading ? 0.9 : 1,
        }}
        transition={{ duration: 0.5 }}
      />

      <motion.div
        className="absolute inset-0 bg-[#bfa76f]"
        initial={false}
        animate={{ opacity: completed ? 1 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />

      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loading"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative flex items-center gap-3 z-10"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Loader className="h-5 w-5" />
            </motion.div>
            <span>Saving Progress...</span>
          </motion.div>
        ) : completed ? (
          <motion.div
            key="completed"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
              duration: 0.5,
            }}
            className="relative flex items-center gap-3 z-10"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 15,
                delay: 0.1,
              }}
            >
              <Check className="h-5 w-5" />
            </motion.div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              Module Completed
            </motion.span>
          </motion.div>
        ) : (
          <motion.div
            key="default"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="relative flex items-center gap-3 z-10"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
              className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20"
            >
              <Check className="h-3 w-3 text-white" />
            </motion.div>
            <span>Mark as Completed</span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
};
