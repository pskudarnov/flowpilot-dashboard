export function Footer() {
  return (
    <footer className="border-t border-zinc-800 py-8">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 text-sm text-zinc-500 md:px-10">
        <p>© {new Date().getFullYear()} FlowPilot Demo</p>
        <p>Next.js · TypeScript · Tailwind · Recharts</p>
      </div>
    </footer>
  );
}
