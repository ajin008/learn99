"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  ChevronRight,
  Check,
  Lock,
  Play,
  BookOpen,
  Sparkles,
  Code,
  Rocket,
  Zap,
  Briefcase,
  Wrench,
  RotateCcw,
} from "lucide-react";

interface Lesson {
  id: string;
  title: string;
  completed: boolean;
}

interface Module {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  lessons: Lesson[];
  completed: boolean;
  locked: boolean;
  duration: string;
}

const modules: Module[] = [
  {
    id: 1,
    title: "Introduction to Vibe Coding",
    description: "Learn the fundamentals of AI-powered development",
    icon: <Sparkles className="h-5 w-5" />,
    duration: "30 mins",
    completed: true,
    locked: false,
    lessons: [
      { id: "1-1", title: "What is vibe coding?", completed: true },
      {
        id: "1-2",
        title: "How AI tools like ChatGPT, Claude, Replit, Bubble, and Supabase help you build",
        completed: true,
      },
      { id: "1-3", title: "Mindset: Don't learn code, learn how to talk to AI", completed: true },
    ],
  },
  {
    id: 2,
    title: "Mastering Prompts for Coding",
    description: "Write effective prompts to generate clean code",
    icon: <Code className="h-5 w-5" />,
    duration: "45 mins",
    completed: true,
    locked: false,
    lessons: [
      { id: "2-1", title: "How to write coding prompts for AI", completed: true },
      {
        id: "2-2",
        title: "Prompt patterns (Explain → Generate → Fix → Deploy)",
        completed: true,
      },
      {
        id: "2-3",
        title: 'Example: "Build me a landing page with HTML/CSS" prompt',
        completed: true,
      },
    ],
  },
  {
    id: 3,
    title: "Build Your First Project",
    description: "Create and deploy a real website in minutes",
    icon: <Rocket className="h-5 w-5" />,
    duration: "60 mins",
    completed: false,
    locked: false,
    lessons: [
      {
        id: "3-1",
        title: "Create a personal portfolio website in 15 mins using AI prompts",
        completed: false,
      },
      { id: "3-2", title: "Deploy free on Vercel", completed: false },
      { id: "3-3", title: "Share your link instantly", completed: false },
    ],
  },
  {
    id: 4,
    title: "Automations for Daily Life",
    description: "Automate repetitive tasks with AI",
    icon: <Zap className="h-5 w-5" />,
    duration: "50 mins",
    completed: false,
    locked: true,
    lessons: [
      {
        id: "4-1",
        title: "Use prompts + tools like Make.com / Zapier to automate tasks",
        completed: false,
      },
      {
        id: "4-2",
        title: "Example: AI writes and emails you a daily summary from a Google Sheet",
        completed: false,
      },
    ],
  },
  {
    id: 5,
    title: "Quick Business Projects",
    description: "Build practical tools for entrepreneurs",
    icon: <Briefcase className="h-5 w-5" />,
    duration: "75 mins",
    completed: false,
    locked: true,
    lessons: [
      { id: "5-1", title: "Build a mini expense tracker", completed: false },
      { id: "5-2", title: "Create an AI chatbot for FAQs", completed: false },
      { id: "5-3", title: "Generate graphics with AI + Canva", completed: false },
    ],
  },
  {
    id: 6,
    title: "The Vibe Coding Toolkit",
    description: "50+ ready-to-use prompts and resources",
    icon: <Wrench className="h-5 w-5" />,
    duration: "40 mins",
    completed: false,
    locked: true,
    lessons: [
      { id: "6-1", title: "Website generation prompts", completed: false },
      { id: "6-2", title: "Simple app prompts", completed: false },
      { id: "6-3", title: "Automation prompts", completed: false },
      { id: "6-4", title: "Debugging prompts", completed: false },
    ],
  },
];

export const ModuleList = () => {
  const [expandedModule, setExpandedModule] = useState<number | null>(null);

  const toggleModule = (moduleId: number) => {
    setExpandedModule(expandedModule === moduleId ? null : moduleId);
  };

  const handleModuleAction = (module: Module) => {
    if (module.completed) {
      // Handle re-learn action
      console.log(`Re-learning module: ${module.title}`);
    } else {
      // Handle start/continue action
      console.log(`Starting module: ${module.title}`);
    }
  };

  const completedCount = modules.filter((m) => m.completed).length;

  return (
    <div className="space-y-6 mb-10">
      {/* Progress Overview */}
      <div className="rounded-2xl bg-white/60 p-4 backdrop-blur-sm ring-1 ring-black/5 sm:p-6">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10">
            <BookOpen className="h-6 w-6 text-primary" />
          </div>
          <div className="flex-1">
            <p className="text-sm text-gray-600">Course Progress</p>
            <p className="text-lg font-semibold text-primary">
              {completedCount} of {modules.length} modules completed
            </p>
          </div>
          <div className="hidden text-right sm:block">
            <p className="text-sm text-gray-600">Total Time</p>
            <p className="text-lg font-semibold text-primary">5+ hours</p>
          </div>
        </div>
      </div>

      {/* Modules List */}
      <div className="space-y-4">
        {modules.map((module, index) => {
          const isExpanded = expandedModule === module.id;
          const isActive = !module.completed && !module.locked;
          const completedLessons = module.lessons.filter((l) => l.completed).length;

          return (
            <motion.div
              key={module.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5 transition-all duration-300 ${
                !module.locked ? "hover:shadow-md hover:-translate-y-0.5" : "opacity-60"
              }`}
            >
              {/* Module Header */}
              <button
                onClick={() => !module.locked && toggleModule(module.id)}
                disabled={module.locked}
                className="w-full"
              >
                <div className="flex items-center gap-4 p-5 sm:p-6">
                  {/* Icon */}
                  <div
                    className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl sm:h-14 sm:w-14 ${
                      module.completed
                        ? "bg-success text-green-900"
                        : isActive
                          ? "bg-accent/20 text-amber-900"
                          : "bg-gray-100 text-gray-400"
                    }`}
                  >
                    {module.completed ? (
                      <Check className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={3} />
                    ) : module.locked ? (
                      <Lock className="h-5 w-5 sm:h-6 sm:w-6" />
                    ) : (
                      module.icon
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-left">
                    <div className="mb-1 flex items-center gap-2">
                      <span className="text-xs font-semibold text-gray-500">
                        Module {module.id}
                      </span>
                      <span className="text-xs text-gray-400">•</span>
                      <span className="text-xs text-gray-500">{module.duration}</span>
                      {!module.locked && (
                        <>
                          <span className="text-xs text-gray-400">•</span>
                          <span className="text-xs text-primary font-medium">
                            {completedLessons}/{module.lessons.length} lessons
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
                    {module.completed ? (
                      <span className="hidden items-center gap-1.5 rounded-full bg-success px-3 py-1.5 text-xs font-semibold text-green-900 sm:inline-flex">
                        <Check className="h-3.5 w-3.5" />
                        Completed
                      </span>
                    ) : isActive ? (
                      <span className="hidden items-center gap-1.5 rounded-full bg-gradient-to-r from-accent/20 to-primary/20 px-3 py-1.5 text-xs font-semibold text-primary sm:inline-flex">
                        <span className="relative flex h-2 w-2">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                          <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
                        </span>
                        In Progress
                      </span>
                    ) : (
                      <span className="hidden items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-semibold text-gray-500 sm:inline-flex">
                        <Lock className="h-3.5 w-3.5" />
                        Locked
                      </span>
                    )}

                    {/* Expand Icon */}
                    {!module.locked && (
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="h-5 w-5 text-gray-400" />
                      </motion.div>
                    )}
                  </div>
                </div>
              </button>

              {/* Lessons List */}
              <AnimatePresence>
                {isExpanded && !module.locked && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden border-t border-gray-100 bg-gray-50"
                  >
                    <div className="p-5 sm:p-6">
                      <h4 className="mb-4 flex items-center gap-2 text-sm font-semibold text-primary">
                        <BookOpen className="h-4 w-4" />
                        Lessons ({module.lessons.length})
                      </h4>
                      <div className="space-y-2">
                        {module.lessons.map((lesson, lessonIndex) => (
                          <motion.div
                            key={lesson.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: lessonIndex * 0.05 }}
                            className="flex items-start gap-3 rounded-xl bg-white p-3 transition-colors hover:bg-gray-50"
                          >
                            {/* Lesson Status Icon */}
                            <div
                              className={`mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-lg ${
                                lesson.completed
                                  ? "bg-success text-green-900"
                                  : "bg-gray-100 text-gray-400"
                              }`}
                            >
                              {lesson.completed ? (
                                <Check className="h-3.5 w-3.5" strokeWidth={3} />
                              ) : (
                                <Play className="h-3.5 w-3.5" />
                              )}
                            </div>

                            {/* Lesson Title */}
                            <div className="flex-1">
                              <p
                                className={`text-sm ${
                                  lesson.completed
                                    ? "text-gray-700 line-through"
                                    : "font-medium text-gray-900"
                                }`}
                              >
                                {lesson.title}
                              </p>
                            </div>
                          </motion.div>
                        ))}
                      </div>

                      {/* Module Action Button */}
                      <button
                        onClick={() => handleModuleAction(module)}
                        className={`mt-4 flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-white shadow-md transition-all hover:shadow-lg ${
                          module.completed
                            ? "bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800"
                            : "bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary"
                        }`}
                      >
                        {module.completed ? (
                          <>
                            <RotateCcw className="h-4 w-4" />
                            Re-learn Module
                          </>
                        ) : (
                          <>
                            <Play className="h-4 w-4" />
                            {completedLessons > 0 ? "Continue Module" : "Start Module"}
                          </>
                        )}
                      </button>
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
