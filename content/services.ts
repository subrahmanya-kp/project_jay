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
    slug: "chemical-peels",
    title: "Chemical Peels",
    shortDescription:
      "Medical-grade peels for acne, pigmentation, dullness, and uneven texture — calibrated to your skin type.",
    fullDescription:
      "Chemical peels use controlled application of acids to exfoliate damaged skin layers, stimulate collagen, and reveal healthier skin beneath. At Pranava, every peel protocol is selected based on your specific concern and Fitzpatrick skin type — a critical consideration for South Asian skin, where the wrong peel strength can trigger post-inflammatory hyperpigmentation. We offer superficial, medium, and combination peels and layer them with other treatments when indicated.",
    keyword: "chemical peel treatment in Bangalore",
    metaDescription:
      "Medical-grade chemical peels in Bangalore. Glycolic, salicylic, TCA and combination peels for acne, pigmentation and texture. Pranava Skin Clinic.",
    treatments: [
      "Glycolic acid peel",
      "Salicylic acid peel (acne-focused)",
      "Lactic acid peel",
      "TCA peel",
      "Combination / cocktail peels",
      "Mandelic acid peel",
    ],
    icon: "◎",
  },
  {
    slug: "freckle-removal",
    title: "Freckle Removal",
    shortDescription:
      "Targeted laser and peel-based treatments to reduce freckles and sun-induced pigmentation safely.",
    fullDescription:
      "Freckles (ephelides) and sun-induced lentigines are among the most common pigmentation concerns we see at Pranava. They respond well to targeted treatment, but the choice of modality — laser vs peel vs topical — depends on lesion depth, skin tone, and whether the pigmentation is truly epidermal. We assess every case before recommending treatment to avoid worsening pigmentation in darker skin tones.",
    keyword: "freckle removal in Bangalore",
    metaDescription:
      "Freckle and sun spot removal in Bangalore. Q-switched laser, peels, and topical protocols. Safe for Indian skin tones. Pranava Skin, Hair & Aesthetics Clinic.",
    treatments: [
      "Q-switched Nd:YAG laser",
      "Intense Pulsed Light (IPL)",
      "Targeted chemical peels",
      "Depigmenting topical protocols",
      "Combination therapy",
    ],
    icon: "◐",
  },
  {
    slug: "wart-treatment",
    title: "Wart Treatment",
    shortDescription:
      "Effective removal of common, plantar, and flat warts using clinically proven techniques.",
    fullDescription:
      "Warts are caused by HPV and can be persistent, painful (especially plantar warts), or cosmetically distressing. Over-the-counter remedies are rarely sufficient for stubborn or multiple warts. At Pranava, we select the treatment modality based on wart type, location, size, and patient history — ensuring complete removal with minimal recurrence and scarring.",
    keyword: "wart removal in Bangalore",
    metaDescription:
      "Wart removal in Bangalore. Cryotherapy, electrocautery, and laser for common, plantar and flat warts. Board-certified dermatologist. Pranava Skin Clinic.",
    treatments: [
      "Cryotherapy (liquid nitrogen)",
      "Electrocautery",
      "Laser ablation",
      "Intralesional immunotherapy",
      "Topical keratolytic therapy",
    ],
    icon: "⬡",
  },
  {
    slug: "hair-loss-treatment",
    title: "Hair Loss Treatment",
    shortDescription:
      "Diagnosis-first approach to androgenetic alopecia, alopecia areata, and telogen effluvium.",
    fullDescription:
      "Hair loss has multiple root causes — hormonal, nutritional, autoimmune, or stress-related — and each demands a distinct treatment pathway. We begin with a detailed trichoscopy evaluation before recommending any intervention, ensuring you aren't paying for treatments your condition doesn't need. The right diagnosis is the most valuable thing we can offer you.",
    keyword: "hair loss treatment in Bangalore",
    metaDescription:
      "Hair loss treatment in Bangalore. Trichoscopy-led diagnosis. Minoxidil, finasteride, PRP, GFC, mesotherapy. Board-certified dermatologist at Pranava Clinic.",
    treatments: [
      "Trichoscopy & scalp analysis",
      "Prescription therapy (topical & systemic)",
      "Platelet-Rich Plasma (PRP)",
      "Growth Factor Concentrate (GFC)",
      "Mesotherapy",
      "Nutritional & hormonal assessment",
    ],
    icon: "⬢",
  },
  {
    slug: "prp-gfc",
    title: "PRP / GFC",
    shortDescription:
      "Your own growth factors — concentrated and injected — to stimulate hair regrowth and skin rejuvenation.",
    fullDescription:
      "PRP (Platelet-Rich Plasma) and GFC (Growth Factor Concentrate) both use the patient's own blood, processed to isolate growth factors that stimulate tissue repair and regeneration. GFC is the newer, more refined modality — it yields a higher, more standardised concentration of growth factors and eliminates white blood cells that drive injection-site pain. We use GFC as our preferred protocol for hair loss. Both modalities are also used for skin rejuvenation and under-eye hollows.",
    keyword: "PRP GFC treatment in Bangalore",
    metaDescription:
      "PRP and GFC treatment in Bangalore for hair loss and skin rejuvenation. Board-certified dermatologist. Safe, autologous therapy. Pranava Skin, Hair & Aesthetics Clinic.",
    treatments: [
      "GFC for hair loss (scalp injections)",
      "PRP for hair loss",
      "PRP facial (skin rejuvenation)",
      "Under-eye PRP",
      "Combination with microneedling",
    ],
    icon: "◇",
  },
  {
    slug: "microneedling",
    title: "Microneedling",
    shortDescription:
      "Controlled micro-injuries to stimulate collagen — effective for scars, texture, pores, and skin laxity.",
    fullDescription:
      "Microneedling (collagen induction therapy) uses fine needles to create thousands of controlled micro-channels in the skin, triggering the body's natural healing response and collagen synthesis. It is one of the most versatile and well-tolerated procedures in aesthetic dermatology, suitable for a wide range of skin tones including Fitzpatrick IV–VI. At Pranava, we offer standard microneedling and combination protocols with PRP, GFC, or topical actives for enhanced results.",
    keyword: "microneedling in Bangalore",
    metaDescription:
      "Microneedling in Bangalore for acne scars, open pores, skin texture and rejuvenation. Combination with PRP/GFC available. Pranava Skin, Hair & Aesthetics Clinic.",
    treatments: [
      "Microneedling (collagen induction therapy)",
      "Microneedling + PRP",
      "Microneedling + GFC",
      "Microneedling + topical actives",
      "RF microneedling (skin tightening)",
    ],
    icon: "✦",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
