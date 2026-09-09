import type { ReactNode } from "react";
import Reveal from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  heading: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  heading,
  intro,
  align = "left",
  tone = "dark",
  className,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";
  const introColor = tone === "light" ? "text-cream/75" : "text-ink-soft";

  return (
    <Reveal className={`flex flex-col gap-4 ${alignClass} ${className ?? ""}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="max-w-2xl text-3xl leading-[1.1] sm:text-4xl lg:text-5xl">{heading}</h2>
      {intro ? <p className={`max-w-xl text-base leading-relaxed sm:text-lg ${introColor}`}>{intro}</p> : null}
    </Reveal>
  );
}
