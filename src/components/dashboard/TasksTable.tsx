import { Card } from "@/components/ui/Card";
import { tasks } from "@/data/tasks";
import { cn } from "@/lib/utils";

const statusStyles = {
  Done: "border-emerald-300/20 bg-emerald-300/10 text-emerald-100",
  "In Progress": "border-cyan-300/20 bg-cyan-300/10 text-cyan-100",
  Review: "border-violet-300/20 bg-violet-300/10 text-violet-100",
  Todo: "border-white/10 bg-white/[0.06] text-zinc-300",
} as const;

const priorityStyles = {
  High: "text-rose-200",
  Low: "text-zinc-500",
  Medium: "text-amber-100",
} as const;

export function TasksTable() {
  return (
    <Card className="reveal reveal-delay-2 overflow-hidden p-5">
      <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h3 className="text-base font-semibold text-zinc-100">Delivery tasks</h3>
          <p className="mt-1 text-sm text-zinc-500">Work that can move product signals this week</p>
        </div>
        <p className="text-sm text-zinc-500">{tasks.length} tracked tasks</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[720px] text-left text-sm">
          <thead className="border-y border-white/10 text-xs uppercase tracking-[0.14em] text-zinc-600">
            <tr>
              <th scope="col" className="py-3 pr-4 font-semibold">
                ID
              </th>
              <th scope="col" className="px-4 py-3 font-semibold">
                Task
              </th>
              <th scope="col" className="px-4 py-3 font-semibold">
                Owner
              </th>
              <th scope="col" className="px-4 py-3 font-semibold">
                Status
              </th>
              <th scope="col" className="px-4 py-3 font-semibold">
                Priority
              </th>
              <th scope="col" className="py-3 pl-4 font-semibold">
                Progress
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10 text-zinc-300">
            {tasks.map((task) => (
              <tr key={task.id} className="transition hover:bg-white/[0.03]">
                <td className="py-4 pr-4 font-mono text-xs text-zinc-500">{task.id}</td>
                <td className="px-4 py-4">
                  <p className="font-medium text-zinc-100">{task.title}</p>
                  <p className="mt-1 text-xs text-zinc-500">Due {task.due}</p>
                </td>
                <td className="px-4 py-4">{task.owner}</td>
                <td className="px-4 py-4">
                  <span
                    className={cn(
                      "inline-flex rounded-full border px-2.5 py-1 text-xs font-medium",
                      statusStyles[task.status],
                    )}
                  >
                    {task.status}
                  </span>
                </td>
                <td className={cn("px-4 py-4 font-medium", priorityStyles[task.priority])}>
                  {task.priority}
                </td>
                <td className="py-4 pl-4">
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-24 rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-emerald-200"
                        style={{ width: `${task.progress}%` }}
                      />
                    </div>
                    <span className="text-xs text-zinc-500">{task.progress}%</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
