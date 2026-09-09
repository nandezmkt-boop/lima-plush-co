import { Resend } from "resend";
import type { QuoteRequestInput } from "./validation";

const FROM_EMAIL = process.env.RESEND_FROM_EMAIL ?? "Lima Plush Co. <onboarding@resend.dev>";
const TO_EMAIL = process.env.QUOTE_TO_EMAIL ?? "limaplushco@gmail.com";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildEmailHtml(data: QuoteRequestInput): string {
  const rows: Array<[string, string]> = [
    ["Nombre", data.name],
    ["Empresa / organización", data.company],
    ["Email", data.email],
    ["Teléfono", data.phone],
    ["País", data.country],
    ["Tipo de proyecto", data.projectType],
    ["Cantidad aproximada", data.quantity],
    ["Tamaño aproximado", data.size],
    ["¿Tiene diseño?", data.hasDesign],
    ["Fecha aproximada de entrega", data.deadline || "—"],
    ["Idioma del formulario", data.locale.toUpperCase()],
  ];

  const rowsHtml = rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:8px 12px;font-weight:600;color:#1F3D2C;white-space:nowrap;vertical-align:top;">${escapeHtml(
          label
        )}</td><td style="padding:8px 12px;color:#1C1B17;">${escapeHtml(value)}</td></tr>`
    )
    .join("");

  return `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
      <h2 style="color:#1F3D2C;">Nueva solicitud de presupuesto — Lima Plush Co.</h2>
      <table style="border-collapse:collapse;width:100%;background:#F9F5EC;border-radius:4px;overflow:hidden;">
        ${rowsHtml}
      </table>
      <h3 style="color:#1F3D2C;margin-top:24px;">Descripción del proyecto</h3>
      <p style="white-space:pre-wrap;color:#1C1B17;line-height:1.6;">${escapeHtml(data.description)}</p>
      ${
        data.attachment
          ? `<p style="color:#4A463C;font-size:13px;">Archivo adjunto: ${escapeHtml(data.attachment.filename)}</p>`
          : ""
      }
    </div>
  `;
}

export type SendQuoteEmailResult =
  | { sent: true }
  | { sent: false; reason: "not-configured" }
  | { sent: false; reason: "error"; error: unknown };

export async function sendQuoteEmail(data: QuoteRequestInput): Promise<SendQuoteEmailResult> {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.info("[quote] RESEND_API_KEY no configurada. Solicitud recibida:", {
      name: data.name,
      company: data.company,
      email: data.email,
    });
    return { sent: false, reason: "not-configured" };
  }

  try {
    const resend = new Resend(apiKey);

    await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: data.email,
      subject: `Nueva solicitud de presupuesto — ${data.company}`,
      html: buildEmailHtml(data),
      attachments: data.attachment
        ? [
            {
              filename: data.attachment.filename,
              content: Buffer.from(data.attachment.base64, "base64"),
            },
          ]
        : undefined,
    });

    return { sent: true };
  } catch (error) {
    console.error("[quote] Error enviando email con Resend:", error);
    return { sent: false, reason: "error", error };
  }
}
