import Link from "next/link";
import { services } from "@/content/services";

export default function Services() {
  return (
    <section id="services" className="py-section bg-champagne texture-bg">
      <div className="max-w-content mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-xl mb-14">
          <p className="font-sans text-xs font-medium tracking-[0.2em] uppercase text-slate-mid mb-4">
            What We Treat
          </p>
          <h2 className="font-serif text-display-md text-ink mb-4">
            Dermatology &amp; Aesthetic Services
          </h2>
          <p className="font-sans text-base text-muted leading-relaxed">
            Every treatment at Pranava begins with a thorough consultation. We
            match the intervention to the diagnosis — not the other way around.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group bg-ivory p-7 lg:p-8 flex flex-col hover:bg-warm-white transition-colors duration-200"
            >
              {/* Icon */}
              <span
                className="text-2xl text-slate-mid mb-5 group-hover:text-slate-deep transition-colors"
                aria-hidden="true"
              >
                {service.icon}
              </span>

              {/* Title */}
              <h3 className="font-serif text-lg font-semibold text-ink mb-3 group-hover:text-slate-deep transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="font-sans text-sm text-muted leading-relaxed flex-1">
                {service.shortDescription}
              </p>

              {/* Treatments teaser */}
              <ul className="mt-5 space-y-1.5">
                {service.treatments.slice(0, 3).map((treatment) => (
                  <li
                    key={treatment}
                    className="font-sans text-xs text-muted flex items-start gap-2"
                  >
                    <span className="mt-1 w-1 h-1 rounded-full bg-slate-light flex-shrink-0" />
                    {treatment}
                  </li>
                ))}
                {service.treatments.length > 3 && (
                  <li className="font-sans text-xs text-slate-mid">
                    +{service.treatments.length - 3} more
                  </li>
                )}
              </ul>

              {/* Read more */}
              <div className="mt-6 flex items-center gap-1.5 font-sans text-xs font-medium text-slate-deep opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Learn more</span>
                <ArrowRight />
              </div>
            </Link>
          ))}
        </div>

        {/* Book CTA */}
        <div className="mt-14 text-center">
          <Link
            href="/#contact"
            className="inline-flex items-center px-8 py-3.5 bg-slate-deep text-ivory font-sans text-sm font-medium tracking-wide hover:bg-slate-mid transition-colors duration-200"
          >
            Book a Consultation
          </Link>
          <p className="mt-4 font-sans text-xs text-muted">
            Not sure which treatment is right for you? Start with a consultation.
          </p>
        </div>
      </div>
    </section>
  );
}

function ArrowRight() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M2 6h8M7 3l3 3-3 3" />
    </svg>
  );
}
