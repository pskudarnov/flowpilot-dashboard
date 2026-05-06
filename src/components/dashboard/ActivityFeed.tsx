import { Card } from "@/components/ui/Card";
import { activityFeed } from "@/data/metrics";

export function ActivityFeed() {
  return (
    <Card className="p-4">
      <h3 className="mb-3 text-sm font-medium text-zinc-100">Team activity</h3>
      <ul className="space-y-2 text-sm text-zinc-300">
        {activityFeed.map((item) => (
          <li key={item} className="rounded-md border border-zinc-800 bg-zinc-950/70 p-3">
            {item}
          </li>
        ))}
      </ul>
    </Card>
  );
}
