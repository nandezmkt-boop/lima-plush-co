import Image from "next/image";
import { Check, ArrowRight } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/dictionaries/es";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

type SolutionsProps = {
  dict: Dictionary["solutions"];
};

const IMAGES = {
  optionA: "/images/products/oso-logo-lima-plush.png",
  optionB: "/images/products/elefante-lila-frontal.png",
};

export default function Solutions({ dict }: SolutionsProps) {
  const options = [
    { ...dict.optionA, image: IMAGES.optionA, imageAlt: dict.optionA.title },
    { ...dict.optionB, image: IMAGES.optionB, imageAlt: dict.optionB.title },
  ];

  return (
    <section id="soluciones" className="bg-sand/60 py-20 lg:py-28">
      <div className="container-lp">
        <SectionHeading eyebrow={dict.eyebrow} heading={dict.heading} intro={dict.intro} />

        <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:gap-10">
          {options.map((option, index) => (
            <Reveal key={option.title} delay={index * 0.1} className="flex flex-col overflow-hidden rounded-sm bg-cream shadow-card">
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src={option.image}
                  alt={option.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 46vw, 92vw"
                  className="object-cover"
                />
                <span className="absolute left-4 top-4 rounded-sm bg-forest px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-cream">
                  {option.tag}
                </span>
              </div>

              <div className="flex flex-1 flex-col gap-6 p-7 lg:p-8">
                <div className="flex flex-col gap-3">
                  <h3 className="text-2xl font-semibold text-forest lg:text-[1.65rem]">{option.title}</h3>
                  <p className="text-[15px] leading-relaxed text-ink-soft">{option.description}</p>
                  <span className="w-fit rounded-full border border-gold-dark/40 bg-gold/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-gold-dark">
                    {option.minOrder}
                  </span>
                </div>

                <div className="flex flex-col gap-2.5">
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-ink-soft/70">
                    {option.includesTitle}
                  </h4>
                  <ul className="flex flex-col gap-2">
                    {option.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-ink">
                        <Check size={16} className="mt-0.5 shrink-0 text-forest" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col gap-2.5">
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-ink-soft/70">
                    {option.useCasesTitle}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {option.useCases.map((useCase) => (
                      <span
                        key={useCase}
                        className="rounded-full bg-sand px-3 py-1 text-xs font-medium text-ink-soft"
                      >
                        {useCase}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-xs text-ink-soft/70">
                  <span className="font-semibold text-ink-soft">{option.processTitle}: </span>
                  {option.process}
                </p>

                <a href="#contacto" className="btn btn-primary mt-auto w-fit">
                  {option.cta}
                  <ArrowRight size={15} />
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-10 text-center">
          <p className="text-sm text-ink-soft">{dict.notSure}</p>
        </Reveal>
      </div>
    </section>
  );
}
