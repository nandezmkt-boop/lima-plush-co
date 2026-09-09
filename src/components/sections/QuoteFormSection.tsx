import { Mail, Phone } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/dictionaries/es";
import type { Locale } from "@/lib/i18n/config";
import Reveal from "@/components/ui/Reveal";
import QuoteForm from "@/components/forms/QuoteForm";
import { CONTACT_EMAIL, WHATSAPP_NUMBER, buildWhatsAppLink } from "@/lib/constants";

type QuoteFormSectionProps = {
  dict: Dictionary["form"];
  whatsappMessage: string;
  locale: Locale;
};

export default function QuoteFormSection({ dict, whatsappMessage, locale }: QuoteFormSectionProps) {
  const whatsappLink = buildWhatsAppLink(whatsappMessage);

  return (
    <section id="contacto" className="bg-sand/50 py-20 lg:py-28">
      <div className="container-lp grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="flex flex-col gap-6 lg:sticky lg:top-28 lg:self-start">
          <Reveal className="flex flex-col gap-4">
            <span className="eyebrow">{dict.eyebrow}</span>
            <h2 className="max-w-md text-3xl leading-[1.1] sm:text-4xl">{dict.heading}</h2>
            <p className="max-w-md text-[15px] leading-relaxed text-ink-soft">{dict.intro}</p>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col gap-3 border-t border-sand-dark pt-6">
            <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-3 text-sm text-ink-soft transition-colors hover:text-forest">
              <Mail size={17} className="text-forest" />
              {CONTACT_EMAIL}
            </a>
            {whatsappLink && WHATSAPP_NUMBER ? (
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-3 text-sm text-ink-soft transition-colors hover:text-forest"
              >
                <Phone size={17} className="text-forest" />
                WhatsApp Business
              </a>
            ) : null}
          </Reveal>
        </div>

        <Reveal delay={0.1} y={20}>
          <QuoteForm dict={dict} whatsappMessage={whatsappMessage} locale={locale} />
        </Reveal>
      </div>
    </section>
  );
}
