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
          <h3 id="delivery-tasks-heading" className="text-base font-semibold text-zinc-100">
            Operating work
          </h3>
          <p className="mt-1 text-sm text-zinc-500">Product work tied to account health</p>
        </div>
        <p className="text-sm text-zinc-500">{tasks.length} tracked tasks</p>
      </div>

      <div className="space-y-3 sm:hidden" aria-labelledby="delivery-tasks-heading">
        {tasks.map((task) => (
          <article
            key={task.id}
            className="rounded-xl border border-white/10 bg-[#080a10]/70 p-4"
            aria-labelledby={`${task.id}-title`}
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-mono text-xs text-zinc-500">{task.id}</p>
                <h4 id={`${task.id}-title`} className="mt-1 font-medium text-zinc-100">
                  {task.title}
                </h4>
              </div>
              <span
                className={cn(
                  "inline-flex shrink-0 rounded-full border px-2.5 py-1 text-xs font-medium",
                  statusStyles[task.status],
                )}
              >
                {task.status}
              </span>
            </div>

            <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
              <div>
                <dt className="text-xs text-zinc-500">Owner</dt>
                <dd className="mt-1 text-zinc-300">{task.owner}</dd>
              </div>
              <div>
                <dt className="text-xs text-zinc-500">Priority</dt>
                <dd className={cn("mt-1 font-medium", priorityStyles[task.priority])}>
                  {task.priority}
                </dd>
              </div>
              <div>
                <dt className="text-xs text-zinc-500">Due</dt>
                <dd className="mt-1 text-zinc-300">{task.due}</dd>
              </div>
              <div>
                <dt className="text-xs text-zinc-500">Progress</dt>
                <dd className="mt-1 text-zinc-300">{task.progress}%</dd>
              </div>
            </dl>
            <div className="mt-4 h-2 rounded-full bg-white/10" aria-hidden>
              <div
                className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-emerald-200"
                style={{ width: `${task.progress}%` }}
              />
            </div>
          </article>
        ))}
      </div>

      <div
        className="hidden overflow-x-auto rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 sm:block"
        aria-labelledby="delivery-tasks-heading"
        role="region"
        tabIndex={0}
      >
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
