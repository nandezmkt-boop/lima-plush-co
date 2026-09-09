import type { Dictionary } from "@/lib/i18n/dictionaries/es";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

type SectorsProps = {
  dict: Dictionary["sectors"];
};

export default function Sectors({ dict }: SectorsProps) {
  return (
    <section id="sectores" className="bg-forest py-20 text-cream lg:py-28">
      <div className="container-lp">
        <SectionHeading
          eyebrow={dict.eyebrow}
          heading={dict.heading}
          intro={dict.intro}
          tone="light"
          className="[&_h2]:text-cream [&_.eyebrow]:!text-gold-light"
        />

        <div className="mt-14 grid border-t border-cream/15 sm:grid-cols-2">
          {dict.items.map((item, index) => (
            <Reveal
              key={item.title}
              delay={(index % 4) * 0.06}
              className="group relative border-b border-cream/15 px-1 py-7 transition-colors sm:odd:border-r sm:odd:pr-8 sm:even:pl-8 lg:py-9"
            >
              <div className="flex items-baseline gap-4">
                <span className="font-display text-sm text-gold-light/80">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="font-display text-2xl italic text-cream transition-colors group-hover:text-gold-light lg:text-[1.75rem]">
                  {item.title}
                </h3>
              </div>
              <p className="mt-2 max-w-md pl-9 text-sm leading-relaxed text-cream/65">{item.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
