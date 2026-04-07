"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "About Me" },
  { href: "/#projects", label: "Projects" },
  { href: "/#research", label: "Research" },
  { href: "/resume", label: "CV / Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const isResumePage =
    pathname === "/resume" || pathname === "/contact" || pathname.startsWith("/resume/");

  return (
    <header className="sticky top-0 z-20 border-b border-[rgba(31,40,51,0.08)] bg-[rgba(255,255,255,0.94)] backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-[78rem] items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="min-w-0 text-sm font-semibold text-ink">
          Jingxuan Lyu
        </Link>
        <nav className="flex flex-wrap items-center justify-end gap-1 text-sm text-muted">
          {links.map((link) => {
            const active =
              (link.href === "/resume" && isResumePage) ||
              (link.href !== "/resume" && !isResumePage && link.href === "/");

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-md px-3 py-2 ${
                  active
                    ? "bg-[rgba(31,40,51,0.06)] text-ink"
                    : "hover:bg-[rgba(31,40,51,0.04)] hover:text-ink"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
