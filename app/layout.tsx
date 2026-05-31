import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://pranavaskin.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Pranava Skin, Hair & Aesthetics Clinic | Dermatologist in Bangalore",
    template: "%s | Pranava Skin Clinic Bangalore",
  },
  description:
    "Expert dermatology, hair care and aesthetic treatments in Bangalore. Board-certified dermatologist. Book your consultation at Pranava Skin, Hair and Aesthetics Clinic.",
  keywords: [
    "dermatologist in bangalore",
    "skin clinic bangalore",
    "hair loss treatment bangalore",
    "acne treatment bangalore",
    "laser skin resurfacing bangalore",
    "aesthetic clinic bangalore",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Pranava Skin, Hair & Aesthetics Clinic",
    title: "Pranava Skin, Hair & Aesthetics Clinic | Dermatologist in Bangalore",
    description:
      "Expert dermatology, hair care and aesthetic treatments in Bangalore. Board-certified dermatologist.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pranava Skin, Hair & Aesthetics Clinic | Dermatologist in Bangalore",
    description:
      "Expert dermatology, hair care and aesthetic treatments in Bangalore.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalBusiness",
      "@id": `${siteUrl}/#clinic`,
      name: "Pranava Skin, Hair and Aesthetics Clinic",
      description:
        "Premium dermatology, hair care and aesthetic treatments in Bangalore. Board-certified dermatologist.",
      url: siteUrl,
      telephone: "+91-XXXXXXXXXX",
      email: "info@pranavaskin.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "[Street Address]",
        addressLocality: "Bangalore",
        addressRegion: "Karnataka",
        postalCode: "5600XX",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 12.9007238,
        longitude: 77.5618735,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "10:00",
          closes: "19:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Saturday"],
          opens: "10:00",
          closes: "17:00",
        },
      ],
      sameAs: ["https://www.instagram.com/pranava_skin/"],
      medicalSpecialty: "Dermatology",
      priceRange: "₹₹₹",
    },
    {
      "@type": "Physician",
      "@id": `${siteUrl}/#doctor`,
      name: "Dr. Nagalakshmi K P",
      medicalSpecialty: "Dermatology",
      worksFor: { "@id": `${siteUrl}/#clinic` },
      description:
        "Board-certified dermatologist with expertise in skin, hair and aesthetic medicine.",
      alumniOf: "[Medical College]",
      hasCredential: [
        { "@type": "EducationalOccupationalCredential", credentialCategory: "MD Dermatology" },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-ivory text-ink font-sans">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
