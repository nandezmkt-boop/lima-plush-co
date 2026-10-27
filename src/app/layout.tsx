import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Fraunces, Inter, Montserrat } from "next/font/google";
import { headers } from "next/headers";
import { defaultLocale, isLocale } from "@/lib/i18n/config";
import { SITE_URL } from "@/lib/constants";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
};

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Geometric sans matching the wordmark in the Lima Plush Co. logo.
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-montserrat",
  display: "swap",
});

export default async function RootLayout({ children }: { children: ReactNode }) {
  const headerList = await headers();
  const headerLocale = headerList.get("x-locale");
  const locale = headerLocale && isLocale(headerLocale) ? headerLocale : defaultLocale;

  return (
    <html lang={locale} className={`${fraunces.variable} ${inter.variable} ${montserrat.variable}`}>
      <body className="bg-cream text-ink antialiased">{children}</body>
    </html>
  );
}
