import Link from "next/link";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import {
  contactLinks,
  education,
  experience,
  leadership,
  resumeDocument,
  skills,
} from "@/data/portfolio";

export const metadata = {
  title: "Resume and Contact",
};

export default function ResumePage() {
  const emailLinks = contactLinks.filter((link) =>
    link.label.toLowerCase().includes("email"),
  );
  const socialLinks = contactLinks.filter(
    (link) => !link.label.toLowerCase().includes("email"),
  );

  return (
    <Container className="max-w-[92rem] space-y-14 py-10 sm:space-y-16 sm:py-12 xl:max-w-[96rem]">
      <section className="grid gap-6 xl:grid-cols-[minmax(0,1.15fr)_minmax(20rem,0.85fr)]">
        <article className="scene-panel relative overflow-hidden rounded-[2.8rem] px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(190,170,128,0.18),transparent_24rem),radial-gradient(circle_at_82%_18%,rgba(158,177,191,0.16),transparent_18rem)]"
          />
          <div className="relative z-10 max-w-3xl">
            <div className="eyebrow-label">Resume and Contact</div>
            <div className="section-rule mt-5 max-w-48" />
            <h1 className="balance mt-8 font-serif text-[3.2rem] leading-[0.9] tracking-tightest text-ink sm:text-[4.3rem] lg:text-[5.1rem]">
              One page for background, experience, and ways to reach me.
            </h1>
            <p className="mt-6 text-base leading-8 text-muted sm:text-lg">
              This page combines the resume view and contact information, so
              recruiting, research, and collaboration details live in one
              place.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={resumeDocument.href}
                className="rounded-full border border-[rgba(190,170,128,0.42)] bg-[rgba(190,170,128,0.14)] px-6 py-3 text-sm font-semibold text-ink hover:bg-[rgba(190,170,128,0.2)]"
              >
                {resumeDocument.label}
              </Link>
              <Link
                href="#contact"
                className="rounded-full border border-[rgba(120,128,138,0.16)] px-6 py-3 text-sm font-medium text-muted hover:border-[rgba(190,170,128,0.45)] hover:text-ink"
              >
                Jump to Contact
              </Link>
            </div>
          </div>
        </article>

        <aside className="grid gap-5">
          <article className="scene-panel rounded-[2rem] px-6 py-6">
            <p className="eyebrow-label">Current Focus</p>
            <p className="mt-4 font-serif text-3xl leading-tight text-ink">
              Research, internships, and software with clear impact.
            </p>
          </article>
          <article className="rounded-[2rem] border border-[rgba(190,170,128,0.24)] bg-[linear-gradient(180deg,rgba(190,170,128,0.16),rgba(255,251,244,0.72))] px-6 py-6">
            <p className="eyebrow-label">At a Glance</p>
            <div className="mt-4 space-y-3 text-base leading-7 text-muted">
              <p>UC Berkeley, Computer Science and Data Science</p>
              <p>Interested in ML, systems, and research-driven work</p>
              <p>Open to internships and collaboration</p>
            </div>
          </article>
        </aside>
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Education"
          title="Education"
          description="Academic programs and training that support current research and project work."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {education.map((item) => (
            <article
              key={`${item.title}-${item.period}`}
              className="scene-panel rounded-[2rem] px-6 py-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="eyebrow-label">{item.period}</p>
                  <h3 className="mt-4 font-serif text-3xl leading-tight text-ink">
                    {item.title}
                  </h3>
                </div>
              </div>
              <p className="mt-4 text-base font-medium leading-7 text-ink">
                {item.subtitle}
              </p>
              <p className="mt-4 text-base leading-8 text-muted">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Experience"
          title="Experience"
          description="Research, data, and product-adjacent work across internships and programs."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {experience.map((item) => (
            <article
              key={`${item.title}-${item.period}`}
              className="scene-panel rounded-[2rem] px-6 py-6"
            >
              <p className="eyebrow-label">{item.period}</p>
              <h3 className="mt-4 font-serif text-3xl leading-tight text-ink">
                {item.title}
              </h3>
              <p className="mt-4 text-base font-medium leading-7 text-ink">
                {item.subtitle}
              </p>
              <p className="mt-4 text-base leading-8 text-muted">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Leadership"
          title="Leadership and Involvement"
          description="Community, teaching, and creative work that complements technical practice."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {leadership.map((item) => (
            <article
              key={`${item.title}-${item.period}`}
              className="scene-panel rounded-[2rem] px-6 py-6"
            >
              <p className="eyebrow-label">{item.period}</p>
              <h3 className="mt-4 font-serif text-3xl leading-tight text-ink">
                {item.title}
              </h3>
              <p className="mt-4 text-base font-medium leading-7 text-ink">
                {item.subtitle}
              </p>
              <p className="mt-4 text-base leading-8 text-muted">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_minmax(20rem,24rem)]">
        <article className="scene-panel rounded-[2.4rem] px-6 py-7 sm:px-8 sm:py-8">
          <SectionHeading
            eyebrow="Skills"
            title="Technical skills"
            description="Languages, tools, and methods used across coursework, projects, and research."
          />
          <div className="mt-8 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span key={skill} className="meta-pill rounded-full px-4 py-2 text-sm">
                {skill}
              </span>
            ))}
          </div>
        </article>

        <article className="rounded-[2.4rem] border border-[rgba(190,170,128,0.24)] bg-[linear-gradient(180deg,rgba(190,170,128,0.16),rgba(255,251,244,0.72))] px-6 py-7 sm:px-8 sm:py-8">
          <p className="eyebrow-label">Resume</p>
          <h2 className="mt-6 font-serif text-3xl leading-tight text-ink">
            Download the concise version.
          </h2>
          <p className="mt-5 text-base leading-8 text-muted">
            A downloadable resume is linked here for applications and quick
            review.
          </p>
          <div className="mt-8">
            <Link
              href={resumeDocument.href}
              className="inline-flex rounded-full border border-[rgba(190,170,128,0.42)] bg-[rgba(190,170,128,0.14)] px-5 py-3 text-sm font-semibold text-ink hover:bg-[rgba(190,170,128,0.2)]"
            >
              {resumeDocument.label}
            </Link>
          </div>
        </article>
      </section>

      <section
        id="contact"
        className="space-y-8 rounded-[2.5rem] border border-[rgba(120,128,138,0.14)] bg-[rgba(255,252,247,0.82)] px-6 py-7 sm:px-8 sm:py-8 lg:px-10"
      >
        <SectionHeading
          eyebrow="Contact"
          title="Get in touch"
          description="For internships, research conversations, or collaboration, email is usually the clearest route."
        />
        <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div className="grid gap-4">
            {emailLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="rounded-[1.8rem] border border-[rgba(190,170,128,0.24)] bg-[linear-gradient(180deg,rgba(190,170,128,0.16),rgba(255,251,244,0.76))] p-6"
              >
                <p className="eyebrow-label">{link.label}</p>
                <p className="mt-4 text-lg font-semibold leading-7 text-ink">
                  {link.value}
                </p>
              </Link>
            ))}
          </div>
          <div className="grid gap-4">
            {socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="scene-panel rounded-[1.8rem] px-6 py-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="eyebrow-label">{link.label}</p>
                    <p className="mt-4 text-base font-medium leading-7 text-ink">
                      {link.value}
                    </p>
                  </div>
                  <span className="text-xl text-muted">↗</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Container>
  );
}
