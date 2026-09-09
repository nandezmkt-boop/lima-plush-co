import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { MotionConfig } from "framer-motion";
import { locales, isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

type LocaleLayoutProps = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();
  const locale: Locale = localeParam;
  const dict = await getDictionary(locale);

  return (
    <MotionConfig reducedMotion="user">
      <a
        href="#main"
        className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-sm bg-forest px-4 py-2.5 text-sm font-semibold text-cream transition-transform focus:translate-y-0"
      >
        {dict.a11y.skipToContent}
      </a>
      <Header locale={locale} nav={dict.nav} />
      <main id="main">{children}</main>
      <Footer locale={locale} dict={dict} />
      <WhatsAppButton label={dict.whatsapp.label} message={dict.whatsapp.defaultMessage} />
    </MotionConfig>
  );
}
