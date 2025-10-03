type ModulePageProps = {
  params: {
    id: string;
  };
};

export default function ModulePage({ params }: ModulePageProps) {
  const moduleId = parseInt(params.id);
  const modules = {
    1: "Kickstart with Vibe Coding",
    2: "Build Websites with Prompts",
    3: "Interactivity Made Simple",
    4: "Smart Projects with AI",
    5: "Think Like a Coder",
    6: "Final Project",
  };

  const moduleTitle = modules[moduleId as keyof typeof modules];

  if (!moduleTitle) return <h1>Module not found</h1>;

  return (
    <main className="min-h-screen bg-[#f7f8fc] p-6">
      <h1 className="text-2xl font-bold text-[#1a237e] mb-4">
        Module {moduleId}: {moduleTitle}
      </h1>
      <p className="text-gray-600">
        Content for <strong>{moduleTitle}</strong> goes here.
      </p>
    </main>
  );
}
