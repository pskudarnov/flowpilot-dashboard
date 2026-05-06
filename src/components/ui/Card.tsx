import { cn } from "@/lib/utils";
export function Card({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div
      className={cn("rounded-xl border border-zinc-800 bg-zinc-900/70 backdrop-blur", className)}
    >
      {children}
    </div>
  );
}
