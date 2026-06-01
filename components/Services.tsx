import Link from "next/link";
import { services } from "@/content/services";

export default function Services() {
  return (
    <section id="services" className="py-section bg-champagne texture-bg">
      <div className="max-w-content mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 gap-6">
          <div className="max-w-lg">
            <div className="w-8 h-px bg-gold mb-4" aria-hidden="true" />
            <p className="font-sans text-[11px] font-medium tracking-[0.2em] uppercase text-slate-mid mb-3">
              What We Treat
            </p>
            <h2 className="font-serif text-display-md text-ink mb-4 leading-tight">
              Our Services
            </h2>
            <p className="font-sans text-base text-muted leading-relaxed">
              Every treatment begins with a thorough consultation. We match
              the intervention to the diagnosis — not the other way around.
            </p>
          </div>
          <Link
            href="/#contact"
            className="flex-shrink-0 inline-flex items-center px-6 py-3 bg-slate-deep text-ivory font-sans text-sm font-medium tracking-wide hover:bg-slate-mid transition-colors duration-200"
          >
            Book a Consultation
          </Link>
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
                className="text-xl text-slate-mid mb-4 group-hover:text-slate-deep transition-colors"
                aria-hidden="true"
              >
                {service.icon}
              </span>

              {/* Title */}
              <h3 className="font-serif text-[17px] font-semibold text-ink mb-2.5 group-hover:text-slate-deep transition-colors leading-snug">
                {service.title}
              </h3>

              {/* Description */}
              <p className="font-sans text-sm text-muted leading-relaxed flex-1">
                {service.shortDescription}
              </p>

              {/* Read more */}
              <div className="mt-5 flex items-center gap-1.5 font-sans text-xs font-medium text-slate-deep">
                <span>Learn more</span>
                <ArrowRight />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function ArrowRight() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d="M2 6h8M7 3l3 3-3 3" />
    </svg>
  );
}
