import Image from "next/image";

const results = [
  {
    src: "/treatments/face.jpeg",
    label: "Acne & Skin Inflammation",
    detail: "Facial skin treatment",
  },
  {
    src: "/treatments/hair_2.jpeg",
    label: "Hair Loss",
    detail: "Hair regrowth treatment",
  },
  {
    src: "/treatments/arms.jpeg",
    label: "Skin Infection",
    detail: "Dermatitis / infection treatment",
  },
  {
    src: "/treatments/leg.jpeg",
    label: "Psoriasis / Fungal Infection",
    detail: "Leg skin condition treatment",
  },
];

export default function Results() {
  return (
    <section id="results" className="py-section bg-champagne">
      <div className="max-w-content mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-xl mb-12">
          <p className="font-sans text-xs font-medium tracking-[0.2em] uppercase text-slate-mid mb-4">
            Treatment Outcomes
          </p>
          <h2 className="font-serif text-display-md text-ink mb-3">
            Real Patient Results
          </h2>
          <p className="font-sans text-sm text-muted leading-relaxed">
            Before and after outcomes from patients treated at Pranava Skin,
            Hair &amp; Aesthetics Clinic, Bangalore.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {results.map((item) => (
            <figure
              key={item.src}
              className="bg-ivory border border-border overflow-hidden flex flex-col"
            >
              <div className="bg-white">
                <Image
                  src={item.src}
                  alt={`${item.label} before and after at Pranava Skin Clinic, Bangalore`}
                  width={700}
                  height={900}
                  className="w-full h-auto block"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="eager"
                />
              </div>
              <figcaption className="px-4 py-3 border-t border-border mt-auto">
                <p className="font-serif text-sm font-semibold text-ink">
                  {item.label}
                </p>
                <p className="font-sans text-xs text-muted mt-0.5">
                  {item.detail}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="mt-8 font-sans text-xs text-muted text-center leading-relaxed max-w-lg mx-auto">
          Individual results vary. Images shared with patient consent.{" "}
          <a
            href="/disclaimer"
            className="underline underline-offset-2 hover:text-ink transition-colors"
          >
            Medical disclaimer
          </a>
          .
        </p>
      </div>
    </section>
  );
}
