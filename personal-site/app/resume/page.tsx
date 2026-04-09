import Link from "next/link";
import { Container } from "@/components/container";
import { contactLinks, resumeDocument } from "@/data/portfolio";

export const metadata = {
  title: "Resume and Contact",
};

export default function ResumePage() {
  return (
    <Container className="max-w-4xl space-y-6 py-12 sm:space-y-8 sm:py-16">
      <header className="space-y-3">
        <p className="eyebrow-label">CV / Contact</p>
        <h1 className="font-serif text-4xl leading-tight text-ink sm:text-5xl">
          CV and contact.
        </h1>
      </header>

      <section className="grid gap-6">
        <article className="scene-panel rounded-[1.75rem] px-6 py-7 sm:px-8">
          <p className="eyebrow-label">CV</p>
          <p className="mt-4 text-base leading-8 text-muted">
            Download the latest PDF version here.
          </p>
          <div className="mt-6">
            <Link
              href={resumeDocument.href}
              className="inline-flex rounded-full border border-[rgba(190,170,128,0.42)] bg-[rgba(190,170,128,0.14)] px-5 py-3 text-sm font-semibold text-ink hover:bg-[rgba(190,170,128,0.2)]"
            >
              {resumeDocument.label}
            </Link>
          </div>
        </article>

        <article
          id="contact"
          className="scene-panel rounded-[1.75rem] px-6 py-7 sm:px-8"
        >
          <p className="eyebrow-label">Links and Contact</p>
          <div className="mt-5 space-y-4">
            {contactLinks.map((link) => (
              <div
                key={link.label}
                className="border-b border-[rgba(31,40,51,0.08)] pb-4 last:border-b-0 last:pb-0"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">
                  {link.label}
                </p>
                <Link
                  href={link.href}
                  className="mt-2 inline-block text-base leading-7 text-ink hover:underline"
                >
                  {link.value}
                </Link>
              </div>
            ))}
          </div>
        </article>
      </section>
    </Container>
  );
}
