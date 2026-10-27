"use client";

import type { KeyboardEvent } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, MapPin, Quote } from "lucide-react";
import type { CaseStudy, Dictionary } from "@/lib/i18n/dictionaries/es";
import { useScrollCarousel } from "@/components/ui/useScrollCarousel";

type CaseStudiesProps = {
  dict: Dictionary["gallery"];
};

const pad = (value: number) => String(value).padStart(2, "0");

function fill(template: string, values: Record<string, string | number>) {
  return template.replace(/\{(\w+)\}/g, (_, key: string) => String(values[key] ?? ""));
}

function CaseVisual({ item }: { item: CaseStudy }) {
  if (!item.image) {
    // No photo yet: a branded panel that carries the client and its key result.
    return (
      <div className="relative flex aspect-[4/5] w-full flex-col justify-between overflow-hidden rounded-sm bg-forest p-8 text-cream sm:p-10">
        <span
          aria-hidden
          className="pointer-events-none absolute right-8 top-1/2 -translate-y-1/2 font-display text-[15rem] italic leading-none text-gold/10 sm:text-[17rem]"
        >
          {item.client.charAt(0)}
        </span>
        <div className="relative flex flex-col gap-2">
          <span className="font-display text-4xl italic leading-tight sm:text-5xl">{item.client}</span>
          <span className="flex items-center gap-1.5 text-sm text-cream/70">
            <MapPin size={14} />
            {item.location}
          </span>
        </div>
        {item.highlight ? (
          <div className="relative border-t border-cream/20 pt-6">
            <p className="font-display text-6xl italic text-gold-light sm:text-7xl">{item.highlight.value}</p>
            <p className="mt-2 max-w-[16rem] text-sm text-cream/75">{item.highlight.label}</p>
          </div>
        ) : null}
      </div>
    );
  }

  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-sand">
      <Image
        src={item.image}
        alt={item.imageAlt ?? item.client}
        fill
        sizes="(min-width: 1024px) 34vw, (min-width: 768px) 40vw, 92vw"
        className="object-cover"
      />
      {item.detailImage ? (
        <figure className="absolute bottom-4 right-4 w-[38%] sm:bottom-5 sm:right-5">
          <div className="relative aspect-[1145/1374] overflow-hidden rounded-sm bg-cream ring-4 ring-cream shadow-soft">
            <Image
              src={item.detailImage}
              alt={item.detailImageAlt ?? ""}
              fill
              sizes="(min-width: 1024px) 14vw, 36vw"
              className="object-cover"
            />
          </div>
          {item.detailLabel ? (
            <figcaption className="mt-2 w-fit rounded-sm bg-forest px-2 py-1 text-[0.625rem] font-semibold uppercase tracking-wide text-cream">
              {item.detailLabel}
            </figcaption>
          ) : null}
        </figure>
      ) : null}
    </div>
  );
}

export default function CaseStudies({ dict }: CaseStudiesProps) {
  const { cases, controls } = dict;
  const total = cases.length;
  const { trackRef, index, scrollTo } = useScrollCarousel<HTMLDivElement>();
  const active = Math.min(index, total - 1);
  const activeCase = cases[active];

  const goTo = (target: number) => {
    const track = trackRef.current;
    if (!track) return;
    scrollTo(((target + total) % total) * track.clientWidth);
  };

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      goTo(active + 1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      goTo(active - 1);
    }
  };

  return (
    <div role="region" aria-roledescription="carousel" aria-label={dict.casesLabel} onKeyDown={onKeyDown}>
      <p aria-live="polite" className="sr-only">
        {activeCase ? `${fill(controls.slideOf, { current: active + 1, total })}: ${activeCase.client}` : null}
      </p>

      <div
        ref={trackRef}
        tabIndex={0}
        className="scrollbar-none flex snap-x snap-mandatory overflow-x-auto overscroll-x-contain focus-visible:outline-offset-8"
      >
        {cases.map((item, i) => (
          <article
            key={item.client}
            role="group"
            aria-roledescription="slide"
            aria-label={fill(controls.slideOf, { current: i + 1, total })}
            className="w-full shrink-0 snap-start"
          >
            <div className="grid gap-8 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:items-center md:gap-12 lg:gap-16">
              <div className="w-full max-w-sm md:max-w-none">
                <CaseVisual item={item} />
              </div>

              <div className="flex flex-col gap-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-display text-sm italic text-gold-dark">
                    {dict.caseLabel} {pad(i + 1)}
                  </span>
                  <span aria-hidden className="h-px w-8 bg-gold-dark/40" />
                  <span className="rounded-full bg-sand px-3 py-1 text-xs font-medium text-ink-soft">
                    {item.project}
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="text-3xl leading-tight text-forest sm:text-4xl lg:text-[2.6rem]">{item.client}</h3>
                  <p className="flex items-center gap-1.5 text-sm text-ink-soft">
                    <MapPin size={14} className="text-gold-dark" />
                    {item.location}
                  </p>
                </div>

                <blockquote className="flex flex-col gap-4">
                  <Quote aria-hidden size={30} className="text-gold" fill="currentColor" strokeWidth={0} />
                  <p className="font-display text-lg leading-[1.65] text-ink sm:text-xl sm:leading-[1.6]">
                    {item.quote}
                  </p>
                </blockquote>

                {item.image && item.highlight ? (
                  <div className="flex items-baseline gap-3 border-t border-sand-dark pt-5">
                    <span className="font-display text-4xl italic text-forest">{item.highlight.value}</span>
                    <span className="text-sm text-ink-soft">{item.highlight.label}</span>
                  </div>
                ) : null}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10 flex items-center justify-between gap-6 border-t border-sand-dark pt-6">
        <div className="flex items-center gap-5">
          <span className="font-display text-lg italic tabular-nums text-forest">
            {pad(active + 1)} <span className="text-ink-soft/50">/ {pad(total)}</span>
          </span>
          <div className="flex items-center gap-1">
            {cases.map((item, i) => (
              <button
                key={item.client}
                type="button"
                onClick={() => goTo(i)}
                aria-label={fill(controls.goTo, { n: i + 1 })}
                aria-current={i === active ? "true" : undefined}
                className="group flex h-8 items-center px-1"
              >
                <span
                  className={`block h-[0.1875rem] rounded-full transition-all duration-500 ${
                    i === active ? "w-10 bg-forest" : "w-5 bg-sand-dark group-hover:bg-gold"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={() => goTo(active - 1)}
            aria-label={controls.previous}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-forest/25 text-forest transition-colors hover:border-forest hover:bg-forest hover:text-cream"
          >
            <ArrowLeft size={18} />
          </button>
          <button
            type="button"
            onClick={() => goTo(active + 1)}
            aria-label={controls.next}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-forest text-cream transition-colors hover:bg-forest-dark"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
