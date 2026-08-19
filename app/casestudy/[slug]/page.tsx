import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies } from "@/data/caseStudies";
import CaseStudyDetail from "@/components/CaseStudyDetail";

export function generateStaticParams() {
  return caseStudies.items.map((c) => ({ slug: c.slug }));
}

export const dynamicParams = false;

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const c = caseStudies.items.find((x) => x.slug === params.slug);
  return {
    title: c
      ? `${c.customer} — ${c.journey} | Royal Cyber Case Studies`
      : "Case Study — Royal Cyber",
    description: c?.summary,
  };
}

export default function CaseStudyDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const c = caseStudies.items.find((x) => x.slug === params.slug);
  if (!c) notFound();

  return (
    <div className="bg-gradient-to-b from-[#eef7f1] to-white">
      <div className="mx-auto max-w-5xl px-6 py-10 text-opti-ink">
        <div className="mb-5 flex items-center justify-between gap-3 text-sm">
          <Link
            href="/casestudy"
            className="inline-flex items-center gap-1.5 font-semibold text-opti-accent hover:underline"
          >
            <span>←</span> All case studies
          </Link>
          <span className="text-opti-muted">
            Case study {c.n} of{" "}
            {String(caseStudies.items.length).padStart(2, "0")}
          </span>
        </div>

        <CaseStudyDetail c={c} />

        <section className="mt-9 rounded-2xl border border-opti-line bg-opti-navy p-7">
          <h2 className="text-[18px] font-bold text-opti-ink">
            Explore a similar engagement
          </h2>
          <p className="mt-2 max-w-3xl text-sm text-opti-muted">
            The {c.customer} {c.journey.toLowerCase()} was delivered by the Royal
            Cyber Optimizely Center of Excellence. Tell us your objective and we
            will scope a comparable approach for your business.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href="https://www.royalcyber.com/contact-us/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-[#0d3b24] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#15633c]"
            >
              Talk to Royal Cyber
              <span>→</span>
            </a>
            <Link
              href="/casestudy"
              className="inline-flex items-center gap-1.5 rounded-full border border-opti-line bg-white px-5 py-2.5 text-sm font-semibold text-opti-accent transition hover:border-opti-accent"
            >
              Back to all case studies
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
