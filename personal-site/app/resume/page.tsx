import Link from "next/link";
import { Container } from "@/components/container";
import { HorizontalCardCarousel } from "@/components/horizontal-card-carousel";
import { education, experience, leadership, skills } from "@/data/portfolio";

export const metadata = {
  title: "Resume",
};

export default function ResumePage() {
  const quickFacts = [
    { label: "Base", value: "UC Berkeley" },
    { label: "Open To", value: "Internships" },
  ];

  return (
    <Container className="max-w-[92rem] space-y-12 py-12 sm:py-16 xl:max-w-[96rem]">
      <section className="grid gap-5 xl:grid-cols-[minmax(0,1.2fr)_minmax(18rem,0.55fr)]">
        <article className="scene-panel relative overflow-hidden rounded-[2.4rem] px-6 py-6 sm:px-7 sm:py-7 lg:px-8 lg:py-8">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(190,170,128,0.18),transparent_24rem),radial-gradient(circle_at_80%_20%,rgba(158,177,191,0.18),transparent_18rem)]"
          />
          <div className="relative z-10 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(14rem,0.62fr)] lg:items-end">
            <div>
              <div className="eyebrow-label">Resume / Overview</div>
              <div className="section-rule mt-4 max-w-40" />
              <h1 className="balance mt-6 max-w-3xl font-serif text-[2.3rem] leading-[0.92] tracking-tightest text-ink sm:text-[3rem] lg:text-[3.6rem]">
                Study, work, practice.
              </h1>
              <p className="mt-4 max-w-xl text-sm leading-7 text-muted sm:text-base">
                Education, experience, and involvement in one place.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="mailto:jingxuan.lyu@berkeley.edu"
                  className="rounded-full border border-[rgba(190,170,128,0.42)] bg-[rgba(190,170,128,0.14)] px-5 py-2.5 text-sm font-semibold text-ink hover:bg-[rgba(190,170,128,0.22)]"
                >
                  PDF Resume
                </Link>
                <Link
                  href="/contact"
                  className="rounded-full border border-[rgba(120,128,138,0.18)] px-5 py-2.5 text-sm font-medium text-muted hover:border-[rgba(190,170,128,0.45)] hover:text-ink"
                >
                  Contact
                </Link>
              </div>
            </div>

            <div className="grid gap-3">
              {quickFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="rounded-[1.4rem] border border-[rgba(120,128,138,0.14)] bg-[rgba(255,255,255,0.66)] px-4 py-4"
                >
                  <p className="eyebrow-label">{fact.label}</p>
                  <p className="mt-2 text-base leading-7 text-ink">{fact.value}</p>
                </div>
              ))}
            </div>
          </div>
        </article>

        <aside className="grid gap-5">
          <article className="scene-panel rounded-[2rem] px-5 py-5">
            <p className="eyebrow-label">Reading Guide</p>
            <p className="mt-4 font-serif text-2xl leading-tight text-ink">
              Three tracks.
            </p>
            <div className="mt-4 space-y-2 text-sm leading-6 text-muted">
              <p>Education</p>
              <p>Experience</p>
              <p>Leadership</p>
            </div>
          </article>

          <article className="rounded-[2rem] border border-[rgba(190,170,128,0.24)] bg-[linear-gradient(180deg,rgba(190,170,128,0.16),rgba(255,251,244,0.72))] px-5 py-5">
            <p className="eyebrow-label">Focus</p>
            <p className="mt-4 text-sm leading-6 text-muted">
              Systems, ML, research.
            </p>
          </article>
        </aside>
      </section>

      <HorizontalCardCarousel
        eyebrow="Resume"
        title="Education"
        description="Academic track."
        items={education}
      />
      <HorizontalCardCarousel
        eyebrow="Resume"
        title="Experience"
        description="Work and research."
        items={experience}
      />
      <HorizontalCardCarousel
        eyebrow="Resume"
        title="Leadership & Involvement"
        description="Activities and initiatives."
        items={leadership}
      />

      <section className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_minmax(22rem,24rem)]">
        <article className="scene-panel rounded-[2.4rem] px-6 py-7 sm:px-8 sm:py-8">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1fr)] lg:items-start">
            <div>
              <div className="eyebrow-label">Technical</div>
              <div className="section-rule mt-5 max-w-40" />
              <h2 className="mt-7 font-serif text-4xl leading-none tracking-tightest text-ink sm:text-5xl">
                Toolset
              </h2>
              <p className="mt-5 max-w-md text-base leading-8 text-muted">
                Languages, analytical tools, and research-oriented methods used
                across projects, coursework, and collaborative work.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="meta-pill rounded-full px-4 py-2 text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </article>

        <article className="rounded-[2.4rem] border border-[rgba(120,128,138,0.14)] bg-[rgba(255,255,255,0.66)] px-6 py-7 sm:px-8 sm:py-8">
          <p className="eyebrow-label">Next Step</p>
          <h2 className="mt-6 font-serif text-3xl leading-tight text-ink">
            Available for internships, research conversations, and thoughtful
            builds.
          </h2>
          <p className="mt-5 text-base leading-8 text-muted">
            If you want the concise PDF version or want to discuss a role,
            project, or collaboration, I am happy to continue the conversation.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex rounded-full border border-[rgba(120,128,138,0.18)] px-5 py-3 text-sm font-medium text-muted hover:border-[rgba(184,150,102,0.45)] hover:text-ink"
            >
              Open Contact Page
            </Link>
          </div>
        </article>
      </section>
    </Container>
  );
}
