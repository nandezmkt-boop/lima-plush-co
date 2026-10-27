import { getImageProps } from "next/image";
import { ArrowDown, ArrowRight } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/dictionaries/es";
import Reveal from "@/components/ui/Reveal";

type HeroProps = {
  dict: Dictionary["hero"];
};

// Desktop uses a widened copy of the cover photo (backdrop extended left and up)
// so the plush group always sits to the right of the copy; smaller screens get
// the original framing stacked under the text.
function heroPicture(alt: string) {
  const common = { alt, sizes: "100vw", quality: 80 };
  const {
    props: { srcSet: desktop },
  } = getImageProps({ ...common, src: "/images/hero/portada-wide.jpg", width: 2400, height: 1160 });
  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({ ...common, src: "/images/hero/portada.jpg", width: 1672, height: 940 });
  return { desktop, mobile, rest };
}

export default function Hero({ dict }: HeroProps) {
  const { desktop, mobile, rest } = heroPicture(dict.imageAlt);

  return (
    <section
      id="inicio"
      className="relative isolate flex flex-col overflow-hidden bg-[linear-gradient(90deg,#eedccf,#e2c9b8)] pt-[4.25rem] lg:h-[min(100svh,62vw)] lg:min-h-[42.5rem] lg:justify-center lg:bg-none lg:pt-20"
    >
      <div className="container-lp relative z-10 pb-10 pt-12 sm:pt-16 lg:py-0">
        <div className="flex max-w-xl flex-col items-start gap-6 lg:max-w-[27rem] xl:max-w-[31rem]">
          <Reveal>
            <span className="eyebrow">{dict.eyebrow}</span>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="text-[3.1rem] leading-[0.98] tracking-tight text-ink sm:text-7xl lg:text-[4.2rem] xl:text-[5.4rem]">
              <span className="block">{dict.headline.lead}</span>
              <span className="block italic text-forest">{dict.headline.emphasis}</span>
              <span className="block">{dict.headline.tail}</span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="max-w-md text-lg leading-relaxed text-ink-soft lg:max-w-[23rem] xl:max-w-md">
              {dict.subheadline}
            </p>
          </Reveal>

          <Reveal delay={0.24} className="flex w-full flex-col gap-3.5 sm:w-auto sm:flex-row">
            <a href="#contacto" className="btn btn-primary">
              {dict.ctaPrimary}
              <ArrowRight size={16} />
            </a>
            <a href="#proyectos" className="btn btn-secondary bg-cream/40 backdrop-blur-[2px]">
              {dict.ctaSecondary}
            </a>
          </Reveal>

          <Reveal delay={0.32} className="flex items-center gap-3 pt-2">
            <span className="h-px w-10 bg-gold-dark/60" />
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-forest">{dict.trustLine}</span>
              <span className="text-xs text-ink-soft">{dict.trustSub}</span>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="relative aspect-[4/3] w-full sm:aspect-[16/9] lg:absolute lg:inset-0 lg:-z-10 lg:aspect-auto">
        <picture>
          <source media="(min-width: 1024px)" srcSet={desktop} />
          <source srcSet={mobile} />
          <img
            {...rest}
            alt={dict.imageAlt}
            fetchPriority="high"
            loading="eager"
            className="absolute inset-0 h-full w-full object-cover object-[72%_50%] [mask-image:linear-gradient(to_bottom,transparent,#000_28%)] lg:object-right-bottom lg:[mask-image:none]"
          />
        </picture>
        {/* Keeps the copy legible where the plush group drifts under it on narrower desktops. */}
        <div
          aria-hidden
          className="absolute inset-0 hidden bg-[linear-gradient(90deg,rgb(238_220_208/0.92)_0%,rgb(238_220_208/0.7)_30%,rgb(238_220_208/0)_52%)] lg:block"
        />

        <Reveal
          delay={0.4}
          y={20}
          className="absolute right-5 top-4 sm:right-8 lg:right-[calc(max(0%,_(100%_-_82rem)_/_2)_+_2.5rem)] lg:top-[20%]"
        >
          <div className="rounded-sm bg-forest px-5 py-4 shadow-soft">
            <p className="font-display text-2xl italic text-cream">{dict.badgeValue}</p>
            <p className="text-[0.6875rem] uppercase tracking-wide text-cream/70">{dict.badgeLabel}</p>
          </div>
        </Reveal>
      </div>

      {/* Only when the hero has spare height; the aspect cap accounts for the wide-screen scaling. */}
      <div className="container-lp absolute inset-x-0 bottom-8 z-10 hidden [@media(min-width:1280px)_and_(min-height:821px)_and_(max-aspect-ratio:1754/1000)]:block">
        <a
          href="#propuesta"
          className="inline-flex items-center gap-2 text-xs text-ink-soft transition-colors hover:text-forest"
        >
          <ArrowDown size={14} className="animate-bounce" />
          {dict.scrollHint}
        </a>
      </div>
    </section>
  );
}
