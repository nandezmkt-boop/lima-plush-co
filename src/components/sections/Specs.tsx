import Image from "next/image";
import type { Dictionary } from "@/lib/i18n/dictionaries/es";
import Reveal from "@/components/ui/Reveal";

type SpecsProps = {
  dict: Dictionary["specs"];
};

export default function Specs({ dict }: SpecsProps) {
  return (
    <section className="border-y border-sand-dark bg-sand/60 py-16 lg:py-24">
      <div className="container-lp grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16">
        <Reveal y={28}>
          <figure className="flex flex-col gap-3">
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm shadow-card">
              <Image
                src={dict.image}
                alt={dict.imageAlt}
                fill
                sizes="(min-width: 1024px) 38vw, 92vw"
                className="object-cover"
              />
            </div>
            <figcaption className="text-xs italic text-ink-soft">{dict.imageCaption}</figcaption>
          </figure>
        </Reveal>

        <div>
          <Reveal className="mb-10 flex flex-col gap-2">
            <span className="eyebrow">{dict.eyebrow}</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl">{dict.heading}</h2>
          </Reveal>

          <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {dict.items.map((item, index) => (
              <Reveal
                key={item.title}
                delay={index * 0.06}
                className="flex flex-col gap-2 border-t-2 border-gold-dark/50 pt-4"
              >
                <h3 className="text-sm font-semibold uppercase tracking-wide text-forest">{item.title}</h3>
                <p className="text-sm leading-relaxed text-ink-soft">{item.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
