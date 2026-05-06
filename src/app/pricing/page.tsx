import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { pricingFaq, pricingPlans } from "@/data/pricing";

export default function PricingPage() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-16 md:px-10">
      <div className="reveal max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200/80">
          Pricing
        </p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight text-zinc-50 md:text-5xl">
          Plans that show how the product could scale.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-7 text-zinc-400">
          FlowPilot keeps pricing simple for the demo, while still presenting the kind of plan
          hierarchy a real SaaS buyer expects.
        </p>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {pricingPlans.map((plan) => (
          <Card
            key={plan.name}
            className="flex flex-col p-6"
            tone={plan.featured ? "highlight" : "default"}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-xl font-semibold text-zinc-100">{plan.name}</h2>
                <p className="mt-3 text-sm leading-6 text-zinc-400">{plan.description}</p>
              </div>
              {plan.featured ? (
                <span className="rounded-full bg-cyan-200 px-2.5 py-1 text-xs font-semibold text-slate-950">
                  Popular
                </span>
              ) : null}
            </div>
            <p className="mt-7 text-4xl font-semibold tracking-tight text-zinc-50">
              {plan.price}
              <span className="text-sm font-medium text-zinc-500">/mo</span>
            </p>
            <ul className="mt-6 space-y-3 text-sm text-zinc-300">
              {plan.points.map((point) => (
                <li key={point} className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-200" aria-hidden />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <Button
              href={plan.featured ? "/dashboard" : "/pricing"}
              className="mt-7 w-full"
              variant={plan.featured ? "primary" : "secondary"}
            >
              {plan.cta}
              {plan.featured ? <ArrowRight className="size-4" aria-hidden /> : null}
            </Button>
          </Card>
        ))}
      </div>

      <div className="mt-10 grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <h2 className="text-2xl font-semibold text-zinc-50">FAQ</h2>
          <p className="mt-3 leading-7 text-zinc-400">
            The page is intentionally honest about being a demo, while still proving pricing UX,
            hierarchy and conversion patterns.
          </p>
          <div className="mt-6">
            <Button href="/dashboard">
              Back to dashboard
              <ArrowRight className="size-4" aria-hidden />
            </Button>
          </div>
        </div>
        <div className="space-y-3">
          {pricingFaq.map((item) => (
            <Card key={item.question} className="p-5" tone="muted">
              <h3 className="font-semibold text-zinc-100">{item.question}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-400">{item.answer}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
