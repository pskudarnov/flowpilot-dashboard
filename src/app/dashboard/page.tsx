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
      <div id="revenue" className="scroll-mt-24 grid gap-4 xl:grid-cols-2">
        <RevenueChart />
        <div id="activation" className="scroll-mt-24">
          <ConversionChart />
        </div>
      </div>
      <div className="grid gap-4 xl:grid-cols-[2fr_1fr]">
        <div id="work" className="scroll-mt-24">
          <TasksTable />
        </div>
        <div id="timeline" className="scroll-mt-24">
          <ActivityFeed />
        </div>
      </div>
    </DashboardShell>
  );
}
