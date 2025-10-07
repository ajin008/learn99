import { requireAuth } from "@/lib/auth/serverAuth";
import { Header } from "../components/dashboard/Header";

export default async function DashboardPage() {
  const email = await requireAuth();
  return (
    <main className="min-h-screen bg-background p-4 sm:p-6">
      {/* Header Section */ <Header email={email} />}
    </main>
  );
}
