import type { Metadata } from "next";
import Link from "next/link";
import { caseStudies } from "@/data/caseStudies";

export const metadata: Metadata = {
  title: "Optimizely Customer Case Studies — Royal Cyber",
  description:
    "Royal Cyber customer outcomes on the Optimizely platform across content management, B2B commerce and experimentation — each mapped to the business objective, solution and value delivered.",
};

export default function CaseStudyPage() {
  return (
    <div className="bg-gradient-to-b from-[#eef7f1] to-white">
      <div className="mx-auto max-w-5xl px-6 py-10 text-opti-ink">
        <header className="mb-7 border-b border-opti-line pb-6">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-rc-accent">
            {caseStudies.org} · Optimizely Center of Excellence
          </p>
          <h1 className="mt-2 text-[28px] font-extrabold tracking-tight">
            {caseStudies.title}
          </h1>
          <p className="mt-1 text-[16px] font-semibold text-rc-blue">
            {caseStudies.heading}
          </p>
          <p className="mt-2.5 max-w-3xl text-sm text-opti-muted">
            {caseStudies.intro} · Updated {caseStudies.generated}
          </p>

          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <div className="rounded-xl border border-opti-line bg-opti-panel px-4 py-3">
              <div className="text-[22px] font-extrabold text-opti-accent">
                {caseStudies.items.length}
              </div>
              <div className="text-[12px] font-medium text-opti-muted">
                Customer case studies
              </div>
            </div>
            <div className="rounded-xl border border-opti-line bg-opti-panel px-4 py-3">
              <div className="text-[22px] font-extrabold text-opti-accent">3</div>
              <div className="text-[12px] font-medium text-opti-muted">
                Optimizely capabilities
              </div>
            </div>
            <div className="rounded-xl border border-opti-line bg-opti-panel px-4 py-3">
              <div className="text-[22px] font-extrabold text-opti-accent">5</div>
              <div className="text-[12px] font-medium text-opti-muted">
                Industries served
              </div>
            </div>
            <div className="rounded-xl border border-opti-line bg-opti-panel px-4 py-3">
              <div className="text-[22px] font-extrabold text-opti-accent">
                215K+
              </div>
              <div className="text-[12px] font-medium text-opti-muted">
                Visitors tested (RAC)
              </div>
            </div>
          </div>
        </header>

        <div className="grid gap-5 lg:grid-cols-2">
          {caseStudies.items.map((c) => (
            <Link
              key={c.slug}
              href={`/casestudy/${c.slug}`}
              className="group flex flex-col rounded-2xl border border-opti-line bg-opti-panel p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-xl"
            >
              <div className="mb-4 flex h-10 items-center justify-between gap-3">
                {c.logo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={c.logo}
                    alt={`${c.customer} logo`}
                    className="h-10 w-auto max-w-[150px] object-contain object-left"
                    style={{ mixBlendMode: "multiply" }}
                    loading="lazy"
                  />
                ) : (
                  <span className="text-[15px] font-bold text-opti-ink">
                    {c.customer}
                  </span>
                )}
                <span className="text-[12px] font-bold uppercase tracking-[0.14em] text-opti-teal">
                  {c.n}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[11px] font-bold uppercase tracking-[0.13em] text-opti-teal">
                  {c.capability}
                </span>
                <span className="rounded-full border border-opti-line bg-opti-chip px-2 py-0.5 text-[10.5px] font-semibold uppercase tracking-wide text-opti-teal">
                  {c.product}
                </span>
              </div>
              <h2 className="mt-1.5 text-[19px] font-bold leading-tight">
                {c.customer}
              </h2>
              <p className="mt-0.5 text-[14px] font-medium text-rc-accent">
                {c.journey} · {c.industry}
              </p>

              <p className="mt-4 line-clamp-3 text-[13.5px] leading-relaxed text-opti-muted">
                {c.summary}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {c.highlights.map((h, i) => (
                  <span
                    key={i}
                    className="rounded-full border border-opti-line bg-opti-chip px-3 py-1 text-[12px] font-medium text-opti-ink"
                  >
                    {h}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex items-center gap-1.5 text-[13px] font-semibold text-opti-accent">
                View case study
                <span className="transition group-hover:translate-x-0.5">→</span>
              </div>
            </Link>
          ))}
        </div>

        <section className="mt-9 rounded-2xl border border-opti-line bg-opti-navy p-7">
          <h2 className="text-[18px] font-bold text-opti-ink">
            Deliver outcomes like these
          </h2>
          <p className="mt-2 max-w-3xl text-sm text-opti-muted">
            Each engagement is delivered by the Royal Cyber Optimizely Center of
            Excellence — from digital experience and B2B commerce to
            experimentation and analytics. Tell us your objective and we will
            scope the right approach.
          </p>
          <a
            href="https://www.royalcyber.com/contact-us/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-[#0d3b24] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#15633c]"
          >
            Talk to Royal Cyber
            <span>→</span>
          </a>
        </section>
      </div>
    </div>
  );
}
