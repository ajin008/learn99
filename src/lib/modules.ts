//cspell:disable
import { BookOpen, Code, Rocket, Zap, Briefcase, Wrench } from "lucide-react";

export const vibeModules = [
  {
    id: "module-1",
    slug: "introduction-to-vibe-coding",
    title: "Introduction to Vibe Coding",
    description:
      "Understand the core idea of building with AI tools without learning traditional coding.",
    duration: "30 Min",
    icon: BookOpen,
    subtopics: [
      { id: "1-1", title: "What is vibe coding?" },
      {
        id: "1-2",
        title:
          "How AI tools like ChatGPT, Claude, Replit, Bubble, and Supabase help you build without coding.",
      },
      { id: "1-3", title: "Mindset: Don’t learn code, learn how to talk to AI." },
    ],
  },
  {
    id: "module-2",
    slug: "mastering-prompts-for-coding",
    title: "Mastering Prompts for Coding",
    description: "Learn how to write effective prompts to get high-quality code from AI.",
    duration: "45 Min",
    icon: Code,
    subtopics: [
      { id: "2-1", title: "How to write coding prompts for AI." },
      { id: "2-2", title: "Prompt patterns (Explain → Generate → Fix → Deploy)." },
      { id: "2-3", title: "Example: 'Build me a landing page with HTML/CSS' prompt." },
    ],
  },
  {
    id: "module-3",
    slug: "build-your-first-project",
    title: "Build Your First Project",
    description: "Hands-on project to create and deploy your first AI-powered website.",
    duration: "1 hr",
    icon: Rocket,
    subtopics: [
      {
        id: "3-1",
        title: "Walkthrough: Create a personal portfolio website in 15 mins using AI prompts.",
      },
      { id: "3-2", title: "Deploy free on Vercel." },
      { id: "3-3", title: "Share your link instantly." },
    ],
  },
  {
    id: "module-4",
    slug: "automations-for-daily-life",
    title: "Automations for Daily Life",
    description: "Save time by automating repetitive tasks using AI and workflow tools.",
    icon: Zap,
    subtopics: [
      {
        id: "4-1",
        title: "Use prompts + tools like Make.com / Zapier to automate repetitive tasks.",
      },
      {
        id: "4-2",
        title: "Example: AI writes and emails you a daily summary from a Google Sheet.",
      },
    ],
  },
  {
    id: "module-5",
    slug: "quick-business-projects",
    title: "Quick Business Projects",
    description: "Create practical mini-projects for business and personal use.",
    duration: "15 Min",
    icon: Briefcase,
    subtopics: [
      { id: "5-1", title: "Build a mini expense tracker." },
      { id: "5-2", title: "Create an AI chatbot for FAQs." },
      { id: "5-3", title: "Generate graphics with AI + Canva." },
    ],
  },
  {
    id: "module-6",
    slug: "the-vibe-coding-toolkit",
    title: "The Vibe Coding Toolkit",
    description: "Access a collection of ready-to-use prompts to supercharge your productivity.",
    icon: Wrench,
    subtopics: [
      { id: "6-1", title: "50+ ready-to-use prompts for Website generation" },
      { id: "6-2", title: "50+ ready-to-use prompts for Simple apps" },
      { id: "6-3", title: "50+ ready-to-use prompts for Automations" },
      { id: "6-4", title: "50+ ready-to-use prompts for Debugging" },
    ],
  },
];
