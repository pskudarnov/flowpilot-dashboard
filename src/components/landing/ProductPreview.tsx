import { Card } from "@/components/ui/Card";

export function ProductPreview() {
  return (
    <Card className="p-5">
      <div className="rounded-lg border border-zinc-800 bg-zinc-950 p-4">
        <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Dashboard preview</p>
        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="h-24 rounded-md bg-gradient-to-br from-cyan-500/20 to-violet-500/20" />
          <div className="h-24 rounded-md bg-zinc-900" />
          <div className="col-span-2 h-32 rounded-md bg-zinc-900" />
        </div>
      </div>
    </Card>
  );
}
