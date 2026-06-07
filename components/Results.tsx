"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const results = [
  {
    src: "/treatments/face.jpeg",
    label: "Acne & Skin Inflammation",
    detail: "Facial skin treatment",
    imgClass: "object-cover object-center",
  },
  {
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
    src: "/treatments/legs.jpeg",
    label: "Eczema",
    detail: "Chronic eczema management",
    imgClass: "object-contain",
  },
];

const GAP = 20;
const extended = [...results, ...results.slice(0, 3)];

export default function Results() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [step, setStep] = useState(0);
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  const indexRef = useRef(0);
  const pausedRef = useRef(false);

  useEffect(() => {
    const measure = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.offsetWidth;
      setStep((w - GAP * 2) / 3 + GAP);
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    if (index === results.length) {
      const t = setTimeout(() => {
        setAnimate(false);
        setIndex(0);
        indexRef.current = 0;
      }, 520);
      return () => clearTimeout(t);
    }
    if (!animate) {
      const t = setTimeout(() => setAnimate(true), 50);
      return () => clearTimeout(t);
    }
  }, [index, animate]);

  useEffect(() => {
    const id = setInterval(() => {
      if (pausedRef.current || step === 0) return;
      const next = indexRef.current + 1;
      indexRef.current = next;
      setIndex(next);
    }, 3500);
    return () => clearInterval(id);
  }, [step]);

  const itemWidth = step > 0 ? step - GAP : 0;

  return (
    <section id="results" className="py-section bg-white">
      <div className="max-w-content mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-xl mb-10">
          <div className="w-8 h-px bg-gold mb-4" aria-hidden="true" />
          <p className="font-sans text-[11px] font-medium tracking-[0.2em] uppercase text-slate-mid mb-3">
            Treatment Outcomes
          </p>
          <h2 className="font-serif text-display-lg text-ink mb-4 leading-tight">
            Real Patient Results
          </h2>
          <p className="font-sans text-lg text-muted leading-relaxed">
            Before and after outcomes from patients treated at Pranava Skin,
            Hair &amp; Aesthetics Clinic, Bangalore.
          </p>
        </div>
      </div>

      {/* Carousel */}
      <div
        className="px-6 lg:px-[15%]"
        onMouseEnter={() => { pausedRef.current = true; }}
        onMouseLeave={() => { pausedRef.current = false; }}
        onTouchStart={() => { pausedRef.current = true; }}
        onTouchEnd={() => { pausedRef.current = false; }}
      >
        <div ref={containerRef} className="overflow-hidden">
          <div
            className="flex"
            style={{
              gap: `${GAP}px`,
              transform: `translateX(-${index * step}px)`,
              transition: animate ? "transform 0.5s cubic-bezier(0.4,0,0.2,1)" : "none",
            }}
          >
            {extended.map((item, i) => (
              <figure
                key={i}
                className="shrink-0 bg-ivory border border-border overflow-hidden"
                style={{ width: itemWidth > 0 ? `${itemWidth}px` : "calc((100% - 40px) / 3)" }}
              >
                <div className="relative aspect-[3/2] bg-white">
                  <Image
                    src={item.src}
                    alt={`${item.label} before and after at Pranava Skin Clinic, Bangalore`}
                    fill
                    className={item.imgClass}
                    sizes="(max-width: 768px) 80vw, 33vw"
                    loading="eager"
                  />
                </div>
                <figcaption className="px-4 py-3 border-t border-border">
                  <p className="font-serif text-sm font-semibold text-ink">{item.label}</p>
                  <p className="font-sans text-xs text-muted mt-0.5">{item.detail}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <p className="mt-8 font-sans text-xs text-muted text-center leading-relaxed max-w-lg mx-auto px-6">
        Individual results vary. Images shared with patient consent.{" "}
        <a href="/disclaimer" className="underline underline-offset-2 hover:text-ink transition-colors">
          Medical disclaimer
        </a>
        .
      </p>
    </section>
  );
}
