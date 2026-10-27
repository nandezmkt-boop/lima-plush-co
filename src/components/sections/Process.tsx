import Image from "next/image";
import type { Dictionary } from "@/lib/i18n/dictionaries/es";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

type ProcessProps = {
  dict: Dictionary["process"];
};

export default function Process({ dict }: ProcessProps) {
  return (
    <section id="como-trabajamos" className="bg-cream py-20 lg:py-28">
      <div className="container-lp">
        <SectionHeading eyebrow={dict.eyebrow} heading={dict.heading} intro={dict.intro} align="center" />

        <div className="relative mx-auto mt-16 max-w-3xl">
          <div aria-hidden className="absolute left-[1.6875rem] top-2 bottom-2 w-px bg-sand-dark sm:left-[1.9375rem]" />
          <ol className="flex flex-col gap-10">
            {dict.steps.map((step, index) => (
              <li key={step.number}>
                <Reveal delay={index * 0.05} y={16} className="relative flex gap-6 sm:gap-8">
                  <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-gold-dark/40 bg-forest font-display text-lg italic text-gold-light sm:h-16 sm:w-16 sm:text-xl">
                    {step.number}
                  </span>
                  <div className="flex flex-col gap-1.5 pt-2">
                    <h3 className="text-lg font-semibold text-forest sm:text-xl">{step.title}</h3>
                    <p className="max-w-lg text-sm leading-relaxed text-ink-soft sm:text-[0.9375rem]">{step.description}</p>
                    {step.views ? (
                      <div className="mt-3 grid max-w-sm grid-cols-3 gap-2.5">
                        {step.views.map((view) => (
                          <figure key={view.image} className="flex flex-col gap-1.5">
                            <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-sand">
                              <Image
                                src={view.image}
                                alt={(step.viewsAlt ?? "").replace("{view}", view.label.toLowerCase())}
                                fill
                                sizes="(min-width: 1440px) 9vw, (min-width: 640px) 130px, 28vw"
                                className="object-cover"
                              />
                            </div>
                            <figcaption className="text-[0.6875rem] uppercase tracking-wide text-ink-soft/80">
                              {view.label}
                            </figcaption>
                          </figure>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
