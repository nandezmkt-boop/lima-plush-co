import type { Dictionary } from "@/lib/i18n/dictionaries/es";
import Reveal from "@/components/ui/Reveal";

type SpecsProps = {
  dict: Dictionary["specs"];
};

export default function Specs({ dict }: SpecsProps) {
  return (
    <section className="border-y border-sand-dark bg-sand/60 py-16 lg:py-20">
      <div className="container-lp">
        <Reveal className="mb-10 flex flex-col gap-2">
          <span className="eyebrow">{dict.eyebrow}</span>
          <h2 className="text-2xl sm:text-3xl">{dict.heading}</h2>
        </Reveal>

        <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
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
    </section>
  );
}
