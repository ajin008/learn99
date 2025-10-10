"use client";

import { vibeModules } from "@/lib/modules";
import Link from "next/link";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Check, Lock, Play, BookOpen, Clock, RotateCcw } from "lucide-react";
import { useModuleProgress } from "@/app/hooks/useModuleProgress";

export const ModuleList = ({ email }: { email: string }) => {
  const [openModule, setOpenModule] = useState<string | null>(null);

  // ✅ Centralized progress (from Supabase)
  const { completedIds, completed, total } = useModuleProgress(email);

  const toggleModule = (id: string) => {
    setOpenModule(openModule === id ? null : id);
  };

  return (
    <div className="space-y-6 mb-10">
      {/* Course Progress Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="rounded-2xl bg-white/60 p-4 backdrop-blur-sm ring-1 ring-black/5 sm:p-6"
      >
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10">
            <BookOpen className="h-6 w-6 text-primary" />
          </div>
          <div className="flex-1">
            <p className="text-sm text-gray-600">Course Progress</p>
            <p className="text-lg font-semibold text-primary">
              {completed} of {total} modules completed
            </p>
          </div>
        </div>
      </motion.div>

      {/* Section Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-primary sm:text-3xl">Learning Modules</h2>
        <p className="mt-2 text-sm text-gray-600">
          Expand each module to see lessons and start learning
        </p>
      </div>

      {/* Modules List */}
      <div className="space-y-4">
        {vibeModules.map((module, index) => {
          const Icon = module.icon;
          const isOpen = openModule === module.id;
          const isCompleted = completedIds.includes(module.id);
          const isLocked = false; // 🔒 Add logic if you want to lock modules

          return (
            <motion.div
              key={module.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5 transition-all duration-300 ${
                !isLocked ? "hover:shadow-md hover:-translate-y-0.5" : "opacity-60"
              }`}
            >
              {/* Module Header */}
              <button
                onClick={() => !isLocked && toggleModule(module.id)}
                disabled={isLocked}
                className="w-full"
              >
                <div className="flex items-center gap-4 p-5 sm:p-6">
                  {/* Icon */}
                  <div
                    className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl sm:h-14 sm:w-14 ${
                      isCompleted
                        ? "bg-success text-green-900"
                        : isLocked
                          ? "bg-gray-100 text-gray-400"
                          : "bg-accent/20 text-amber-900"
                    }`}
                  >
                    {isCompleted ? (
                      <Check className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={3} />
                    ) : isLocked ? (
                      <Lock className="h-5 w-5 sm:h-6 sm:w-6" />
                    ) : Icon ? (
                      <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
                    ) : (
                      <BookOpen className="h-6 w-6 sm:h-7 sm:w-7" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-left">
                    <div className="mb-1 flex items-center gap-2">
                      <span className="text-xs font-semibold text-gray-500">{module.id}</span>
                      {module.duration && (
                        <>
                          <span className="text-xs text-gray-400">•</span>
                          <span className="flex items-center gap-1 text-xs text-gray-500">
                            <Clock className="h-3 w-3" />
                            {module.duration}
                          </span>
                        </>
                      )}
                    </div>
                    <h3 className="mb-1 text-base font-bold text-gray-900 sm:text-lg">
                      {module.title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-1">{module.description}</p>
                  </div>

                  {/* Status & Expand Icon */}
                  <div className="flex flex-shrink-0 items-center gap-3">
                    {/* Status Badge */}
                    {isCompleted ? (
                      <span className="hidden items-center gap-1.5 rounded-full bg-success px-3 py-1.5 text-xs font-semibold text-green-900 sm:inline-flex">
                        <Check className="h-3.5 w-3.5" />
                        Done
                      </span>
                    ) : isLocked ? (
                      <span className="hidden items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-semibold text-gray-500 sm:inline-flex">
                        <Lock className="h-3.5 w-3.5" />
                        Locked
                      </span>
                    ) : (
                      <span className="hidden items-center gap-1.5 rounded-full bg-gradient-to-r from-accent/20 to-primary/20 px-3 py-1.5 text-xs font-semibold text-primary sm:inline-flex">
                        Active
                      </span>
                    )}

                    {/* Expand Icon */}
                    {!isLocked && (
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="h-5 w-5 text-gray-400" />
                      </motion.div>
                    )}
                  </div>
                </div>
              </button>

              {/* Lessons Dropdown */}
              <AnimatePresence>
                {isOpen && !isLocked && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden border-t border-gray-100 bg-gray-50"
                  >
                    <div className="p-5 sm:p-6">
                      {/* Subtopics Header */}
                      <h4 className="mb-4 flex items-center gap-2 text-sm font-semibold text-primary">
                        <BookOpen className="h-4 w-4" />
                        Topics ({module.subtopics?.length || 0})
                      </h4>

                      {/* Subtopics List */}
                      {module.subtopics && module.subtopics.length > 0 && (
                        <div className="mb-5 space-y-2">
                          {module.subtopics.map((topic, topicIndex) => (
                            <motion.div
                              key={topic.id}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: topicIndex * 0.05 }}
                              className="flex items-start gap-3 rounded-xl bg-white p-3 transition-colors hover:bg-gray-50"
                            >
                              {/* Topic Bullet */}
                              <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                                <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                              </div>

                              {/* Topic Title */}
                              <p className="flex-1 text-sm text-gray-700">{topic.title}</p>
                            </motion.div>
                          ))}
                        </div>
                      )}

                      {/* Action Button */}
                      <Link
                        href={`/modules/${module.slug}`}
                        className={`flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold shadow-md transition-all hover:shadow-lg ${
                          isCompleted
                            ? "bg-gradient-to-r from-green-600 to-green-500 text-white"
                            : "bg-gradient-to-r from-primary to-primary/90 text-white"
                        }`}
                      >
                        {isCompleted ? (
                          <>
                            <RotateCcw className="h-4 w-4" />
                            Review Module
                          </>
                        ) : (
                          <>
                            <Play className="h-4 w-4" />
                            Start Module
                          </>
                        )}
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
