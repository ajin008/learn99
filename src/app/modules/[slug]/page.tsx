import { LessonContent } from "@/app/components/dashboard/LessonContent";
import { ModuleCompleteButton } from "@/app/components/dashboard/ModuleCompleteButton";
import { requireAuth } from "@/lib/auth/serverAuth";

import { module1Lessons, module2Lessons } from "@/lib/lessons";
import { vibeModules } from "@/lib/modules";
import React from "react";

type SlugParams = { slug: string };
type Lesson = (typeof module1Lessons)[number];

export default async function Page({ params }: { params: Promise<SlugParams> }) {
  const { slug } = await params;
  const email = await requireAuth();

  // ❌ previously: params.slug
  const module = vibeModules.find((m) => m.slug === slug);

  let lessons: Lesson[] = [];
  if (module?.id === "module-1") lessons = module1Lessons;
  if (module?.id === "module-2") lessons = module2Lessons;

  if (!module) return <>module not found</>;

  return (
    <main className="p-6">
      <h1>{module.title}</h1>
      <p>{module.description}</p>

      {lessons.map((lesson) => (
        <LessonContent
          key={lesson.id}
          id={lesson.id}
          title={lesson.question}
          answer={lesson.answer}
        />
      ))}

      <div className="mt-6">
        <ModuleCompleteButton moduleId={module.id} email={email} />
      </div>
    </main>
  );
}
