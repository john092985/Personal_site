"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky z-20 transition-all duration-300 ${
        isScrolled
          ? "-mx-4 top-0 pb-1 pt-0 sm:-mx-6 sm:pb-2 lg:-mx-8"
          : "top-0 pb-2 pt-4 sm:pb-3"
      }`}
    >
      <div
        className={`mx-auto px-3 transition-all duration-300 sm:px-5 ${
          isScrolled
            ? "w-full rounded-none bg-canvas"
            : "max-w-content rounded-[1.75rem] border border-border/70 bg-canvas/88 py-3 backdrop-blur-xl sm:py-4"
        }`}
      >
        <nav
          className={`grid w-full grid-cols-5 text-center text-sm text-muted transition-all duration-300 sm:text-base ${
            isScrolled ? "gap-1" : "gap-2"
          }`}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-full px-2 font-semibold tracking-[0.01em] text-ink transition-all duration-300 hover:bg-accent hover:text-ink sm:px-3 ${
                isScrolled ? "py-2" : "py-3"
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
