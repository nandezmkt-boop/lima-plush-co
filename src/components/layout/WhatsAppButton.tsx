"use client";

import { MessageCircle } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/constants";

type WhatsAppButtonProps = {
  label: string;
  message: string;
};

export default function WhatsAppButton({ label, message }: WhatsAppButtonProps) {
  const link = buildWhatsAppLink(message);

  if (!link) return null;

  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={label}
      className="group fixed bottom-5 right-5 z-40 flex items-center gap-2.5 rounded-full bg-[#25D366] py-3.5 pl-3.5 pr-3.5 text-white shadow-[0_10px_30px_-8px_rgba(0,0,0,0.4)] transition-all hover:pr-5 sm:bottom-7 sm:right-7"
    >
      <MessageCircle size={24} strokeWidth={2} fill="white" className="text-[#25D366]" />
      <span className="hidden max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold transition-all duration-300 group-hover:max-w-[220px] sm:inline-block">
        {label}
      </span>
    </a>
  );
}
