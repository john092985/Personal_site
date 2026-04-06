import Link from "next/link";
import { contactLinks } from "@/data/portfolio";

export function SiteFooter() {
  return (
    <footer className="py-10 sm:py-14">
      <div className="mx-auto grid max-w-[96rem] gap-6 rounded-[2.4rem] border border-[rgba(120,128,138,0.14)] bg-[rgba(255,252,247,0.82)] px-6 py-8 backdrop-blur-sm sm:px-8 xl:grid-cols-[minmax(0,1fr)_minmax(20rem,24rem)]">
        <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.6fr)]">
          <div>
            <div className="eyebrow-label">End of Transmission</div>
            <p className="mt-3 font-serif text-3xl text-ink">Jingxuan Lyu</p>
            <p className="mt-2 max-w-md text-sm leading-7 text-muted">
              Personal site for systems, research, and interdisciplinary work.
            </p>
          </div>
          <div className="rounded-[1.6rem] border border-[rgba(120,128,138,0.14)] bg-[rgba(255,255,255,0.56)] px-5 py-5">
            <p className="eyebrow-label">Site Note</p>
            <p className="mt-3 text-sm leading-7 text-muted">
              Built as an archive of projects, study, and technical direction.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-muted xl:justify-end">
          {contactLinks.slice(0, 3).map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="rounded-full border border-[rgba(120,128,138,0.16)] px-4 py-2 hover:border-[rgba(190,170,128,0.45)] hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
