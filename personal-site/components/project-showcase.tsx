import Link from "next/link";
import type { PortfolioEntry } from "@/data/portfolio";

export function ProjectShowcase({
  project,
  index,
  expanded = false,
}: {
  project: PortfolioEntry;
  index: number;
  expanded?: boolean;
}) {
  const reverse = index % 2 === 1;
  const primaryLink = project.links[0];
  const secondaryLinks = project.links.slice(1, 3);

  return (
    <article className="rounded-[2.4rem] border border-[rgba(120,128,138,0.14)] bg-[rgba(255,252,247,0.8)] p-5 shadow-card sm:p-8">
      <div
        className={`grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch ${reverse ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1" : ""}`}
      >
        <div className="flex flex-col justify-between rounded-[2rem] border border-[rgba(120,128,138,0.12)] bg-[rgba(255,255,255,0.62)] p-6 sm:p-8">
          <div>
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="eyebrow-label">{project.category}</p>
                <h3 className="mt-4 max-w-xl font-serif text-4xl leading-none text-ink sm:text-5xl">
                  {project.name}
                </h3>
              </div>
              <span className="meta-pill rounded-full px-3 py-1 text-xs uppercase tracking-[0.22em]">
                {project.year}
              </span>
            </div>

            <p className="mt-6 max-w-xl text-base leading-8 text-muted sm:text-lg">
              {expanded ? project.longDescription : project.description}
            </p>

            <div className="mt-8 grid gap-3">
              {project.highlights.slice(0, 2).map((highlight) => (
                <div
                  key={highlight}
                  className="rounded-[1.2rem] border border-[rgba(120,128,138,0.12)] bg-[rgba(255,255,255,0.52)] px-4 py-4 text-sm leading-7 text-ink"
                >
                  {highlight}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <div className="flex flex-wrap gap-2">
              {project.stack.slice(0, 4).map((item) => (
                <span key={item} className="meta-pill rounded-full px-4 py-2 text-sm">
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {primaryLink ? (
                <Link
                  href={primaryLink.href}
                  className="rounded-full border border-[rgba(190,170,128,0.42)] bg-[rgba(190,170,128,0.14)] px-5 py-3 text-sm font-semibold text-ink hover:bg-[rgba(190,170,128,0.2)]"
                >
                  {primaryLink.label}
                </Link>
              ) : null}
              {secondaryLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-full border border-[rgba(120,128,138,0.16)] px-5 py-3 text-sm font-medium text-muted hover:border-[rgba(190,170,128,0.45)] hover:text-ink"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div
          className="relative overflow-hidden rounded-[2rem] border border-[rgba(120,128,138,0.12)] p-6 sm:p-8"
          style={{
            background: `linear-gradient(180deg, ${project.visual.surface}, rgba(255,255,255,0.9))`,
          }}
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-80"
            style={{
              backgroundImage: `
                linear-gradient(to right, ${project.visual.grid}33 1px, transparent 1px),
                linear-gradient(to bottom, ${project.visual.grid}33 1px, transparent 1px)
              `,
              backgroundSize: "36px 36px",
            }}
          />
          <div
            aria-hidden="true"
            className="absolute -right-10 top-8 h-44 w-44 rounded-full border"
            style={{ borderColor: `${project.visual.accent}50` }}
          />
          <div
            aria-hidden="true"
            className="absolute left-10 top-14 h-20 w-20 rounded-full border"
            style={{ borderColor: `${project.visual.accent}55` }}
          />
          <div
            aria-hidden="true"
            className="absolute bottom-12 left-8 right-8 h-px"
            style={{
              background: `linear-gradient(90deg, transparent, ${project.visual.accent}, transparent)`,
            }}
          />

          <div className="relative flex h-full min-h-[22rem] flex-col justify-between">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="eyebrow-label" style={{ color: `${project.visual.accent}` }}>
                  Exhibit {project.visual.code}
                </p>
                <p className="mt-3 max-w-xs font-serif text-4xl leading-none text-ink sm:text-5xl">
                  {project.visual.label}
                </p>
              </div>
              <div
                className="rounded-full border px-4 py-2 text-xs uppercase tracking-[0.24em]"
                style={{
                  borderColor: `${project.visual.accent}50`,
                  color: "#44505d",
                  backgroundColor: "rgba(255,255,255,0.48)",
                }}
              >
                {project.year}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-[1.4rem] border border-white/50 bg-[rgba(255,255,255,0.54)] p-5 backdrop-blur-sm">
                <p className="eyebrow-label">Project Signal</p>
                <p className="mt-4 text-base leading-8 text-ink">
                  {project.description}
                </p>
              </div>
              <div className="flex flex-col justify-between rounded-[1.4rem] border border-white/50 bg-[rgba(255,255,255,0.4)] p-5">
                <div>
                  <p className="eyebrow-label">Stack</p>
                  <div className="mt-4 space-y-2 text-sm leading-7 text-ink">
                    {project.stack.slice(0, 3).map((item) => (
                      <div key={item}>{item}</div>
                    ))}
                  </div>
                </div>
                <div
                  className="mt-6 text-[3.8rem] font-serif leading-none"
                  style={{ color: `${project.visual.accent}` }}
                >
                  {project.visual.code}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
