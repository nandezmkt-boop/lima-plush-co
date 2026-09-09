import { z } from "zod";

export const MAX_FILE_SIZE_BYTES = 5 * 1024 * 1024;

export const quoteRequestSchema = z.object({
  name: z.string().trim().min(2).max(120),
  company: z.string().trim().min(2).max(160),
  email: z.string().trim().email(),
  phone: z.string().trim().min(5).max(40),
  country: z.string().trim().min(2).max(80),
  projectType: z.string().trim().min(2).max(160),
  quantity: z.string().trim().min(1).max(80),
  size: z.string().trim().min(1).max(80),
  hasDesign: z.string().trim().min(2).max(160),
  deadline: z.string().trim().max(40).optional().default(""),
  description: z.string().trim().min(10).max(4000),
  locale: z.enum(["es", "en"]),
  attachment: z
    .object({
      filename: z.string().trim().min(1).max(200),
      contentType: z.string().trim().min(1).max(120),
      base64: z.string().min(1),
    })
    .optional(),
});

export type QuoteRequestInput = z.infer<typeof quoteRequestSchema>;
