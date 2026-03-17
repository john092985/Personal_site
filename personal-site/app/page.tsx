import Link from "next/link";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import {
  contactLinks,
  coursework,
  featuredProjects,
  skills,
} from "@/data/portfolio";

export default function HomePage() {
  return (
    <Container className="space-y-14 py-4 sm:space-y-16 sm:py-6">
      <PageHero
        eyebrow="Portfolio"
        title="Jingxuan Lyu"
        description="UC Berkeley student in Computer Science and Data Science building practical software with clear structure, thoughtful details, and strong technical foundations."
        actions={[
          { href: "/projects", label: "View Projects" },
          { href: "/contact", label: "Get In Touch", variant: "secondary" },
        ]}
      />

      <section className="grid gap-6 rounded-[2rem] border border-border/80 bg-surface/90 p-6 shadow-card sm:p-8 lg:grid-cols-[1.3fr_0.9fr]">
        <div className="space-y-5">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted">
            Introduction
          </p>
          <h2 className="max-w-2xl font-serif text-3xl leading-tight tracking-tightest text-ink sm:text-4xl">
            Designing polished user experiences and building dependable systems.
          </h2>
          <p className="max-w-2xl text-base leading-8 text-muted sm:text-lg">
            I focus on software that feels clean and credible from both the user
            and engineering perspectives. My interests span full-stack product
            work, data-driven applications, and the disciplined execution needed
            for internships, research, and real-world teams.
          </p>
        </div>

        <div className="grid gap-4 rounded-[1.5rem] border border-border bg-accent/45 p-5">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-muted">
              Coursework
            </p>
            <ul className="mt-3 space-y-2 text-sm leading-7 text-ink">
              {coursework.slice(0, 5).map((course) => (
                <li key={course}>{course}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-muted">
              Core Skills
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {skills.slice(0, 8).map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-border bg-surface px-3 py-1 text-sm text-muted"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Selected Work"
          title="Featured projects"
          description="A few examples of products and systems that reflect my interests in thoughtful implementation, data, and software quality."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </section>

      <section className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
        <div className="space-y-5">
          <SectionHeading
            eyebrow="Capabilities"
            title="Coursework and skills"
            description="A concise snapshot of the technical foundation behind my project work."
          />
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-border bg-surface px-4 py-2 text-sm text-muted"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-border bg-surface p-6 shadow-card sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted">
            Relevant Coursework
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {coursework.map((course) => (
              <div
                key={course}
                className="rounded-2xl border border-border/80 bg-canvas px-4 py-3 text-sm text-ink"
              >
                {course}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="rounded-[2rem] border border-border bg-surface p-6 shadow-card sm:p-8">
        <SectionHeading
          eyebrow="Contact"
          title="Open to internships, research, and thoughtful collaborations"
          description="Whether you are hiring, recruiting, or reaching out from Berkeley, I am happy to connect."
        />
        <div className="mt-8 flex flex-wrap gap-3">
          {contactLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="rounded-full border border-border px-5 py-3 text-sm font-medium text-muted transition hover:border-ink hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </section>
    </Container>
  );
}
