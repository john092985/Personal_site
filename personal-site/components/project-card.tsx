import Link from "next/link";
import type { Project } from "@/data/portfolio";

export function ProjectCard({
  project,
  expanded = false,
}: {
  project: Project;
  expanded?: boolean;
}) {
  return (
    <article className="flex h-full flex-col rounded-[1.75rem] border border-border bg-surface p-6 shadow-card">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.18em] text-muted">
            {project.category}
          </p>
          <h3 className="mt-3 font-serif text-2xl text-ink">{project.name}</h3>
        </div>
        <span className="rounded-full border border-border px-3 py-1 text-xs uppercase tracking-[0.18em] text-muted">
          {project.year}
        </span>
      </div>

      <p className="mt-5 text-sm leading-7 text-muted">
        {expanded ? project.longDescription : project.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <span
            key={item}
            className="rounded-full border border-border bg-canvas px-3 py-1 text-xs text-muted"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        {project.links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="rounded-full border border-border px-4 py-2 text-sm text-muted transition hover:border-ink hover:text-ink"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </article>
  );
}
