import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ProductPreview } from "@/components/landing/ProductPreview";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 md:px-10 lg:grid-cols-2 lg:items-center">
        <div>
          <Badge>FlowPilot · SaaS Demo</Badge>
          <h1 className="mt-5 text-4xl font-semibold leading-tight text-zinc-50 sm:text-5xl">
            Analytics that keep product teams in flow.
          </h1>
          <p className="mt-5 max-w-xl text-zinc-400">
            FlowPilot is a lightweight SaaS analytics dashboard concept for tracking revenue,
            activation, retention and delivery health in one clean interface.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/dashboard">View dashboard</Button>
            <Button href="/pricing" className="bg-zinc-800 text-zinc-100 hover:bg-zinc-700">
              See pricing
            </Button>
          </div>
        </div>
        <ProductPreview />
      </div>
    </section>
  );
}
