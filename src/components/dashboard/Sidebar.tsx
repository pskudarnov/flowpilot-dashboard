import Link from "next/link";

const links = ["Overview", "Revenue", "Activation", "Retention", "Tasks"];

export function Sidebar() {
  return (
    <aside
      className="rounded-xl border border-zinc-800 bg-zinc-900/70 p-4 lg:sticky lg:top-24 lg:h-fit"
      aria-label="Dashboard sidebar"
    >
      <p className="text-sm font-semibold text-zinc-100">FlowPilot</p>
      <nav
        className="mt-4 flex flex-row flex-wrap gap-2 lg:flex-col"
        aria-label="Dashboard sections"
      >
        {links.map((item) => (
          <Link
            key={item}
            href="#"
            className="rounded-md px-3 py-2 text-sm text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            {item}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
