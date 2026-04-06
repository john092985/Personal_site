import { Container } from "@/components/container";
import { profileHighlights, values } from "@/data/portfolio";

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <Container className="max-w-[92rem] space-y-12 py-12 sm:py-16 xl:max-w-[96rem]">
      <section className="grid gap-6 xl:grid-cols-[minmax(0,1.3fr)_minmax(22rem,0.7fr)]">
        <article className="scene-panel relative overflow-hidden rounded-[2.8rem] px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(190,170,128,0.18),transparent_24rem),radial-gradient(circle_at_85%_18%,rgba(158,177,191,0.18),transparent_18rem)]"
          />
          <div className="relative z-10">
            <div className="eyebrow-label">Background / About</div>
            <div className="section-rule mt-5 max-w-56" />
            <h1 className="balance mt-8 max-w-4xl font-serif text-[3.4rem] leading-[0.9] tracking-tightest text-ink sm:text-[4.5rem] lg:text-[5.5rem]">
              A technical foundation shaped by rigor, aesthetics, and human
              context.
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-muted sm:text-lg">
              I study Computer Science and Data Science at UC Berkeley, and I
              am most interested in work that combines technical seriousness
              with clarity, craft, and consequence.
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <article className="rounded-[1.6rem] border border-[rgba(120,128,138,0.14)] bg-[rgba(255,255,255,0.62)] p-5">
                <p className="eyebrow-label">Study</p>
                <p className="mt-3 text-base leading-8 text-ink">
                  Computer Science and Data Science at Berkeley.
                </p>
              </article>
              <article className="rounded-[1.6rem] border border-[rgba(120,128,138,0.14)] bg-[rgba(255,255,255,0.62)] p-5">
                <p className="eyebrow-label">Drawn To</p>
                <p className="mt-3 text-base leading-8 text-ink">
                  Software, research, and technically serious product work.
                </p>
              </article>
              <article className="rounded-[1.6rem] border border-[rgba(120,128,138,0.14)] bg-[rgba(255,255,255,0.62)] p-5">
                <p className="eyebrow-label">Bias</p>
                <p className="mt-3 text-base leading-8 text-ink">
                  Clear systems, careful reasoning, and thoughtful presentation.
                </p>
              </article>
            </div>
          </div>
        </article>

        <aside className="grid gap-6">
          <article className="scene-panel rounded-[2.3rem] px-6 py-7">
            <p className="eyebrow-label">Profile</p>
            <h2 className="mt-6 font-serif text-3xl leading-tight text-ink">
              What anchors the work.
            </h2>
            <div className="mt-6 space-y-4 text-sm leading-7 text-muted">
              <p>
                I care about software that holds up under scrutiny rather than
                just looking polished at first glance.
              </p>
              <p>
                The through-line is implementation quality, strong reasoning,
                and interfaces that feel composed instead of improvised.
              </p>
            </div>
          </article>

          <article className="rounded-[2.3rem] border border-[rgba(190,170,128,0.24)] bg-[linear-gradient(180deg,rgba(190,170,128,0.16),rgba(255,251,244,0.72))] px-6 py-7">
            <p className="eyebrow-label">View</p>
            <p className="mt-5 text-base leading-8 text-muted">
              The site is meant to read less like a static resume and more like
              a guided archive of how technical, visual, and research interests
              intersect.
            </p>
          </article>
        </aside>
      </section>

      <section className="grid gap-6 xl:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
        <article className="scene-panel rounded-[2.4rem] px-6 py-7 sm:px-8 sm:py-8">
          <div className="eyebrow-label">Profile Notes</div>
          <div className="section-rule mt-5 max-w-40" />
          <h2 className="mt-7 font-serif text-4xl leading-none tracking-tightest text-ink sm:text-5xl">
            The frame around the work.
          </h2>
          <div className="mt-8 space-y-5 text-base leading-8 text-muted">
            <p>
              My academic path at Berkeley has pushed me to think rigorously
              about systems, algorithms, data, and product tradeoffs. I enjoy
              translating that rigor into software that feels refined rather
              than improvised.
            </p>
            <p>
              I am especially interested in environments where engineering
              quality matters: product teams, research settings, and internships
              where thoughtful implementation and strong communication are both
              expected.
            </p>
          </div>
        </article>

        <div className="grid gap-4 lg:grid-cols-3 xl:grid-cols-1">
          {profileHighlights.map((item) => (
            <article
              key={item.title}
              className="scene-panel rounded-[2rem] px-6 py-6"
            >
              <p className="eyebrow-label">{item.title}</p>
              <p className="mt-4 text-base leading-8 text-ink">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="scene-panel rounded-[2.5rem] px-6 py-7 sm:px-8 sm:py-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1fr)] lg:items-start">
          <div>
            <div className="eyebrow-label">Approach</div>
            <div className="section-rule mt-5 max-w-44" />
            <h2 className="mt-7 font-serif text-4xl leading-none tracking-tightest text-ink sm:text-5xl">
              Standards I return to.
            </h2>
            <p className="mt-5 max-w-md text-base leading-8 text-muted">
              The habits I try to bring into every project, research setting,
              and collaborative environment.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {values.map((value) => (
              <article
                key={value.title}
                className="rounded-[1.7rem] border border-[rgba(120,128,138,0.14)] bg-[rgba(255,255,255,0.56)] p-5"
              >
                <h3 className="font-serif text-2xl text-ink">{value.title}</h3>
                <p className="mt-4 text-sm leading-7 text-muted">
                  {value.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Container>
  );
}
