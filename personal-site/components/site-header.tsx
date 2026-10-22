"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const links = [{ href: "/", label: "About" }, { href: "/projects", label: "Work" }, { href: "/research", label: "Research" }, { href: "/art", label: "Art & life" }];
export function SiteHeader() {
  const pathname = usePathname();
  return <header className="new-header"><div className="new-nav"><Link href="/" className="wordmark">jingxuan<span> / Lyu</span></Link><nav aria-label="Main navigation">{links.map(link => <Link key={link.href} href={link.href} aria-current={pathname === link.href ? "page" : undefined}>{link.label}</Link>)}<Link href="/resume" className="nav-contact">Let’s connect <span aria-hidden="true">↗</span></Link></nav></div></header>;
}
