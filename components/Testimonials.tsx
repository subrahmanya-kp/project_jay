const testimonials = [
  {
    id: 1,
    quote:
      "Dr Nagalakshmi listened to all our problems and diagnosed the things perfectly which never worked for us previously even after going to multiple places. She writes the perfect medicine which suits our skin. She even warns and asks us to monitor if the medicine can alter anything in our body. Please feel free to visit her clinic for any kind of skin problems.",
    name: "Patient",
    detail: "Skin consultation, Bangalore",
  },
  {
    id: 2,
    quote:
      "Dr. Nagalakshmi is very knowledgeable and takes the time to truly listen. She was patient throughout the visit, answered all of my questions, and explained my condition in a clear and detailed way. I came to this doctor after seeing several others without any improvement. Doctor carefully explained each medication, including its purpose and what to expect. Since starting the treatment plan, I have noticed real improvement in my condition. I am very grateful to Dr. Nagalakshmi and would highly recommend her to anyone looking for thoughtful, thorough, and effective care.",
    name: "Patient",
    detail: "Dermatology consultation, Bangalore",
  },
  {
    id: 3,
    quote:
      "Excellent experience. I struggled with warts on my leg for a long time. I tried so many different ways to remove them, but they kept growing back. I finally decided to visit this clinic, and I'm so glad I did. The treatment here actually worked! The progress is incredible, and I'm almost healed. If you are looking for a solution that lasts, please do visit here.",
    name: "Patient",
    detail: "Wart treatment, Bangalore",
  },
  {
    id: 4,
    quote:
      "I was suffering from a fungal infection on my finger for several months. I was embarrassed to show my finger to others in the office. Finally, on the advice of a friend, I came to Pranava Clinic. Dr. Nagalakshmi listened to my problem very patiently and prescribed medicine, which also gave me courage. After taking the medicine, my finger is returning to its previous condition. Now I can shake hands with others with confidence. Thank you Dr. Nagalakshmi.",
    name: "Patient",
    detail: "Fungal infection treatment, Bangalore",
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
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <blockquote
              key={t.id}
              className={`p-7 flex flex-col ${
                i % 2 === 1 ? "bg-champagne" : "bg-warm-white border border-border"
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
                <p className="font-sans text-xs text-muted mt-0.5">{t.detail}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
