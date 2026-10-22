import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { artModules } from "@/data/art-portfolio";

export const metadata: Metadata = {
  title: "Art & Life",
  description: "Paintings, photographs, drawings, and design by Jingxuan Lyu.",
};

export default function ArtPortfolioPage() {
  const painting = artModules.find((entry) => entry.slug === "painting")!;
  const photography = artModules.find((entry) => entry.slug === "photography")!;
  return (
    <div className="studio-page">
      <header className="studio-intro">
        <div>
          <p className="overline">A PERSONAL COLLECTION / JINGXUAN LYU</p>
          <h1>Art <em>& life.</em></h1>
          <p>Paintings, photographs, and things I notice along the way.</p>
        </div>
        <p className="studio-intro-note">A space for color, observation,<br />and working with my hands.</p>
      </header>

      <nav className="studio-index" aria-label="Art collections">
        <span>EXPLORE THE COLLECTION</span>
        <div>{artModules.filter(entry => entry.slug !== "story").map((entry) => <Link href={`/art/${entry.slug}`} key={entry.slug}>{entry.title} <span aria-hidden="true">↗</span></Link>)}</div>
      </nav>

      <section className="studio-featured" aria-label="Featured collections">
        <Link href="/art/painting" className="studio-piece studio-piece-painting">
          <div className="studio-image studio-painting-image">
            <Image src={painting.image} alt="White flowers in a yellow vase, a painting by Jingxuan" fill priority sizes="(max-width: 700px) 90vw, 55vw" className="object-contain" />
          </div>
          <div className="studio-caption"><div><p className="overline">01 / PAINTING</p><h2>Studies in color.</h2><p>Florals, texture, and the marks left by a brush.</p></div><span aria-hidden="true">↗</span></div>
        </Link>
        <Link href="/art/photography" className="studio-piece studio-piece-photo">
          <div className="studio-image studio-photo-image">
            <Image src="/art/photography/snow-bridge.jpg" alt="A snow-covered bridge reflected in still water" fill priority sizes="(max-width: 700px) 90vw, 40vw" className="object-cover" />
          </div>
          <div className="studio-caption"><div><p className="overline">02 / PHOTOGRAPHY</p><h2>Time, held still.</h2><p>{photography.description}</p></div><span aria-hidden="true">↗</span></div>
        </Link>
      </section>

      <section className="studio-more" aria-labelledby="more-collections">
        <div className="section-top"><div><p className="overline">MORE FROM THE COLLECTION</p><h2 id="more-collections">Other perspectives.</h2></div></div>
        <div className="studio-small-grid">{["drawing", "design"].map((slug, index) => {
          const entry = artModules.find((item) => item.slug === slug)!;
          return <Link href={`/art/${entry.slug}`} className={`studio-small-piece studio-small-${slug}`} key={entry.slug}>
            <div className="studio-image"><Image src={entry.image} alt={entry.gallery[0].alt} fill sizes="(max-width: 700px) 90vw, 30vw" className="object-cover" /></div>
            <div className="studio-caption"><div><p className="overline">0{index + 3} / COLLECTION</p><h3>{entry.title}</h3><p>{entry.description}</p></div><span aria-hidden="true">↗</span></div>
          </Link>;
        })}</div>
      </section>
      <section className="studio-closing"><p className="overline">AWAY FROM THE SCREEN, STILL EXPLORING.</p><p>A few different ways of looking at the same world.</p><Link href="/" className="text-link">Back to my main portfolio ↗</Link></section>
    </div>
  );
}
