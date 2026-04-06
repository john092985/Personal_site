import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/container";
import { allProjects, getProjectBySlug } from "@/data/portfolio";

export function generateStaticParams() {
  return allProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project",
    };
  }

  return {
    title: project.name,
    description: project.description,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const detailLinks = project.links.filter(
    (link) => link.href !== `/projects/${project.slug}`,
  );

  return (
    <Container className="max-w-[92rem] space-y-12 py-12 sm:py-16 xl:max-w-[96rem]">
      <section className="grid gap-6 xl:grid-cols-[minmax(0,1.2fr)_minmax(22rem,0.8fr)]">
        <article className="scene-panel relative overflow-hidden rounded-[2.8rem] px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background: `radial-gradient(circle at top left, ${project.visual.accent}30, transparent 24rem), radial-gradient(circle at 82% 18%, ${project.visual.grid}45, transparent 18rem)`,
            }}
          />
          <div className="relative z-10">
            <div className="eyebrow-label">{project.category}</div>
            <div className="section-rule mt-5 max-w-56" />
            <h1 className="balance mt-8 max-w-4xl font-serif text-[3.2rem] leading-[0.92] tracking-tightest text-ink sm:text-[4.2rem] lg:text-[5.2rem]">
              {project.name}
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-muted sm:text-lg">
              {project.longDescription}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {detailLinks[0] ? (
                <Link
                  href={detailLinks[0].href}
                  className="rounded-full border border-[rgba(190,170,128,0.42)] bg-[rgba(190,170,128,0.14)] px-5 py-3 text-sm font-semibold text-ink hover:bg-[rgba(190,170,128,0.2)]"
                >
                  {detailLinks[0].label}
                </Link>
              ) : null}
              <Link
                href="/projects"
                className="rounded-full border border-[rgba(120,128,138,0.16)] px-5 py-3 text-sm font-medium text-muted hover:border-[rgba(190,170,128,0.45)] hover:text-ink"
              >
                Back to Projects
              </Link>
            </div>
          </div>
        </article>

        <aside className="grid gap-6">
          <article
            className="relative overflow-hidden rounded-[2.3rem] border p-6"
            style={{
              borderColor: `${project.visual.grid}66`,
              background: `linear-gradient(180deg, ${project.visual.surface}, rgba(255,255,255,0.92))`,
            }}
          >
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-70"
              style={{
                backgroundImage: `
                  linear-gradient(to right, ${project.visual.grid}2a 1px, transparent 1px),
                  linear-gradient(to bottom, ${project.visual.grid}2a 1px, transparent 1px)
                `,
                backgroundSize: "34px 34px",
              }}
            />
            <div className="relative">
              <p className="eyebrow-label" style={{ color: project.visual.accent }}>
                Exhibit {project.visual.code}
              </p>
              <h2 className="mt-6 font-serif text-4xl leading-none text-ink">
                {project.visual.label}
              </h2>
              <p className="mt-6 text-base leading-8 text-muted">
                {project.description}
              </p>
            </div>
          </article>

          <article className="scene-panel rounded-[2.3rem] px-6 py-7">
            <p className="eyebrow-label">Year</p>
            <p className="mt-5 font-serif text-4xl leading-none text-ink">
              {project.year}
            </p>
          </article>
        </aside>
      </section>

      <section className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_minmax(20rem,24rem)]">
        <article className="scene-panel rounded-[2.4rem] px-6 py-7 sm:px-8 sm:py-8">
          <div className="eyebrow-label">Highlights</div>
          <div className="section-rule mt-5 max-w-40" />
          <h2 className="mt-7 font-serif text-4xl leading-none tracking-tightest text-ink sm:text-5xl">
            Key signals from the work.
          </h2>
          <div className="mt-8 grid gap-4">
            {project.highlights.map((highlight) => (
              <div
                key={highlight}
                className="rounded-[1.5rem] border border-[rgba(120,128,138,0.14)] bg-[rgba(255,255,255,0.56)] px-5 py-5 text-sm leading-7 text-ink"
              >
                {highlight}
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-[2.4rem] border border-[rgba(190,170,128,0.24)] bg-[linear-gradient(180deg,rgba(190,170,128,0.16),rgba(255,251,244,0.72))] px-6 py-7 sm:px-8 sm:py-8">
          <p className="eyebrow-label">Tools and Focus Areas</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span
                key={item}
                className="meta-pill rounded-full px-4 py-2 text-sm"
              >
                {item}
              </span>
            ))}
          </div>
          {detailLinks.length > 1 ? (
            <div className="mt-8 flex flex-wrap gap-3">
              {detailLinks.slice(1).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-full border border-[rgba(120,128,138,0.16)] px-5 py-3 text-sm font-medium text-muted hover:border-[rgba(190,170,128,0.45)] hover:text-ink"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ) : null}
        </article>
      </section>
    </Container>
  );
}
