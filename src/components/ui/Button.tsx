import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

type SharedButtonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: ButtonVariant;
};

type LinkButtonProps = SharedButtonProps & {
  external?: boolean;
  href: string;
  type?: never;
};

type NativeButtonProps = SharedButtonProps & {
  external?: never;
  href?: never;
  type?: "button" | "submit" | "reset";
};

type ButtonProps = LinkButtonProps | NativeButtonProps;

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-cyan-300 text-slate-950 shadow-[0_12px_34px_rgba(34,211,238,0.24)] hover:bg-cyan-200 hover:shadow-[0_16px_42px_rgba(34,211,238,0.32)]",
  secondary:
    "border border-white/10 bg-white/[0.055] text-zinc-100 hover:border-white/20 hover:bg-white/[0.085]",
  ghost: "text-zinc-300 hover:bg-white/[0.06] hover:text-zinc-50",
};

export function Button({
  href,
  children,
  className,
  external,
  type = "button",
  variant = "primary",
}: ButtonProps) {
  const classes = cn(
    "inline-flex min-h-10 items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold",
    "transition duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080a10]",
    "motion-safe:hover:-translate-y-0.5 active:translate-y-0",
    variants[variant],
    className,
  );

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
      >
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} type={type}>
      {children}
    </button>
  );
}
