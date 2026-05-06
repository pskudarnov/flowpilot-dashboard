import Link from "next/link";
import { cn } from "@/lib/utils";

type Props = { href?: string; children: React.ReactNode; className?: string; external?: boolean };

export function Button({ href, children, className, external }: Props) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400",
    "bg-cyan-400 text-zinc-950 hover:bg-cyan-300",
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
  return <button className={classes}>{children}</button>;
}
