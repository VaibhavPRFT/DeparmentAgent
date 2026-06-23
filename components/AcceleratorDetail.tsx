import type { Accelerator } from "@/data/accelerators";

const LABEL = "text-[11px] font-bold uppercase tracking-[0.14em] text-opti-teal";

function Label({ children }: { children: React.ReactNode }) {
  return <div className={LABEL}>{children}</div>;
}

function youTubeId(url: string): string | null {
  const m = url.match(/(?:youtu\.be\/|[?&]v=|\/embed\/|\/shorts\/)([A-Za-z0-9_-]{11})/);
  return m ? m[1] : null;
}

function VideoSection({ video }: { video?: Accelerator["video"] }) {
  const id = video?.url ? youTubeId(video.url) : null;
  return (
    <div>
      <Label>Walkthrough Video</Label>
      {id ? (
        <div className="mt-3">
          {video?.title ? (
            <p className="mb-2 text-[14px] font-semibold text-opti-ink">
              {video.title}
            </p>
          ) : null}
          <div className="relative w-full overflow-hidden rounded-xl border border-opti-line bg-black pt-[56.25%]">
            <iframe
              className="absolute inset-0 h-full w-full"
              src={`https://www.youtube.com/embed/${id}`}
              title={video?.title ?? "Accelerator video"}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <a
            href={video!.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block text-[13px] font-semibold text-opti-accent hover:underline"
          >
            Watch on YouTube →
          </a>
        </div>
      ) : (
        <div className="mt-3 flex flex-col items-center justify-center rounded-xl border border-dashed border-opti-line bg-opti-chip px-6 py-10 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-xl text-opti-teal shadow-sm">
            ▶
          </div>
          <p className="mt-3 text-[14px] font-semibold text-opti-ink">
            Video coming soon
          </p>
          <p className="mt-1 max-w-md text-[12.5px] text-opti-muted">
            A walkthrough video will appear here once a link is added for this
            accelerator (set a `video` URL in the accelerators source).
          </p>
        </div>
      )}
    </div>
  );
}

export default function AcceleratorDetail({ a }: { a: Accelerator }) {
  return (
    <section className="overflow-hidden rounded-2xl border border-opti-line bg-opti-panel shadow-sm">
      {/* Header band */}
      <div className="border-b border-opti-line bg-gradient-to-r from-[#eef7f1] to-white p-6 sm:p-7">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-opti-accent text-lg font-extrabold text-white">
            {a.n}
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className={LABEL}>{a.category}</span>
              <span className="rounded-full border border-opti-line bg-opti-chip px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-opti-teal">
                {a.maturity}
              </span>
            </div>
            <h2 className="mt-1.5 text-[22px] font-bold leading-tight text-opti-ink">
              {a.name}
            </h2>
            <p className="mt-1 text-[15px] font-medium text-rc-accent">
              {a.tagline}
            </p>
          </div>
        </div>
        <p className="mt-4 max-w-3xl text-[14px] leading-relaxed text-opti-muted">
          {a.overview}
        </p>
        <div className="mt-4 inline-flex items-center gap-2 rounded-lg border border-opti-line bg-white px-3 py-2 text-[13px]">
          <span className="font-semibold text-opti-teal">Customer value</span>
          <span className="text-opti-ink">{a.customerValue}</span>
        </div>
      </div>

      {/* Body */}
      <div className="space-y-7 p-6 sm:p-7">
        <VideoSection video={a.video} />

        <div>
          <Label>Key Benefits</Label>
          <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {a.benefits.map((b, i) => (
              <div
                key={i}
                className="rounded-xl border border-opti-line bg-opti-chip p-4"
              >
                <h3 className="text-[14px] font-semibold text-opti-ink">
                  {b.title}
                </h3>
                <p className="mt-1 text-[12.5px] text-opti-muted">{b.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          <div className="rounded-xl border border-opti-line border-l-4 border-l-opti-accent bg-white p-5">
            <Label>The Challenge</Label>
            <h3 className="mt-1.5 text-[15px] font-semibold text-opti-ink">
              {a.challenge.title}
            </h3>
            <p className="mt-1 text-[13.5px] text-opti-muted">
              {a.challenge.text}
            </p>
          </div>
          <div className="rounded-xl border border-opti-line bg-white p-5">
            <Label>How This Accelerator Resolves It</Label>
            <ul className="mt-2 list-disc space-y-1.5 pl-[18px] text-[13.5px] text-opti-muted">
              {a.resolves.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          <div className="rounded-xl border border-opti-line bg-white p-5">
            <Label>Ideal Customer Profile</Label>
            <p className="mt-2 text-[13.5px] text-opti-muted">
              {a.idealCustomer}
            </p>
          </div>
          <div className="rounded-xl border border-opti-line bg-white p-5">
            <Label>Signals to Look For</Label>
            <div className="mt-2.5 flex flex-wrap gap-2">
              {a.signals.map((s, i) => (
                <span
                  key={i}
                  className="rounded-full border border-opti-line bg-opti-chip px-3 py-1 text-[12.5px] text-opti-ink"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          <div className="rounded-xl border border-opti-line bg-opti-chip p-5">
            <Label>Technical Standpoint</Label>
            <ul className="mt-2 list-disc space-y-1.5 pl-[18px] text-[13px] text-opti-muted">
              {a.technical.map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-opti-line bg-white p-5">
            <Label>Value for Optimizely</Label>
            <p className="mt-2 text-[13.5px] text-opti-muted">
              {a.valueOptimizely}
            </p>
          </div>
          <div className="rounded-xl border border-opti-line bg-white p-5">
            <Label>Value for Royal Cyber</Label>
            <p className="mt-2 text-[13.5px] text-opti-muted">
              {a.valueRoyalCyber}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
