import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center bg-ivory overflow-hidden"
      aria-label="Hero"
    >
      {/* Background shapes */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-[500px] h-[500px] rounded-full bg-slate-mist opacity-25" />
        <div className="absolute -bottom-16 -left-16 w-[320px] h-[320px] rounded-full bg-champagne opacity-70" />
      </div>

      <div className="relative max-w-content mx-auto px-6 lg:px-8 w-full pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">

          {/* Left — copy */}
          <div className="max-w-xl">
            <p className="font-sans text-xs font-medium tracking-[0.25em] uppercase text-slate-mid mb-5">
              Dermatologist in Bangalore
            </p>

            <h1 className="font-serif text-display-xl text-ink mb-5 leading-[1.06]">
              Pranava Skin,{" "}
              <em className="not-italic text-slate-deep">Hair &amp; Aesthetics</em>{" "}
              Clinic
            </h1>

            <p className="font-sans text-base lg:text-lg text-muted leading-relaxed mb-8 max-w-md">
              Medical-grade dermatology and aesthetic care in Bangalore — where
              clinical precision meets a considered aesthetic.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center px-7 py-3 bg-slate-deep text-ivory font-sans text-sm font-medium tracking-wide hover:bg-slate-mid transition-colors duration-200"
              >
                Book a Consultation
              </Link>
              <Link
                href="/#services"
                className="inline-flex items-center justify-center px-7 py-3 border border-border text-ink font-sans text-sm font-medium hover:border-slate-deep hover:text-slate-deep transition-colors duration-200"
              >
                Our Services
              </Link>
            </div>

            {/* Trust signals */}
            <div className="mt-10 pt-8 border-t border-border grid grid-cols-3 gap-4">
              {[
                { label: "Board Certified", sublabel: "MD Dermatology" },
                { label: "Medical-Grade", sublabel: "Treatments only" },
                { label: "Personalised", sublabel: "Every consultation" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="font-serif text-sm font-semibold text-ink leading-tight">
                    {item.label}
                  </p>
                  <p className="font-sans text-xs text-muted mt-1">
                    {item.sublabel}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — procedure image */}
          <div className="hidden lg:block relative">
            <div
              aria-hidden="true"
              className="absolute -top-3 -right-3 w-full h-full border border-slate-mist/60"
            />
            <div className="relative overflow-hidden aspect-[4/5]">
              <Image
                src="/images/procedure.jpg"
                alt="PRP scalp injection treatment at Pranava Skin, Hair and Aesthetics Clinic, Bangalore"
                fill
                sizes="45vw"
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-5 font-sans text-xs text-ivory/80 tracking-wide">
                Pranava Clinic, Bangalore
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
