import type { Metadata } from "next";
import { report } from "@/data/report";

export const metadata: Metadata = {
  title: "Optimizely Trend & Content Opportunities — Royal Cyber",
};

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="break-all rounded-full border border-opti-line bg-opti-chip px-2.5 py-1 text-xs text-opti-muted">
      {children}
    </span>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <section className="my-6 rounded-2xl border border-opti-line bg-opti-panel p-6 sm:p-7">
      {children}
    </section>
  );
}

function H2({
  children,
  sub,
}: {
  children: React.ReactNode;
  sub?: string;
}) {
  return (
    <h2 className="mb-4 text-xl font-bold">
      {children}
      {sub ? (
        <span className="ml-2 text-sm font-normal text-opti-muted">{sub}</span>
      ) : null}
    </h2>
  );
}

export default function ReportPage() {
  return (
    <div className="bg-opti-navy">
      <div className="mx-auto max-w-5xl px-6 py-10 text-opti-ink">
        <header>
          <div className="text-xs font-bold uppercase tracking-[0.16em] text-opti-teal">
            {report.eyebrow}
          </div>
          <h1 className="mt-2 text-3xl font-extrabold leading-tight sm:text-4xl">
            {report.title}
          </h1>
          <p className="mt-1 text-sm text-opti-muted">
            Generated {report.generated}
          </p>
          <p className="mt-4 max-w-3xl text-[17px] text-opti-muted">
            {report.lede}
          </p>
        </header>

        {/* TRENDS */}
        <Card>
          <H2 sub="· ranked by momentum">Top Emerging Trends</H2>
          {report.trends.map((t) => (
            <div
              key={t.rank}
              className="my-4 border-l-[3px] border-opti-accent py-1.5 pl-4"
            >
              <h3 className="text-base font-semibold">
                {t.rank}. {t.title}{" "}
                <span className="text-opti-muted">
                  (momentum {t.momentum})
                </span>
              </h3>
              <p className="mt-1 text-opti-muted">{t.body}</p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {t.sources.map((s) => (
                  <Chip key={s}>{s}</Chip>
                ))}
              </div>
            </div>
          ))}
        </Card>

        {/* RELEASES */}
        <Card>
          <H2 sub="· latest from Release notes by product">Release Updates</H2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="text-left text-xs uppercase tracking-wide text-opti-teal">
                  <th className="border-b border-opti-line px-3 py-2.5">
                    Product
                  </th>
                  <th className="border-b border-opti-line px-3 py-2.5">Date</th>
                  <th className="border-b border-opti-line px-3 py-2.5">
                    Release Highlight
                  </th>
                  <th className="border-b border-opti-line px-3 py-2.5">Type</th>
                </tr>
              </thead>
              <tbody>
                {report.releases.map((r, i) => (
                  <tr key={i}>
                    <td className="border-b border-opti-line px-3 py-2.5 align-top font-medium whitespace-nowrap">
                      {r.product}
                    </td>
                    <td className="border-b border-opti-line px-3 py-2.5 align-top whitespace-nowrap text-opti-muted">
                      {r.date}
                    </td>
                    <td className="border-b border-opti-line px-3 py-2.5 align-top text-opti-muted">
                      {r.highlight}
                    </td>
                    <td className="border-b border-opti-line px-3 py-2.5 align-top whitespace-nowrap text-opti-muted">
                      {r.type}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* EVENTS */}
        <Card>
          <H2 sub="· from Optimizely Events & webinars">Upcoming Events</H2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="text-left text-xs uppercase tracking-wide text-opti-teal">
                  <th className="border-b border-opti-line px-3 py-2.5">
                    Event
                  </th>
                  <th className="border-b border-opti-line px-3 py-2.5">
                    When / Format
                  </th>
                  <th className="border-b border-opti-line px-3 py-2.5">
                    Focus
                  </th>
                  <th className="border-b border-opti-line px-3 py-2.5">
                    Register
                  </th>
                </tr>
              </thead>
              <tbody>
                {report.events.map((e, i) => (
                  <tr key={i}>
                    <td className="border-b border-opti-line px-3 py-2.5 align-top font-medium">
                      {e.event}
                    </td>
                    <td className="border-b border-opti-line px-3 py-2.5 align-top whitespace-nowrap text-opti-muted">
                      {e.when}
                    </td>
                    <td className="border-b border-opti-line px-3 py-2.5 align-top text-opti-muted">
                      {e.focus}
                    </td>
                    <td className="border-b border-opti-line px-3 py-2.5 align-top">
                      <a
                        href={`https://${e.register}`}
                        target="_blank"
                        rel="noreferrer"
                        className="break-all text-opti-accent hover:underline"
                      >
                        {e.register}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* BLOGS */}
        <Card>
          <H2>High-Value Blog Opportunities</H2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="text-left text-xs uppercase tracking-wide text-opti-teal">
                  <th className="border-b border-opti-line px-3 py-2.5">
                    Title
                  </th>
                  <th className="border-b border-opti-line px-3 py-2.5">
                    Audience
                  </th>
                  <th className="border-b border-opti-line px-3 py-2.5">
                    Engagement
                  </th>
                  <th className="border-b border-opti-line px-3 py-2.5">
                    Difficulty
                  </th>
                  <th className="border-b border-opti-line px-3 py-2.5">
                    Why Now
                  </th>
                </tr>
              </thead>
              <tbody>
                {report.blogs.map((b, i) => (
                  <tr key={i}>
                    <td className="border-b border-opti-line px-3 py-2.5 align-top font-medium">
                      {b.title}
                    </td>
                    <td className="border-b border-opti-line px-3 py-2.5 align-top text-opti-muted">
                      {b.audience}
                    </td>
                    <td className="border-b border-opti-line px-3 py-2.5 align-top text-opti-muted">
                      {b.engagement}
                    </td>
                    <td className="border-b border-opti-line px-3 py-2.5 align-top text-opti-muted">
                      {b.difficulty}
                    </td>
                    <td className="border-b border-opti-line px-3 py-2.5 align-top text-opti-muted">
                      {b.whyNow}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* WHITEPAPERS */}
        <Card>
          <H2>Whitepaper Opportunities</H2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="text-left text-xs uppercase tracking-wide text-opti-teal">
                  <th className="border-b border-opti-line px-3 py-2.5">
                    Topic
                  </th>
                  <th className="border-b border-opti-line px-3 py-2.5">
                    Business Value
                  </th>
                  <th className="border-b border-opti-line px-3 py-2.5">
                    Technical Depth
                  </th>
                  <th className="border-b border-opti-line px-3 py-2.5">
                    Ideal Audience
                  </th>
                </tr>
              </thead>
              <tbody>
                {report.whitepapers.map((w, i) => (
                  <tr key={i}>
                    <td className="border-b border-opti-line px-3 py-2.5 align-top font-medium">
                      {w.topic}
                    </td>
                    <td className="border-b border-opti-line px-3 py-2.5 align-top text-opti-muted">
                      {w.businessValue}
                    </td>
                    <td className="border-b border-opti-line px-3 py-2.5 align-top text-opti-muted">
                      {w.technicalDepth}
                    </td>
                    <td className="border-b border-opti-line px-3 py-2.5 align-top text-opti-muted">
                      {w.audience}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* LINKEDIN */}
        <Card>
          <H2>LinkedIn Post Ideas</H2>
          {report.linkedin.map((g) => (
            <div key={g.group} className="my-3">
              <h4 className="mb-1.5 text-sm font-semibold text-opti-accent">
                {g.group}
              </h4>
              <ul className="list-disc space-y-1.5 pl-5 text-opti-muted">
                {g.ideas.map((idea, i) => (
                  <li key={i}>{idea}</li>
                ))}
              </ul>
            </div>
          ))}
        </Card>
      </div>
    </div>
  );
}
