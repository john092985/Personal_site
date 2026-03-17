import Link from "next/link";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { education, experience, leadership, skills } from "@/data/portfolio";

export const metadata = {
  title: "Resume",
};

function ResumeSection({
  title,
  items,
}: {
  title: string;
  items: Array<{
    title: string;
    subtitle: string;
    period: string;
    body: string;
  }>;
}) {
  return (
    <section className="rounded-[2rem] border border-border bg-surface p-6 shadow-card sm:p-8">
      <SectionHeading eyebrow="Resume" title={title} />
      <div className="mt-8 space-y-6">
        {items.map((item) => (
          <article
            key={`${item.title}-${item.period}`}
            className="rounded-[1.5rem] border border-border/80 bg-canvas p-5"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-1 text-sm text-muted">{item.subtitle}</p>
              </div>
              <p className="text-sm text-muted">{item.period}</p>
            </div>
            <p className="mt-4 text-sm leading-7 text-muted">{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function ResumePage() {
  return (
    <Container className="space-y-12 py-12 sm:py-16">
      <PageHero
        eyebrow="Resume"
        title="Academic background, technical strengths, and experience themes."
        description="A concise, web-friendly resume page for recruiters, professors, and internship applications."
        actions={[
          {
            href: "mailto:jingxuan.lyu@berkeley.edu",
            label: "Request PDF Resume",
          },
        ]}
      />

      <ResumeSection title="Education" items={education} />
      <ResumeSection title="Experience" items={experience} />
      <ResumeSection title="Leadership & Involvement" items={leadership} />

      <section className="rounded-[2rem] border border-border bg-surface p-6 shadow-card sm:p-8">
        <SectionHeading
          eyebrow="Technical"
          title="Skills"
          description="Tools and technologies I use across coursework and projects."
        />
        <div className="mt-8 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-border bg-canvas px-4 py-2 text-sm text-muted"
            >
              {skill}
            </span>
          ))}
        </div>
        <div className="mt-8">
          <Link
            href="/contact"
            className="rounded-full border border-border px-5 py-3 text-sm font-medium text-muted transition hover:border-ink hover:text-ink"
          >
            Contact Jingxuan
          </Link>
        </div>
      </section>
    </Container>
  );
}
