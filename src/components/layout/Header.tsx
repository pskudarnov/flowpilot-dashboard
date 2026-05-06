"use client";

import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "@/data/navigation";
import { Button } from "@/components/ui/Button";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#080a10]/82 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 md:px-10">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 text-sm font-semibold text-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080a10]"
          onClick={closeMenu}
        >
          <span className="grid size-8 place-items-center rounded-lg border border-cyan-300/25 bg-cyan-300/10 text-cyan-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
            FP
          </span>
          <span>FlowPilot</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-zinc-400 transition hover:text-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080a10]"
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noreferrer" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href="/dashboard">
            Open Dashboard
            <ArrowRight className="size-4" aria-hidden />
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-zinc-200 transition hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080a10] md:hidden"
          aria-label={isOpen ? "Close mobile menu" : "Open mobile menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-nav-panel"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {isOpen ? (
        <div
          id="mobile-nav-panel"
          className="reveal border-t border-white/10 bg-[#080a10]/96 px-6 py-4 shadow-2xl md:hidden"
        >
          <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.label === "Product" ? "/#product" : item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noreferrer" : undefined}
                onClick={closeMenu}
                className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-300 transition hover:bg-white/[0.06] hover:text-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
              >
                {item.label}
              </Link>
            ))}
            <Button href="/dashboard" className="mt-2 w-full" external={false}>
              Open Dashboard
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
