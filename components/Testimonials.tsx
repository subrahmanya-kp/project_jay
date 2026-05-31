const testimonials = [
  {
    id: 1,
    quote:
      "Dr Nagalakshmi listened to all our problems and diagnosed the things perfectly which never worked for us previously even after going to multiple places. She writes the perfect medicine which suits our skin. She even warns and asks us to monitor if the medicine can alter anything in our body. Please feel free to visit her clinic for any kind of skin problems.",
    detail: "Skin consultation, Bangalore",
  },
  {
    id: 2,
    quote:
      "Dr. Nagalakshmi is very knowledgeable and takes the time to truly listen. She was patient throughout the visit, answered all of my questions, and explained my condition in a clear and detailed way. I came to this doctor after seeing several others without any improvement. Since starting the treatment plan, I have noticed real improvement in my condition. I am very grateful to Dr. Nagalakshmi and would highly recommend her.",
    detail: "Dermatology consultation, Bangalore",
  },
  {
    id: 3,
    quote:
      "Excellent experience. I struggled with warts on my leg for a long time and tried so many different ways to remove them, but they kept growing back. I finally decided to visit this clinic, and I'm so glad I did. The treatment here actually worked! The progress is incredible and I'm almost healed. If you are looking for a solution that lasts, please do visit here.",
    detail: "Wart treatment, Bangalore",
  },
  {
    id: 4,
    quote:
      "I was suffering from a fungal infection on my finger for several months and was embarrassed to show it to others. Finally, on the advice of a friend, I came to Pranava Clinic. Dr. Nagalakshmi listened very patiently and prescribed medicine. After the treatment, my finger is returning to its previous condition. Now I can shake hands with confidence. Thank you.",
    detail: "Fungal infection treatment, Bangalore",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-section bg-ivory">
      <div className="max-w-content mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 gap-4">
          <div>
            <p className="font-sans text-xs font-medium tracking-[0.2em] uppercase text-slate-mid mb-3">
              Patient Voices
            </p>
            <h2 className="font-serif text-display-md text-ink">
              What Our Patients Say
            </h2>
          </div>
          <div className="flex items-center gap-1.5 flex-shrink-0">
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} />
            ))}
            <span className="font-sans text-xs text-muted ml-1">
              Google Reviews
            </span>
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {testimonials.map((t, i) => (
            <blockquote
              key={t.id}
              className={`relative p-7 lg:p-8 flex flex-col ${
                i % 2 === 0
                  ? "bg-warm-white border border-border"
                  : "bg-champagne"
              }`}
            >
              {/* Decorative quote bar */}
              <div className="w-8 h-0.5 bg-slate-deep mb-5" aria-hidden="true" />

              <p className="font-sans text-sm text-muted leading-[1.8] flex-1">
                {t.quote}
              </p>

              <footer className="mt-6 pt-5 border-t border-border">
                <p className="font-sans text-xs text-muted">{t.detail}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

function StarIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="#B8963E"
      aria-hidden="true"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
