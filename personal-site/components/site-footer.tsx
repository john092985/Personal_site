import Link from "next/link";
import { contactLinks } from "@/data/portfolio";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/80 py-8">
      <div className="mx-auto flex max-w-content flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-serif text-xl text-ink">Jingxuan Lyu</p>
          <p className="mt-1 text-sm text-muted">
            UC Berkeley student in Computer Science and Data Science
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-muted">
          {contactLinks.slice(0, 3).map((link) => (
            <Link key={link.label} href={link.href} className="hover:text-ink">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
