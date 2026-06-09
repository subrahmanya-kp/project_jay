import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Pranava Skin, Hair and Aesthetics Clinic. How we collect, use, and protect your personal data under India's DPDPA 2023.",
  alternates: { canonical: "/privacy-policy" },
  robots: { index: true, follow: false },
};

export default function PrivacyPolicyPage() {
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
              Privacy Policy
            </h1>
            <p className="font-sans text-sm text-muted mb-12">
              Last updated: November 2025. This policy applies to personal data
              collected through the Pranava Skin, Hair and Aesthetics Clinic
              website.
            </p>

            <div className="prose-style space-y-10">
              <PolicySection title="1. Data Controller">
                <p>
                  Pranava Skin, Hair and Aesthetics Clinic (&ldquo;we&rdquo;, &ldquo;us&rdquo;,
                  &ldquo;our&rdquo;) is the data controller for personal information collected
                  through this website. Contact:{" "}
                  <a href="mailto:pranavaskin@gmail.com" className="text-slate-deep underline">
                    pranavaskin@gmail.com
                  </a>
                  .
                </p>
              </PolicySection>

              <PolicySection title="2. Information We Collect">
                <p>
                  We collect personal data only when you voluntarily submit it
                  through our contact form. This may include:
                </p>
                <ul>
                  <li>Full name</li>
                  <li>Email address</li>
                  <li>Phone number (optional)</li>
                  <li>Message content</li>
                </ul>
                <p>
                  We do not collect sensitive health data through this website.
                  Any clinical information shared is done so voluntarily and is
                  used solely to respond to your enquiry.
                </p>
              </PolicySection>

              <PolicySection title="3. How We Use Your Information">
                <p>We use submitted contact information to:</p>
                <ul>
                  <li>Respond to your enquiry or booking request</li>
                  <li>Send a confirmation of your message</li>
                </ul>
                <p>
                  We do not use your data for marketing purposes without your
                  explicit consent. We do not sell or share your data with third
                  parties for their own marketing.
                </p>
              </PolicySection>

              <PolicySection title="4. Legal Basis for Processing">
                <p>
                  Under India&rsquo;s Digital Personal Data Protection Act 2023
                  (DPDPA), we process your data on the basis of your consent
                  (by submitting the contact form) and for the legitimate
                  interest of responding to a medical enquiry.
                </p>
              </PolicySection>

              <PolicySection title="5. Data Retention">
                <p>
                  Contact form submissions are retained in our email system for
                  up to 12 months, after which they are deleted unless an
                  ongoing patient relationship exists.
                </p>
              </PolicySection>

              <PolicySection title="6. Third-Party Services">
                <p>
                  We use{" "}
                  <a
                    href="https://resend.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-deep underline"
                  >
                    Resend
                  </a>{" "}
                  to process contact form emails. Resend acts as a data
                  processor on our behalf and is bound by appropriate data
                  processing terms. We also use Vercel Analytics for anonymous
                  site usage statistics — no personal data is collected by this
                  service.
                </p>
              </PolicySection>

              <PolicySection title="7. Your Rights">
                <p>
                  Under DPDPA 2023, you have the right to:
                </p>
                <ul>
                  <li>Access your personal data held by us</li>
                  <li>Correct inaccurate data</li>
                  <li>Request erasure of your data</li>
                  <li>Withdraw consent at any time</li>
                  <li>Raise a grievance with us or the Data Protection Board</li>
                </ul>
                <p>
                  To exercise any right, email us at{" "}
                  <a href="mailto:pranavaskin@gmail.com" className="text-slate-deep underline">
                    pranavaskin@gmail.com
                  </a>
                  .
                </p>
              </PolicySection>

              <PolicySection title="8. Cookies">
                <p>
                  This website uses no tracking cookies. Vercel Analytics uses a
                  privacy-preserving approach that does not set cookies or
                  collect IP addresses.
                </p>
              </PolicySection>

              <PolicySection title="9. Changes to This Policy">
                <p>
                  We may update this policy from time to time. Material changes
                  will be indicated by updating the date at the top of this page.
                </p>
              </PolicySection>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function PolicySection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="font-serif text-lg font-semibold text-ink mb-4">{title}</h2>
      <div className="font-sans text-sm text-muted leading-relaxed space-y-3 [&_ul]:space-y-1.5 [&_ul]:ml-4 [&_ul_li]:flex [&_ul_li]:items-start [&_ul_li]:gap-2 [&_ul_li]:before:content-['·'] [&_ul_li]:before:text-slate-mid">
        {children}
      </div>
    </section>
  );
}
