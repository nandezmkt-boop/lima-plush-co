// Vector redraw of the Lima Plush Co. emblem (shield + winged V), traced from
// the original brand artwork so it stays crisp at every size.

type Tone = "brand" | "light";

const COLORS: Record<Tone, { shield: string; wings: string; text: string }> = {
  brand: { shield: "#2b4a24", wings: "#a8894a", text: "text-ink" },
  light: { shield: "var(--color-cream)", wings: "var(--color-gold-light)", text: "text-cream" },
};

export const LOGO_PATHS = {
  shield: [
    "M70.5 1H241.5V36.5L226.5 41.3V16H85.5V41.3L70.5 36.5Z",
    "M52 156L67.5 161V188.5L156 247.2L244.5 188.5V161L260 156V197L156 266L52 197Z",
  ],
  wings: [
    "M0 30.5L127.6 71.3L156 147L184.4 71.3L312 30.5V46.5Q312 49.5 309.1 50.4L200.5 85.2L156 207L111.5 85.2L2.9 50.4Q0 49.5 0 46.5Z",
    "M0 66L99.5 97.8V116.8L2.9 85.9Q0 85 0 82Z",
    "M312 66L212.5 97.8V116.8L309.1 85.9Q312 85 312 82Z",
    "M0 101.5L99.5 133.3V152.3L2.9 121.4Q0 120.5 0 117.5Z",
    "M312 101.5L212.5 133.3V152.3L309.1 121.4Q312 120.5 312 117.5Z",
  ],
};

type LogoMarkProps = {
  tone?: Tone;
  className?: string;
};

export function LogoMark({ tone = "brand", className }: LogoMarkProps) {
  const { shield, wings } = COLORS[tone];

  return (
    <svg viewBox="0 0 312 267" className={className} aria-hidden focusable="false">
      <g fill={shield}>
        {LOGO_PATHS.shield.map((d) => (
          <path key={d} d={d} />
        ))}
      </g>
      <g fill={wings}>
        {LOGO_PATHS.wings.map((d) => (
          <path key={d} d={d} />
        ))}
      </g>
    </svg>
  );
}

type LogoProps = LogoMarkProps & {
  markClassName?: string;
  textClassName?: string;
};

export default function Logo({ tone = "brand", className, markClassName, textClassName }: LogoProps) {
  return (
    <span className={`flex items-center gap-2.5 ${className ?? ""}`}>
      <LogoMark tone={tone} className={markClassName ?? "h-8 w-auto lg:h-9"} />
      <span
        className={`whitespace-nowrap font-brand font-semibold uppercase leading-none tracking-[0.07em] ${COLORS[tone].text} ${
          textClassName ?? "text-[0.9375rem] lg:text-base"
        }`}
      >
        Lima Plush Co.
      </span>
    </span>
  );
}
