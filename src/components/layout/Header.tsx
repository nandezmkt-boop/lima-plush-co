"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Logo from "@/components/ui/Logo";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries/es";

type HeaderProps = {
  locale: Locale;
  nav: Dictionary["nav"];
};

export default function Header({ locale, nav }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const otherLocale: Locale = locale === "es" ? "en" : "es";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-cream/95 shadow-[0_1px_0_0_var(--color-sand-dark)] backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container-lp flex h-[68px] items-center justify-between lg:h-20">
        <Link href={`/${locale}#inicio`} onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-5 xl:flex 2xl:gap-8">
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] font-medium uppercase tracking-wide text-ink-soft transition-colors hover:text-forest"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 xl:flex 2xl:gap-5">
          <Link
            href={`/${otherLocale}`}
            className="text-[13px] font-semibold uppercase tracking-wide text-ink-soft transition-colors hover:text-forest"
          >
            {nav.langSwitchLabel}
          </Link>
          <a href="#contacto" className="btn btn-primary">
            {nav.cta}
          </a>
        </div>

        <button
          type="button"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center text-forest xl:hidden"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-sand-dark bg-cream px-5 pb-8 pt-4 sm:px-8 xl:hidden">
          <nav className="flex flex-col gap-1">
            {nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-sand-dark/70 py-3.5 text-[15px] font-medium text-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-5 flex items-center justify-between gap-4">
            <Link
              href={`/${otherLocale}`}
              onClick={() => setOpen(false)}
              className="text-sm font-semibold uppercase tracking-wide text-ink-soft"
            >
              {nav.langSwitchLabel}
            </Link>
            <a href="#contacto" onClick={() => setOpen(false)} className="btn btn-primary flex-1 justify-center">
              {nav.cta}
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
