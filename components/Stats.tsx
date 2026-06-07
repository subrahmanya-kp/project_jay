const stats = [
  { number: "500+", label: "Patients Treated" },
  { number: "7+",   label: "Years Experience" },
  { number: "6",    label: "Specialist Treatments" },
  { number: "IADVL", label: "Certified Member" },
];

export default function Stats() {
  return (
    <section className="bg-white border-b border-border" aria-label="Clinic highlights">
      <div className="max-w-content mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-border">
          {stats.map((stat) => (
            <div
              key={stat.number}
              className="flex flex-col items-center justify-center py-8 px-4 text-center"
            >
              <span className="font-serif text-display-md text-ink leading-none mb-1">
                {stat.number}
              </span>
              <span className="font-sans text-xs text-muted tracking-wide uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
