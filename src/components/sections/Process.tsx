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
          <div aria-hidden className="absolute left-[27px] top-2 bottom-2 w-px bg-sand-dark sm:left-[31px]" />
          <ol className="flex flex-col gap-10">
            {dict.steps.map((step, index) => (
              <Reveal key={step.number} delay={index * 0.05} y={16}>
                <li className="relative flex gap-6 pl-0 sm:gap-8">
                  <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-gold-dark/40 bg-forest font-display text-lg italic text-gold-light sm:h-16 sm:w-16 sm:text-xl">
                    {step.number}
                  </span>
                  <div className="flex flex-col gap-1.5 pt-2">
                    <h3 className="text-lg font-semibold text-forest sm:text-xl">{step.title}</h3>
                    <p className="max-w-lg text-sm leading-relaxed text-ink-soft sm:text-[15px]">{step.description}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
