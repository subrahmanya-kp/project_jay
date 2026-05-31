import Link from "next/link";

const footerLinks = {
  Services: [
    { label: "Acne Treatment", href: "/services/acne-treatment" },
    { label: "Hair Loss", href: "/services/hair-loss-treatment" },
    { label: "Laser Resurfacing", href: "/services/laser-skin-resurfacing" },
    { label: "Pigmentation", href: "/services/pigmentation-treatment" },
    { label: "Anti-Ageing", href: "/services/anti-ageing" },
    { label: "Medical Dermatology", href: "/services/skin-conditions" },
  ],
  Learn: [
    { label: "Blog", href: "/blog" },
    { label: "About the Clinic", href: "/#about" },
    { label: "Testimonials", href: "/#testimonials" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Medical Disclaimer", href: "/disclaimer" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-ink text-ivory">
      <div className="max-w-content mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="inline-flex flex-col leading-none mb-5 group" aria-label="Pranava Skin Clinic">
              <span className="font-serif text-xl font-semibold text-ivory group-hover:text-champagne transition-colors">
                Pranava
              </span>
              <span className="text-[10px] font-sans text-ivory/50 tracking-[0.15em] uppercase mt-0.5">
                Skin · Hair · Aesthetics
              </span>
            </Link>
            <p className="font-sans text-sm text-ivory/60 leading-relaxed max-w-xs mb-6">
              Premium dermatology and aesthetic medicine in Bangalore. Medical-grade care, always.
            </p>

            {/* NAP */}
            <address className="not-italic font-sans text-sm text-ivory/60 leading-relaxed space-y-1">
              <p>[Street Address], Bangalore</p>
              <p>Karnataka — 5600XX, India</p>
              <a href="tel:+91XXXXXXXXXX" className="block hover:text-ivory transition-colors">
                +91 XXXX XXXXXX
              </a>
              <a href="mailto:info@pranavaskin.com" className="block hover:text-ivory transition-colors">
                info@pranavaskin.com
              </a>
            </address>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/pranava_skin/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pranava Skin on Instagram"
              className="inline-flex items-center gap-2 mt-6 text-ivory/60 hover:text-ivory transition-colors font-sans text-sm"
            >
              <InstagramIcon />
              <span>@pranava_skin</span>
            </a>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([groupName, links]) => (
            <div key={groupName} className="col-span-1">
              <p className="font-sans text-[10px] font-medium tracking-[0.2em] uppercase text-ivory/40 mb-4">
                {groupName}
              </p>
              <ul className="space-y-2.5" role="list">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-sans text-sm text-ivory/60 hover:text-ivory transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-ivory/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="font-sans text-xs text-ivory/40">
            © {new Date().getFullYear()} Pranava Skin, Hair and Aesthetics Clinic. All rights reserved.
          </p>
          <p className="font-sans text-xs text-ivory/40">
            Content is informational only — not a substitute for medical advice.{" "}
            <Link href="/disclaimer" className="underline underline-offset-2 hover:text-ivory/70 transition-colors">
              Full disclaimer
            </Link>
          </p>
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
