export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://limaplushco.vercel.app";

export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "";

export const CONTACT_EMAIL = "limaplushco@gmail.com";

export const INSTAGRAM_HANDLE = "@limaplushco";
export const INSTAGRAM_URL = "https://instagram.com/limaplushco";

export function buildWhatsAppLink(message: string): string | null {
  if (!WHATSAPP_NUMBER) return null;
  const digitsOnly = WHATSAPP_NUMBER.replace(/[^0-9]/g, "");
  if (!digitsOnly) return null;
  return `https://wa.me/${digitsOnly}?text=${encodeURIComponent(message)}`;
}

export const COUNTRIES = [
  "Perú",
  "España",
  "México",
  "Colombia",
  "Chile",
  "Argentina",
  "Ecuador",
  "Bolivia",
  "Estados Unidos",
  "Otro",
];
