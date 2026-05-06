import { Card } from "@/components/ui/Card";
import { tasks } from "@/data/tasks";

export function TasksTable() {
  return (
    <Card className="overflow-x-auto p-4">
      <h3 className="mb-3 text-sm font-medium text-zinc-100">Delivery tasks</h3>
      <table className="w-full min-w-[520px] text-left text-sm">
        <thead className="text-zinc-500">
          <tr>
            <th scope="col" className="py-2">
              ID
            </th>
            <th scope="col" className="py-2">
              Task
            </th>
            <th scope="col" className="py-2">
              Owner
            </th>
            <th scope="col" className="py-2">
              Status
            </th>
            <th scope="col" className="py-2">
              Priority
            </th>
          </tr>
        </thead>
        <tbody className="text-zinc-300">
          {tasks.map((t) => (
            <tr key={t.id} className="border-t border-zinc-800">
              <td className="py-2">{t.id}</td>
              <td className="py-2">{t.title}</td>
              <td className="py-2">{t.owner}</td>
              <td className="py-2">{t.status}</td>
              <td className="py-2">{t.priority}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}
