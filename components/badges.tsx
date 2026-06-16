import type { TaskStatus, TaskType } from "@/data/weeklyPlan";

const STATUS_LABEL: Record<TaskStatus, string> = {
  todo: "To Do",
  prog: "In Progress",
  sched: "Scheduled",
  done: "Done",
};

const STATUS_CLASS: Record<TaskStatus, string> = {
  todo: "bg-[#eceff3] text-[#5a6b82]",
  prog: "bg-[#fff3cd] text-[#8a6d00]",
  sched: "bg-[#d8e8ff] text-[#1456b8]",
  done: "bg-[#d9f2e3] text-[#13794a]",
};

export function StatusBadge({ status }: { status: TaskStatus }) {
  return (
    <span
      className={`inline-block whitespace-nowrap rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${STATUS_CLASS[status]}`}
    >
      {STATUS_LABEL[status]}
    </span>
  );
}

const TYPE_CLASS: Record<string, string> = {
  "Blog Post": "bg-[#e3edff] text-[#1456b8]",
  Blog: "bg-[#e3edff] text-[#1456b8]",
  Whitepaper: "bg-[#efe3ff] text-[#6a2fb8]",
  "LinkedIn Post": "bg-[#d9f0f7] text-[#0b6e8f]",
  "Internal Milestone": "bg-[#fde8d9] text-[#a35413]",
  Review: "bg-[#fde8d9] text-[#a35413]",
  Meeting: "bg-[#fbe2ef] text-[#a8186e]",
  Campaign: "bg-[#fbe2ef] text-[#a8186e]",
  Accelerator: "bg-[#e2f7df] text-[#2c7a1f]",
  Integration: "bg-[#e2f7df] text-[#2c7a1f]",
};

export function TypeBadge({ type }: { type: TaskType }) {
  const cls = TYPE_CLASS[type] ?? "bg-[#eceff3] text-[#5a6b82]";
  return (
    <span
      className={`inline-block whitespace-nowrap rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${cls}`}
    >
      {type}
    </span>
  );
}
