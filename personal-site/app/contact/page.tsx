import Link from "next/link";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
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
    <Container className="space-y-12 py-12 sm:py-16">
      <PageHero
        eyebrow="Contact"
        title="Let’s connect."
        description="I’m open to internship opportunities, research conversations, project collaboration, and thoughtful introductions."
      />

      <section className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-[2rem] border border-border bg-surface p-6 shadow-card sm:p-8">
          <SectionHeading
            eyebrow="Reach Out"
            title="The best way to contact me"
            description="For recruiting, academic inquiries, or project conversations, email is usually the fastest path."
          />
          <div className="mt-8 space-y-4 text-base leading-8 text-muted">
            <p>
              I appreciate concise outreach with context on the role, team, or
              collaboration. If you are a recruiter or professor, feel free to
              include timelines, relevant links, and what you would like me to
              prepare.
            </p>
            <div className="rounded-[1.5rem] border border-border bg-canvas p-5">
              <p className="text-sm uppercase tracking-[0.18em] text-muted">
                Fastest Response
              </p>
              <div className="mt-4 space-y-4">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
                    Personal Email
                  </p>
                  <p className="mt-2 text-lg font-semibold leading-7 text-ink sm:text-xl">
                    john.lyu.bj@hotmail.com
                  </p>
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
                    Berkeley Email
                  </p>
                  <p className="mt-2 text-lg font-semibold leading-7 text-ink sm:text-xl">
                    jingxuan.lyu@berkeley.edu
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="grid gap-4">
            {primaryContacts.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="rounded-[1.5rem] border border-[#6f6a61] bg-[#8f877a] p-6 text-white shadow-card transition hover:opacity-92"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.18em] text-white/70">
                      {link.label}
                    </p>
                    <p className="mt-3 text-lg font-semibold leading-7 sm:text-xl">
                      {link.value}
                    </p>
                  </div>
                  <span className="rounded-full border border-white/20 px-3 py-1 text-xs uppercase tracking-[0.16em] text-white/80">
                    Email
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="grid gap-4">
            {secondaryContacts.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="rounded-[1.5rem] border border-[#6f6a61] bg-[#8f877a] p-6 text-white shadow-card transition hover:opacity-92"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.18em] text-white/70">
                      {link.label}
                    </p>
                    <p className="mt-3 text-base font-medium text-white sm:text-lg">
                      {link.value}
                    </p>
                  </div>
                  <span className="text-xl text-white/75">↗</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Container>
  );
}
