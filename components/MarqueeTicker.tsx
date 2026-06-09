const items = [
  "Dermatology",
  "Acne Treatment",
  "Hair Loss Solutions",
  "Chemical Peels",
  "PRP & GFC Therapy",
  "Microneedling",
  "Freckle Removal",
  "Wart Treatment",
  "Skin Consultation",
  "Aesthetic Medicine",
];

const doubled = [...items, ...items];

export default function MarqueeTicker() {
  return (
    <div className="marquee-band" aria-hidden="true">
      <div className="marquee-inner">
        {doubled.map((item, i) => (
          <span className="marquee-item" key={i}>
            {item}
            <span className="marquee-dot" />
          </span>
        ))}
      </div>
    </div>
  );
}
