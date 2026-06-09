import Image from "next/image";

const steps = [
  {
    n: "01",
    title: "Expert Assessment",
    body: "Every visit begins with a thorough diagnosis. We never prescribe treatments we haven't justified for your specific skin type.",
  },
  {
    n: "02",
    title: "Personalised Treatment",
    body: "Safe, evidence-based protocols designed for Indian skin. No generic plans — every treatment is tailored to your condition.",
  },
  {
    n: "03",
    title: "Transparent Care",
    body: "We spend as much time explaining your condition as treating it. You understand every step of your treatment plan.",
  },
  {
    n: "04",
    title: "Ongoing Support",
    body: "We're partners in your skin health, not one-time providers. Follow-up care and long-term management are part of every plan.",
  },
];

export default function About() {
  return (
    <section id="about" className="band">
      <div className="wrap">
        <div className="appr-grid">

          {/* Left — image */}
          <div className="appr-media">
            <Image
              src="/images/procedures.jpg"
              alt="Consultation at Pranava Skin, Hair and Aesthetics Clinic, Bangalore"
              fill
              sizes="(max-width: 960px) 100vw, 45vw"
              className="object-cover object-center"
            />
          </div>

          {/* Right — content */}
          <div>
            <span className="eyebrow">Our Approach</span>
            <h2 className="h-section">
              Medicine first.{" "}
              <span style={{ color: "var(--primary)" }}>Aesthetics always.</span>
            </h2>
            <p className="lead" style={{ marginTop: "16px" }}>
              Pranava — Sanskrit for 'breath and life' — reflects our belief that
              healthy skin is a foundation of wellbeing, not merely a cosmetic concern.
            </p>

            <div className="appr-list">
              {steps.map((s) => (
                <div className="appr-item" key={s.n}>
                  <div className="num">{s.n}</div>
                  <div className="body">
                    <h3>{s.title}</h3>
                    <p>{s.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="doc-panel">
              <h3>Dr. Nagalakshmi K P</h3>
              <p className="role">Dermatologist &amp; Founder</p>
              <dl className="cred-list">
                {[
                  { label: "Qualification", value: "MD Dermatology, Venereology & Leprosy" },
                  { label: "Affiliations",  value: "Indian Association of Dermatologists (IADVL)" },
                  { label: "Specialisations", value: "Dermatology · Trichology · Aesthetic Medicine" },
                  { label: "Experience",    value: "7+ years in dermatology" },
                ].map((c) => (
                  <div className="cred-row" key={c.label}>
                    <dt>{c.label}</dt>
                    <dd>{c.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
