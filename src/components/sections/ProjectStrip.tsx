"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/dictionaries/es";
import { useScrollCarousel } from "@/components/ui/useScrollCarousel";

type ProjectStripProps = {
  labels: Dictionary["gallery"]["more"];
  items: Dictionary["gallery"]["items"];
};

const ARROW_CLASS =
  "flex h-11 w-11 items-center justify-center rounded-full border border-forest/25 text-forest transition-colors hover:border-forest hover:bg-forest hover:text-cream disabled:pointer-events-none disabled:opacity-30";

export default function ProjectStrip({ labels, items }: ProjectStripProps) {
  const { trackRef, atStart, atEnd, scrollTo } = useScrollCarousel<HTMLUListElement>();

  const page = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    scrollTo(track.scrollLeft + direction * track.clientWidth * 0.85);
  };

  return (
    <div className="mt-20 lg:mt-24">
      <div className="mb-7 flex items-end justify-between gap-4">
        <h3 className="text-2xl text-forest sm:text-3xl">{labels.heading}</h3>
        <div className="flex items-center gap-2.5">
          <button type="button" onClick={() => page(-1)} disabled={atStart} aria-label={labels.previous} className={ARROW_CLASS}>
            <ArrowLeft size={17} />
          </button>
          <button type="button" onClick={() => page(1)} disabled={atEnd} aria-label={labels.next} className={ARROW_CLASS}>
            <ArrowRight size={17} />
          </button>
        </div>
      </div>

      <ul
        ref={trackRef}
        className="scrollbar-none -mx-5 flex snap-x snap-mandatory scroll-px-5 gap-4 overflow-x-auto overscroll-x-contain px-5 sm:mx-0 sm:scroll-px-0 sm:px-0"
      >
        {items.map((item) => (
          <li
            key={item.image}
            className="w-[72%] shrink-0 snap-start sm:w-[calc((100%-1rem)/2)] md:w-[calc((100%-2rem)/3)] lg:w-[calc((100%-3rem)/4)]"
          >
            <figure className="group">
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-sand">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 24vw, (min-width: 768px) 31vw, (min-width: 640px) 46vw, 72vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                />
              </div>
              <figcaption className="mt-3.5 flex flex-col gap-1">
                <span className="text-[11px] font-semibold uppercase tracking-wide text-gold-dark">{item.tag}</span>
                <span className="text-sm leading-snug text-ink">{item.caption}</span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </div>
  );
}
