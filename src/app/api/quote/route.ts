import { NextResponse } from "next/server";
import { quoteRequestSchema, MAX_FILE_SIZE_BYTES } from "@/lib/validation";
import { sendQuoteEmail } from "@/lib/email";

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid-json" }, { status: 400 });
  }

  const parsed = quoteRequestSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: "validation", issues: parsed.error.issues }, { status: 400 });
  }

  const data = parsed.data;

  if (data.attachment) {
    const approxBytes = (data.attachment.base64.length * 3) / 4;
    if (approxBytes > MAX_FILE_SIZE_BYTES) {
      return NextResponse.json({ ok: false, error: "file-too-large" }, { status: 413 });
    }
  }

  const result = await sendQuoteEmail(data);

  if (!result.sent && result.reason === "error") {
    return NextResponse.json({ ok: false, error: "email-failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true, delivered: result.sent });
}
