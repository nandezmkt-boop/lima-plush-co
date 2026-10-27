"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type CarouselState = {
  index: number;
  atStart: boolean;
  atEnd: boolean;
};

// Tracks a horizontally scrolling, scroll-snapped track so native swipe,
// trackpad and button navigation all stay in sync.
export function useScrollCarousel<T extends HTMLElement>() {
  const trackRef = useRef<T>(null);
  const [state, setState] = useState<CarouselState>({ index: 0, atStart: true, atEnd: false });

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const update = () => {
      const { scrollLeft, clientWidth, scrollWidth } = track;
      const next: CarouselState = {
        index: clientWidth ? Math.round(scrollLeft / clientWidth) : 0,
        atStart: scrollLeft <= 4,
        atEnd: scrollLeft + clientWidth >= scrollWidth - 4,
      };
      setState((prev) =>
        prev.index === next.index && prev.atStart === next.atStart && prev.atEnd === next.atEnd ? prev : next,
      );
    };

    const frame = requestAnimationFrame(update);
    track.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(frame);
      track.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const scrollTo = useCallback((left: number) => {
    const track = trackRef.current;
    if (!track) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    track.scrollTo({ left, behavior: reduceMotion ? "auto" : "smooth" });
  }, []);

  return { trackRef, ...state, scrollTo };
}
