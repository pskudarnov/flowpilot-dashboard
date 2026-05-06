import { Button } from "@/components/ui/Button";

export function CTA() {
  return (
    <section className="py-16">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        <div className="rounded-2xl border border-zinc-800 bg-gradient-to-r from-cyan-500/10 via-transparent to-violet-500/10 p-8 text-center">
          <h2 className="text-3xl font-semibold text-zinc-50">Explore the demo dashboard</h2>
          <p className="mt-3 text-zinc-400">
            See how metrics, charts and team execution data can live in one polished surface.
          </p>
          <div className="mt-6">
            <Button href="/dashboard">Open Dashboard</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
