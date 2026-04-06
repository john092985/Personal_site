import Link from "next/link";
import { Container } from "@/components/container";
import { ProjectShowcase } from "@/components/project-showcase";
import { allProjects } from "@/data/portfolio";

export const metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <Container className="max-w-[92rem] space-y-12 py-12 sm:py-16 xl:max-w-[96rem]">
      <section className="grid gap-6 xl:grid-cols-[minmax(0,1.25fr)_minmax(22rem,0.75fr)]">
        <article className="scene-panel relative overflow-hidden rounded-[2.8rem] px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(190,170,128,0.18),transparent_24rem),radial-gradient(circle_at_82%_18%,rgba(158,177,191,0.18),transparent_18rem)]"
          />
          <div className="relative z-10">
            <div className="eyebrow-label">Works / Archive</div>
            <div className="section-rule mt-5 max-w-56" />
            <h1 className="balance mt-8 max-w-4xl font-serif text-[3.3rem] leading-[0.9] tracking-tightest text-ink sm:text-[4.4rem] lg:text-[5.4rem]">
              An archive of systems, studies, and interdisciplinary
              experiments.
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-muted sm:text-lg">
              Each project is framed as a larger scene rather than a small
              equal-weight card, so the archive feels curated, directional, and
              editorial.
            </p>
          </div>
        </article>

        <aside className="grid gap-6">
          <article className="scene-panel rounded-[2.3rem] px-6 py-7">
            <p className="eyebrow-label">Archive Logic</p>
            <h2 className="mt-6 font-serif text-3xl leading-tight text-ink">
              Narrative on one side, system signals on the other.
            </h2>
            <p className="mt-6 text-sm leading-7 text-muted">
              The goal is to make each project readable both as a story and as
              a technical artifact.
            </p>
          </article>

          <article className="rounded-[2.3rem] border border-[rgba(190,170,128,0.24)] bg-[linear-gradient(180deg,rgba(190,170,128,0.16),rgba(255,251,244,0.72))] px-6 py-7">
            <p className="eyebrow-label">Collection</p>
            <p className="mt-5 font-serif text-4xl leading-none text-ink">
              {allProjects.length}
            </p>
            <p className="mt-3 text-base leading-8 text-muted">
              Projects across research, engineering, accessibility, and
              community work.
            </p>
          </article>
        </aside>
      </section>

      <div className="space-y-8">
        {allProjects.map((project, index) => (
          <ProjectShowcase
            key={project.name}
            project={project}
            index={index}
            expanded
          />
        ))}
      </div>

      <section className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_minmax(20rem,24rem)]">
        <article className="rounded-[2.4rem] border border-[rgba(190,170,128,0.24)] bg-[linear-gradient(180deg,rgba(190,170,128,0.16),rgba(255,251,244,0.72))] px-6 py-7 sm:px-8 sm:py-8">
          <p className="eyebrow-label text-[rgba(95,104,116,0.82)]">Next</p>
          <h2 className="mt-6 max-w-2xl font-serif text-4xl leading-none text-ink sm:text-5xl">
            If one of these threads connects to your work, continue the
            conversation.
          </h2>
        </article>

        <article className="scene-panel rounded-[2.4rem] px-6 py-7 sm:px-8 sm:py-8">
          <p className="eyebrow-label">Contact</p>
          <p className="mt-5 text-base leading-8 text-muted">
            Open the contact page for recruiting, collaboration, or project
            discussion.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex rounded-full border border-[rgba(120,128,138,0.16)] px-5 py-3 text-sm font-medium text-ink hover:bg-[rgba(255,255,255,0.56)]"
            >
              Open Contact
            </Link>
          </div>
        </article>
      </section>
    </Container>
  );
}
