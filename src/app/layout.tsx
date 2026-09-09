import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Fraunces, Inter } from "next/font/google";
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

export default async function RootLayout({ children }: { children: ReactNode }) {
  const headerList = await headers();
  const headerLocale = headerList.get("x-locale");
  const locale = headerLocale && isLocale(headerLocale) ? headerLocale : defaultLocale;

  return (
    <html lang={locale} className={`${fraunces.variable} ${inter.variable}`}>
      <body className="bg-cream text-ink antialiased">{children}</body>
    </html>
  );
}
