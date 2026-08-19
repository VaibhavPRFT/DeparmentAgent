import type { Metadata } from "next";
import Link from "next/link";
import { accelerators } from "@/data/accelerators";

export const metadata: Metadata = {
  title: "Royal Cyber Accelerators — Optimizely Center of Excellence",
  description:
    "Royal Cyber accelerators that extend Optimizely with applied AI, analytics and automation — each mapped to the customer pain it solves and the value it creates.",
};

export default function AcceleratorsPage() {
  return (
    <div className="bg-gradient-to-b from-[#eef7f1] to-white">
      <div className="mx-auto max-w-5xl px-6 py-10 text-opti-ink">
        <header className="mb-7 border-b border-opti-line pb-6">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-rc-accent">
            {accelerators.org} · Optimizely Center of Excellence
          </p>
          <h1 className="mt-2 text-[28px] font-extrabold tracking-tight">
            {accelerators.title}
          </h1>
          <p className="mt-1 text-[16px] font-semibold text-rc-blue">
            {accelerators.heading}
          </p>
          <p className="mt-2.5 max-w-3xl text-sm text-opti-muted">
            {accelerators.intro} · Updated {accelerators.generated}
          </p>
        </header>

        <div className="grid gap-5 lg:grid-cols-2">
          {accelerators.items.map((a) => (
            <Link
              key={a.slug}
              href={`/accelerators/${a.slug}`}
              className="group flex flex-col rounded-2xl border border-opti-line bg-opti-panel p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-xl"
            >
              <div className="flex items-start gap-3.5">
                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-opti-accent text-base font-extrabold text-white">
                  {a.n}
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[11px] font-bold uppercase tracking-[0.13em] text-opti-teal">
                      {a.category}
                    </span>
                    <span className="rounded-full border border-opti-line bg-opti-chip px-2 py-0.5 text-[10.5px] font-semibold uppercase tracking-wide text-opti-teal">
                      {a.maturity}
                    </span>
                    {a.video ? (
                      <span className="rounded-full border border-[#d8c9f2] bg-[#efe9fb] px-2 py-0.5 text-[10.5px] font-semibold uppercase tracking-wide text-[#5b2bb5]">
                        ▶ Video
                      </span>
                    ) : null}
                  </div>
                  <h2 className="mt-1.5 text-[19px] font-bold leading-tight">
                    {a.name}
                  </h2>
                  <p className="mt-0.5 text-[14px] font-medium text-rc-accent">
                    {a.tagline}
                  </p>
                </div>
              </div>

              <p className="mt-4 line-clamp-3 text-[13.5px] leading-relaxed text-opti-muted">
                {a.overview}
              </p>

              <div className="mt-3 inline-flex items-center gap-2 self-start rounded-lg border border-opti-line bg-white px-3 py-1.5 text-[12.5px]">
                <span className="font-semibold text-opti-teal">
                  Customer value
                </span>
                <span className="text-opti-ink">{a.customerValue}</span>
              </div>

              <div className="mt-5 flex items-center gap-1.5 text-[13px] font-semibold text-opti-accent">
                View details
                <span className="transition group-hover:translate-x-0.5">→</span>
              </div>
            </Link>
          ))}
        </div>

        <section className="mt-9 rounded-2xl border border-opti-line bg-opti-navy p-7">
          <h2 className="text-[18px] font-bold text-opti-ink">
            Put an accelerator to work
          </h2>
          <p className="mt-2 max-w-3xl text-sm text-opti-muted">
            Each accelerator is delivered by the Royal Cyber Optimizely Center
            of Excellence as a defined-scope engagement, with managed services
            and optimization to follow. Match the buying signals to an account,
            and we will scope a pilot.
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
