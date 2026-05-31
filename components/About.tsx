export default function About() {
  return (
    <section id="about" className="py-section bg-ivory">
      <div className="max-w-content mx-auto px-6 lg:px-8">
        {/* Section label */}
        <p className="font-sans text-xs font-medium tracking-[0.2em] uppercase text-slate-mid mb-4">
          About the Clinic
        </p>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left — philosophy */}
          <div>
            <h2 className="font-serif text-display-md text-ink mb-6">
              Medicine first.{" "}
              <span className="italic text-slate-deep">Aesthetics always.</span>
            </h2>
            <div className="space-y-4 font-sans text-base text-muted leading-relaxed">
              <p>
                Pranava was founded on a single conviction: that dermatological
                care in India deserves the same rigour and restraint you would
                find in the world's leading skin clinics — without the
                inaccessibility or the artificiality.
              </p>
              <p>
                Every consultation begins with a diagnosis. We don't prescribe
                treatments we haven't justified. We don't offer procedures that
                aren't appropriate for your skin type. And we spend as much time
                explaining your condition as we do treating it.
              </p>
              <p>
                The clinic name — Pranava — is the Sanskrit root for 'breath
                and life'. It reflects our belief that healthy skin is a
                foundation of wellbeing, not merely a cosmetic concern.
              </p>
            </div>

            {/* Philosophy pillars */}
            <div className="mt-10 grid grid-cols-2 gap-4">
              {[
                { title: "Diagnosis-First", body: "No treatment without understanding" },
                { title: "Skin-Type Specific", body: "Safe protocols for Indian skin" },
                { title: "Evidence-Based", body: "Clinical evidence, not trends" },
                { title: "Long-Term Care", body: "Partners, not one-time providers" },
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-4 border border-border bg-warm-white"
                >
                  <p className="font-serif text-sm font-semibold text-ink mb-1">
                    {item.title}
                  </p>
                  <p className="font-sans text-xs text-muted leading-relaxed">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>

          </div>

          {/* Right — doctor credentials */}
          <div className="lg:pt-8">
            <div className="relative">
              {/* Decorative frame */}
              <div
                aria-hidden="true"
                className="absolute -top-4 -right-4 w-full h-full border border-slate-mist"
              />
              <div className="relative bg-champagne p-8 lg:p-10">
                {/* Caduceus-inspired geometric mark */}
                <div className="mb-8 flex items-center gap-3">
                  <ClinicMark />
                  <div>
                    <p className="font-serif text-xl font-semibold text-ink">
                      Dr. Nagalakshmi K P
                    </p>
                    <p className="font-sans text-xs text-muted mt-0.5">
                      Lead Dermatologist &amp; Founder
                    </p>
                  </div>
                </div>

                <dl className="space-y-4">
                  <CredentialRow
                    label="Qualification"
                    value="MD Dermatology, Venereology &amp; Leprosy"
                  />
                  <CredentialRow
                    label="Board Certification"
                    value="[Board Name], [Year]"
                  />
                  <CredentialRow
                    label="Affiliations"
                    value="Indian Association of Dermatologists (IADVL)"
                  />
                  <CredentialRow
                    label="Specialisations"
                    value="Medical Dermatology · Trichology · Aesthetic Medicine"
                  />
                  <CredentialRow
                    label="Experience"
                    value="[X]+ years in clinical dermatology"
                  />
                </dl>

                <blockquote className="mt-8 pt-8 border-t border-border">
                  <p className="font-serif text-base italic text-ink leading-relaxed">
                    &ldquo;The most important thing I do is listen. The skin
                    tells a story — my role is to read it correctly.&rdquo;
                  </p>
                  <footer className="mt-3 font-sans text-xs text-muted">
                    — Dr. Nagalakshmi K P
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CredentialRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-0.5">
      <dt className="font-sans text-[10px] font-medium tracking-[0.15em] uppercase text-slate-mid">
        {label}
      </dt>
      <dd
        className="font-sans text-sm text-ink"
        dangerouslySetInnerHTML={{ __html: value }}
      />
    </div>
  );
}

function ClinicMark() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Simplified caduceus-inspired botanical mark */}
      <rect width="40" height="40" fill="#3D4F6B" />
      <line x1="20" y1="6" x2="20" y2="34" stroke="#FAF8F5" strokeWidth="1.5" />
      <path d="M20 10 Q28 14 28 18 Q28 22 20 22 Q12 22 12 18 Q12 14 20 10Z" stroke="#FAF8F5" strokeWidth="1" fill="none" />
      <circle cx="20" cy="8" r="2.5" stroke="#FAF8F5" strokeWidth="1" fill="none" />
    </svg>
  );
}
