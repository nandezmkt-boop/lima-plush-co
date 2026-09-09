import Image from "next/image";
import { ArrowDown, ArrowRight } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/dictionaries/es";
import Reveal from "@/components/ui/Reveal";

type HeroProps = {
  dict: Dictionary["hero"];
};

export default function Hero({ dict }: HeroProps) {
  return (
    <section id="inicio" className="relative overflow-hidden pt-[68px] lg:pt-20">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-gold/10 blur-3xl lg:h-[680px] lg:w-[680px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-1/3 h-[380px] w-[380px] rounded-full bg-forest/5 blur-3xl"
      />

      <div className="container-lp relative grid gap-14 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10 lg:py-20">
        <div className="flex flex-col items-start gap-7">
          <Reveal>
            <span className="eyebrow">{dict.eyebrow}</span>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="max-w-xl text-[2.6rem] leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-[3.75rem]">
              {dict.headline}
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="max-w-lg text-lg leading-relaxed text-ink-soft">{dict.subheadline}</p>
          </Reveal>

          <Reveal delay={0.24} className="flex w-full flex-col gap-3.5 sm:w-auto sm:flex-row">
            <a href="#contacto" className="btn btn-primary">
              {dict.ctaPrimary}
              <ArrowRight size={16} />
            </a>
            <a href="#proyectos" className="btn btn-secondary">
              {dict.ctaSecondary}
            </a>
          </Reveal>

          <Reveal delay={0.32} className="flex items-center gap-3 pt-3">
            <span className="h-px w-10 bg-gold-dark/60" />
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-forest">{dict.trustLine}</span>
              <span className="text-xs text-ink-soft/80">{dict.trustSub}</span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2} y={40} className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-sand shadow-soft">
            <Image
              src="/images/products/oso-logo-lima-plush.png"
              alt={dict.imageAlt}
              fill
              priority
              sizes="(min-width: 1024px) 42vw, 88vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rounded-sm bg-forest px-5 py-4 shadow-soft sm:block">
            <p className="font-display text-2xl italic text-cream">100%</p>
            <p className="text-[11px] uppercase tracking-wide text-cream/70">personalizable</p>
          </div>
        </Reveal>
      </div>

      <div className="hidden justify-center pb-10 lg:flex">
        <a href="#propuesta" className="flex flex-col items-center gap-2 text-xs text-ink-soft/70 transition-colors hover:text-forest">
          {dict.scrollHint}
          <ArrowDown size={14} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
}
