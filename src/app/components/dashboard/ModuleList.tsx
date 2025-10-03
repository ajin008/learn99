"use client";

import ModuleCard from "./ModuleCard";
import { motion } from "framer-motion";

const modules = [
  {
    id: 1,
    title: "Kickstart with Vibe Coding",
    completed: true,
    description: "Learn the basics of prompt-based development",
    duration: "15 min",
    icon: "🚀",
  },
  {
    id: 2,
    title: "Build Websites with Prompts",
    completed: true,
    description: "Create your first website using AI prompts",
    duration: "25 min",
    icon: "🌐",
  },
  {
    id: 3,
    title: "Interactivity Made Simple",
    completed: false,
    description: "Add interactive elements without code",
    duration: "20 min",
    icon: "✨",
  },
  {
    id: 4,
    title: "Smart Projects with AI",
    completed: false,
    description: "Build advanced projects with AI assistance",
    duration: "30 min",
    icon: "🤖",
  },
  {
    id: 5,
    title: "Think Like a Coder",
    completed: false,
    description: "Develop problem-solving mindset",
    duration: "18 min",
    icon: "💡",
  },
  {
    id: 6,
    title: "Final Project",
    completed: false,
    description: "Build your portfolio project",
    duration: "45 min",
    icon: "🎓",
  },
];

export default function ModuleList() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-primary">Course Modules</h2>
        <span className="text-sm text-primary/60 bg-primary/5 px-3 py-1 rounded-full">
          {modules.filter((m) => m.completed).length}/{modules.length} completed
        </span>
      </div>

      <div className="grid gap-4">
        {modules.map((module, index) => (
          <motion.div
            key={module.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <ModuleCard {...module} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
