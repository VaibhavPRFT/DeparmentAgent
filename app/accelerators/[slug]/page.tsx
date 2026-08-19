import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { accelerators } from "@/data/accelerators";
import AcceleratorDetail from "@/components/AcceleratorDetail";

export function generateStaticParams() {
  return accelerators.items.map((a) => ({ slug: a.slug }));
}

export const dynamicParams = false;

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const a = accelerators.items.find((x) => x.slug === params.slug);
  return {
    title: a
      ? `${a.name} — Royal Cyber Accelerators`
      : "Accelerator — Royal Cyber",
    description: a?.overview,
  };
}

export default function AcceleratorDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const a = accelerators.items.find((x) => x.slug === params.slug);
  if (!a) notFound();

  return (
    <div className="bg-gradient-to-b from-[#eef7f1] to-white">
      <div className="mx-auto max-w-5xl px-6 py-10 text-opti-ink">
        <div className="mb-5 flex items-center justify-between gap-3 text-sm">
          <Link
            href="/accelerators"
            className="inline-flex items-center gap-1.5 font-semibold text-opti-accent hover:underline"
          >
            <span>←</span> All accelerators
          </Link>
          <span className="text-opti-muted">
            Accelerator {a.n} of{" "}
            {String(accelerators.items.length).padStart(2, "0")}
          </span>
        </div>

        <AcceleratorDetail a={a} />

        <section className="mt-9 rounded-2xl border border-opti-line bg-opti-navy p-7">
          <h2 className="text-[18px] font-bold text-opti-ink">
            Put this accelerator to work
          </h2>
          <p className="mt-2 max-w-3xl text-sm text-opti-muted">
            {a.name} is delivered by the Royal Cyber Optimizely Center of
            Excellence as a defined-scope engagement, with managed services and
            optimization to follow.
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
              href="/accelerators"
              className="inline-flex items-center gap-1.5 rounded-full border border-opti-line bg-white px-5 py-2.5 text-sm font-semibold text-opti-accent transition hover:border-opti-accent"
            >
              Back to all accelerators
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
