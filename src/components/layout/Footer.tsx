export function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-6 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between md:px-10">
        <p>© {new Date().getFullYear()} FlowPilot Demo</p>
        <p className="text-zinc-600">Next.js · TypeScript · Tailwind CSS · Recharts</p>
      </div>
    </footer>
  );
}
