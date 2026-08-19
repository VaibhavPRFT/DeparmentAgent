import type { CaseStudy } from "@/data/caseStudies";

const LABEL = "text-[11px] font-bold uppercase tracking-[0.14em] text-opti-teal";

function Label({ children }: { children: React.ReactNode }) {
  return <div className={LABEL}>{children}</div>;
}

export default function CaseStudyDetail({ c }: { c: CaseStudy }) {
  const hasLinks = Boolean(c.productionUrl || c.sandboxUrl);
  return (
    <section className="overflow-hidden rounded-2xl border border-opti-line bg-opti-panel shadow-sm">
      {/* Header band */}
      <div className="border-b border-opti-line bg-gradient-to-r from-[#eef7f1] to-white p-6 sm:p-7">
        {c.logo ? (
          <div className="mb-4 flex h-12 items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={c.logo}
              alt={`${c.customer} logo`}
              className="h-12 w-auto max-w-[200px] object-contain object-left"
              style={{ mixBlendMode: "multiply" }}
            />
          </div>
        ) : null}

        <div className="flex flex-wrap items-center gap-2">
          <span className={LABEL}>{c.capability}</span>
          <span className="rounded-full border border-opti-line bg-opti-chip px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-opti-teal">
            {c.product}
          </span>
        </div>
        <h2 className="mt-1.5 text-[22px] font-bold leading-tight text-opti-ink">
          {c.customer}
        </h2>
        <p className="mt-1 text-[15px] font-medium text-rc-accent">
          {c.journey} · {c.industry}
        </p>
        <p className="mt-1 text-[12.5px] text-opti-muted">{c.location}</p>

        <p className="mt-4 max-w-3xl text-[14px] leading-relaxed text-opti-muted">
          {c.summary}
        </p>

        {hasLinks ? (
          <div className="mt-4 flex flex-wrap gap-2.5">
            {c.productionUrl ? (
              <a
                href={c.productionUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-[#0d3b24] px-4 py-2 text-[13px] font-semibold text-white transition hover:bg-[#15633c]"
              >
                Live site <span>↗</span>
              </a>
            ) : null}
            {c.sandboxUrl ? (
              <a
                href={c.sandboxUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-opti-line bg-white px-4 py-2 text-[13px] font-semibold text-opti-accent transition hover:border-opti-accent"
              >
                Sandbox <span>↗</span>
              </a>
            ) : null}
          </div>
        ) : null}
      </div>

      {/* Body */}
      <div className="space-y-7 p-6 sm:p-7">
        {c.metrics.length > 0 ? (
          <div>
            <Label>Measured Impact</Label>
            <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {c.metrics.map((m, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-opti-line bg-opti-chip p-4 text-center"
                >
                  <div className="text-[24px] font-extrabold leading-none text-opti-accent">
                    {m.value}
                  </div>
                  <div className="mt-1.5 text-[12px] font-medium text-opti-muted">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        <div>
          <Label>About the Customer</Label>
          <p className="mt-2 max-w-3xl text-[14px] leading-relaxed text-opti-muted">
            {c.about}
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          <div className="rounded-xl border border-opti-line border-l-4 border-l-opti-accent bg-white p-5">
            <Label>The Challenge</Label>
            <p className="mt-2 text-[13.5px] leading-relaxed text-opti-muted">
              {c.challenge}
            </p>
          </div>
          <div className="rounded-xl border border-opti-line bg-white p-5">
            <Label>Objectives</Label>
            <ul className="mt-2 list-disc space-y-1.5 pl-[18px] text-[13.5px] text-opti-muted">
              {c.objectives.map((o, i) => (
                <li key={i}>{o}</li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <Label>Solution Delivered</Label>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {c.solution.map((s, i) => (
              <div
                key={i}
                className="flex gap-3 rounded-xl border border-opti-line bg-opti-chip p-4"
              >
                <div className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-opti-accent text-[12px] font-bold text-white">
                  {i + 1}
                </div>
                <p className="text-[13px] leading-relaxed text-opti-muted">{s}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          <div className="rounded-xl border border-opti-line bg-white p-5 lg:col-span-2">
            <Label>Business Value</Label>
            <ul className="mt-2 list-disc space-y-1.5 pl-[18px] text-[13.5px] text-opti-muted">
              {c.outcomes.map((o, i) => (
                <li key={i}>{o}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-opti-line bg-opti-chip p-5">
            <Label>Optimizely & Services</Label>
            <div className="mt-2.5 flex flex-wrap gap-2">
              {c.services.map((s, i) => (
                <span
                  key={i}
                  className="rounded-full border border-opti-line bg-white px-3 py-1 text-[12.5px] text-opti-ink"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
