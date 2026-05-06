import { Sidebar } from "@/components/dashboard/Sidebar";
import { Topbar } from "@/components/dashboard/Topbar";

export function DashboardShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto grid w-full max-w-7xl gap-5 px-4 py-6 md:px-8 lg:grid-cols-[248px_1fr]">
      <Sidebar />
      <div className="min-w-0 space-y-6">
        <Topbar />
        {children}
      </div>
    </div>
  );
}
