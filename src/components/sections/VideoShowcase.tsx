import Image from "next/image";
import { Play } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/dictionaries/es";
import Reveal from "@/components/ui/Reveal";

type VideoShowcaseProps = {
  dict: Dictionary["video"];
};

export default function VideoShowcase({ dict }: VideoShowcaseProps) {
  return (
    <section className="bg-cream py-20 lg:py-28">
      <div className="container-lp">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-14">
          <Reveal className="flex flex-col gap-4">
            <span className="eyebrow">{dict.eyebrow}</span>
            <h2 className="max-w-md text-3xl leading-[1.1] sm:text-4xl">{dict.heading}</h2>
            <p className="max-w-md text-[15px] leading-relaxed text-ink-soft">{dict.description}</p>
            <p className="max-w-md border-l-2 border-gold pl-4 text-[15px] font-semibold leading-relaxed text-forest">
              {dict.note}
            </p>
          </Reveal>

          <Reveal y={36} delay={0.12}>
            <div className="relative aspect-video w-full overflow-hidden rounded-sm shadow-soft">
              <Image
                src="/images/factory/taller-produccion.jpg"
                alt={dict.posterAlt}
                fill
                sizes="(min-width: 1024px) 55vw, 92vw"
                className="object-cover object-[50%_40%]"
              />
              <div className="absolute inset-0 bg-ink/55" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-6 text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full border border-cream/40 bg-cream/10 text-cream backdrop-blur-sm sm:h-20 sm:w-20">
                  <Play size={28} className="ml-1" />
                </span>
                <p className="text-sm font-medium uppercase tracking-wide text-cream/90">{dict.placeholderLabel}</p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 lg:mt-20">
          <Reveal>
            <h3 className="eyebrow mb-6">{dict.production.title}</h3>
          </Reveal>
          <div className="grid grid-cols-3 gap-3 sm:gap-5">
            {dict.production.items.map((item, index) => (
              <Reveal key={item.image} delay={index * 0.08} y={20}>
                <figure className="group flex flex-col gap-3">
                  <div className="relative aspect-square overflow-hidden rounded-sm bg-sand sm:aspect-[4/3]">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(min-width: 1024px) 30vw, 32vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                    />
                  </div>
                  <figcaption className="text-xs leading-snug text-ink-soft sm:text-sm">{item.caption}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
