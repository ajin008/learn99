import { requireAuth } from "@/lib/auth/serverAuth";
import { Header } from "../components/dashboard/Header";
import { ProgressCard } from "../components/dashboard/ProgressCard";
import { ModuleList } from "../components/dashboard/ModuleList";
import { Footer } from "../components/dashboard/Footer";

export default async function DashboardPage() {
  const email = await requireAuth();
  return (
    <main className="min-h-screen bg-background p-4 sm:p-6">
      <Header email={email} />
      <ProgressCard completedModules={3} totalModules={6} />
      <ModuleList />
      <Footer />
    </main>
  );
}
