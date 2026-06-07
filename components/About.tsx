export default function About() {
  return (
    <section id="about" className="py-section bg-blush">
      <div className="max-w-content mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
          {/* Left — philosophy */}
          <div>
            <div className="w-8 h-px bg-gold mb-4" aria-hidden="true" />
            <p className="font-sans text-[11px] font-medium tracking-[0.2em] uppercase text-slate-mid mb-3">
              About the Clinic
            </p>
            <h2 className="font-serif text-display-lg text-ink mb-6 leading-tight">
              Medicine first.{" "}
              <span className="italic text-gold">Aesthetics always.</span>
            </h2>
            <div className="space-y-5 font-sans text-base text-muted leading-[1.8]">
              <p>
                At Pranava every consultation begins with a diagnosis. We don't prescribe
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
            <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-5">
              {[
                { title: "Diagnosis-First", body: "No treatment without understanding" },
                { title: "Skin-Type Specific", body: "Safe protocols for Indian skin" },
                { title: "Evidence-Based", body: "Clinical evidence, not trends" },
                { title: "Long-Term Care", body: "Partners, not one-time providers" },
              ].map((item) => (
                <div
                  key={item.title}
                  className="pl-4 py-1 border-l-2 border-gold"
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
                className="absolute -top-4 -right-4 w-full h-full border border-gold/30"
              />
              <div className="relative bg-ivory p-8 lg:p-10">
                <div className="mb-8 flex items-center gap-3">
                  <ClinicMark />
                  <div>
                    <p className="font-serif text-2xl font-semibold text-ink">
                      Dr. Nagalakshmi K P
                    </p>
                    <p className="font-sans text-xs text-muted mt-0.5">
                      Dermatologist &amp; Founder
                    </p>
                  </div>
                </div>

                <dl className="space-y-4">
                  <CredentialRow
                    label="Qualification"
                    value="MD Dermatology, Venereology &amp; Leprosy"
                  />
                  <CredentialRow
                    label="Affiliations"
                    value="Indian Association of Dermatologists (IADVL)"
                  />
                  <CredentialRow
                    label="Specialisations"
                    value="Dermatology · Trichology · Aesthetic Medicine"
                  />
                  <CredentialRow
                    label="Experience"
                    value="7+ years in dermatology"
                  />
                </dl>
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
      <rect width="40" height="40" fill="#B8963E" />
      <line x1="20" y1="6" x2="20" y2="34" stroke="#FAF8F5" strokeWidth="1.5" />
      <path d="M20 10 Q28 14 28 18 Q28 22 20 22 Q12 22 12 18 Q12 14 20 10Z" stroke="#FAF8F5" strokeWidth="1" fill="none" />
      <circle cx="20" cy="8" r="2.5" stroke="#FAF8F5" strokeWidth="1" fill="none" />
    </svg>
  );
}
