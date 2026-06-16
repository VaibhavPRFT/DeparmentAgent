"use client";

import { useState } from "react";
import type { WeeklyPlan } from "@/data/weeklyPlan";
import { StatusBadge, TypeBadge } from "@/components/badges";

export default function WeeklyPlanTabs({ plan }: { plan: WeeklyPlan }) {
  const [active, setActive] = useState(plan.weeks[0]?.id ?? "");
  const week = plan.weeks.find((w) => w.id === active) ?? plan.weeks[0];

  const completed = week.tasks.filter((t) => t.status === "done").length;
  const open = week.tasks.length - completed;

  return (
    <div>
      <div className="sticky top-0 z-10 -mx-6 flex flex-wrap gap-1 border-b-2 border-[#dde3ec] bg-white px-6 pt-3">
        {plan.weeks.map((w) => (
          <button
            key={w.id}
            onClick={() => setActive(w.id)}
            className={`rounded-t-lg border border-b-0 px-5 py-2 text-sm font-semibold transition ${
              w.id === active
                ? "border-rc-blue bg-rc-blue text-white"
                : "border-[#dde3ec] bg-[#eef2f8] text-[#41526b] hover:bg-[#e0e8f4]"
            }`}
          >
            {w.label}
          </button>
        ))}
      </div>

      <div className="pt-6">
        <h2 className="text-lg font-bold text-rc-blue sm:text-xl">
          {week.title}
        </h2>
        <p className="mt-1 text-sm text-[#5a6b82]">{week.subtitle}</p>
        <div className="mt-2 flex flex-wrap gap-4 text-[13px] text-[#41526b]">
          <span>
            <b>{week.tasks.length}</b> tasks
          </span>
          <span>
            <b>{completed}</b> completed
          </span>
          <span>
            <b>{open}</b> open
          </span>
        </div>

        <div className="mt-4 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
          {week.focus.map((f, i) => (
            <div
              key={i}
              className="rounded-md border border-[#dde3ec] border-l-4 border-l-rc-accent bg-white p-3"
            >
              <div className="text-xs font-bold uppercase text-rc-blue">
                {f.team}
              </div>
              <div className="mt-0.5 text-[13px] text-[#41526b]">{f.text}</div>
            </div>
          ))}
        </div>

        <div className="mt-5 overflow-x-auto rounded-lg border border-[#dde3ec]">
          <table className="w-full border-collapse bg-white text-[13px]">
            <thead>
              <tr className="bg-rc-blue text-left text-xs text-white">
                <th className="px-2.5 py-2.5 font-semibold">Day</th>
                <th className="px-2.5 py-2.5 font-semibold">Date</th>
                <th className="px-2.5 py-2.5 font-semibold">Task / Activity</th>
                <th className="px-2.5 py-2.5 font-semibold">Team</th>
                <th className="px-2.5 py-2.5 font-semibold">Type</th>
                <th className="px-2.5 py-2.5 font-semibold">KPI / Goal</th>
                <th className="px-2.5 py-2.5 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody>
              {week.tasks.map((t, i) => (
                <tr key={i} className="odd:bg-white even:bg-[#f8fafd]">
                  <td className="border-t border-[#dde3ec] px-2.5 py-2 align-top">
                    {t.day}
                  </td>
                  <td className="border-t border-[#dde3ec] px-2.5 py-2 align-top whitespace-nowrap">
                    {t.date}
                  </td>
                  <td className="border-t border-[#dde3ec] px-2.5 py-2 align-top">
                    {t.activity}
                    {t.name ? (
                      <span className="ml-1 text-[#8a97aa]">({t.name})</span>
                    ) : null}
                  </td>
                  <td className="border-t border-[#dde3ec] px-2.5 py-2 align-top">
                    {t.team}
                  </td>
                  <td className="border-t border-[#dde3ec] px-2.5 py-2 align-top">
                    <TypeBadge type={t.type} />
                  </td>
                  <td className="border-t border-[#dde3ec] px-2.5 py-2 align-top">
                    {t.kpi}
                  </td>
                  <td className="border-t border-[#dde3ec] px-2.5 py-2 align-top">
                    <StatusBadge status={t.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
