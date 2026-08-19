"use client";

import { useEffect, useState } from "react";
import type { QuarterlyPlan } from "@/data/quarterlyPlan";
import { StatusBadge } from "@/components/badges";

// Choose the quarter that matches "today": the latest quarter whose start date
// is on or before now. Falls back to the first quarter when today is before the
// plan starts (e.g. still in Q2), and lands on the last quarter once past it.
// Derived at view time from each quarter's `start`, so it keeps working as the
// plan is maintained.
function currentQuarterId(
  quarters: QuarterlyPlan["quarters"],
  now: number,
): string {
  let chosen = quarters[0]?.id ?? "";
  for (const q of quarters) {
    const start = new Date(q.start).getTime();
    if (!Number.isNaN(start) && start <= now) chosen = q.id;
  }
  return chosen;
}

function TrackBadge({ track }: { track: string }) {
  return (
    <span className="inline-block whitespace-nowrap rounded-full bg-opti-chip px-2.5 py-0.5 text-[11px] font-semibold text-opti-teal">
      {track}
    </span>
  );
}

export default function QuarterlyPlanTabs({ plan }: { plan: QuarterlyPlan }) {
  // Start deterministic (first quarter) so server and first client render match,
  // then snap to the current quarter once mounted in the browser.
  const [active, setActive] = useState(plan.quarters[0]?.id ?? "");

  useEffect(() => {
    setActive(currentQuarterId(plan.quarters, Date.now()));
  }, [plan.quarters]);

  const quarter =
    plan.quarters.find((q) => q.id === active) ?? plan.quarters[0];

  const done = quarter.initiatives.filter((i) => i.status === "done").length;
  const open = quarter.initiatives.length - done;

  return (
    <div>
      <div className="sticky top-0 z-10 -mx-6 flex flex-wrap gap-1 border-b-2 border-[#dde3ec] bg-white px-6 pt-3">
        {plan.quarters.map((q) => (
          <button
            key={q.id}
            onClick={() => setActive(q.id)}
            className={`rounded-t-lg border border-b-0 px-5 py-2 text-sm font-semibold transition ${
              q.id === active
                ? "border-rc-blue bg-rc-blue text-white"
                : "border-[#cfe0d6] bg-[#eef5f0] text-[#41615a] hover:bg-[#e0efe7]"
            }`}
          >
            {q.label}
          </button>
        ))}
      </div>

      <div className="pt-6">
        <h2 className="text-lg font-bold text-rc-blue sm:text-xl">
          {quarter.title}
        </h2>
        <p className="mt-1 text-sm text-[#5a6b82]">{quarter.subtitle}</p>
        <p className="mt-2 max-w-3xl text-[13px] text-[#41526b]">
          {quarter.theme}
        </p>
        <div className="mt-2 flex flex-wrap gap-4 text-[13px] text-[#41526b]">
          <span>
            <b>{quarter.initiatives.length}</b> initiatives
          </span>
          <span>
            <b>{done}</b> done
          </span>
          <span>
            <b>{open}</b> open
          </span>
          <span>
            <b>{quarter.period}</b>
          </span>
        </div>

        <div className="mt-4 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
          {quarter.focus.map((f, i) => (
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

        <div className="mt-5 rounded-lg border border-[#dde3ec] bg-white p-4">
          <h3 className="text-xs font-bold uppercase tracking-wide text-rc-blue">
            Quarter objectives
          </h3>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-[13.5px] text-[#41526b]">
            {quarter.objectives.map((o, i) => (
              <li key={i}>{o}</li>
            ))}
          </ul>
        </div>

        <div className="mt-5 overflow-x-auto rounded-lg border border-[#dde3ec]">
          <table className="w-full border-collapse bg-white text-[13px]">
            <thead>
              <tr className="bg-rc-blue text-left text-xs text-white">
                <th className="px-2.5 py-2.5 font-semibold">Month</th>
                <th className="px-2.5 py-2.5 font-semibold">Initiative</th>
                <th className="px-2.5 py-2.5 font-semibold">Track</th>
                <th className="px-2.5 py-2.5 font-semibold">Owner</th>
                <th className="px-2.5 py-2.5 font-semibold">Department</th>
                <th className="px-2.5 py-2.5 font-semibold">Goal</th>
                <th className="px-2.5 py-2.5 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody>
              {quarter.initiatives.map((it, i) => (
                <tr key={i} className="odd:bg-white even:bg-[#f8fafd]">
                  <td className="border-t border-[#dde3ec] px-2.5 py-2 align-top font-semibold whitespace-nowrap text-rc-blue">
                    {it.month}
                  </td>
                  <td className="border-t border-[#dde3ec] px-2.5 py-2 align-top">
                    <div className="font-semibold text-[#1c2733]">
                      {it.initiative}
                    </div>
                    <div className="mt-0.5 text-[12.5px] text-[#5a6b82]">
                      {it.detail}
                    </div>
                  </td>
                  <td className="border-t border-[#dde3ec] px-2.5 py-2 align-top">
                    <TrackBadge track={it.track} />
                  </td>
                  <td className="border-t border-[#dde3ec] px-2.5 py-2 align-top whitespace-nowrap">
                    {it.owner}
                  </td>
                  <td className="border-t border-[#dde3ec] px-2.5 py-2 align-top whitespace-nowrap">
                    {it.department}
                  </td>
                  <td className="border-t border-[#dde3ec] px-2.5 py-2 align-top">
                    {it.goal}
                  </td>
                  <td className="border-t border-[#dde3ec] px-2.5 py-2 align-top">
                    <StatusBadge status={it.status} />
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
