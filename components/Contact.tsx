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

    // Honeypot check — silently discard
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
    <section id="contact" className="py-section bg-champagne">
      <div className="max-w-content mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left — info */}
          <div>
            <p className="font-sans text-xs font-medium tracking-[0.2em] uppercase text-slate-mid mb-4">
              Get in Touch
            </p>
            <h2 className="font-serif text-display-md text-ink mb-6">
              Book a Consultation
            </h2>
            <p className="font-sans text-base text-muted leading-relaxed mb-10">
              Begin with a thorough skin consultation. Bring any prior
              prescriptions or treatment history — it helps us understand the
              full picture.
            </p>

            {/* Clinic details */}
            <dl className="space-y-6">
              <ContactDetail label="Address">
                [Street Address],<br />
                Bangalore, Karnataka — 5600XX
              </ContactDetail>
              <ContactDetail label="Phone">
                <a
                  href="tel:+91XXXXXXXXXX"
                  className="hover:text-slate-deep transition-colors"
                >
                  +91 XXXX XXXXXX
                </a>
              </ContactDetail>
              <ContactDetail label="Email">
                <a
                  href="mailto:info@pranavaskin.com"
                  className="hover:text-slate-deep transition-colors"
                >
                  info@pranavaskin.com
                </a>
              </ContactDetail>
              <ContactDetail label="Clinic Hours">
                Mon – Fri: 10:00 AM – 7:00 PM<br />
                Saturday: 10:00 AM – 5:00 PM<br />
                Sunday: Closed
              </ContactDetail>
            </dl>

            {/* Map embed */}
            <div className="mt-10 aspect-video border border-border overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m11!1m3!1d3!2d77.56187349999999!3d12.9007238!2m2!1f0!2f90!3m2!1i1024!2i768!4f75!3m3!1m2!1s0x3bae3f3e13dc0157%3A0x4c2bf9eb505a7fbc!2sPranava%20skin%2C%20hair%20and%20aesthetics%20clinic!4v1780241453692"
                width="100%"
                height="100%"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Pranava Skin, Hair and Aesthetics Clinic on Google Maps"
                allowFullScreen
              />
            </div>
          </div>

          {/* Right — form */}
          <div>
            <div className="bg-ivory p-8 lg:p-10 shadow-card">
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
                  <h3 className="font-serif text-xl text-ink mb-8">
                    Request an Appointment
                  </h3>

                  {/* Honeypot — hidden from real users */}
                  <input
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    className="absolute opacity-0 pointer-events-none w-0 h-0"
                  />

                  <div className="space-y-5">
                    <FormField
                      label="Full Name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Your name"
                    />
                    <FormField
                      label="Email Address"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="you@example.com"
                    />
                    <FormField
                      label="Phone Number"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="+91 XXXX XXXXXX"
                      note="Optional"
                    />
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
                    className="mt-6 w-full py-3.5 bg-slate-deep text-ivory font-sans text-sm font-medium tracking-wide hover:bg-slate-mid disabled:opacity-60 transition-colors duration-200"
                  >
                    {formState === "submitting"
                      ? "Sending…"
                      : "Send Message"}
                  </button>

                  <p className="mt-4 font-sans text-xs text-muted text-center leading-relaxed">
                    Your details are kept private. See our{" "}
                    <a
                      href="/privacy-policy"
                      className="underline underline-offset-2 hover:text-ink"
                    >
                      Privacy Policy
                    </a>
                    .
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactDetail({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-0.5">
      <dt className="font-sans text-[10px] font-medium tracking-[0.15em] uppercase text-slate-mid">
        {label}
      </dt>
      <dd className="font-sans text-sm text-ink leading-relaxed">{children}</dd>
    </div>
  );
}

function FormField({
  label,
  name,
  type,
  required,
  autoComplete,
  placeholder,
  note,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
  autoComplete?: string;
  placeholder?: string;
  note?: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="font-sans text-xs font-medium text-ink tracking-wide flex items-center gap-2">
        {label}
        {required ? (
          <span className="text-slate-mid">*</span>
        ) : (
          note && (
            <span className="text-muted font-normal">({note})</span>
          )
        )}
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
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#3D4F6B"
      strokeWidth="2"
      aria-hidden="true"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
