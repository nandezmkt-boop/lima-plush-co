import { ArrowRight, Gift, PackageOpen, Tag } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/dictionaries/es";
import Reveal from "@/components/ui/Reveal";
import { LogoMark } from "@/components/ui/Logo";

type PackagingProps = {
  dict: Dictionary["packaging"];
};

const ICONS = [PackageOpen, Tag, Gift];

export default function Packaging({ dict }: PackagingProps) {
  return (
    <section id="packaging" className="relative overflow-hidden bg-forest py-20 text-cream lg:py-28">
      <LogoMark
        tone="light"
        className="pointer-events-none absolute -bottom-24 -left-20 h-[26rem] w-auto opacity-[0.05] lg:-left-10 lg:h-[34rem]"
      />

      <div className="container-lp relative grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-20">
        <Reveal className="flex flex-col items-start gap-5">
          <span className="eyebrow !text-gold-light">{dict.eyebrow}</span>
          <h2 className="max-w-lg text-3xl leading-[1.1] text-cream sm:text-4xl lg:text-5xl">{dict.heading}</h2>
          <p className="max-w-lg text-base leading-relaxed text-cream/75 sm:text-lg">{dict.paragraph}</p>
          <a href="#contacto" className="btn btn-gold mt-3">
            {dict.cta}
            <ArrowRight size={16} />
          </a>
        </Reveal>

        <ul className="flex flex-col border-t border-cream/15">
          {dict.items.map((item, index) => {
            const Icon = ICONS[index % ICONS.length] ?? Gift;
            return (
              <li key={item.title} className="border-b border-cream/15">
                <Reveal delay={index * 0.08} y={20} className="flex gap-5 py-7">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold-light/40 text-gold-light">
                    <Icon size={20} strokeWidth={1.5} />
                  </span>
                  <div className="flex flex-col gap-1.5">
                    <h3 className="font-display text-xl text-cream lg:text-2xl">{item.title}</h3>
                    <p className="max-w-md text-sm leading-relaxed text-cream/65 sm:text-[15px]">{item.description}</p>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
