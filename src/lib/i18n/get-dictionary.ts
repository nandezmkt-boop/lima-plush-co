import "server-only";
import type { Locale } from "./config";
import type { Dictionary } from "./dictionaries/es";

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  es: () => import("./dictionaries/es").then((mod) => mod.default),
  en: () => import("./dictionaries/en").then((mod) => mod.default),
};

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale]();
}
