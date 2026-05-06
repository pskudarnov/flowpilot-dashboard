import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { pricingPlans } from "@/data/pricing";

export function PricingPreview() {
  return (
    <section id="pricing" className="scroll-mt-24 py-16">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200/80">
              Pricing
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-zinc-50">Simple plans, clear scope</h2>
          </div>
          <Button href="/pricing" variant="secondary">
            Compare plans
            <ArrowRight className="size-4" aria-hidden />
          </Button>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {pricingPlans.map((plan) => (
            <Card key={plan.name} className="p-6" tone={plan.featured ? "highlight" : "default"}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-zinc-100">{plan.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">{plan.description}</p>
                </div>
                {plan.featured ? (
                  <span className="rounded-full bg-cyan-200 px-2.5 py-1 text-xs font-semibold text-slate-950">
                    Popular
                  </span>
                ) : null}
              </div>
              <p className="mt-6 text-3xl font-semibold text-zinc-50">
                {plan.price}
                <span className="text-sm font-medium text-zinc-500">/mo</span>
              </p>
              <ul className="mt-5 space-y-3 text-sm text-zinc-300">
                {plan.points.slice(0, 3).map((point) => (
                  <li key={point} className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-200" aria-hidden />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
