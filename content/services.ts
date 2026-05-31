export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  keyword: string;
  metaDescription: string;
  treatments: string[];
  icon: string;
};

export const services: Service[] = [
  {
    slug: "acne-treatment",
    title: "Acne & Acne Scar Treatment",
    shortDescription:
      "Targeted therapies for active acne and scar remodelling — tailored to your skin type and severity.",
    fullDescription:
      "Acne is one of the most undertreated dermatological conditions in India. At Pranava, we combine prescription-grade topical regimens, chemical peels, and advanced laser modalities to address both active breakouts and the scars they leave behind. Every plan is tailored to your Fitzpatrick skin type to avoid post-inflammatory hyperpigmentation — a critical concern for South Asian skin.",
    keyword: "acne treatment in Bangalore",
    metaDescription:
      "Expert acne and acne scar treatment in Bangalore. Board-certified dermatologist. Customised for Indian skin tones. Book a consultation at Pranava Skin Clinic.",
    treatments: [
      "Chemical peels (salicylic, TCA, glycolic)",
      "Fractional CO₂ laser resurfacing",
      "Microneedling with PRP",
      "Prescription topical protocols",
      "Comedone extraction",
    ],
    icon: "◎",
  },
  {
    slug: "hair-loss-treatment",
    title: "Hair Loss & Scalp Health",
    shortDescription:
      "Diagnosis-first approach to androgenetic alopecia, alopecia areata, and telogen effluvium.",
    fullDescription:
      "Hair loss has multiple root causes — hormonal, nutritional, autoimmune, or stress-related — and each demands a distinct treatment pathway. We begin with a detailed trichoscopy evaluation before recommending any intervention, ensuring you aren't paying for treatments your condition doesn't need.",
    keyword: "hair loss treatment in Bangalore",
    metaDescription:
      "Hair loss treatment and scalp health clinic in Bangalore. Trichoscopy-led diagnosis. PRP, GFC, and prescription therapy. Pranava Skin, Hair & Aesthetics Clinic.",
    treatments: [
      "Trichoscopy & scalp analysis",
      "Platelet-Rich Plasma (PRP) therapy",
      "Growth Factor Concentrate (GFC)",
      "Mesotherapy",
      "Topical and systemic prescriptions",
    ],
    icon: "⬡",
  },
  {
    slug: "laser-skin-resurfacing",
    title: "Laser Skin Resurfacing",
    shortDescription:
      "Fractional and ablative laser treatments for texture, pigmentation, and overall skin renewal.",
    fullDescription:
      "Our laser suite includes CO₂ fractional, Q-switched Nd:YAG, and IPL platforms — each suited to different concerns and skin tones. We prioritise safety for Fitzpatrick IV–VI skin types, adjusting fluence and spot size to minimise the risk of post-procedure darkening.",
    keyword: "laser skin resurfacing in Bangalore",
    metaDescription:
      "Laser skin resurfacing in Bangalore. CO₂ fractional, Q-switched Nd:YAG, IPL. Board-certified dermatologist. Safe for Indian skin tones. Pranava Clinic.",
    treatments: [
      "Fractional CO₂ resurfacing",
      "Q-switched Nd:YAG",
      "Intense Pulsed Light (IPL)",
      "Carbon laser facial",
      "Combination protocols",
    ],
    icon: "✦",
  },
  {
    slug: "pigmentation-treatment",
    title: "Pigmentation & Melasma",
    shortDescription:
      "Evidence-based treatment for melasma, sunspots, and uneven tone — without harsh bleaching agents.",
    fullDescription:
      "Pigmentation disorders disproportionately affect South Asian skin and are frequently mistreated with over-the-counter bleaching creams that cause long-term damage. Pranava takes a layered approach: sun protection as a non-negotiable foundation, followed by prescription actives and laser modalities calibrated to your specific pigment pattern.",
    keyword: "melasma treatment in Bangalore",
    metaDescription:
      "Melasma and pigmentation treatment in Bangalore. Evidence-based, safe for Indian skin. No harsh bleaching. Board-certified dermatologist at Pranava Skin Clinic.",
    treatments: [
      "Targeted chemical peels",
      "Tranexamic acid protocols",
      "Q-switched laser toning",
      "Medical-grade sun protection",
      "Prescription topical therapy",
    ],
    icon: "◐",
  },
  {
    slug: "anti-ageing",
    title: "Anti-Ageing & Skin Rejuvenation",
    shortDescription:
      "Subtle, physician-administered aesthetic procedures that restore — not alter — your appearance.",
    fullDescription:
      "Aesthetic medicine at Pranava is guided by the principle of structural restoration. We work with the underlying anatomy to address volume loss, skin laxity, and dynamic lines — not to freeze expression, but to refresh it. All injectables are administered personally by the dermatologist.",
    keyword: "anti-ageing treatment in Bangalore",
    metaDescription:
      "Anti-ageing and skin rejuvenation in Bangalore. Botulinum toxin, fillers, threads, HIFU. Board-certified dermatologist. Natural results. Pranava Aesthetic Clinic.",
    treatments: [
      "Botulinum toxin",
      "Hyaluronic acid fillers",
      "Thread lifts",
      "HIFU (High Intensity Focused Ultrasound)",
      "Collagen induction therapy",
    ],
    icon: "◇",
  },
  {
    slug: "skin-conditions",
    title: "Medical Dermatology",
    shortDescription:
      "Diagnosis and management of eczema, psoriasis, rosacea, fungal infections, and other skin disorders.",
    fullDescription:
      "Beyond aesthetics, Pranava provides comprehensive medical dermatology. Whether you're managing a chronic condition like psoriasis or seeking clarity on an unexplained rash, you'll receive a thorough consultation backed by current clinical evidence.",
    keyword: "dermatologist for skin conditions in Bangalore",
    metaDescription:
      "Medical dermatology in Bangalore. Eczema, psoriasis, rosacea, fungal infections. Board-certified dermatologist. Pranava Skin, Hair & Aesthetics Clinic.",
    treatments: [
      "Eczema / Atopic dermatitis",
      "Psoriasis management",
      "Rosacea treatment",
      "Fungal & bacterial infections",
      "Urticaria & allergy evaluation",
    ],
    icon: "⬢",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
