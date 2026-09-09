import type { Metadata } from "next";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { notFound } from "next/navigation";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { SITE_URL } from "@/lib/constants";
import Hero from "@/components/sections/Hero";
import ValueProps from "@/components/sections/ValueProps";
import Solutions from "@/components/sections/Solutions";
import Gallery from "@/components/sections/Gallery";
import Sectors from "@/components/sections/Sectors";
import Process from "@/components/sections/Process";
import Factory from "@/components/sections/Factory";
import VideoShowcase from "@/components/sections/VideoShowcase";
import Specs from "@/components/sections/Specs";
import ClosingStatement from "@/components/sections/ClosingStatement";
import QuoteFormSection from "@/components/sections/QuoteFormSection";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) return {};
  const locale: Locale = localeParam;
  const dict = await getDictionary(locale);

  return {
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      canonical: `${SITE_URL}/${locale}`,
      languages: {
        es: `${SITE_URL}/es`,
        en: `${SITE_URL}/en`,
      },
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      url: `${SITE_URL}/${locale}`,
      siteName: "Lima Plush Co.",
      locale: locale === "es" ? "es_PE" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
    },
  };
}

export default async function LocalePage({ params }: PageProps) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();
  const locale: Locale = localeParam;
  const dict = await getDictionary(locale);

  return (
    <>
      <Hero dict={dict.hero} />
      <ValueProps dict={dict.valueProps} />
      <Solutions dict={dict.solutions} />
      <Gallery dict={dict.gallery} />
      <Sectors dict={dict.sectors} />
      <Process dict={dict.process} />
      <Factory dict={dict.factory} />
      <VideoShowcase dict={dict.video} />
      <Specs dict={dict.specs} />
      <ClosingStatement dict={dict.closing} />
      <QuoteFormSection dict={dict.form} whatsappMessage={dict.whatsapp.defaultMessage} locale={locale} />
    </>
  );
}
