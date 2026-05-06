import { Activity, FlaskConical, HeartPulse, Lightbulb } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { activityFeed } from "@/data/metrics";

const activityIcons = {
  Experiment: FlaskConical,
  Health: HeartPulse,
  Insight: Lightbulb,
  Ops: Activity,
} as const;

export function ActivityFeed() {
  return (
    <Card className="reveal reveal-delay-3 p-5">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-base font-semibold text-zinc-100">Team activity</h3>
          <p className="mt-1 text-sm text-zinc-500">Signals from product and delivery</p>
        </div>
        <span className="rounded-full bg-white/[0.06] px-3 py-1 text-xs font-medium text-zinc-300">
          Live
        </span>
      </div>
      <ul className="space-y-3 text-sm text-zinc-300">
        {activityFeed.map((item) => {
          const Icon = activityIcons[item.type];

          return (
            <li
              key={item.title}
              className="group rounded-xl border border-white/10 bg-[#080a10]/70 p-3 transition hover:border-white/20 hover:bg-white/[0.045]"
            >
              <div className="flex gap-3">
                <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-lg bg-cyan-300/10 text-cyan-100">
                  <Icon className="size-4" aria-hidden />
                </span>
                <div>
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                    <p className="font-medium text-zinc-100">{item.title}</p>
                    <span className="text-xs text-zinc-600">{item.time}</span>
                  </div>
                  <p className="mt-1 leading-6 text-zinc-400">{item.detail}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </Card>
  );
}
