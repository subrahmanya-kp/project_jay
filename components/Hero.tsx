import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center bg-ivory overflow-hidden"
      aria-label="Hero"
    >
      {/* Decorative background shapes */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-slate-mist opacity-30" />
        <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] rounded-full bg-champagne opacity-60" />
      </div>

      <div className="relative max-w-content mx-auto px-6 lg:px-8 w-full pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — copy */}
          <div>
            <p className="font-sans text-xs font-medium tracking-[0.2em] uppercase text-slate-mid mb-6">
              Dermatologist in Bangalore
            </p>

            <h1 className="font-serif text-display-xl text-ink mb-6 leading-[1.08]">
              Pranava Skin,{" "}
              <span className="italic text-slate-deep">Hair &amp; Aesthetics</span>{" "}
              Clinic
            </h1>

            <p className="font-sans text-lg lg:text-xl text-muted leading-relaxed mb-10 max-w-lg">
              Medical-grade dermatology and aesthetic care in Bangalore — where
              clinical precision meets a considered aesthetic.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center px-7 py-3.5 bg-slate-deep text-ivory font-sans text-sm font-medium tracking-wide hover:bg-slate-mid transition-colors duration-200"
              >
                Book a Consultation
              </Link>
              <Link
                href="/#services"
                className="inline-flex items-center justify-center px-7 py-3.5 border border-border text-ink font-sans text-sm font-medium hover:border-slate-deep hover:text-slate-deep transition-colors duration-200"
              >
                View Services
              </Link>
            </div>

            {/* Trust signals */}
            <div className="mt-12 pt-12 border-t border-border flex flex-wrap gap-8">
              {[
                { label: "Board Certified", sublabel: "MD Dermatology" },
                { label: "Medical-Grade", sublabel: "Treatments only" },
                { label: "Personalised", sublabel: "Every consultation" },
              ].map((item) => (
                <div key={item.label} className="flex flex-col">
                  <span className="font-serif text-sm font-semibold text-ink">
                    {item.label}
                  </span>
                  <span className="font-sans text-xs text-muted mt-0.5">
                    {item.sublabel}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — procedure image */}
          <div className="hidden lg:block relative">
            {/* Offset frame */}
            <div
              aria-hidden="true"
              className="absolute -top-4 -right-4 w-full h-full border border-slate-mist"
            />
            <div className="relative overflow-hidden aspect-[4/5]">
              <Image
                src="/images/procedures.jpg"
                alt="Aesthetic skin treatment procedure at Pranava Clinic, Bangalore"
                fill
                sizes="(max-width: 1280px) 45vw, 560px"
                className="object-cover object-center"
                priority
              />
              {/* Subtle dark overlay at bottom for caption */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-ink/40 to-transparent" />
              <p className="absolute bottom-5 left-5 font-sans text-xs text-ivory/80 tracking-wide">
                Hydrafacial · Laser · PRP — Pranava Clinic, Bangalore
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
