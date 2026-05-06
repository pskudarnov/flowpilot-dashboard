import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function CTA() {
  return (
    <section className="py-16">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(135deg,rgba(34,211,238,0.14),rgba(255,255,255,0.045)_42%,rgba(16,185,129,0.08))] p-8 shadow-[0_24px_100px_rgba(0,0,0,0.28)] md:p-10">
          <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-100/60 to-transparent" />
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100/75">
              Product walkthrough
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-zinc-50 md:text-4xl">
              Review the dashboard like a real SaaS workspace.
            </h2>
            <p className="mt-4 leading-7 text-zinc-400">
              Move through revenue, activation and delivery views with the density expected from a
              portfolio-grade product demo.
            </p>
            <div className="mt-7">
              <Button href="/dashboard">
                Open Dashboard
                <ArrowRight className="size-4" aria-hidden />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
