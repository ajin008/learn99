import { LessonContent } from "@/app/components/dashboard/LessonContent";
import { ModuleCompleteButton } from "@/app/components/dashboard/ModuleCompleteButton";
import { requireAuth } from "@/lib/auth/serverAuth";
import { module1Lessons, module2Lessons } from "@/lib/lessons";
import { vibeModules } from "@/lib/modules";
import { ArrowLeft, Clock, BookOpen, AlertCircle } from "lucide-react";
import Link from "next/link";

type SlugParams = { slug: string };
type Lesson = (typeof module1Lessons)[number];

export default async function Page({ params }: { params: Promise<SlugParams> }) {
  const { slug } = await params;
  const email = await requireAuth();

  const module = vibeModules.find((m) => m.slug === slug);

  let lessons: Lesson[] = [];
  if (module?.id === "module-1") lessons = module1Lessons;
  if (module?.id === "module-2") lessons = module2Lessons;

  if (!module) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 p-4 sm:p-6 lg:p-8">
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
          <div className="absolute -left-40 top-1/2 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        </div>

        <div className="mx-auto max-w-2xl">
          <div className="overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-black/5">
            <div className="relative h-2 bg-gradient-to-r from-red-500 via-orange-500 to-red-500">
              <div className="absolute inset-0 animate-pulse bg-white/30" />
            </div>
            <div className="p-8 text-center sm:p-12">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
                <AlertCircle className="h-8 w-8 text-red-600" />
              </div>
              <h1 className="mb-3 text-2xl font-bold text-gray-900 sm:text-3xl">
                Module Not Found
              </h1>
              <p className="mb-8 text-gray-600">
                The requested module doesn't exist or has been removed.
              </p>
              <Link
                href="/dashboard"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-primary/90 px-6 py-3 font-semibold text-white shadow-md transition-all hover:shadow-lg"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Dashboard
              </Link>
            </div>
          </div>
        </div>
      </main>
    );
  }

  const Icon = module.icon;

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 p-4 sm:p-6 lg:p-8">
      {/* Background Decoration */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute -left-40 top-1/2 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-4xl">
        {/* Back Button */}
        <Link
          href="/dashboard"
          className="mb-6 inline-flex items-center gap-2 rounded-xl bg-white/60 px-4 py-2.5 text-sm font-medium text-primary backdrop-blur-sm ring-1 ring-black/5 transition-all hover:bg-white hover:shadow-md"
        >
          <ArrowLeft className="h-4 w-4" />
          <span className="hidden sm:inline">Back to Dashboard</span>
          <span className="sm:hidden">Back</span>
        </Link>

        {/* Module Header */}
        <div className="mb-8 overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-black/5">
          {/* Gradient Header Bar */}
          <div className="relative h-2 bg-gradient-to-r from-primary via-accent to-primary">
            <div className="absolute inset-0 animate-pulse bg-white/30" />
          </div>

          <div className="p-6 sm:p-8 lg:p-10">
            <div className="flex items-start gap-4 sm:gap-6">
              {/* Module Icon */}
              <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 sm:h-20 sm:w-20">
                {Icon ? (
                  <Icon className="h-7 w-7 text-primary sm:h-10 sm:w-10" />
                ) : (
                  <BookOpen className="h-7 w-7 text-primary sm:h-10 sm:w-10" />
                )}
              </div>

              {/* Module Info */}
              <div className="flex-1 min-w-0">
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    {module.id}
                  </span>
                  {module.duration && (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-amber-900">
                      <Clock className="h-3 w-3" />
                      {module.duration}
                    </span>
                  )}
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-success/30 px-3 py-1 text-xs font-semibold text-green-900">
                    {lessons.length} Lesson{lessons.length !== 1 ? "s" : ""}
                  </span>
                </div>
                <h1 className="mb-3 text-2xl font-bold text-primary sm:text-3xl lg:text-4xl">
                  {module.title}
                </h1>
                <p className="text-sm text-gray-600 sm:text-base lg:text-lg">
                  {module.description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Lessons Section */}
        <div className="mb-8 space-y-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
              <BookOpen className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-primary sm:text-2xl">Lessons & Content</h2>
              <p className="text-sm text-gray-600">Complete all lessons to finish this module</p>
            </div>
          </div>

          {lessons.length > 0 ? (
            lessons.map((lesson) => (
              <LessonContent
                key={lesson.id}
                id={lesson.id}
                title={lesson.question}
                answer={lesson.answer}
              />
            ))
          ) : (
            <div className="rounded-2xl bg-white/60 p-8 text-center backdrop-blur-sm ring-1 ring-black/5">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
                <BookOpen className="h-6 w-6 text-gray-400" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">No Lessons Available</h3>
              <p className="text-sm text-gray-600">Lessons for this module are coming soon.</p>
            </div>
          )}
        </div>

        {/* Complete Button Section */}
        {lessons.length > 0 && (
          <div className=" bottom-6 z-10">
            <ModuleCompleteButton moduleId={module.id} email={email} />
          </div>
        )}
      </div>
    </main>
  );
}
