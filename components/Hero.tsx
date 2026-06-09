import Link from "next/link";
import Image from "next/image";

const stats = [
  { n: "5000+", l: "Patients Treated" },
  { n: "7+",   l: "Years Experience" },
  { n: "10+",  l: "Treatments Offered" },
  { n: "5★",   l: "Google Rating" },
];

export default function Hero() {
  return (
    <section className="hero" aria-label="Hero">
      <div className="wrap">
        <div className="hero-grid">

          {/* Left — copy */}
          <div>
            <span className="eyebrow">
              <MedicalIcon />
              Dermatology &amp; Aesthetics in Bangalore
            </span>
            <h1>
              Skin &amp; Hair Care,{" "}
              <span style={{ color: "var(--primary)" }}>Expertly</span>{" "}
              Done
            </h1>
            <p className="lead">
              Medical-grade dermatology and aesthetic treatments in Bangalore —
              where clinical precision meets compassionate care.
            </p>
            <div className="hero-cta">
              <Link href="/#contact" className="btn btn-primary">
                <CalendarIcon />
                Book a Consultation
              </Link>
              <Link href="/#services" className="btn btn-ghost">
                Our Services
              </Link>
            </div>
            <a
              href="tel:+919483127354"
              style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                marginTop: "16px", color: "var(--muted)", fontSize: "14px",
                textDecoration: "none", fontWeight: 500,
              }}
            >
              <PhoneIcon />
              +91 94831 27354
            </a>
            <div className="hero-trust">
              {stats.map((s) => (
                <div className="trust-item" key={s.n}>
                  <div className="n">{s.n}</div>
                  <div className="l">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — image */}
          <div className="hero-media">
            <div className="hero-img-frame">
              <Image
                src="/images/procedure.jpg"
                alt="PRP scalp treatment at Pranava Skin, Hair and Aesthetics Clinic, Bangalore"
                fill
                sizes="(max-width: 960px) 100vw, 45vw"
                className="object-cover object-center"
                priority
              />
            </div>
            <div className="hero-badge">
              <div className="ico-wrap">
                <StarIcon />
              </div>
              <div>
                <div className="t">Rated 5★ on Google</div>
                <div className="s">Verified patient reviews</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function MedicalIcon() {
  return (
    <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
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
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.6 3.4 2 2 0 0 1 3.59 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6.29 6.29l1.62-1.62a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg className="ico" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
