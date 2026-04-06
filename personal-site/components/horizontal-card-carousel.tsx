"use client";

import { useEffect, useRef, useState } from "react";
import { SectionHeading } from "@/components/section-heading";
import type { ResumeItem } from "@/data/portfolio";

export function HorizontalCardCarousel({
  eyebrow,
  title,
  description,
  items,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  items: ResumeItem[];
}) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(items.length > 1);
  
  function syncCarouselState() {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    const children = Array.from(track.children) as HTMLElement[];

    if (children.length === 0) {
      setActiveIndex(0);
      setCanScrollPrev(false);
      setCanScrollNext(false);
      return;
    }

    const viewportCenter = track.scrollLeft + track.clientWidth / 2;
    let nearestIndex = 0;
    let nearestDistance = Number.POSITIVE_INFINITY;

    children.forEach((child, index) => {
      const childCenter = child.offsetLeft + child.offsetWidth / 2;
      const distance = Math.abs(childCenter - viewportCenter);

      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearestIndex = index;
      }
    });

    setActiveIndex(nearestIndex);
    setCanScrollPrev(track.scrollLeft > 8);
    setCanScrollNext(
      track.scrollLeft + track.clientWidth < track.scrollWidth - 8,
    );
  }

  useEffect(() => {
    syncCarouselState();

    const track = trackRef.current;

    if (!track) {
      return;
    }

    const handleScroll = () => {
      syncCarouselState();
    };

    const resizeObserver = new ResizeObserver(() => {
      syncCarouselState();
    });

    track.addEventListener("scroll", handleScroll, { passive: true });
    resizeObserver.observe(track);

    return () => {
      track.removeEventListener("scroll", handleScroll);
      resizeObserver.disconnect();
    };
  }, [items.length]);

  function scrollToIndex(index: number) {
    const track = trackRef.current;
    const nextCard = track?.children[index] as HTMLElement | undefined;

    if (!track || !nextCard) {
      return;
    }

    const isEdgeCard = index === 0 || index === items.length - 1;
    const nextLeft = isEdgeCard
      ? nextCard.offsetLeft
      : nextCard.offsetLeft - (track.clientWidth - nextCard.offsetWidth) / 2;

    track.scrollTo({
      left: Math.max(0, nextLeft),
      behavior: "smooth",
    });
  }

  function handleStep(direction: -1 | 1) {
    const nextIndex = Math.min(
      items.length - 1,
      Math.max(0, activeIndex + direction),
    );

    scrollToIndex(nextIndex);
  }

  return (
    <section className="scene-panel rounded-[2.4rem] px-5 py-6 sm:px-7 sm:py-8 lg:px-9 xl:px-10">
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
        <div className="max-w-3xl">
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            description={description}
          />
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => handleStep(-1)}
            disabled={!canScrollPrev}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-[rgba(120,128,138,0.16)] bg-[rgba(255,255,255,0.66)] text-xl text-ink disabled:cursor-not-allowed disabled:opacity-35"
            aria-label={`Scroll ${title} left`}
          >
            ‹
          </button>
          <button
            type="button"
            onClick={() => handleStep(1)}
            disabled={!canScrollNext}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-[rgba(120,128,138,0.16)] bg-[rgba(255,255,255,0.66)] text-xl text-ink disabled:cursor-not-allowed disabled:opacity-35"
            aria-label={`Scroll ${title} right`}
          >
            ›
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        className="carousel-track mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 lg:gap-6"
      >
        {items.map((item, index) => (
          <article
            key={`${item.title}-${item.period}`}
            className={`tesla-slide relative min-h-[25rem] w-[84vw] max-w-[26rem] shrink-0 rounded-[2rem] px-6 py-6 sm:w-[31rem] sm:px-7 sm:py-7 lg:w-[38rem] lg:max-w-none xl:w-[42rem] ${
              index === 0 || index === items.length - 1
                ? "snap-start"
                : "snap-center"
            }`}
          >
            {item.image ? (
              <div
                aria-hidden="true"
                className="tesla-slide-image"
                style={{
                  backgroundImage: `url("${item.image}")`,
                  backgroundPosition: item.imagePosition ?? "center center",
                  backgroundSize: item.imageScale
                    ? `${item.imageScale * 100}%`
                    : "cover",
                }}
              />
            ) : null}
            <div className="tesla-slide-scrim" aria-hidden="true" />
            <div className="tesla-slide-overlay" aria-hidden="true" />
            <div className="relative flex h-full flex-col justify-between">
              <div>
                <div className="flex items-start justify-between gap-4">
                  <p className="eyebrow-label max-w-[11rem]">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="rounded-full border border-white/40 bg-white/14 px-4 py-2 text-xs font-medium tracking-[0.18em] text-[rgba(255,255,255,0.88)]">
                    {item.period}
                  </p>
                </div>
                <h3
                  className={`mt-12 font-serif text-4xl leading-[0.92] text-white sm:text-[3.6rem] ${
                    item.titleAlign === "right"
                      ? "ml-auto max-w-[22rem] text-right text-[3rem] leading-[0.98] sm:text-[3.2rem]"
                      : "max-w-[16rem]"
                  }`}
                >
                  {item.title}
                </h3>
                <p
                  className={`mt-4 text-sm leading-7 text-[rgba(255,255,255,0.84)] sm:text-base ${
                    item.titleAlign === "right"
                      ? "ml-auto max-w-[20rem] text-right"
                      : "max-w-[22rem]"
                  }`}
                >
                  {item.subtitle}
                </p>
              </div>

              <div className="relative z-10 mt-8 rounded-[1.6rem] border border-white/18 bg-[rgba(16,22,31,0.28)] p-5 backdrop-blur-sm">
                <p className="text-sm leading-7 text-[rgba(255,255,255,0.9)]">
                  {item.body}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-center gap-3">
        {items.map((item, index) => (
          <button
            key={`${item.title}-dot`}
            type="button"
            onClick={() => scrollToIndex(index)}
            className={`h-3.5 rounded-full ${
              activeIndex === index
                ? "w-10 bg-[rgba(31,40,51,0.92)]"
                : "w-3.5 bg-[rgba(120,128,138,0.38)]"
            }`}
            aria-label={`Go to ${title} item ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
