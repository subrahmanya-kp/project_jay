"use client";

import { useState, useRef } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if (data.get("website")) return;

    setFormState("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          phone: data.get("phone"),
          email: data.get("email"),
          message: data.get("message"),
        }),
      });

      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        throw new Error(json.error ?? "Something went wrong");
      }

      setFormState("success");
      formRef.current?.reset();
    } catch (err) {
      setFormState("error");
      setErrorMessage(err instanceof Error ? err.message : "Please try again.");
    }
  }

  return (
    <section id="contact" className="py-section bg-blush">
      <div className="max-w-content mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10">
          <div className="w-8 h-px bg-gold mx-auto mb-4" aria-hidden="true" />
          <p className="font-sans text-[11px] font-medium tracking-[0.2em] uppercase text-slate-mid mb-3">
            Get in Touch
          </p>
          <h2 className="font-serif text-display-lg text-ink mb-4 leading-tight">
            Book a Consultation
          </h2>
          <p className="font-sans text-lg text-muted leading-relaxed max-w-md mx-auto">
            Begin with a thorough skin consultation. Bring any prior
            prescriptions or treatment history.
          </p>
        </div>

        {/* Centered form card */}
        <div className="max-w-lg mx-auto">
          <div className="bg-ivory border border-border shadow-card p-8 lg:p-10">
            {formState === "success" ? (
              <div className="flex flex-col items-center text-center py-8">
                <div className="w-12 h-12 rounded-full bg-slate-mist flex items-center justify-center mb-4">
                  <CheckIcon />
                </div>
                <h3 className="font-serif text-xl text-ink mb-2">
                  Message Received
                </h3>
                <p className="font-sans text-sm text-muted">
                  Thank you. We will be in touch within one business day to
                  confirm your consultation.
                </p>
                <button
                  onClick={() => setFormState("idle")}
                  className="mt-8 font-sans text-sm text-slate-deep underline underline-offset-4"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                noValidate
                aria-label="Book a consultation"
              >
                <h3 className="font-serif text-xl text-ink mb-6 text-center">
                  Request an Appointment
                </h3>

                {/* Honeypot */}
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="absolute opacity-0 pointer-events-none w-0 h-0"
                />

                <div className="space-y-4">
                  <FormField label="Full Name" name="name" type="text" required autoComplete="name" placeholder="Your name" />
                  <FormField label="Email Address" name="email" type="email" required autoComplete="email" placeholder="you@example.com" />
                  <FormField label="Phone Number" name="phone" type="tel" autoComplete="tel" placeholder="+91 9483127354" note="Optional" />
                  <div className="flex flex-col gap-1.5">
                    <label className="font-sans text-xs font-medium text-ink tracking-wide">
                      Message <span className="text-slate-mid">*</span>
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      placeholder="Briefly describe your concern or the treatment you're interested in"
                      className="w-full px-4 py-3 bg-ivory border border-border font-sans text-sm text-ink placeholder:text-muted focus:border-slate-deep focus:outline-none resize-none transition-colors"
                    />
                  </div>
                </div>

                {formState === "error" && (
                  <p role="alert" className="mt-4 font-sans text-xs text-red-600">
                    {errorMessage}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={formState === "submitting"}
                  className="mt-6 w-full py-3.5 bg-gold text-ink font-sans text-sm font-semibold tracking-wide hover:bg-gold/90 disabled:opacity-50 transition-colors duration-200"
                >
                  {formState === "submitting" ? "Sending…" : "Send Message"}
                </button>

                <p className="mt-4 font-sans text-xs text-muted text-center leading-relaxed">
                  Your details are kept private. See our{" "}
                  <a href="/privacy-policy" className="underline underline-offset-2 hover:text-ink">
                    Privacy Policy
                  </a>
                  .
                </p>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}

function FormField({
  label, name, type, required, autoComplete, placeholder, note,
}: {
  label: string; name: string; type: string;
  required?: boolean; autoComplete?: string; placeholder?: string; note?: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="font-sans text-xs font-medium text-ink tracking-wide flex items-center gap-2">
        {label}
        {required ? (
          <span className="text-slate-mid">*</span>
        ) : note ? (
          <span className="text-muted font-normal">({note})</span>
        ) : null}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        autoComplete={autoComplete}
        placeholder={placeholder}
        className="w-full px-4 py-3 bg-ivory border border-border font-sans text-sm text-ink placeholder:text-muted focus:border-slate-deep focus:outline-none transition-colors"
      />
    </div>
  );
}

function CheckIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B8963E" strokeWidth="2" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
