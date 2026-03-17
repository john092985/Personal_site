import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { profileHighlights, values } from "@/data/portfolio";

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <Container className="space-y-16 py-12 sm:py-16">
      <PageHero
        eyebrow="About"
        title="A clear technical foundation, shaped by curiosity and disciplined execution."
        description="I am a UC Berkeley student studying Computer Science and Data Science, with a strong interest in building software that is both technically sound and easy to trust."
      />

      <section className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-[2rem] border border-border bg-surface p-6 shadow-card sm:p-8">
          <SectionHeading
            eyebrow="Profile"
            title="What I bring"
            description="I care about software that works well under scrutiny: clean implementation, sensible interfaces, and practical decisions grounded in the problem."
          />
          <div className="mt-8 space-y-5 text-base leading-8 text-muted">
            <p>
              My academic path at Berkeley has pushed me to think rigorously
              about systems, algorithms, data, and product tradeoffs. I enjoy
              translating that rigor into software that feels refined rather than
              improvised.
            </p>
            <p>
              I am especially interested in environments where engineering
              quality matters: product teams, research settings, and internships
              where thoughtful implementation and strong communication are both
              expected.
            </p>
          </div>
        </div>

        <div className="grid gap-4">
          {profileHighlights.map((item) => (
            <div
              key={item.title}
              className="rounded-[1.75rem] border border-border bg-surface p-6 shadow-card"
            >
              <p className="text-sm uppercase tracking-[0.18em] text-muted">
                {item.title}
              </p>
              <p className="mt-3 text-base leading-8 text-ink">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-[2rem] border border-border bg-surface p-6 shadow-card sm:p-8">
        <SectionHeading
          eyebrow="Approach"
          title="How I like to work"
          description="The habits and standards I try to bring into every course project, team setting, or internship environment."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-[1.5rem] border border-border/80 bg-canvas p-5"
            >
              <h3 className="font-serif text-xl text-ink">{value.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{value.body}</p>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
}
