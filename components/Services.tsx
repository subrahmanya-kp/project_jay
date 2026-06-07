import Link from "next/link";
import Image from "next/image";
import { services } from "@/content/services";

const serviceImages: Record<string, { src: string; focus: string }> = {
  "chemical-peels":       { src: "/services/chemical_peel.jpg",  focus: "object-top" },
  "freckle-removal":      { src: "/services/frekel.jpg",         focus: "object-top" },
  "wart-treatment":       { src: "/services/wart.jpg",           focus: "object-top" },
  "hair-loss-treatment":  { src: "/services/hair_loss.avif",     focus: "object-top" },
  "prp-gfc":              { src: "/services/prp.jpg",            focus: "object-top" },
  "microneedling":        { src: "/services/Microneedling.webp", focus: "object-center" },
};

export default function Services() {
  return (
    <section id="services" className="py-section bg-slate-mist">
      <div className="max-w-content mx-auto px-6 lg:px-[15%]">

        {/* Section header */}
        <div className="text-center mb-14">
          <div className="w-8 h-px bg-gold mx-auto mb-4" aria-hidden="true" />
          <p className="font-sans text-[11px] font-medium tracking-[0.2em] uppercase text-slate-mid mb-3">
            What We Treat
          </p>
          <h2 className="font-serif text-display-lg text-ink mb-4 leading-tight">
            Our Services
          </h2>
          <p className="font-sans text-lg text-muted leading-relaxed max-w-xl mx-auto">
            Every treatment begins with a thorough consultation. We match the
            intervention to the diagnosis — not the other way around.
          </p>
        </div>

        {/* Cards — 2 col → 3 col → 6 col (single row on desktop) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {services.map((service) => {
            const img = serviceImages[service.slug];
            return (
              <div
                key={service.slug}
                className="group bg-white rounded-t-full rounded-b-2xl shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 flex flex-col"
              >
                {/* Small arch image inset inside the card dome */}
                <div className="w-1/2 mx-auto mt-5 rounded-t-full overflow-hidden flex-shrink-0 relative aspect-[3/4]">
                  <Image
                    src={img?.src ?? "/treatments/face.jpeg"}
                    alt={service.title}
                    fill
                    className={`object-cover ${img?.focus ?? "object-center"}`}
                    sizes="(max-width: 640px) 35vw, (max-width: 1024px) 22vw, 140px"
                  />
                </div>

                {/* Content */}
                <div className="px-3 pb-5 pt-4 text-center flex flex-col flex-1">
                  <h3 className="font-serif text-sm font-bold text-ink uppercase tracking-wide mb-2 leading-snug group-hover:text-slate-deep transition-colors">
                    {service.title}
                  </h3>
                  <p className="font-sans text-xs text-muted leading-relaxed line-clamp-4 mb-3 flex-1">
                    {service.shortDescription}
                  </p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="font-sans text-xs font-semibold text-slate-deep underline underline-offset-2 hover:text-slate-mid transition-colors"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Link
            href="/#contact"
            className="inline-flex items-center px-8 py-3.5 bg-slate-deep text-ivory font-sans text-sm font-medium tracking-wide hover:bg-slate-mid transition-colors duration-200"
          >
            Book a Consultation
          </Link>
        </div>

      </div>
    </section>
  );
}
