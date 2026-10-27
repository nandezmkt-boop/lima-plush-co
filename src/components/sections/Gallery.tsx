import type { Dictionary } from "@/lib/i18n/dictionaries/es";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import CaseStudies from "./CaseStudies";
import ProjectStrip from "./ProjectStrip";

type GalleryProps = {
  dict: Dictionary["gallery"];
};

export default function Gallery({ dict }: GalleryProps) {
  return (
    <section id="proyectos" className="bg-cream py-20 lg:py-28">
      <div className="container-lp">
        <SectionHeading eyebrow={dict.eyebrow} heading={dict.heading} intro={dict.intro} />

        <Reveal delay={0.1} y={24} className="mt-14 lg:mt-16">
          <CaseStudies dict={dict} />
        </Reveal>

        <Reveal y={24}>
          <ProjectStrip labels={dict.more} items={dict.items} />
        </Reveal>
      </div>
    </section>
  );
}
