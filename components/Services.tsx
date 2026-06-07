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
    <section id="services" className="py-section bg-mauve">
      <div className="max-w-content mx-auto px-6 lg:px-[15%]">

        {/* Section header */}
        <div className="text-center mb-14">
          <div className="w-8 h-px bg-gold mx-auto mb-4" aria-hidden="true" />
          <p className="font-sans text-[11px] font-medium tracking-[0.2em] uppercase text-ink/60 mb-3">
            What We Treat
          </p>
          <h2 className="font-serif text-display-lg text-ink mb-4 leading-tight">
            Our Services
          </h2>
          <p className="font-sans text-lg text-ink/65 leading-relaxed max-w-xl mx-auto">
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
                className="group bg-white rounded-t-full rounded-b-lg overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.15)] hover:-translate-y-2 transition-all duration-300 flex flex-col"
              >
                {/* Full-arch image — fills the entire dome */}
                <div className="relative rounded-t-full overflow-hidden flex-shrink-0 aspect-[3/4]">
                  <Image
                    src={img?.src ?? "/treatments/face.jpeg"}
                    alt={service.title}
                    fill
                    className={`object-cover ${img?.focus ?? "object-center"} group-hover:scale-105 transition-transform duration-500`}
                    sizes="(max-width: 640px) 45vw, (max-width: 1024px) 28vw, 180px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="px-3 pb-5 pt-4 text-center flex flex-col flex-1">
                  <h3 className="font-serif text-sm font-semibold text-ink uppercase tracking-wide mb-2 leading-snug group-hover:text-mauve transition-colors duration-200">
                    {service.title}
                  </h3>
                  <p className="font-sans text-xs text-muted leading-relaxed line-clamp-4 mb-3 flex-1">
                    {service.shortDescription}
                  </p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="font-sans text-xs font-semibold text-slate-deep underline-offset-2 hover:text-slate-mid transition-colors"
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
            className="inline-flex items-center px-8 py-3.5 bg-ink text-ivory font-sans text-sm font-semibold tracking-wide hover:bg-ink/80 transition-colors duration-200"
          >
            Book a Consultation
          </Link>
        </div>

      </div>
    </section>
  );
}
