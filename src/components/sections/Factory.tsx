import Image from "next/image";
import type { Dictionary } from "@/lib/i18n/dictionaries/es";
import Reveal from "@/components/ui/Reveal";

type FactoryProps = {
  dict: Dictionary["factory"];
};

export default function Factory({ dict }: FactoryProps) {
  return (
    <section id="fabrica" className="bg-sand/60 py-20 lg:py-28">
      <div className="container-lp grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <Reveal y={36} className="relative order-2 lg:order-1">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm shadow-soft sm:aspect-[5/4]">
            <Image
              src="/images/products/taller-leones-mesa.png"
              alt={dict.imageAlt}
              fill
              sizes="(min-width: 1024px) 46vw, 92vw"
              className="object-cover"
            />
          </div>
          <div className="mt-5 grid grid-cols-3 divide-x divide-sand-dark rounded-sm bg-cream shadow-card">
            {dict.stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-1 px-2 py-5 text-center">
                <span className="font-display text-2xl italic text-forest sm:text-3xl">{stat.value}</span>
                <span className="text-[11px] uppercase leading-tight tracking-wide text-ink-soft/70">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="order-1 flex flex-col gap-6 lg:order-2">
          <Reveal className="flex flex-col gap-4">
            <span className="eyebrow">{dict.eyebrow}</span>
            <h2 className="max-w-lg text-3xl leading-[1.1] sm:text-4xl">{dict.heading}</h2>
          </Reveal>
          {dict.paragraphs.map((paragraph, index) => (
            <Reveal key={paragraph} delay={0.08 + index * 0.06}>
              <p className="max-w-lg text-[15px] leading-relaxed text-ink-soft">{paragraph}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
