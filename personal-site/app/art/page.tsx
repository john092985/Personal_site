import type { Metadata } from "next";
import Link from "next/link";
import { ArtModuleRail } from "@/components/art-module-rail";
import {
  artIntroPanel,
  artModules,
  artOutroPanel,
} from "@/data/art-portfolio";

export const metadata: Metadata = {
  title: "Art Portfolio",
  description: "A museum-inspired portfolio of paintings and photography by Jingxuan Lyu.",
};

export default function ArtPortfolioPage() {
  return (
    <div className="art-page-bleed">
      <div className="art-page-shell">
        <section className="art-hero-panel">
          <div className="art-topbar">
            <nav className="art-topnav" aria-label="Art portfolio sections">
              <a href="#featured">Featured</a>
              <Link href="/">Main Portfolio</Link>
            </nav>
            <div className="art-mark" aria-label="Jingxuan Lyu Studio">
              <span>JL</span>
              <span>Studio</span>
            </div>
          </div>

          <ArtModuleRail
            intro={artIntroPanel}
            works={artModules}
            outro={artOutroPanel}
          />
        </section>
      </div>
    </div>
  );
}
