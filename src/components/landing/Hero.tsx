import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ProductPreview } from "@/components/landing/ProductPreview";
import { ArrowRight, PlayCircle } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-20 md:pb-20 md:pt-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/50 to-transparent" />
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 md:px-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="reveal">
          <Badge>Portfolio-ready SaaS reporting</Badge>
          <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.05] text-zinc-50 sm:text-5xl lg:text-6xl">
            Revenue reporting for product-led SaaS teams.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-zinc-400 sm:text-lg">
            FlowPilot brings revenue movement, trial activation, account retention and operating
            work into a focused dashboard surface.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/dashboard">
              Open dashboard
              <ArrowRight className="size-4" aria-hidden />
            </Button>
            <Button href="/pricing" variant="secondary">
              <PlayCircle className="size-4" aria-hidden />
              Compare plans
            </Button>
          </div>
          <dl className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-white/10 pt-6">
            {[
              ["9", "months trend"],
              ["4", "KPI signals"],
              ["3", "core routes"],
            ].map(([value, label]) => (
              <div key={label}>
                <dt className="text-xl font-semibold text-zinc-50">{value}</dt>
                <dd className="mt-1 text-xs leading-5 text-zinc-500">{label}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="reveal reveal-delay-2">
          <ProductPreview />
        </div>
      </div>
    </section>
  );
}
