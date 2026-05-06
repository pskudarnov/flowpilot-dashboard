import { Bell, CalendarDays, Search } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Topbar() {
  return (
    <div className="reveal flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.045] p-4 shadow-[0_24px_80px_rgba(0,0,0,0.2)] backdrop-blur-xl md:flex-row md:items-center md:justify-between">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200/70">
          Executive overview
        </p>
        <h1 className="mt-2 text-2xl font-semibold text-zinc-50 md:text-3xl">Dashboard</h1>
        <p className="mt-1 text-sm text-zinc-400">
          Revenue, activation and account health snapshot
        </p>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <div className="hidden min-w-48 items-center gap-2 rounded-lg border border-white/10 bg-[#080a10]/70 px-3 py-2 text-sm text-zinc-500 sm:inline-flex">
          <Search className="size-4" aria-hidden />
          <span>Search accounts</span>
        </div>
        <Button className="px-3" variant="secondary">
          <Bell className="size-4" aria-hidden />
          <span className="sr-only">Notifications</span>
        </Button>
        <div className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-white/10 bg-[#080a10]/70 px-3 text-sm font-medium text-zinc-300">
          <CalendarDays className="size-4 text-cyan-100" aria-hidden /> Last 30 days
        </div>
      </div>
    </div>
  );
}
