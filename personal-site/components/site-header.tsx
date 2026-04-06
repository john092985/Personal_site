"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const nextScrollY = window.scrollY;
      setIsScrolled(nextScrollY > 24);
      setScrollProgress(Math.min(nextScrollY / 180, 1));
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headerBackground = `rgba(255, 255, 255, ${0.12 + scrollProgress * 0.84})`;

  return (
    <header
      style={{ backgroundColor: headerBackground }}
      className={`sticky z-20 transition-all duration-300 ${
        isScrolled ? "top-0 pb-2 pt-2" : "top-0 pb-4 pt-5 sm:pt-6"
      }`}
    >
      <div
        className={`flex w-full items-center justify-between gap-4 px-4 transition-all duration-300 sm:px-6 lg:px-8 ${
          isScrolled
            ? "py-3"
            : "py-4"
        }`}
      >
        <Link href="/" className="min-w-0">
          <div className="eyebrow-label">Jingxuan Lyu</div>
          <p className="mt-1 truncate text-sm text-muted">
            Systems, research, and visual thinking
          </p>
        </Link>
        <nav className="flex flex-wrap justify-end gap-1 text-sm sm:text-[0.95rem]">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-full px-3 py-2 font-medium tracking-[0.02em] transition-all duration-300 sm:px-4 ${
                pathname === link.href
                  ? "bg-[rgba(190,170,128,0.2)] text-ink"
                  : "text-muted hover:bg-[rgba(255,255,255,0.6)] hover:text-ink"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
