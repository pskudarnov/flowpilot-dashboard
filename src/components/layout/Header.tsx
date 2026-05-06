import Link from "next/link";
import { navItems } from "@/data/navigation";
import { Button } from "@/components/ui/Button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/70 bg-[#090b12]/85 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 md:px-10">
        <Link href="/" className="text-lg font-semibold text-zinc-100">
          FlowPilot
        </Link>
        <nav className="hidden items-center gap-6 md:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm text-zinc-400 hover:text-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noreferrer" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Button href="/dashboard" className="hidden md:inline-flex">
          Open Dashboard
        </Button>
      </div>
    </header>
  );
}
