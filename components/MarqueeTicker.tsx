const items = [
  "Board Certified",
  "MD Dermatology",
  "IADVL Member",
  "Medical-Grade Only",
  "Personalised Care",
  "Evidence-Based",
  "Diagnosis-First",
  "Indian Skin Experts",
];

const doubled = [...items, ...items];

export default function MarqueeTicker() {
  return (
    <div className="bg-gold py-3 overflow-hidden" aria-hidden="true">
      <div className="animate-marquee inline-flex whitespace-nowrap">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-3 mx-8 font-sans text-[11px] font-semibold tracking-[0.18em] uppercase text-ink"
          >
            {item}
            <span className="w-1 h-1 rounded-full bg-ink/35 flex-shrink-0" />
          </span>
        ))}
      </div>
    </div>
  );
}
