import Link from "next/link";
import type { PortfolioEntry } from "@/data/portfolio";

export function ProjectCard({
  project,
  expanded = false,
}: {
  project: PortfolioEntry;
  expanded?: boolean;
}) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-[rgba(120,128,138,0.14)] bg-[linear-gradient(180deg,rgba(255,252,247,0.96),rgba(246,240,231,0.96))] p-6 shadow-card">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(circle at top left, rgba(190,170,128,0.12), transparent 18rem)",
        }}
      />
      <div className="relative flex items-start justify-between gap-4">
        <div className="max-w-[32rem]">
          <p className="text-sm uppercase tracking-[0.22em] text-muted">
            {project.category}
          </p>
          <h3 className="mt-4 font-serif text-3xl leading-tight text-ink">
            <Link
              href={`/projects/${project.slug}`}
              className="transition hover:text-[rgba(157,135,93,0.92)]"
            >
              {project.name}
            </Link>
          </h3>
        </div>
        <span className="meta-pill rounded-full px-3 py-1 text-xs uppercase tracking-[0.22em]">
          {project.year}
        </span>
      </div>

      <p className="relative mt-6 max-w-2xl text-sm leading-7 text-muted sm:text-[0.96rem]">
        {expanded ? project.longDescription : project.description}
      </p>

      <div className="relative mt-8 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <span
            key={item}
            className="meta-pill rounded-full px-3 py-1 text-xs"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="section-rule relative mt-8" />

      <div className="relative mt-6 flex flex-wrap gap-3">
        {project.links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="rounded-full border border-[rgba(120,128,138,0.16)] px-4 py-2 text-sm text-muted hover:border-[rgba(190,170,128,0.45)] hover:text-ink"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </article>
  );
}
