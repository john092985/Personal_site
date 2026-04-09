"use client";

import Image from "next/image";
import Link from "next/link";
import { Fragment, startTransition, useEffect, useRef, useState } from "react";
import type { ArtModuleEntry } from "@/data/art-portfolio";

type ArtIntro = {
  kicker: string;
  title: string;
  body: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
  modulesLabel: string;
  modulesText: string;
};

type ArtOutro = {
  eyebrow: string;
  title: string;
  body: string;
};

type ScrollState = {
  progress: number;
  canScrollLeft: boolean;
  canScrollRight: boolean;
};

export function ArtModuleRail({
  intro,
  works,
  outro,
}: {
  intro: ArtIntro;
  works: readonly ArtModuleEntry[];
  outro: ArtOutro;
}) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [scrollState, setScrollState] = useState<ScrollState>({
    progress: 0,
    canScrollLeft: false,
    canScrollRight: true,
  });

  useEffect(() => {
    const viewport = viewportRef.current;

    if (!viewport) {
      return;
    }

    const html = document.documentElement;
    const body = document.body;

    html.classList.add("art-page-lock");
    body.classList.add("art-page-lock");
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    viewport.scrollLeft = 0;

    const updateScrollState = () => {
      const maxScroll = Math.max(0, viewport.scrollWidth - viewport.clientWidth);
      const progress = maxScroll === 0 ? 0 : viewport.scrollLeft / maxScroll;

      startTransition(() => {
        setScrollState({
          progress,
          canScrollLeft: viewport.scrollLeft > 4,
          canScrollRight: viewport.scrollLeft < maxScroll - 4,
        });
      });
    };

    const scrollByDelta = (delta: number) => {
      const maxScroll = Math.max(0, viewport.scrollWidth - viewport.clientWidth);
      const nextLeft = Math.min(
        maxScroll,
        Math.max(0, viewport.scrollLeft + delta),
      );

      viewport.scrollLeft = nextLeft;
      updateScrollState();
    };

    const onWheel = (event: WheelEvent) => {
      if (window.innerWidth < 960) {
        return;
      }

      const canMoveHorizontally = viewport.scrollWidth > viewport.clientWidth + 8;
      const dominantDelta =
        Math.abs(event.deltaY) >= Math.abs(event.deltaX)
          ? event.deltaY
          : event.deltaX;

      if (!canMoveHorizontally || dominantDelta === 0) {
        return;
      }

      event.preventDefault();
      scrollByDelta(dominantDelta * 0.34);
    };

    updateScrollState();
    viewport.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("resize", updateScrollState);

    return () => {
      html.classList.remove("art-page-lock");
      body.classList.remove("art-page-lock");
      viewport.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  const scrollByStep = (direction: 1 | -1) => {
    const viewport = viewportRef.current;

    if (!viewport) {
      return;
    }

    viewport.scrollBy({
      left: direction * Math.max(320, viewport.clientWidth * 0.72),
      behavior: "smooth",
    });
  };

  return (
    <div className="art-overview-shell">
      <div
        ref={viewportRef}
        id="featured"
        className="art-overview-viewport"
        aria-label="Art portfolio overview"
      >
        <div className="art-overview-track">
          <section className="art-intro-slide">
            <p className="art-kicker">{intro.kicker}</p>
            <h1>{intro.title}</h1>
            <p className="art-intro">{intro.body}</p>

            <div className="art-copy-actions">
              <a href={intro.primaryHref} className="art-primary-action">
                {intro.primaryLabel}
              </a>
              <Link href={intro.secondaryHref} className="art-secondary-action">
                {intro.secondaryLabel}
              </Link>
            </div>

            <div className="art-side-note">
              <span>{intro.modulesLabel}</span>
              <p>{intro.modulesText}</p>
            </div>
          </section>

          {works.map((work) => {
            const isStory = work.variant === "story";

            return (
              <Fragment key={work.title}>
                <Link
                  href={`/art/${work.slug}`}
                  className={`art-feature-card ${
                    isStory ? "art-feature-card--story" : ""
                  }`}
                >
                  <div className="art-feature-media">
                    <Image
                      src={work.image}
                      alt={work.title}
                      fill
                      sizes={
                        isStory
                          ? "(max-width: 768px) 82vw, 34rem"
                          : "(max-width: 768px) 72vw, 20rem"
                      }
                      className={`art-feature-image ${work.imageClassName}`}
                      style={
                        {
                          "--art-image-scale": work.baseScale,
                        } as React.CSSProperties
                      }
                    />
                    <div className="art-feature-scrim" />
                  </div>

                  <div className="art-feature-copy">
                    <p>{work.eyebrow}</p>
                    <h2>{work.title}</h2>
                    <span>{work.description}</span>
                    <strong>{work.cta}</strong>
                  </div>
                </Link>

                {work.breakAfter ? (
                  <div className="art-track-divider" aria-hidden="true">
                    <span />
                  </div>
                ) : null}
              </Fragment>
            );
          })}

          <aside className="art-outro-slide">
            <p>{outro.eyebrow}</p>
            <h2>{outro.title}</h2>
            <span>{outro.body}</span>
          </aside>
        </div>
      </div>

      <div className="art-scroll-indicator" aria-label="Portfolio navigation">
        <span className={scrollState.progress < 0.94 ? "visible" : ""}>
          Scroll for more
        </span>
        <button
          type="button"
          className="art-scroll-button"
          onClick={() => scrollByStep(-1)}
          disabled={!scrollState.canScrollLeft}
          aria-label="Scroll to previous modules"
        >
          ←
        </button>
        <progress
          value={scrollState.progress}
          max={1}
          className="art-scroll-progress"
        />
        <button
          type="button"
          className="art-scroll-button"
          onClick={() => scrollByStep(1)}
          disabled={!scrollState.canScrollRight}
          aria-label="Scroll to next modules"
        >
          →
        </button>
      </div>
    </div>
  );
}
