import Link from "next/link";

export default function CtaBand() {
  return (
    <section className="cta-band" style={{ paddingTop: "84px" }}>
      <div className="wrap">
        <div className="cta-inner">
          <div>
            <h2>Ready to start your skin health journey?</h2>
            <p>
              Book a consultation with Dr. Nagalakshmi K P and get a personalised
              treatment plan built around your skin type and goals.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", alignItems: "flex-start", flexShrink: 0 }}>
            <Link href="/#contact" className="btn btn-light">
              <CalendarIcon />
              Book a Consultation
            </Link>
            <a href="tel:+919483127354" style={{
              display: "flex", alignItems: "center", gap: "8px",
              color: "rgba(255,255,255,0.8)", fontSize: "14px", textDecoration: "none",
              fontWeight: 500,
            }}>
              <PhoneIcon />
              +91 94831 27354
            </a>
          </div>
          <div className="cta-deco" aria-hidden="true" />
          <div className="cta-deco2" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}

function CalendarIcon() {
  return (
    <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.6 3.4 2 2 0 0 1 3.59 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6.29 6.29l1.62-1.62a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
