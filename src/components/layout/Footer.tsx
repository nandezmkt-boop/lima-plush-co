import { AtSign, Mail, Phone } from "lucide-react";
import Logo from "@/components/ui/Logo";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries/es";
import { CONTACT_EMAIL, INSTAGRAM_HANDLE, INSTAGRAM_URL, WHATSAPP_NUMBER, buildWhatsAppLink } from "@/lib/constants";

type FooterProps = {
  locale: Locale;
  dict: Dictionary;
};

export default function Footer({ locale, dict }: FooterProps) {
  const year = new Date().getFullYear();
  const whatsappLink = buildWhatsAppLink(dict.whatsapp.defaultMessage);

  return (
    <footer className="bg-forest-dark text-cream">
      <div className="container-lp grid gap-12 py-16 lg:grid-cols-[1.3fr_1fr_1fr] lg:py-20">
        <div className="flex flex-col gap-5">
          <Logo
            tone="light"
            className="gap-3.5"
            markClassName="h-12 w-auto"
            textClassName="text-lg"
          />
          <p className="max-w-xs font-display text-lg italic text-cream/85">{dict.footer.tagline}</p>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="flex w-fit items-center gap-2 text-sm text-cream/70 transition-colors hover:text-gold-light"
          >
            <AtSign size={16} />
            {INSTAGRAM_HANDLE}
          </a>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="eyebrow !text-gold-light">{dict.footer.navTitle}</h3>
          <ul className="flex flex-col gap-2.5 text-sm text-cream/75">
            {dict.nav.links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-cream">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="eyebrow !text-gold-light">{dict.footer.contactTitle}</h3>
          <ul className="flex flex-col gap-3 text-sm text-cream/75">
            <li>
              <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-2.5 transition-colors hover:text-cream">
                <Mail size={16} className="shrink-0" />
                {CONTACT_EMAIL}
              </a>
            </li>
            {whatsappLink && WHATSAPP_NUMBER ? (
              <li>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center gap-2.5 transition-colors hover:text-cream"
                >
                  <Phone size={16} className="shrink-0" />
                  WhatsApp
                </a>
              </li>
            ) : null}
            <li className="pt-1 text-cream/50">{dict.footer.location}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container-lp flex flex-col gap-2 py-6 text-xs text-cream/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} Lima Plush Co. {dict.footer.rights}
          </p>
          <p>{dict.footer.madeIn}</p>
        </div>
      </div>
    </footer>
  );
}
