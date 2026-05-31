import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Medical Disclaimer",
  description:
    "Medical disclaimer for Pranava Skin, Hair and Aesthetics Clinic. Website content is informational only and does not constitute medical advice.",
  alternates: { canonical: "/disclaimer" },
  robots: { index: true, follow: false },
};

export default function DisclaimerPage() {
  return (
    <>
      <Nav />
      <main className="pt-16 lg:pt-20">
        <div className="max-w-content mx-auto px-6 lg:px-8 py-section">
          <div className="max-w-2xl">
            <p className="font-sans text-xs font-medium tracking-[0.2em] uppercase text-slate-mid mb-4">
              Legal
            </p>
            <h1 className="font-serif text-display-lg text-ink mb-4">
              Medical Disclaimer
            </h1>
            <p className="font-sans text-sm text-muted mb-12">
              Please read this disclaimer carefully before using this website.
            </p>

            <div className="space-y-8 font-sans text-sm text-muted leading-relaxed">
              <div className="p-6 bg-champagne border-l-2 border-slate-deep">
                <p className="font-serif text-base font-semibold text-ink mb-2">
                  Key Statement
                </p>
                <p>
                  The content on this website is provided for informational
                  purposes only. It does not constitute medical advice,
                  diagnosis, or treatment, and should not be used as a
                  substitute for professional medical consultation.
                </p>
              </div>

              <section>
                <h2 className="font-serif text-lg font-semibold text-ink mb-3">
                  Not Medical Advice
                </h2>
                <p>
                  The information, articles, and service descriptions on this
                  website are written for general educational purposes. They do
                  not take into account your individual health history, skin
                  type, medications, allergies, or other personal medical
                  factors.
                </p>
                <p className="mt-3">
                  Always seek the advice of a qualified dermatologist or
                  physician before beginning any skin treatment, stopping any
                  medication, or making any health-related decision based on
                  information from this website.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-lg font-semibold text-ink mb-3">
                  Individual Results Vary
                </h2>
                <p>
                  Dermatological treatments produce different outcomes for
                  different individuals depending on skin type, severity of
                  condition, compliance with aftercare, and many other factors.
                  Any results described or implied on this website are not
                  guaranteed and should not be relied upon as typical outcomes.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-lg font-semibold text-ink mb-3">
                  No Doctor–Patient Relationship
                </h2>
                <p>
                  Use of this website does not create a doctor–patient
                  relationship between you and Pranava Skin, Hair and
                  Aesthetics Clinic or any of its practitioners. A
                  doctor–patient relationship is only established through an
                  in-person or formally arranged consultation.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-lg font-semibold text-ink mb-3">
                  Emergency Situations
                </h2>
                <p>
                  If you believe you are experiencing a medical emergency, call
                  emergency services immediately (112 in India). Do not rely on
                  this website for urgent medical guidance.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-lg font-semibold text-ink mb-3">
                  Content Accuracy
                </h2>
                <p>
                  While we make reasonable efforts to ensure that information on
                  this website is accurate and current, medicine evolves rapidly.
                  Specific treatments, dosages, and guidelines change. We do not
                  warrant the completeness or accuracy of any information on this
                  site.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-lg font-semibold text-ink mb-3">
                  Limitation of Liability
                </h2>
                <p>
                  Pranava Skin, Hair and Aesthetics Clinic and its practitioners
                  shall not be liable for any loss, damage, or adverse outcome
                  arising from reliance on information contained on this website.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
