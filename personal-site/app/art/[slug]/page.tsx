import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { artModules, getArtModule } from "@/data/art-portfolio";

export function generateStaticParams() {
  return artModules.map((module) => ({ slug: module.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  return params.then(({ slug }) => {
    const artModule = getArtModule(slug);

    if (!artModule) {
      return {
        title: "Art Portfolio",
      };
    }

    return {
      title: `${artModule.title} | Art Portfolio`,
      description: artModule.detailBody,
    };
  });
}

export default async function ArtModulePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const artModule = getArtModule(slug);

  if (!artModule) {
    notFound();
  }

  const otherModules = artModules.filter((entry) => entry.slug !== artModule.slug);

  return (
    <div className="art-detail-page">
      <div className="art-detail-shell">
        <aside className="art-detail-sidebar">
          <div className="art-detail-sidebar-inner">
            <p className="art-detail-kicker" style={{ color: artModule.accent }}>
              {artModule.detailEyebrow}
            </p>
            <h1>{artModule.detailTitle}</h1>
            <p className="art-detail-body">{artModule.detailBody}</p>

            <div className="art-detail-actions">
              <Link href="/art" className="art-detail-primary">
                Back to exhibition
              </Link>
              <Link href="/" className="art-detail-secondary">
                Main portfolio
              </Link>
            </div>

            <div className="art-detail-note-card">
              <span>Collection note</span>
              <p>{artModule.detailNote}</p>
            </div>

            <div className="art-detail-nav">
              <span>Other modules</span>
              <div className="art-detail-nav-list">
                {otherModules.map((entry) => (
                  <Link key={entry.slug} href={`/art/${entry.slug}`}>
                    {entry.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </aside>

        <section
          className="art-detail-gallery"
          aria-label={`${artModule.title} gallery`}
        >
          {artModule.gallery.map((item) => (
            <article
              key={`${artModule.slug}-${item.title}`}
              className={`art-gallery-card art-gallery-card--${item.size}`}
            >
              <div className="art-gallery-media">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 900px) 100vw, (max-width: 1280px) 48vw, 32vw"
                  className={item.imageClassName ?? "object-cover object-center"}
                />
              </div>
              <div className="art-gallery-copy">
                <h2>{item.title}</h2>
                <p>{item.note}</p>
              </div>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
}
