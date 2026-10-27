import type { Dictionary } from "@/lib/i18n/dictionaries/es";
import Reveal from "@/components/ui/Reveal";
import Emphasis from "@/components/ui/Emphasis";

type ValuePropsProps = {
  dict: Dictionary["valueProps"];
};

export default function ValueProps({ dict }: ValuePropsProps) {
  return (
    <section id="propuesta" className="border-t border-sand-dark bg-cream py-20 lg:py-28">
      <div className="container-lp grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div className="flex flex-col gap-6 lg:sticky lg:top-28 lg:self-start">
          <Reveal className="flex flex-col gap-5">
            <span className="eyebrow">{dict.eyebrow}</span>
            <h2 className="max-w-md text-3xl leading-[1.1] sm:text-4xl lg:text-[2.75rem]">{dict.heading}</h2>
            <p className="max-w-md text-base leading-relaxed text-ink-soft">{dict.intro}</p>
          </Reveal>
        </div>

        <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2">
          {dict.items.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08} className="flex flex-col gap-3 border-t border-sand-dark pt-6">
              <span className="font-display text-3xl italic text-gold-dark">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-xl font-semibold text-forest">{item.title}</h3>
              <p className="text-[15px] leading-relaxed text-ink-soft">
                <Emphasis text={item.description} />
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
