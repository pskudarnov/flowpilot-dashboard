import { cn } from "@/lib/utils";

type CardTone = "default" | "muted" | "highlight";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  tone?: CardTone;
};

const tones: Record<CardTone, string> = {
  default:
    "border-white/10 bg-white/[0.045] shadow-[0_24px_80px_rgba(0,0,0,0.22)] backdrop-blur-xl",
  muted: "border-white/10 bg-white/[0.028] backdrop-blur",
  highlight:
    "border-cyan-300/20 bg-[linear-gradient(145deg,rgba(34,211,238,0.13),rgba(255,255,255,0.045)_42%,rgba(168,85,247,0.08))] shadow-[0_28px_90px_rgba(14,165,233,0.14)] backdrop-blur-xl",
};

export function Card({ className, children, style, tone = "default" }: CardProps) {
  return (
    <div
      className={cn(
        "relative rounded-2xl border transition duration-300 ease-out",
        "motion-safe:hover:-translate-y-0.5 motion-safe:hover:border-white/20",
        tones[tone],
        className,
      )}
      style={style}
    >
      {children}
    </div>
  );
}
