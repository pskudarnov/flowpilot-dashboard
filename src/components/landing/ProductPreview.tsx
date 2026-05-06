import { Activity, ArrowUpRight, CircleDollarSign } from "lucide-react";

const previewBars = [42, 58, 51, 68, 74, 86, 80, 92];

export function ProductPreview() {
  return (
    <div className="relative">
      <div className="absolute -inset-4 rounded-[2rem] bg-cyan-300/10 blur-3xl" aria-hidden />
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0b0f19]/88 p-4 shadow-[0_30px_120px_rgba(0,0,0,0.42)] backdrop-blur-xl">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100/70">
              Live dashboard
            </p>
            <p className="mt-1 text-sm text-zinc-400">Weekly product health</p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs font-medium text-emerald-100">
            <span className="size-1.5 rounded-full bg-emerald-300" />
            Stable
          </div>
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-white/[0.045] p-4">
            <div className="flex items-center justify-between">
              <CircleDollarSign className="size-5 text-cyan-200" aria-hidden />
              <ArrowUpRight className="size-4 text-emerald-200" aria-hidden />
            </div>
            <p className="mt-5 text-2xl font-semibold text-zinc-50">$248k</p>
            <p className="mt-1 text-xs text-zinc-500">MRR · +18.2%</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.045] p-4">
            <div className="flex items-center justify-between">
              <Activity className="size-5 text-violet-200" aria-hidden />
              <span className="rounded-full bg-violet-300/10 px-2 py-1 text-xs text-violet-100">
                91.2%
              </span>
            </div>
            <p className="mt-5 text-2xl font-semibold text-zinc-50">4.8k</p>
            <p className="mt-1 text-xs text-zinc-500">Active accounts</p>
          </div>
        </div>

        <div className="mt-3 rounded-xl border border-white/10 bg-white/[0.035] p-4">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-zinc-100">Revenue trend</p>
              <p className="mt-1 text-xs text-zinc-500">9 month sample</p>
            </div>
            <p className="text-xs text-cyan-100">+21.8%</p>
          </div>
          <div className="mt-5 flex h-32 items-end gap-2">
            {previewBars.map((height, index) => (
              <div
                key={height}
                className="flex-1 rounded-t-md bg-gradient-to-t from-cyan-400/25 to-cyan-200/80 shadow-[0_0_24px_rgba(34,211,238,0.12)] transition duration-300 hover:from-cyan-300/35 hover:to-cyan-100"
                style={{ height: `${height}%`, animationDelay: `${index * 45}ms` }}
              />
            ))}
          </div>
        </div>

        <div className="mt-3 grid gap-3 sm:grid-cols-[1fr_0.78fr]">
          <div className="rounded-xl border border-white/10 bg-white/[0.035] p-4">
            <p className="text-sm font-medium text-zinc-100">Activation cohort</p>
            <div className="mt-4 h-2 rounded-full bg-white/10">
              <div className="h-full w-[68%] rounded-full bg-gradient-to-r from-emerald-300 to-cyan-200" />
            </div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.035] p-4">
            <p className="text-sm font-medium text-zinc-100">Tasks</p>
            <p className="mt-3 text-2xl font-semibold text-zinc-50">24</p>
          </div>
        </div>
      </div>
    </div>
  );
}
