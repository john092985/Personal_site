import Link from "next/link";
import { Container } from "@/components/container";
import type { PortfolioEntry } from "@/data/portfolio";

export function PortfolioDetailPage({
  entry,
  kindLabel,
  backHref,
  backLabel,
}: {
  entry: PortfolioEntry;
  kindLabel: "Project" | "Research";
  backHref: string;
  backLabel: string;
}) {
  const entryHref =
    kindLabel === "Project"
      ? `/projects/${entry.slug}`
      : `/research/${entry.slug}`;

  const detailLinks = entry.links.filter((link) => link.href !== entryHref);

  const primaryActions = [
    ...(entry.paper ? [entry.paper] : []),
    ...detailLinks.slice(0, 1),
  ];

  const secondaryActions = detailLinks.slice(1);

  const summaryCards = [
    { label: "Type", value: entry.category },
    { label: "Year", value: entry.year },
    { label: "Label", value: entry.visual.label },
  ];

  return (
    <Container className="max-w-[72rem] py-8 sm:py-10">
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.25fr)_minmax(16rem,0.75fr)]">
        <section className="scene-panel relative overflow-hidden rounded-[1.5rem] px-6 py-7 sm:px-8 sm:py-8">
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background: `radial-gradient(circle at top left, ${entry.visual.accent}22, transparent 24rem), radial-gradient(circle at 88% 20%, ${entry.visual.grid}40, transparent 18rem)`,
            }}
          />
          <div className="relative z-10">
            <div className="eyebrow-label">
              {kindLabel} / {entry.category}
            </div>
            <h1 className="mt-5 font-serif text-[2.5rem] leading-[1.02] text-ink sm:text-[3.2rem]">
              {entry.name}
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-muted">
              {entry.longDescription}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {primaryActions.map((action, index) => (
                <Link
                  key={`${action.href}-${action.label}`}
                  href={action.href}
                  className={
                    index === 0
                      ? "rounded-full border border-[rgba(31,40,51,0.12)] bg-[rgba(31,40,51,0.06)] px-5 py-3 text-sm font-semibold text-ink hover:bg-[rgba(31,40,51,0.1)]"
                      : "rounded-full border border-[rgba(31,40,51,0.12)] px-5 py-3 text-sm font-medium text-muted hover:border-[rgba(31,40,51,0.22)] hover:text-ink"
                  }
                >
                  {action.label}
                </Link>
              ))}
              <Link
                href={backHref}
                className="rounded-full border border-[rgba(31,40,51,0.12)] px-5 py-3 text-sm font-medium text-muted hover:border-[rgba(31,40,51,0.22)] hover:text-ink"
              >
                {backLabel}
              </Link>
            </div>
          </div>
        </section>

        <aside className="grid gap-4">
          <article
            className="rounded-[1.3rem] border px-5 py-5"
            style={{
              borderColor: `${entry.visual.grid}88`,
              background: `linear-gradient(180deg, ${entry.visual.surface}, rgba(250,250,250,0.98))`,
            }}
          >
            <p className="eyebrow-label" style={{ color: entry.visual.accent }}>
              {kindLabel} {entry.visual.code}
            </p>
            <h2 className="mt-4 font-serif text-3xl leading-tight text-ink">
              {entry.visual.label}
            </h2>
            <p className="mt-4 text-sm leading-7 text-muted">
              {entry.description}
            </p>
          </article>

          <article className="scene-panel rounded-[1.3rem] px-5 py-5">
            <p className="eyebrow-label">Snapshot</p>
            <div className="mt-4 grid gap-3">
              {summaryCards.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[1rem] border border-[rgba(31,40,51,0.08)] bg-[rgba(255,255,255,0.72)] px-4 py-3"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-ink">{item.value}</p>
                </div>
              ))}
            </div>
          </article>
        </aside>
      </div>

      <section className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]">
        <article className="scene-panel rounded-[1.5rem] px-6 py-7 sm:px-8">
          <div className="eyebrow-label">Overview</div>
          <h2 className="mt-4 font-serif text-3xl text-ink">What this work focused on</h2>
          <p className="mt-5 text-base leading-8 text-muted">{entry.description}</p>
          <div className="mt-7 flex flex-wrap gap-2">
            {entry.stack.map((item) => (
              <span key={item} className="meta-pill rounded-full px-4 py-2 text-sm">
                {item}
              </span>
            ))}
          </div>
        </article>

        <article className="scene-panel rounded-[1.5rem] px-6 py-7 sm:px-8">
          <div className="eyebrow-label">Highlights</div>
          <h2 className="mt-4 font-serif text-3xl text-ink">Key takeaways</h2>
          <div className="mt-6 grid gap-3">
            {entry.highlights.map((highlight) => (
              <div
                key={highlight}
                className="rounded-[1rem] border border-[rgba(31,40,51,0.08)] bg-[rgba(255,255,255,0.72)] px-4 py-4 text-sm leading-7 text-ink"
              >
                {highlight}
              </div>
            ))}
          </div>
        </article>
      </section>

      {secondaryActions.length > 0 ? (
        <section className="mt-6">
          <article className="scene-panel rounded-[1.5rem] px-6 py-6 sm:px-8">
            <div className="eyebrow-label">Related Links</div>
            <div className="mt-5 flex flex-wrap gap-3">
              {secondaryActions.map((action) => (
                <Link
                  key={`${action.href}-${action.label}`}
                  href={action.href}
                  className="rounded-full border border-[rgba(31,40,51,0.12)] px-5 py-3 text-sm font-medium text-muted hover:border-[rgba(31,40,51,0.22)] hover:text-ink"
                >
                  {action.label}
                </Link>
              ))}
            </div>
          </article>
        </section>
      ) : null}
    </Container>
  );
}
