import Link from "next/link";
import { report } from "@/data/report";
import { weeklyPlan } from "@/data/weeklyPlan";

export default function HomePage() {
  const totalTasks = weeklyPlan.weeks.reduce(
    (n, w) => n + w.tasks.length,
    0
  );

  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <section className="mb-10">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-rc-accent">
          Royal Cyber · Optimizely Practice
        </p>
        <h1 className="mt-2 text-3xl font-extrabold leading-tight text-rc-blue sm:text-4xl">
          Optimizely Insights Dashboard
        </h1>
        <p className="mt-3 max-w-3xl text-[17px] text-[#5a6b82]">
          A single home for what our Optimizely agents produce each week — the
          Department Agent&apos;s trend &amp; content sweep, and the rolling
          six-week execution plan. Pick an agent to dive in.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <Link
          href="/report"
          className="group rounded-2xl border border-[#243154] bg-opti-navy p-7 text-opti-ink shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
        >
          <div className="text-xs font-bold uppercase tracking-[0.16em] text-opti-teal">
            {report.eyebrow}
          </div>
          <h2 className="mt-2 text-2xl font-bold">{report.title}</h2>
          <p className="mt-3 line-clamp-4 text-sm text-opti-muted">
            {report.lede}
          </p>
          <div className="mt-5 flex flex-wrap gap-4 text-sm text-opti-muted">
            <span>
              <b className="text-opti-ink">{report.trends.length}</b> trends
            </span>
            <span>
              <b className="text-opti-ink">{report.blogs.length}</b> blog ideas
            </span>
            <span>
              <b className="text-opti-ink">{report.releases.length}</b> releases
            </span>
            <span>
              <b className="text-opti-ink">{report.events.length}</b> events
            </span>
          </div>
          <div className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-opti-accent">
            Open trend report
            <span className="transition group-hover:translate-x-0.5">→</span>
          </div>
        </Link>

        <Link
          href="/weekly-plan"
          className="group rounded-2xl border border-[#dde3ec] bg-white p-7 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
        >
          <div className="text-xs font-bold uppercase tracking-[0.16em] text-rc-accent">
            {weeklyPlan.org} · Weekly Plan Agent
          </div>
          <h2 className="mt-2 text-2xl font-bold text-rc-blue">
            Optimizely Weekly Plan
          </h2>
          <p className="mt-3 text-sm text-[#5a6b82]">
            A {weeklyPlan.weeks.length}-week execution plan covering MCP, Graph,
            Opal, CMS migrations and Configured Commerce — broken into team
            focus areas and day-by-day tasks with status tracking.
          </p>
          <div className="mt-5 flex flex-wrap gap-4 text-sm text-[#5a6b82]">
            <span>
              <b className="text-rc-blue">{weeklyPlan.weeks.length}</b> weeks
            </span>
            <span>
              <b className="text-rc-blue">{totalTasks}</b> tasks
            </span>
          </div>
          <div className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-rc-accent">
            Open weekly plan
            <span className="transition group-hover:translate-x-0.5">→</span>
          </div>
        </Link>
      </section>

      <section className="mt-10 rounded-xl border border-[#dde3ec] bg-white p-6">
        <h3 className="text-sm font-bold uppercase tracking-wide text-rc-blue">
          Latest sweep
        </h3>
        <p className="mt-2 text-sm text-[#5a6b82]">
          Trend report generated{" "}
          <b className="text-[#1c2733]">{report.generated}</b> · Weekly plan
          generated <b className="text-[#1c2733]">{weeklyPlan.generated}</b>.
        </p>
      </section>
    </div>
  );
}
