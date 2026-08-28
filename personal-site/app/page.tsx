import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";
import {
  contactLinks,
  coursework,
  education,
  experience,
  homepageProjects,
  research,
  resumeDocument,
  skills,
} from "@/data/portfolio";

const primaryEmail = contactLinks.find((link) =>
  link.label.toLowerCase().includes("berkeley"),
);

const socialLinks = contactLinks.filter(
  (link) => !link.label.toLowerCase().includes("email"),
);

export default function HomePage() {
  return (
    <Container className="max-w-[72rem] py-8 sm:py-10">
      <div className="academic-layout">
        <aside className="academic-sidebar">
          <div className="academic-profile-card">
            <div className="academic-avatar" aria-hidden="true">
              <Image
                src="/profile-photo-v2.jpg"
                alt="Portrait of Jingxuan Lyu"
                fill
                priority
                className="object-cover object-center scale-[1.08]"
                sizes="120px"
              />
            </div>
            <h1 className="academic-name">Jingxuan Lyu</h1>
            <p className="academic-role">
              UC Berkeley Data Science student building applied AI, data, and
              software systems.
            </p>

            <div className="academic-link-list">
              {primaryEmail ? (
                <Link href={primaryEmail.href} className="academic-link-item">
                  Email
                </Link>
              ) : null}
              <Link href={resumeDocument.href} className="academic-link-item">
                Resume
              </Link>
              <Link href="/chat" className="academic-link-item">
                Chat with Me
              </Link>
              {socialLinks.map((link) => (
                <Link key={link.label} href={link.href} className="academic-link-item">
                  {link.label}
                </Link>
              ))}
            </div>

            <Link href="/art" className="academic-feature-link">
              <span className="academic-feature-link-kicker">New Exhibition</span>
              <span className="academic-feature-link-row">
                <span className="academic-feature-link-anchor">Art Portfolio</span>
                <span className="academic-feature-link-arrow" aria-hidden="true">
                  ↗
                </span>
              </span>
              <span className="academic-feature-link-copy">
                A museum-inspired collection of paintings and photography.
              </span>
            </Link>
          </div>
        </aside>

        <div className="academic-main">
          <section id="about" className="academic-section">
            <h2>About Me</h2>
            <p>
              I am a UC Berkeley Data Science student interested in applied AI,
              machine learning, and software development.
            </p>
            <p>
              My experience spans AI-assisted research, accessible software,
              and financial data analysis. I am seeking opportunities in AI and
              data-related fields. Contact me at{" "}
              {primaryEmail ? (
                <Link href={primaryEmail.href} className="academic-inline-link">
                  {primaryEmail.value}
                </Link>
              ) : (
                "jingxuan.lyu@berkeley.edu"
              )}
              .
            </p>
          </section>

          <section id="experience" className="academic-section">
            <div className="academic-section-heading">
              <h2>Experience</h2>
            </div>
            <div className="academic-entry-list">
              {experience.map((item) => (
                <article key={`${item.title}-${item.period}`} className="academic-entry">
                  <div className="academic-entry-top">
                    <h3>{item.title}</h3>
                    <span>{item.period}</span>
                  </div>
                  <p className="academic-entry-subtitle">{item.subtitle}</p>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="education" className="academic-section">
            <div className="academic-section-heading">
              <h2>Education</h2>
            </div>
            <div className="academic-entry-list">
              {education.map((item) => (
                <article key={`${item.title}-${item.period}`} className="academic-entry">
                  <div className="academic-entry-top">
                    <h3>{item.title}</h3>
                    <span>{item.period}</span>
                  </div>
                  <p className="academic-entry-subtitle">{item.subtitle}</p>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </section>

          <section
            id="research"
            className="academic-section scroll-mt-24 sm:scroll-mt-28"
          >
            <div className="academic-section-heading">
              <h2>Research</h2>
              <p>Research items remain separate from projects and keep their own pages.</p>
            </div>
            <div className="academic-entry-list">
              {research.map((entry) => (
                <article key={entry.slug} className="academic-entry">
                  <div className="academic-entry-top">
                    <h3>{entry.name}</h3>
                    <span>{entry.year}</span>
                  </div>
                  <p className="academic-entry-subtitle">{entry.category}</p>
                  <p>{entry.description}</p>
                  <div className="academic-tag-row">
                    {entry.stack.slice(0, 4).map((item) => (
                      <span key={item} className="academic-tag">
                        {item}
                      </span>
                    ))}
                  </div>
                  <div className="academic-actions">
                    <Link
                      href={`/research/${entry.slug}`}
                      className="academic-inline-link"
                    >
                      View research page
                    </Link>
                    {entry.paper ? (
                      <Link href={entry.paper.href} className="academic-inline-link">
                        {entry.paper.label}
                      </Link>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section
            id="projects"
            className="academic-section scroll-mt-24 sm:scroll-mt-28"
          >
            <div className="academic-section-heading">
              <h2>Projects</h2>
              <p>Selected work across applied AI, data, and software systems.</p>
            </div>
            <div className="academic-entry-list">
              {homepageProjects.map((project) => (
                <article key={project.name} className="academic-entry">
                  <div className="academic-entry-top">
                    <h3>{project.name}</h3>
                    <span>{project.year}</span>
                  </div>
                  <p className="academic-entry-subtitle">{project.category}</p>
                  <p>{project.description}</p>
                  <div className="academic-tag-row">
                    {project.stack.slice(0, 4).map((item) => (
                      <span key={item} className="academic-tag">
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="skills" className="academic-section">
            <div className="academic-section-heading">
              <h2>Technical Skills</h2>
            </div>
            <div className="academic-tag-row">
              {skills.map((skill) => (
                <span key={skill} className="academic-tag">{skill}</span>
              ))}
            </div>
            <h3 className="mt-6 text-base font-semibold text-ink">Relevant Coursework</h3>
            <p className="mt-3">{coursework.join(" · ")}</p>
          </section>

          <section className="academic-section academic-highlight-box">
            <h2>Resume and Contact</h2>
            <div className="academic-actions">
              <Link href="/chat" className="academic-inline-link">
                Chat with Me
              </Link>
              <Link href={resumeDocument.href} className="academic-inline-link">
                {resumeDocument.label}
              </Link>
              <Link href="/resume#contact" className="academic-inline-link">
                Contact
              </Link>
              <Link href="/resume" className="academic-inline-link">
                Open resume page
              </Link>
            </div>
          </section>
        </div>
      </div>
    </Container>
  );
}
