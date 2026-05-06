import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { MetricsGrid } from "@/components/dashboard/MetricsGrid";
import { RevenueChart } from "@/components/dashboard/RevenueChart";
import { ConversionChart } from "@/components/dashboard/ConversionChart";
import { TasksTable } from "@/components/dashboard/TasksTable";
import { ActivityFeed } from "@/components/dashboard/ActivityFeed";

export default function DashboardPage() {
  return (
    <DashboardShell>
      <MetricsGrid />
      <div className="grid gap-4 xl:grid-cols-2">
        <RevenueChart />
        <ConversionChart />
      </div>
      <div className="grid gap-4 xl:grid-cols-[2fr_1fr]">
        <TasksTable />
        <ActivityFeed />
      </div>
    </DashboardShell>
  );
}
