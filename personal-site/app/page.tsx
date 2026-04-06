import Link from "next/link";
import { Container } from "@/components/container";
import { ProjectShowcase } from "@/components/project-showcase";
import { contactLinks, featuredProjects } from "@/data/portfolio";

export default function HomePage() {
  const primaryContacts = contactLinks.filter((link) =>
    ["LinkedIn", "GitHub", "Berkeley Email"].includes(link.label),
  );

  const entryCards = [
    {
      eyebrow: "About",
      title: "Background",
      body: "Study, perspective, direction.",
      href: "/about",
      cta: "Open About",
    },
    {
      eyebrow: "Projects",
      title: "Selected Works",
      body: "Research, systems, experiments.",
      href: "/projects",
      cta: "Open Projects",
    },
    {
      eyebrow: "Resume",
      title: "Experience",
      body: "Education, work, involvement.",
      href: "/resume",
      cta: "Open Resume",
    },
  ];

  return (
    <Container className="relative max-w-[92rem] space-y-16 py-8 sm:space-y-20 sm:py-10 xl:max-w-[96rem]">
      <section className="grid gap-6 xl:grid-cols-[minmax(0,1.25fr)_minmax(22rem,0.75fr)]">
        <article className="relative overflow-hidden rounded-[2.9rem] border border-[rgba(120,128,138,0.14)] px-6 py-10 shadow-card sm:px-10 sm:py-14 lg:px-12 lg:py-16">
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(120deg, rgba(255,252,247,0.88) 0%, rgba(250,245,236,0.78) 52%, rgba(246,240,231,0.64) 100%), radial-gradient(circle at top left, rgba(190,170,128,0.18), transparent 22rem), radial-gradient(circle at 82% 18%, rgba(158,177,191,0.18), transparent 18rem)",
            }}
          />
          <div className="relative z-10">
            <div className="eyebrow-label">Jingxuan Lyu</div>
            <div className="section-rule mt-5 max-w-56" />
            <h1 className="balance mt-8 max-w-5xl font-serif text-[3.9rem] leading-[0.88] tracking-tightest text-ink sm:text-[5.2rem] lg:text-[6.3rem]">
              Systems, research, visual thinking.
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-muted sm:text-lg">
              UC Berkeley. Computer Science and Data Science.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/projects"
                className="rounded-full border border-[rgba(190,170,128,0.42)] bg-[rgba(190,170,128,0.14)] px-6 py-3 text-sm font-semibold text-ink hover:bg-[rgba(190,170,128,0.2)]"
              >
                View Projects
              </Link>
              <Link
                href="/resume"
                className="rounded-full border border-[rgba(120,128,138,0.16)] px-6 py-3 text-sm font-medium text-muted hover:border-[rgba(190,170,128,0.45)] hover:text-ink"
              >
                View Resume
              </Link>
            </div>
          </div>
        </article>

        <aside className="grid gap-4">
          {entryCards.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="scene-panel rounded-[2rem] px-6 py-6 sm:px-7 sm:py-7"
            >
              <p className="eyebrow-label">{item.eyebrow}</p>
              <h2 className="mt-5 font-serif text-3xl leading-none text-ink">
                {item.title}
              </h2>
              <p className="mt-4 text-base leading-8 text-muted">{item.body}</p>
              <p className="mt-6 text-sm font-medium text-ink">{item.cta}</p>
            </Link>
          ))}
        </aside>
      </section>

      <section className="space-y-8">
        <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_minmax(22rem,0.45fr)] xl:items-end">
          <div>
            <div className="eyebrow-label">Selected Works</div>
            <div className="section-rule mt-5 max-w-48" />
            <h2 className="mt-7 font-serif text-4xl leading-none tracking-tightest text-ink sm:text-5xl">
              A short project selection.
            </h2>
          </div>
          <div className="flex xl:justify-end">
            <Link
              href="/projects"
              className="w-fit rounded-full border border-[rgba(120,128,138,0.16)] px-5 py-3 text-sm font-medium text-muted hover:border-[rgba(190,170,128,0.45)] hover:text-ink"
            >
              Full Archive
            </Link>
          </div>
        </div>
        <div className="space-y-8">
          {featuredProjects.slice(0, 2).map((project, index) => (
            <ProjectShowcase
              key={project.name}
              project={project}
              index={index}
            />
          ))}
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_minmax(22rem,0.75fr)]">
        <article className="scene-panel rounded-[2.4rem] px-6 py-7 sm:px-8 sm:py-8">
          <div className="eyebrow-label">Sections</div>
          <div className="section-rule mt-5 max-w-40" />
          <div className="mt-7 grid gap-4 md:grid-cols-3">
            <Link
              href="/about"
              className="rounded-[1.6rem] border border-[rgba(120,128,138,0.14)] bg-[rgba(255,255,255,0.56)] p-5"
            >
              <p className="eyebrow-label">About</p>
              <p className="mt-4 text-lg text-ink">Background</p>
            </Link>
            <Link
              href="/projects"
              className="rounded-[1.6rem] border border-[rgba(120,128,138,0.14)] bg-[rgba(255,255,255,0.56)] p-5"
            >
              <p className="eyebrow-label">Projects</p>
              <p className="mt-4 text-lg text-ink">Works</p>
            </Link>
            <Link
              href="/resume"
              className="rounded-[1.6rem] border border-[rgba(120,128,138,0.14)] bg-[rgba(255,255,255,0.56)] p-5"
            >
              <p className="eyebrow-label">Resume</p>
              <p className="mt-4 text-lg text-ink">Experience</p>
            </Link>
          </div>
        </article>

        <article className="rounded-[2.4rem] border border-[rgba(190,170,128,0.24)] bg-[linear-gradient(180deg,rgba(190,170,128,0.16),rgba(255,251,244,0.72))] px-6 py-7 sm:px-8 sm:py-8">
          <p className="eyebrow-label text-[rgba(95,104,116,0.82)]">
            Contact
          </p>
          <h2 className="mt-6 max-w-md font-serif text-4xl leading-none text-ink sm:text-5xl">
            For research, internships, and collaboration.
          </h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {primaryContacts.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="rounded-full border border-[rgba(120,128,138,0.16)] px-5 py-3 text-sm font-medium text-ink hover:bg-[rgba(255,255,255,0.56)]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </article>
      </section>
    </Container>
  );
}
