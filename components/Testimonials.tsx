"use client";

import { useState, useEffect, useRef } from "react";

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

const len = testimonials.length;

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const pausedRef = useRef(false);

  useEffect(() => {
    const id = setInterval(() => {
      if (!pausedRef.current) setIndex((i) => (i + 1) % len);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  const left = testimonials[index];
  const right = testimonials[(index + 1) % len];

  return (
    <section id="testimonials" className="py-section bg-ink">
      <div className="max-w-content mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="w-8 h-px bg-gold mx-auto mb-4" aria-hidden="true" />
          <p className="font-sans text-[11px] font-medium tracking-[0.2em] uppercase text-ivory/40 mb-3">
            Patient Voices
          </p>
          <h2 className="font-serif text-display-lg text-ivory leading-tight">
            What Our Patients Say
          </h2>
        </div>

        {/* 2 cards stacked — key forces fade-in on every index change */}
        <div
          key={index}
          className="animate-fade-in flex flex-col gap-5"
          onMouseEnter={() => { pausedRef.current = true; }}
          onMouseLeave={() => { pausedRef.current = false; }}
        >
          {[left, right].map((t, i) => (
            <article key={i} className="bg-ivory overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.4)]">
              <div className="h-1 bg-gold w-full" aria-hidden="true" />
              <div className="px-7 pt-6 pb-6">
                <div className="flex gap-1.5 mb-4">
                  {[...Array(5)].map((_, j) => <StarIcon key={j} />)}
                </div>
                <p className="font-sans text-sm text-muted leading-[1.85] mb-5 line-clamp-4">
                  {t.quote}
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-serif text-sm font-semibold text-ink mb-0.5">Verified Patient</p>
                  <p className="font-sans text-[11px] font-medium tracking-[0.15em] uppercase text-gold">
                    {t.detail}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`View review ${i + 1}`}
              className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                i === index ? "bg-gold" : "bg-ivory/25"
              }`}
            />
          ))}
        </div>

        {/* Google Reviews */}
        <div className="flex items-center justify-center gap-1.5 mt-5">
          {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
          <span className="font-sans text-xs text-ivory/40 ml-2">Google Reviews</span>
        </div>
      </div>
    </section>
  );
}


function StarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="#B8963E" aria-hidden="true">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
