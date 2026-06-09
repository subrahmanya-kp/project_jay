import Link from "next/link";
import Image from "next/image";
import { services } from "@/content/services";

const serviceImages: Record<string, { src: string; focus: string }> = {
  "chemical-peels":      { src: "/services/chemical_peel.jpg",  focus: "object-top" },
  "freckle-removal":     { src: "/services/frekel.jpg",         focus: "object-top" },
  "wart-treatment":      { src: "/services/wart.jpg",           focus: "object-top" },
  "hair-loss-treatment": { src: "/services/hair_loss.avif",     focus: "object-top" },
  "prp-gfc":             { src: "/services/prp.jpg",            focus: "object-top" },
  "microneedling":       { src: "/services/Microneedling.webp", focus: "object-center" },
};

export default function Services() {
  return (
    <section id="services" className="band alt">
      <div className="wrap">
        <div className="sec-head center">
          <span className="eyebrow">What We Treat</span>
          <h2 className="h-section">Our Services</h2>
          <p className="lead">
            Every treatment begins with a thorough consultation. We match the
            intervention to the diagnosis — not the other way around.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "16px",
          marginTop: "48px",
        }}
          className="svc-arch-grid"
        >
          {services.map((service) => {
            const img = serviceImages[service.slug];
            return (
              <div
                key={service.slug}
                style={{
                  background: "#fff",
                  borderRadius: "999px 999px 16px 16px",
                  overflow: "hidden",
                  boxShadow: "var(--shadow-sm)",
                  transition: "transform 0.25s ease, box-shadow 0.25s ease",
                  display: "flex",
                  flexDirection: "column",
                  cursor: "pointer",
                }}
                className="svc-arch-card"
              >
                <div style={{ position: "relative", borderRadius: "999px 999px 0 0", overflow: "hidden", flexShrink: 0, aspectRatio: "3/4" }}>
                  <Image
                    src={img?.src ?? "/treatments/face.jpeg"}
                    alt={service.title}
                    fill
                    className={`object-cover ${img?.focus ?? "object-center"}`}
                    sizes="(max-width: 640px) 45vw, (max-width: 1024px) 28vw, 180px"
                  />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(44,132,230,0.18), transparent)" }} />
                </div>

                <div style={{ padding: "12px 12px 20px", textAlign: "center", display: "flex", flexDirection: "column", flex: 1 }}>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "13px", fontWeight: 700, color: "var(--ink)", letterSpacing: "0.04em", textTransform: "uppercase", marginBottom: "6px", lineHeight: 1.3 }}>
                    {service.title}
                  </h3>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "12px", color: "var(--muted)", lineHeight: 1.6, marginBottom: "10px", flex: 1, display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                    {service.shortDescription}
                  </p>
                  <Link href={`/services/${service.slug}`} style={{ fontFamily: "var(--font-body)", fontSize: "12px", fontWeight: 600, color: "var(--primary)", textDecoration: "none" }}>
                    Read More
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div style={{ textAlign: "center", marginTop: "48px" }}>
          <Link href="/#contact" className="btn btn-primary">
            <CalendarIcon />
            Book a Consultation
          </Link>
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
