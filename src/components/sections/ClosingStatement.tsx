import { ArrowRight } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/dictionaries/es";
import Reveal from "@/components/ui/Reveal";

type ClosingStatementProps = {
  dict: Dictionary["closing"];
};

export default function ClosingStatement({ dict }: ClosingStatementProps) {
  return (
    <section className="relative overflow-hidden bg-forest-dark py-24 text-cream lg:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[37.5rem] w-[56.25rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-[7.5rem]"
      />
      <div className="container-lp relative flex flex-col items-center gap-7 text-center">
        <Reveal>
          <span className="eyebrow !text-gold-light">{dict.eyebrow}</span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="max-w-3xl font-display text-3xl italic leading-[1.15] text-cream sm:text-4xl lg:text-5xl">
            {dict.heading}
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="max-w-2xl text-base leading-relaxed text-cream/70 sm:text-lg">{dict.paragraph}</p>
        </Reveal>
        <Reveal delay={0.24}>
          <a href="#contacto" className="btn btn-gold mt-3">
            {dict.cta}
            <ArrowRight size={16} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
