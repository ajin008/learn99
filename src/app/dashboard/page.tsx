import ProgressCard from "../components/dashboard/ProgressCard";
import ModuleList from "../components/dashboard/ModuleList";
export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-background p-4 sm:p-6">
      {/* Header Section */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
            <span className="text-lg">👋</span>
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-primary">Welcome back!</h1>
            <p className="text-primary/60 text-sm sm:text-base mt-1">
              You're enrolled in{" "}
              <span className="font-semibold text-accent">Vibe Coding for Non-Techies</span>
            </p>
          </div>
        </div>
      </div>

      {/* Progress Card */}
      <ProgressCard progress={40} />

      {/* Module List */}
      <ModuleList />
    </main>
  );
}
