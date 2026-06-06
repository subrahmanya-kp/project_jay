"use client";

import Image from "next/image";
import { useRef, useState, useCallback, useEffect } from "react";

const results = [
  {
    src: "/treatments/face.jpeg",
    label: "Acne & Skin Inflammation",
    detail: "Facial skin treatment",
    imgClass: "object-cover object-center",
  },
  {
    // 16:9 landscape — use object-contain so the full image shows
    src: "/treatments/hair_2.jpeg",
    label: "Premature Greying of Hair",
    detail: "Premature greying reversal treatment",
    imgClass: "object-contain",
  },
  {
    src: "/treatments/hair_loss_treatment.jpeg",
    label: "Hair Loss Treatment",
    detail: "Hair density & scalp restoration",
    imgClass: "object-contain",
  },
  {
    src: "/treatments/arms.jpeg",
    label: "Hidradenitis Suppurativa",
    detail: "Axillary lesion & HS treatment",
    imgClass: "object-cover object-center",
  },
  {
    // 2.3:1 wide landscape — use object-contain so the full image shows
    src: "/treatments/legs.jpeg",
    label: "Eczema",
    detail: "Chronic eczema management",
    imgClass: "object-contain",
  },
];

export default function Results() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const activeIdxRef = useRef(0);
  const pausedRef = useRef(false);

  // Width of one slide + its trailing gap — the scroll step size.
  const slideStep = () => {
    const track = trackRef.current;
    if (!track) return 0;
    const first = track.firstElementChild as HTMLElement | null;
    if (!first) return 0;
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    return first.offsetWidth + gap;
  };

  const scroll = (dir: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: dir * slideStep(), behavior: "smooth" });
  };

  const scrollToIdx = (idx: number) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollTo({ left: idx * slideStep(), behavior: "smooth" });
  };

  const onScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const first = track.firstElementChild as HTMLElement | null;
    if (!first) return;
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    const step = first.offsetWidth + gap;
    if (step === 0) return;
    const idx = Math.round(track.scrollLeft / step);
    activeIdxRef.current = idx;
    setActiveIdx(idx);
  }, []);

  // Auto-advance every 4 s; pauses on hover or touch.
  useEffect(() => {
    const id = setInterval(() => {
      if (pausedRef.current) return;
      const next = (activeIdxRef.current + 1) % results.length;
      scrollToIdx(next);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="results" className="py-section bg-champagne">
      <div className="max-w-content mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-xl mb-12">
          <div className="w-8 h-px bg-gold mb-4" aria-hidden="true" />
          <p className="font-sans text-[11px] font-medium tracking-[0.2em] uppercase text-slate-mid mb-3">
            Treatment Outcomes
          </p>
          <h2 className="font-serif text-display-md text-ink mb-4 leading-tight">
            Real Patient Results
          </h2>
          <p className="font-sans text-base text-muted leading-relaxed">
            Before and after outcomes from patients treated at Pranava Skin,
            Hair &amp; Aesthetics Clinic, Bangalore.
          </p>
        </div>

        {/* Carousel — px-10 reserves space so arrows don't overlap the track */}
        <div
          className="relative px-10"
          onMouseEnter={() => { pausedRef.current = true; }}
          onMouseLeave={() => { pausedRef.current = false; }}
          onTouchStart={() => { pausedRef.current = true; }}
          onTouchEnd={() => { pausedRef.current = false; }}
        >
          <div
            ref={trackRef}
            onScroll={onScroll}
            className="carousel-track flex gap-4 overflow-x-auto snap-x snap-mandatory"
          >
            {results.map((item) => (
              <figure
                key={item.src}
                /* Full width on mobile; half-width (minus half the gap) on sm+ */
                className="snap-start shrink-0 w-full sm:w-[calc(50%-8px)] bg-ivory border border-border overflow-hidden"
              >
                {/* Fixed aspect ratio so every card is identical height */}
                <div className="relative aspect-[3/2] bg-white">
                  <Image
                    src={item.src}
                    alt={`${item.label} before and after at Pranava Skin Clinic, Bangalore`}
                    fill
                    className={item.imgClass}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 450px"
                    loading="eager"
                  />
                </div>
                <figcaption className="px-4 py-3 border-t border-border">
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

          {/* Arrows — sit in the 40 px lanes on either side of the track */}
          <button
            onClick={() => scroll(-1)}
            aria-label="Previous result"
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-ivory border border-border w-9 h-9 flex items-center justify-center hover:bg-white transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={() => scroll(1)}
            aria-label="Next result"
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-ivory border border-border w-9 h-9 flex items-center justify-center hover:bg-white transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-5">
          {results.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToIdx(i)}
              aria-label={`View result ${i + 1}`}
              className={`w-2 h-2 rounded-full transition-colors ${
                i === activeIdx ? "bg-slate-mid" : "bg-border"
              }`}
            />
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
