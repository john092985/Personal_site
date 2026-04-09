"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const aboutLinks = [
  { href: "/#projects", label: "Projects", key: "projects" },
  { href: "/#research", label: "Research", key: "research" },
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const [hash, setHash] = useState("");

  useEffect(() => {
    const updateHash = () => {
      setHash(window.location.hash);
    };

    updateHash();
    window.addEventListener("hashchange", updateHash);

    return () => {
      window.removeEventListener("hashchange", updateHash);
    };
  }, [pathname]);

  const activeSection =
    pathname.startsWith("/projects") || (pathname === "/" && hash === "#projects")
      ? "projects"
      : pathname.startsWith("/research") || (pathname === "/" && hash === "#research")
      ? "research"
      : pathname === "/resume" ||
          pathname === "/contact" ||
          pathname.startsWith("/resume/")
        ? "resume"
        : "about";
  const aboutGroupActive =
    activeSection === "about" ||
    activeSection === "projects" ||
    activeSection === "research";

  return (
    <header className="sticky top-0 z-20 border-b border-[rgba(31,40,51,0.08)] bg-[rgba(255,255,255,0.94)] backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-[78rem] items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="min-w-0 text-sm font-semibold text-ink">
          Jingxuan Lyu
        </Link>
        <nav className="flex flex-wrap items-center justify-end gap-2 text-sm">
          <div
            className={`flex items-center gap-1 rounded-full border px-1.5 py-1 ${
              aboutGroupActive
                ? "border-[rgba(31,40,51,0.1)] bg-[rgba(31,40,51,0.045)]"
                : "border-[rgba(31,40,51,0.08)] bg-[rgba(31,40,51,0.02)]"
            }`}
          >
            <Link
              href="/"
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                activeSection === "about"
                  ? "bg-white text-ink shadow-[0_1px_6px_rgba(31,40,51,0.08)]"
                  : "text-ink hover:bg-[rgba(255,255,255,0.72)]"
              }`}
            >
              About Me
            </Link>
            <div className="hidden h-5 w-px bg-[rgba(31,40,51,0.08)] sm:block" />
            <div className="flex items-center gap-1 pr-1">
              {aboutLinks.map((link) => {
                const active = activeSection === link.key;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] transition sm:text-[0.7rem] ${
                      active
                        ? "bg-[rgba(31,40,51,0.08)] text-ink"
                        : "text-muted hover:bg-[rgba(31,40,51,0.04)] hover:text-ink"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </div>

          <Link
            href="/resume"
            className={`rounded-full px-4 py-3 text-sm font-medium transition ${
              activeSection === "resume"
                ? "bg-[rgba(31,40,51,0.06)] text-ink"
                : "text-muted hover:bg-[rgba(31,40,51,0.04)] hover:text-ink"
            }`}
          >
            CV / Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
