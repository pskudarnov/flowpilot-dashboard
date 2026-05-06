import { CalendarDays } from "lucide-react";

export function Topbar() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-zinc-800 bg-zinc-900/70 p-4">
      <div>
        <h1 className="text-2xl font-semibold text-zinc-50">Dashboard</h1>
        <p className="text-sm text-zinc-400">SaaS product analytics snapshot</p>
      </div>
      <div className="inline-flex items-center gap-2 text-sm text-zinc-400">
        <CalendarDays className="size-4" /> Last 30 days
      </div>
    </div>
  );
}
