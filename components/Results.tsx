"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const results = [
  { src: "/treatments/face.jpeg",            label: "Acne & Skin Inflammation",  detail: "Facial skin treatment",             imgClass: "object-cover object-center" },
  { src: "/treatments/hair_2.jpeg",          label: "Premature Greying of Hair", detail: "Premature greying reversal",         imgClass: "object-contain" },
  { src: "/treatments/hair_loss_treatment.jpeg", label: "Hair Loss Treatment",   detail: "Hair density & scalp restoration",  imgClass: "object-contain" },
  { src: "/treatments/arms.jpeg",            label: "Hidradenitis Suppurativa",  detail: "Axillary lesion & HS treatment",    imgClass: "object-cover object-center" },
  { src: "/treatments/legs.jpeg",            label: "Eczema",                    detail: "Chronic eczema management",         imgClass: "object-contain" },
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
      const t = setTimeout(() => { setAnimate(false); setIndex(0); indexRef.current = 0; }, 520);
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
    <section id="results" className="band">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">Treatment Outcomes</span>
          <h2 className="h-section">Real Patient Results</h2>
          <p className="lead" style={{ marginTop: "16px" }}>
            Before and after outcomes from patients treated at Pranava Skin,
            Hair &amp; Aesthetics Clinic, Bangalore.
          </p>
        </div>
      </div>

      <div
        style={{ padding: "48px 32px 0", maxWidth: "1200px", margin: "0 auto" }}
        onMouseEnter={() => { pausedRef.current = true; }}
        onMouseLeave={() => { pausedRef.current = false; }}
        onTouchStart={() => { pausedRef.current = true; }}
        onTouchEnd={() => { pausedRef.current = false; }}
      >
        <div ref={containerRef} style={{ overflow: "hidden" }}>
          <div
            style={{
              display: "flex",
              gap: `${GAP}px`,
              transform: `translateX(-${index * step}px)`,
              transition: animate ? "transform 0.5s cubic-bezier(0.4,0,0.2,1)" : "none",
            }}
          >
            {extended.map((item, i) => (
              <figure
                key={i}
                className="carousel-figure"
                style={{ width: itemWidth > 0 ? `${itemWidth}px` : "calc((100% - 40px) / 3)", margin: 0 }}
              >
                <div style={{ position: "relative", aspectRatio: "3/2", background: "var(--surface-2)" }}>
                  <Image
                    src={item.src}
                    alt={`${item.label} before and after at Pranava Skin Clinic, Bangalore`}
                    fill
                    className={item.imgClass}
                    sizes="(max-width: 768px) 80vw, 33vw"
                    loading="eager"
                  />
                </div>
                <figcaption className="carousel-caption">
                  <p className="cl">{item.label}</p>
                  <p className="cd">{item.detail}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>

      <p style={{ marginTop: "28px", fontSize: "13px", color: "var(--muted)", textAlign: "center", padding: "0 20px" }}>
        Individual results vary. Images shared with patient consent.{" "}
        <a href="/disclaimer" style={{ color: "var(--muted)", textDecoration: "underline" }}>Medical disclaimer</a>.
      </p>
    </section>
  );
}
