import Link from "next/link";
import {
  Activity,
  BarChart3,
  CheckSquare2,
  LayoutDashboard,
  Target,
  TrendingUp,
} from "lucide-react";

const links = [
  { href: "#overview", icon: LayoutDashboard, label: "Overview" },
  { href: "#revenue", icon: TrendingUp, label: "Revenue" },
  { href: "#activation", icon: Target, label: "Activation" },
  { href: "#timeline", icon: Activity, label: "Timeline" },
  { href: "#work", icon: CheckSquare2, label: "Work" },
] as const;

export function Sidebar() {
  return (
    <aside
      className="rounded-2xl border border-white/10 bg-white/[0.045] p-4 shadow-[0_24px_80px_rgba(0,0,0,0.2)] backdrop-blur-xl lg:sticky lg:top-24 lg:h-fit"
      aria-label="Dashboard sidebar"
    >
      <div className="flex items-center gap-3">
        <span className="grid size-9 place-items-center rounded-lg border border-cyan-300/25 bg-cyan-300/10 text-xs font-semibold text-cyan-100">
          FP
        </span>
        <div>
          <p className="text-sm font-semibold text-zinc-100">FlowPilot</p>
          <p className="text-xs text-zinc-500">Revenue desk</p>
        </div>
      </div>
      <nav
        className="mt-5 flex flex-row flex-wrap gap-2 lg:flex-col"
        aria-label="Dashboard sections"
      >
        {links.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-zinc-400 transition hover:bg-white/[0.06] hover:text-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
          >
            <item.icon className="size-4" aria-hidden />
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="mt-5 hidden rounded-xl border border-white/10 bg-[#080a10]/70 p-3 lg:block">
        <BarChart3 className="size-4 text-cyan-100" aria-hidden />
        <p className="mt-3 text-xs font-medium text-zinc-200">Sample workspace</p>
        <p className="mt-1 text-xs leading-5 text-zinc-500">
          Realistic data, production UI patterns.
        </p>
      </div>
    </aside>
  );
}
