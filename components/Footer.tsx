import Link from "next/link";

const footerLinks = {
  Services: [
    { label: "Chemical Peels",      href: "/services/chemical-peels" },
    { label: "Freckle Removal",     href: "/services/freckle-removal" },
    { label: "Wart Treatment",      href: "/services/wart-treatment" },
    { label: "Hair Loss Treatment", href: "/services/hair-loss-treatment" },
    { label: "PRP / GFC",           href: "/services/prp-gfc" },
    { label: "Microneedling",       href: "/services/microneedling" },
  ],
  Learn: [
    { label: "About the Clinic", href: "/#about" },
    { label: "Testimonials",     href: "/#testimonials" },
    { label: "Blog",             href: "/blog" },
    { label: "Privacy Policy",   href: "/privacy-policy" },
    { label: "Disclaimer",       href: "/disclaimer" },
  ],
};

export default function Footer() {
  return (
    <footer className="ftr">
      <div className="wrap">
        <div className="ftr-grid">

          {/* Brand */}
          <div>
            <Link href="/" className="logo" aria-label="Pranava Skin Clinic">
              <div className="name" style={{ color: "#fff" }}>
                Pranava
                <small>Skin · Hair · Aesthetics</small>
              </div>
            </Link>
            <p className="ftr-about">
              Medical-grade dermatology and aesthetic medicine in Bangalore.
              Clinical precision, compassionate care.
            </p>
            <a
              href="https://www.instagram.com/pranava_skin/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                marginTop: "20px", color: "#93a5b8", textDecoration: "none", fontSize: "14px",
              }}
            >
              <InstagramIcon />
              @pranava_skin
            </a>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h4>{group}</h4>
              <ul>
                {links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h4>Contact</h4>
            <div className="ftr-contact-item">
              <MapIcon />
              <span>2172, 13A Main Rd, Kumaraswamy Layout, Bangalore — 560078</span>
            </div>
            <div className="ftr-contact-item">
              <PhoneIcon />
              <a href="tel:+919483127354">+91 94831 27354</a>
            </div>
            <div className="ftr-contact-item">
              <MailIcon />
              <a href="mailto:pranavaskin@gmail.com">pranavaskin@gmail.com</a>
            </div>

            <div style={{ marginTop: "20px", borderRadius: "12px", overflow: "hidden", height: "180px" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m11!1m3!1d3!2d77.56187349999999!3d12.9007238!2m2!1f0!2f90!3m2!1i1024!2i768!4f75!3m3!1m2!1s0x3bae3f3e13dc0157%3A0x4c2bf9eb505a7fbc!2sPranava%20skin%2C%20hair%20and%20aesthetics%20clinic!4v1780241453692"
                width="100%" height="100%"
                style={{ border: 0, display: "block" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Pranava Skin Clinic on Google Maps"
                allowFullScreen
              />
            </div>
          </div>

        </div>

        <div className="ftr-bottom">
          <span>© {new Date().getFullYear()} Pranava Skin, Hair and Aesthetics Clinic. All rights reserved.</span>
          <span>
            Content is informational only.{" "}
            <Link href="/disclaimer">Full disclaimer</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
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
