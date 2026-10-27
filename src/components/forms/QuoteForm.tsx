"use client";

import { useRef, useState, type ChangeEvent, type FormEvent } from "react";
import { ArrowLeft, ArrowRight, CheckCircle2, Loader2, Paperclip, XCircle } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/dictionaries/es";
import type { Locale } from "@/lib/i18n/config";
import { COUNTRIES, buildWhatsAppLink } from "@/lib/constants";
import { MAX_FILE_SIZE_BYTES } from "@/lib/validation";

type QuoteFormProps = {
  dict: Dictionary["form"];
  whatsappMessage: string;
  locale: Locale;
};

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  country: string;
  projectType: string;
  quantity: string;
  size: string;
  hasDesign: string;
  deadline: string;
  description: string;
};

const emptyState: FormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  country: "",
  projectType: "",
  quantity: "",
  size: "",
  hasDesign: "",
  deadline: "",
  description: "",
};

function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      resolve(result.split(",")[1] ?? "");
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

const inputClasses =
  "w-full rounded-sm border border-sand-dark bg-cream px-4 py-3 text-[0.9375rem] text-ink placeholder:text-ink-soft/45 transition-colors focus:border-forest";

export default function QuoteForm({ dict, whatsappMessage, locale }: QuoteFormProps) {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<FormState>(emptyState);
  const [file, setFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const totalSteps = 3;
  const whatsappLink = buildWhatsAppLink(whatsappMessage);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setData((prev) => ({ ...prev, [key]: value }));
  }

  function handleFile(event: ChangeEvent<HTMLInputElement>) {
    const selected = event.target.files?.[0] ?? null;
    if (!selected) {
      setFile(null);
      setFileError(null);
      return;
    }
    if (selected.size > MAX_FILE_SIZE_BYTES) {
      setFileError(dict.validation.fileSize);
      setFile(null);
      event.target.value = "";
      return;
    }
    setFileError(null);
    setFile(selected);
  }

  function goNext() {
    if (formRef.current?.reportValidity()) {
      setStep((s) => Math.min(s + 1, totalSteps - 1));
    }
  }

  function goBack() {
    setStep((s) => Math.max(s - 1, 0));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!formRef.current?.reportValidity()) return;

    setStatus("submitting");

    try {
      let attachment: { filename: string; contentType: string; base64: string } | undefined;
      if (file) {
        const base64 = await fileToBase64(file);
        attachment = { filename: file.name, contentType: file.type || "application/octet-stream", base64 };
      }

      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, locale, attachment }),
      });

      if (!response.ok) throw new Error("request-failed");

      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 rounded-sm bg-cream px-6 py-16 text-center shadow-card">
        <CheckCircle2 size={44} className="text-forest" />
        <h3 className="text-2xl font-semibold text-forest">{dict.success.title}</h3>
        <p className="max-w-md text-[0.9375rem] leading-relaxed text-ink-soft">{dict.success.description}</p>
        {whatsappLink ? (
          <a href={whatsappLink} target="_blank" rel="noreferrer noopener" className="btn btn-secondary mt-2">
            {dict.success.whatsappCta}
          </a>
        ) : null}
      </div>
    );
  }

  const projectFields = dict.steps.project.fields;

  return (
    <div className="rounded-sm bg-cream p-6 shadow-card sm:p-9">
      <div className="mb-8 flex flex-col gap-3">
        <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wide text-ink-soft/70">
          <span>{dict.stepLabel.replace("{current}", String(step + 1)).replace("{total}", String(totalSteps))}</span>
          <span>
            {step === 0 ? dict.steps.contact.title : step === 1 ? dict.steps.project.title : dict.steps.details.title}
          </span>
        </div>
        <div className="h-1 w-full overflow-hidden rounded-full bg-sand">
          <div
            className="h-full rounded-full bg-gold transition-all duration-500"
            style={{ width: `${((step + 1) / totalSteps) * 100}%` }}
          />
        </div>
      </div>

      <form ref={formRef} onSubmit={handleSubmit} noValidate={false}>
        {step === 0 ? (
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="flex flex-col gap-1.5 sm:col-span-2">
              <span className="text-sm font-medium text-ink">{dict.steps.contact.fields.name.label}</span>
              <input
                required
                type="text"
                value={data.name}
                onChange={(e) => update("name", e.target.value)}
                placeholder={dict.steps.contact.fields.name.placeholder}
                className={inputClasses}
              />
            </label>
            <label className="flex flex-col gap-1.5 sm:col-span-2">
              <span className="text-sm font-medium text-ink">{dict.steps.contact.fields.company.label}</span>
              <input
                required
                type="text"
                value={data.company}
                onChange={(e) => update("company", e.target.value)}
                placeholder={dict.steps.contact.fields.company.placeholder}
                className={inputClasses}
              />
            </label>
            <label className="flex flex-col gap-1.5">
              <span className="text-sm font-medium text-ink">{dict.steps.contact.fields.email.label}</span>
              <input
                required
                type="email"
                value={data.email}
                onChange={(e) => update("email", e.target.value)}
                placeholder={dict.steps.contact.fields.email.placeholder}
                className={inputClasses}
              />
            </label>
            <label className="flex flex-col gap-1.5">
              <span className="text-sm font-medium text-ink">{dict.steps.contact.fields.phone.label}</span>
              <input
                required
                type="tel"
                value={data.phone}
                onChange={(e) => update("phone", e.target.value)}
                placeholder={dict.steps.contact.fields.phone.placeholder}
                className={inputClasses}
              />
            </label>
            <label className="flex flex-col gap-1.5 sm:col-span-2">
              <span className="text-sm font-medium text-ink">{dict.steps.contact.fields.country.label}</span>
              <select
                required
                value={data.country}
                onChange={(e) => update("country", e.target.value)}
                className={inputClasses}
              >
                <option value="" disabled>
                  {dict.steps.contact.fields.country.placeholder}
                </option>
                {COUNTRIES.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </label>
          </div>
        ) : null}

        {step === 1 ? (
          <div className="grid gap-5 sm:grid-cols-2">
            <fieldset className="flex flex-col gap-2 sm:col-span-2">
              <legend className="mb-1 text-sm font-medium text-ink">{projectFields.projectType.label}</legend>
              <div className="flex flex-col gap-2">
                {projectFields.projectType.options.map((option) => (
                  <label
                    key={option}
                    className={`flex cursor-pointer items-center gap-3 rounded-sm border px-4 py-3 text-sm transition-colors ${
                      data.projectType === option ? "border-forest bg-forest/5" : "border-sand-dark"
                    }`}
                  >
                    <input
                      required
                      type="radio"
                      name="projectType"
                      value={option}
                      checked={data.projectType === option}
                      onChange={(e) => update("projectType", e.target.value)}
                      className="accent-forest"
                    />
                    {option}
                  </label>
                ))}
              </div>
            </fieldset>

            <label className="flex flex-col gap-1.5">
              <span className="text-sm font-medium text-ink">{projectFields.quantity.label}</span>
              <input
                required
                type="text"
                value={data.quantity}
                onChange={(e) => update("quantity", e.target.value)}
                placeholder={projectFields.quantity.placeholder}
                className={inputClasses}
              />
            </label>
            <label className="flex flex-col gap-1.5">
              <span className="text-sm font-medium text-ink">{projectFields.size.label}</span>
              <input
                required
                type="text"
                value={data.size}
                onChange={(e) => update("size", e.target.value)}
                placeholder={projectFields.size.placeholder}
                className={inputClasses}
              />
            </label>

            <fieldset className="flex flex-col gap-2 sm:col-span-2">
              <legend className="mb-1 text-sm font-medium text-ink">{projectFields.hasDesign.label}</legend>
              <div className="flex flex-col gap-2">
                {projectFields.hasDesign.options.map((option) => (
                  <label
                    key={option}
                    className={`flex cursor-pointer items-center gap-3 rounded-sm border px-4 py-3 text-sm transition-colors ${
                      data.hasDesign === option ? "border-forest bg-forest/5" : "border-sand-dark"
                    }`}
                  >
                    <input
                      required
                      type="radio"
                      name="hasDesign"
                      value={option}
                      checked={data.hasDesign === option}
                      onChange={(e) => update("hasDesign", e.target.value)}
                      className="accent-forest"
                    />
                    {option}
                  </label>
                ))}
              </div>
            </fieldset>

            <label className="flex flex-col gap-1.5 sm:col-span-2">
              <span className="text-sm font-medium text-ink">{projectFields.deadline.label}</span>
              <input
                type="date"
                value={data.deadline}
                onChange={(e) => update("deadline", e.target.value)}
                className={inputClasses}
              />
            </label>
          </div>
        ) : null}

        {step === 2 ? (
          <div className="flex flex-col gap-5">
            <label className="flex flex-col gap-1.5">
              <span className="text-sm font-medium text-ink">{dict.steps.details.fields.description.label}</span>
              <textarea
                required
                minLength={10}
                rows={6}
                value={data.description}
                onChange={(e) => update("description", e.target.value)}
                placeholder={dict.steps.details.fields.description.placeholder}
                className={`${inputClasses} resize-none`}
              />
            </label>

            <div className="flex flex-col gap-1.5">
              <span className="text-sm font-medium text-ink">{dict.steps.details.fields.reference.label}</span>
              <label className="flex cursor-pointer items-center gap-3 rounded-sm border border-dashed border-sand-dark px-4 py-4 text-sm text-ink-soft transition-colors hover:border-forest">
                <Paperclip size={18} className="shrink-0 text-forest" />
                <span className="flex-1 truncate">{file ? file.name : dict.steps.details.fields.reference.hint}</span>
                <input type="file" accept=".jpg,.jpeg,.png,.pdf" onChange={handleFile} className="hidden" />
              </label>
              {fileError ? <span className="text-xs text-red-700">{fileError}</span> : null}
            </div>
          </div>
        ) : null}

        {status === "error" ? (
          <div className="mt-6 flex items-start gap-3 rounded-sm border border-red-200 bg-red-50 px-4 py-3.5 text-sm text-red-800">
            <XCircle size={18} className="mt-0.5 shrink-0" />
            <div>
              <p className="font-semibold">{dict.error.title}</p>
              <p>{dict.error.description}</p>
            </div>
          </div>
        ) : null}

        <div className="mt-8 flex items-center justify-between gap-4">
          {step > 0 ? (
            <button type="button" onClick={goBack} className="btn btn-secondary">
              <ArrowLeft size={16} />
              {dict.buttons.back}
            </button>
          ) : (
            <span />
          )}

          {step < totalSteps - 1 ? (
            <button type="button" onClick={goNext} className="btn btn-primary">
              {dict.buttons.next}
              <ArrowRight size={16} />
            </button>
          ) : (
            <button type="submit" disabled={status === "submitting"} className="btn btn-primary disabled:opacity-70">
              {status === "submitting" ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  {dict.buttons.submitting}
                </>
              ) : (
                dict.buttons.submit
              )}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
