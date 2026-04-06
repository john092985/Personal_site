import Link from "next/link";
import { Container } from "@/components/container";
import { contactLinks } from "@/data/portfolio";

export const metadata = {
  title: "Contact",
};

export default function ContactPage() {
  const primaryContacts = contactLinks.filter((link) =>
    link.label.toLowerCase().includes("email"),
  );
  const secondaryContacts = contactLinks.filter(
    (link) => !link.label.toLowerCase().includes("email"),
  );

  return (
    <Container className="max-w-[92rem] space-y-12 py-12 sm:py-16 xl:max-w-[96rem]">
      <section className="grid gap-6 xl:grid-cols-[minmax(0,1.2fr)_minmax(22rem,0.8fr)]">
        <article className="scene-panel relative overflow-hidden rounded-[2.8rem] px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(190,170,128,0.18),transparent_24rem),radial-gradient(circle_at_82%_18%,rgba(158,177,191,0.16),transparent_18rem)]"
          />
          <div className="relative z-10">
            <div className="eyebrow-label">Transmission / Contact</div>
            <div className="section-rule mt-5 max-w-56" />
            <h1 className="balance mt-8 max-w-4xl font-serif text-[3.3rem] leading-[0.9] tracking-tightest text-ink sm:text-[4.4rem] lg:text-[5.3rem]">
              For internships, research, and thoughtful introductions.
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-muted sm:text-lg">
              Email is usually the clearest route. I appreciate concise
              outreach with enough context to understand the role, team,
              timeline, or collaboration.
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {primaryContacts.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="rounded-[1.8rem] border border-[rgba(190,170,128,0.24)] bg-[linear-gradient(180deg,rgba(190,170,128,0.16),rgba(255,251,244,0.74))] p-6 shadow-card hover:bg-[linear-gradient(180deg,rgba(190,170,128,0.2),rgba(255,251,244,0.82))]"
                >
                  <p className="eyebrow-label">{link.label}</p>
                  <p className="mt-4 text-lg font-semibold leading-7 text-ink sm:text-xl">
                    {link.value}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </article>

        <aside className="grid gap-6">
          <article className="scene-panel rounded-[2.3rem] px-6 py-7">
            <p className="eyebrow-label">Protocol</p>
            <h2 className="mt-6 font-serif text-3xl leading-tight text-ink">
              The clearest path to reach me.
            </h2>
            <div className="mt-6 space-y-4 text-sm leading-7 text-muted">
              <p>
                For recruiting, academic inquiries, or project conversations,
                email remains the fastest and most reliable channel.
              </p>
              <p>
                Including timelines, links, and what you would like me to
                prepare makes it easier to respond helpfully.
              </p>
            </div>
          </article>

          <article className="rounded-[2.3rem] border border-[rgba(120,128,138,0.14)] bg-[rgba(255,255,255,0.66)] px-6 py-7">
            <p className="eyebrow-label">Response Bias</p>
            <p className="mt-5 text-base leading-8 text-muted">
              Concise, well-scoped messages are the easiest to act on quickly.
            </p>
          </article>
        </aside>
      </section>

      <section className="scene-panel rounded-[2.5rem] px-6 py-7 sm:px-8 sm:py-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1fr)] lg:items-start">
          <div>
            <div className="eyebrow-label">Channels</div>
            <div className="section-rule mt-5 max-w-40" />
            <h2 className="mt-7 font-serif text-4xl leading-none tracking-tightest text-ink sm:text-5xl">
              Other ways in.
            </h2>
            <p className="mt-5 max-w-md text-base leading-8 text-muted">
              External profiles and supporting links for continued
              conversation.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {secondaryContacts.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="rounded-[1.8rem] border border-[rgba(120,128,138,0.14)] bg-[rgba(255,255,255,0.56)] p-6 hover:border-[rgba(190,170,128,0.32)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="eyebrow-label">{link.label}</p>
                    <p className="mt-4 text-base font-medium leading-7 text-ink sm:text-lg">
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
