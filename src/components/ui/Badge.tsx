export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-cyan-500/40 bg-cyan-500/10 px-2.5 py-1 text-xs text-cyan-300">
      {children}
    </span>
  );
}
