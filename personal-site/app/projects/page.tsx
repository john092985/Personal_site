import Link from "next/link";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { ProjectCard } from "@/components/project-card";
import { allProjects } from "@/data/portfolio";

export const metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <Container className="space-y-12 py-12 sm:py-16">
      <PageHero
        eyebrow="Projects"
        title="A portfolio of product-minded and technically grounded work."
        description="These projects highlight my interests in full-stack development, data, and building interfaces that feel polished without becoming overly complicated."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        {allProjects.map((project) => (
          <ProjectCard key={project.name} project={project} expanded />
        ))}
      </div>

      <section className="rounded-[2rem] border border-border bg-surface p-6 shadow-card sm:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-muted">
              More Work
            </p>
            <h2 className="mt-3 font-serif text-3xl text-ink">
              Interested in seeing more?
            </h2>
          </div>
          <Link
            href="/contact"
            className="w-fit rounded-full border border-ink bg-ink px-5 py-3 text-sm font-medium text-white"
          >
            Reach Out
          </Link>
        </div>
      </section>
    </Container>
  );
}
