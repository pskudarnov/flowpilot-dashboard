import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { PricingPreview } from "@/components/landing/PricingPreview";
import { CTA } from "@/components/landing/CTA";
import { MetricsGrid } from "@/components/dashboard/MetricsGrid";
import { ProductPreview } from "@/components/landing/ProductPreview";

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className="mx-auto w-full max-w-6xl px-6 pb-10 md:px-10">
        <MetricsGrid />
      </section>
      <Features />
      <section id="features" className="scroll-mt-24 py-16">
        <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
          <div className="mb-7 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200/80">
              Interface preview
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-zinc-50">
              A dashboard that feels operational
            </h2>
            <p className="mt-4 leading-7 text-zinc-400">
              The preview carries product cues a reviewer expects: revenue movement, activation
              health, account risk and delivery context.
            </p>
          </div>
          <ProductPreview />
        </div>
      </section>
      <PricingPreview />
      <CTA />
    </>
  );
}
