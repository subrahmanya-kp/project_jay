const testimonials = [
  {
    id: 1,
    quote:
      "I had been dealing with melasma for three years before consulting Dr. Nagalakshmi K P at Pranava. The difference was that she actually explained what was causing it and why previous treatments had failed. Six months later, the improvement is significant — and I understand how to maintain it.",
    name: "Priya R.",
    detail: "Melasma treatment, Bangalore",
  },
  {
    id: 2,
    quote:
      "My acne scars were causing me real distress. The treatment plan was honest about timelines — no promises of overnight results. The results came, gradually and steadily. I trust this clinic because they don't oversell.",
    name: "Arjun M.",
    detail: "Acne scar treatment, Bangalore",
  },
  {
    id: 3,
    quote:
      "I've been to several skin clinics in Bangalore. What sets Pranava apart is the depth of the consultation. Every visit, I leave with a clearer understanding of my own skin. That knowledge itself has been valuable.",
    name: "Nandita S.",
    detail: "Hair loss & skin consultation",
  },
  {
    id: 4,
    quote:
      "The GFC treatment for hair loss gave me results I wasn't expecting to see so clearly. More importantly, Dr. Nagalakshmi K P explained exactly what to realistically expect and what would take longer. No false hope — just honest medicine.",
    name: "Vikram K.",
    detail: "GFC hair treatment, Bangalore",
  },
  {
    id: 5,
    quote:
      "I was nervous about starting any aesthetic treatments, having heard about overdone results elsewhere. Pranava's approach is measured and conservative. The results look like me — just a rested, fresher version.",
    name: "Ananya P.",
    detail: "Anti-ageing treatment, Bangalore",
  },
  {
    id: 6,
    quote:
      "The laser treatment for pigmentation was explained thoroughly before we started — which laser, why that one, what settings, what to expect. I felt informed, not just processed. The results justify the trust.",
    name: "Karthik B.",
    detail: "Pigmentation treatment, Bangalore",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-section bg-ivory">
      <div className="max-w-content mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-xl mb-14">
          <p className="font-sans text-xs font-medium tracking-[0.2em] uppercase text-slate-mid mb-4">
            Patient Voices
          </p>
          <h2 className="font-serif text-display-md text-ink">
            What Our Patients Say
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <blockquote
              key={t.id}
              className={`p-7 flex flex-col ${
                i % 3 === 1 ? "bg-champagne" : "bg-warm-white border border-border"
              }`}
            >
              {/* Quote mark */}
              <span
                className="font-serif text-5xl leading-none text-slate-light mb-4 select-none"
                aria-hidden="true"
              >
                &ldquo;
              </span>

              <p className="font-sans text-sm text-muted leading-relaxed flex-1">
                {t.quote}
              </p>

              <footer className="mt-6 pt-5 border-t border-border">
                <p className="font-serif text-sm font-semibold text-ink">
                  {t.name}
                </p>
                <p className="font-sans text-xs text-muted mt-0.5">{t.detail}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
