import { Sidebar } from "@/components/dashboard/Sidebar";
import { Topbar } from "@/components/dashboard/Topbar";

export function DashboardShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto grid w-full max-w-7xl gap-6 px-4 py-6 md:px-8 lg:grid-cols-[240px_1fr]">
      <Sidebar />
      <div className="space-y-6">
        <Topbar />
        {children}
      </div>
    </div>
  );
}
