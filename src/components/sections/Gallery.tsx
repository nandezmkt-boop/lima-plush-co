import Image from "next/image";
import type { Dictionary } from "@/lib/i18n/dictionaries/es";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

type GalleryProps = {
  dict: Dictionary["gallery"];
};

const SPAN_PATTERN = [
  "sm:row-span-2",
  "",
  "",
  "sm:row-span-2",
  "",
  "",
  "sm:col-span-2 lg:col-span-1",
  "",
];

export default function Gallery({ dict }: GalleryProps) {
  return (
    <section id="proyectos" className="bg-cream py-20 lg:py-28">
      <div className="container-lp">
        <SectionHeading eyebrow={dict.eyebrow} heading={dict.heading} intro={dict.intro} />

        <div className="mt-14 grid auto-rows-[260px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {dict.items.map((item, index) => (
            <Reveal
              key={item.image}
              delay={(index % 4) * 0.06}
              className={`group relative overflow-hidden rounded-sm bg-sand ${SPAN_PATTERN[index] ?? ""}`}
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(min-width: 1024px) 24vw, (min-width: 640px) 45vw, 92vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/0 to-ink/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 flex translate-y-3 flex-col gap-1 p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="w-fit rounded-full bg-gold px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-forest-dark">
                  {item.tag}
                </span>
                <p className="text-sm font-medium text-cream">{item.caption}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
