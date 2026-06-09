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
    <section id="contact" className="band">
      <div className="wrap">
        <div className="sec-head center">
          <span className="eyebrow">Get in Touch</span>
          <h2 className="h-section">Book a Consultation</h2>
          <p className="lead">
            Begin with a thorough skin consultation. Bring any prior prescriptions or treatment history.
          </p>
        </div>

        <div className="contact-grid">
          {/* Info column */}
          <div className="contact-info">
            {[
              {
                icon: <PhoneIcon />,
                label: "Phone",
                content: <a href="tel:+919483127354">+91 94831 27354</a>,
              },
              {
                icon: <MailIcon />,
                label: "Email",
                content: <a href="mailto:pranavaskin@gmail.com">pranavaskin@gmail.com</a>,
              },
              {
                icon: <MapIcon />,
                label: "Address",
                content: <span>2172, 13A Main Rd, Kumaraswamy Layout, Bangalore — 560078</span>,
              },
              {
                icon: <ClockIcon />,
                label: "Hours",
                content: (
                  <span>
                    Mon–Fri: 10:00 AM – 7:00 PM<br />
                    Saturday: 10:00 AM – 5:00 PM
                  </span>
                ),
              },
            ].map((item) => (
              <div className="contact-info-item" key={item.label}>
                <div className="ico-wrap">{item.icon}</div>
                <div>
                  <div className="label">{item.label}</div>
                  <div className="value">{item.content}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="form-card">
            {formState === "success" ? (
              <div style={{ textAlign: "center", padding: "32px 0" }}>
                <div style={{
                  width: "56px", height: "56px", borderRadius: "50%",
                  background: "var(--primary-tint)", color: "var(--primary)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  margin: "0 auto 16px",
                }}>
                  <CheckIcon />
                </div>
                <h3 style={{ fontSize: "22px", color: "var(--ink)", marginBottom: "8px" }}>Message Received</h3>
                <p style={{ color: "var(--muted)", fontSize: "15px" }}>
                  Thank you. We will be in touch within one business day to confirm your consultation.
                </p>
                <p style={{ color: "var(--muted)", fontSize: "13px", marginTop: "8px" }}>
                  A confirmation email is on its way — if you don&apos;t see it, please check your spam or promotions folder.
                </p>
                <button
                  onClick={() => setFormState("idle")}
                  style={{
                    marginTop: "24px", background: "none", border: "none", cursor: "pointer",
                    color: "var(--primary)", fontSize: "14px", fontWeight: 600, textDecoration: "underline",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} noValidate aria-label="Book a consultation">
                <h3>Request an Appointment</h3>
                <p className="sub">Fill in the form and we&apos;ll be in touch within one business day.</p>

                {/* Honeypot */}
                <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true"
                  style={{ position: "absolute", opacity: 0, pointerEvents: "none", width: 0, height: 0 }} />

                <div className="form-group">
                  <label htmlFor="name">Full Name <span style={{ color: "var(--primary)" }}>*</span></label>
                  <input id="name" type="text" name="name" required autoComplete="name" placeholder="Your name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address <span style={{ color: "var(--primary)" }}>*</span></label>
                  <input id="email" type="email" name="email" required autoComplete="email" placeholder="you@example.com" />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number <span style={{ color: "var(--muted)", fontWeight: 400 }}>(optional)</span></label>
                  <input id="phone" type="tel" name="phone" autoComplete="tel" placeholder="+91 9483127354" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message <span style={{ color: "var(--primary)" }}>*</span></label>
                  <textarea id="message" name="message" required rows={4}
                    placeholder="Briefly describe your concern or the treatment you're interested in" />
                </div>

                {formState === "error" && (
                  <p role="alert" style={{ color: "#dc2626", fontSize: "13px", margin: "0 0 16px" }}>
                    {errorMessage}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={formState === "submitting"}
                  className="btn btn-primary form-submit"
                  style={{ opacity: formState === "submitting" ? 0.6 : 1 }}
                >
                  {formState === "submitting" ? "Sending…" : "Send Message"}
                </button>

                <p style={{ marginTop: "16px", fontSize: "12px", color: "var(--muted)", textAlign: "center" }}>
                  Your details are kept private.{" "}
                  <a href="/privacy-policy" style={{ color: "var(--muted)", textDecoration: "underline" }}>Privacy Policy</a>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function PhoneIcon() {
  return (
    <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.6 3.4 2 2 0 0 1 3.59 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6.29 6.29l1.62-1.62a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function MapIcon() {
  return (
    <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
