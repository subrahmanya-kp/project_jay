import Link from "next/link";
import Image from "next/image";

const stats = [
  { number: "500+", label: "Patients Treated" },
  { number: "7+",   label: "Years Experience" },
  { number: "10+",    label: "Treatments" },
];

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center bg-ink overflow-hidden"
      aria-label="Hero"
    >
      {/* Background glows */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-[500px] h-[500px] rounded-full bg-slate-deep/20 blur-[120px]" />
        <div className="absolute -bottom-16 -left-16 w-[320px] h-[320px] rounded-full bg-gold/8 blur-[100px]" />
      </div>

      <div className="relative max-w-content mx-auto px-6 lg:px-8 w-full pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="grid lg:grid-cols-[1fr_0.75fr] gap-10 lg:gap-16 items-center">

          {/* Left — copy */}
          <div className="max-w-xl">
            <div className="w-8 h-px bg-gold mb-4" aria-hidden="true" />
            <p className="font-sans text-[11px] font-medium tracking-[0.25em] uppercase text-ivory/50 mb-4">
              Dermatology and Aesthetic care in Bangalore
            </p>

            <h1 className="font-serif text-display-xl text-ivory mb-6 leading-[1.06]">
              Pranava Skin,{" "}
              <em className="not-italic text-gold">Hair &amp; Aesthetics</em>{" "}
              Clinic
            </h1>

            <p className="font-sans text-lg text-ivory/55 leading-relaxed mb-8 max-w-md">
              Medical-grade dermatology and aesthetic care in Bangalore — where
              clinical precision meets aesthetic.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center px-7 py-3 bg-gold text-obsidian font-sans text-sm font-semibold tracking-wide hover:bg-gold/90 transition-colors duration-200"
              >
                Book a Consultation
              </Link>
              <Link
                href="/#services"
                className="inline-flex items-center justify-center px-7 py-3 border border-ivory/20 text-ivory font-sans text-sm font-medium hover:border-gold hover:text-gold transition-colors duration-200"
              >
                Our Services
              </Link>
            </div>
            <a
              href="tel:+919483127354"
              className="inline-flex items-center gap-2 mt-3 text-ivory/55 hover:text-gold font-sans text-sm transition-colors duration-200"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.6 3.4 2 2 0 0 1 3.59 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6.29 6.29l1.62-1.62a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              +91 94831 27354
            </a>

            {/* Stats */}
            <div className="mt-10 pt-8 border-t border-ivory/10 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div key={stat.number}>
                  <p className="font-serif text-2xl font-semibold text-ivory leading-none mb-1">
                    {stat.number}
                  </p>
                  <p className="font-sans text-[11px] text-ivory/45 uppercase tracking-wide">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — procedure image (reduced size) */}
          <div className="hidden lg:block relative">
            <div
              aria-hidden="true"
              className="absolute -top-3 -right-3 w-full h-full border border-gold/20"
            />
            <div className="relative overflow-hidden aspect-[3/4] max-h-[480px]">
              <Image
                src="/images/procedure.jpg"
                alt="PRP scalp injection treatment at Pranava Skin, Hair and Aesthetics Clinic, Bangalore"
                fill
                sizes="35vw"
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
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
