"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { contactLinks, resumeDocument } from "@/data/portfolio";

export function SiteFooter() {
  const pathname = usePathname();

  if (pathname.startsWith("/art")) {
    return null;
  }

  return (
    <footer className="border-t border-[rgba(31,40,51,0.08)] py-8">
      <div className="mx-auto flex max-w-[78rem] flex-col gap-3 px-4 text-sm text-muted sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <p>Jingxuan Lyu</p>
        <div className="flex flex-wrap gap-4">
          <Link href={resumeDocument.href} className="hover:text-ink">
            {resumeDocument.label}
          </Link>
          <Link href="/resume#contact" className="hover:text-ink">
            Contact
          </Link>
          {contactLinks.slice(0, 2).map((link) => (
            <Link key={link.label} href={link.href} className="hover:text-ink">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
