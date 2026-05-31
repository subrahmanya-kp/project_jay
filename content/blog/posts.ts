export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  metaDescription: string;
  publishedAt: string;
  readingTime: string;
  category: string;
  content: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-treat-acne-in-bangalore",
    title: "How to Treat Acne in Bangalore: A Dermatologist's Guide",
    excerpt:
      "Bangalore's climate, stress levels, and water quality all contribute to persistent acne. Here's what actually works.",
    metaDescription:
      "Expert guide to treating acne in Bangalore. Understand triggers, evidence-based treatments, and when to see a dermatologist. By Pranava Skin Clinic.",
    publishedAt: "2025-11-15",
    readingTime: "8 min",
    category: "Acne",
    content: `
Acne is the most common skin condition we treat in Bangalore, and it's also one of the most misunderstood. Patients frequently arrive having self-medicated with over-the-counter creams for months — sometimes years — without lasting results. This guide explains why that happens and what a structured treatment approach looks like.

## Why Bangalore Specifically Matters

Bangalore's climate sits in a unique middle ground. It isn't as humid as coastal cities, but IT professionals spending long hours under air conditioning experience significant trans-epidermal water loss. Combine this with high pollution load, hard tap water, and the stress profile of a tech-heavy workforce, and you have a perfect recipe for persistent acne.

## The Four Pillars of Effective Acne Treatment

### 1. Accurate Diagnosis
Not all acne is the same. Comedonal acne (whiteheads and blackheads), inflammatory acne (papules and pustules), nodulo-cystic acne, and hormonal acne each demand different treatment pathways. A dermatologist will also rule out acneiform eruptions — conditions that look like acne but are caused by medications, fungi, or rosacea.

### 2. Prescription-Grade Topicals
Over-the-counter benzoyl peroxide and salicylic acid have a role, but they're rarely sufficient alone. Retinoids (tretinoin, adapalene) are the cornerstone of medical acne treatment. They accelerate cell turnover, prevent comedone formation, and — critically — address acne scarring with long-term use.

### 3. Procedural Interventions
Chemical peels (glycolic, salicylic, TCA) performed in-clinic accelerate the resolution of active acne and begin remodelling early scars. For established scars, fractional CO₂ laser or microneedling with PRP are the evidence-based choices.

### 4. Maintenance and Sun Protection
Acne treatment is not a single course of medication. A maintenance protocol — combined with broad-spectrum SPF 50+ daily use — prevents relapse. Many patients in Bangalore skip sun protection, then wonder why their scars are darkening. This is post-inflammatory hyperpigmentation, and UV exposure is the primary driver.

## When to See a Dermatologist

If you have had acne for more than 3 months without improvement, if you are developing nodulo-cystic lesions, or if you are noticing scarring, book a consultation. Delaying treatment allows scarring to progress — and scars are far harder to treat than active acne.

## The Pranava Approach

We begin every acne consultation with a Fitzpatrick skin type assessment and a detailed lifestyle review. Treatment plans are written for your specific skin — not a generic protocol. We avoid prescribing bleaching agents that can permanently damage melanin production in darker skin tones.
    `.trim(),
  },
  {
    slug: "what-is-laser-skin-resurfacing",
    title: "What Is Laser Skin Resurfacing? A Plain-Language Explainer",
    excerpt:
      "CO₂, Nd:YAG, IPL — the terminology is confusing. Here's what each laser actually does and who it's right for.",
    metaDescription:
      "What is laser skin resurfacing? Plain-language guide to CO₂ fractional, Q-switched, and IPL lasers. Safe for Indian skin tones. Pranava Skin Clinic, Bangalore.",
    publishedAt: "2025-10-28",
    readingTime: "7 min",
    category: "Lasers",
    content: `
'Laser treatment' covers a wide range of technologies that work in fundamentally different ways. Choosing the wrong one — or having it done by an untrained operator — can cause permanent damage, particularly on darker Indian skin tones. This article demystifies the most common platforms we use at Pranava.

## Ablative vs Non-Ablative Lasers

The key distinction is whether the laser removes a layer of skin (ablative) or heats underlying tissue without breaking the surface (non-ablative).

**Ablative lasers** (CO₂, Er:YAG) give more dramatic results but require longer downtime — typically 5–14 days of peeling and redness. They're best suited for significant texture irregularities, deep acne scars, and solar damage.

**Non-ablative lasers** (Nd:YAG, diode) heat collagen without damaging the epidermis. Downtime is minimal, but multiple sessions are needed. They're ideal for pigmentation, mild laxity, and patients who can't afford downtime.

## Fractional Delivery — The Modern Standard

Both ablative and non-ablative lasers can be delivered in a "fractional" pattern — treating thousands of microscopic columns of tissue while leaving surrounding skin intact. This dramatically reduces recovery time compared to fully ablative treatments and reduces the risk of post-inflammatory hyperpigmentation on South Asian skin.

## Which Laser Is Right for Indian Skin?

Fitzpatrick IV–VI skin types (the majority of our Bangalore patients) require specific parameters. High-fluence ablative settings risk post-inflammatory hyperpigmentation (PIH) — paradoxical darkening of the treated area. At Pranava, we use conservative fluences, mandatory pre-treatment with topical depigmenting agents, and strict post-treatment sun protection protocols to minimise this risk.

The Q-switched Nd:YAG at 1064nm is the safest wavelength for darker skin — it bypasses the melanin-rich epidermis and targets deeper chromophores. It is our first-line choice for melasma toning, tattoo removal, and carbon laser facials.

## What to Expect at a Laser Session

A topical anaesthetic cream is applied 45–60 minutes before the procedure. The session itself takes 20–45 minutes depending on the area. Mild redness and swelling are expected for 24–72 hours. You must avoid sun exposure and apply SPF religiously for a minimum of 4 weeks after.

## Results Are Cumulative

Laser resurfacing is not a single-session fix. Most patients require 3–6 sessions spaced 4–6 weeks apart. The skin continues to remodel collagen for 3–6 months after treatment, so final results aren't visible for several months.
    `.trim(),
  },
  {
    slug: "melasma-treatment-bangalore",
    title: "Melasma Treatment in Bangalore: Why It's Difficult and What Works",
    excerpt:
      "Melasma is one of the most stubborn pigmentation conditions. Here's why standard treatments fail and what the evidence actually supports.",
    metaDescription:
      "Melasma treatment in Bangalore. Expert dermatologist explains why melasma is hard to treat and what works. Sun protection, topicals, lasers. Pranava Skin Clinic.",
    publishedAt: "2025-10-10",
    readingTime: "9 min",
    category: "Pigmentation",
    content: `
Melasma is the pigmentation condition we see most frequently in Bangalore, and it is also the most frequently undertreated — not because effective treatments don't exist, but because the condition's chronic, relapsing nature is poorly communicated to patients.

## What Makes Melasma Different

Melasma is not simply sun damage. It is a hormonally-driven disorder of melanocyte regulation. This is why it disproportionately affects women (particularly during pregnancy and while on oral contraceptives), why it worsens with heat as much as UV exposure, and why it returns even after successful treatment if triggers aren't controlled.

Histologically, melasma has two components: epidermal pigment (which responds to treatment) and dermal pigment (which does not). The ratio of each varies between patients, which is why some respond dramatically to peels and others show minimal improvement.

## Sun Protection Is Treatment, Not Just Prevention

This cannot be overstated: broad-spectrum SPF 50+ with iron oxide is the single most important intervention in melasma. Iron oxide protects against visible light — including the blue-light from screens — which drives dermal melasma independently of UVA/UVB. Most pharmacy sunscreens do not contain iron oxide.

Patients who are meticulous about treatment but inconsistent with sun protection will see minimal results.

## What the Evidence Supports

**Topical triple combination therapy**: The combination of a retinoid, a corticosteroid, and hydroquinone remains the most studied first-line treatment. However, hydroquinone carries risks of ochronosis (permanent blue-black discolouration) with prolonged use, so it should only be used under medical supervision in treatment cycles.

**Tranexamic acid**: Either as a topical, oral, or injectable, tranexamic acid has emerged as one of the most effective non-hydroquinone treatments. Oral tranexamic acid (250mg twice daily) has strong evidence in Asian skin.

**Chemical peels**: Superficial peels (glycolic, lactic, mandelic) can accelerate epidermal clearance, but must be done conservatively to avoid PIH. Trichloroacetic acid (TCA) peels are generally avoided in melasma.

**Laser toning**: Q-switched Nd:YAG laser at low-fluence settings can address dermal melasma but must be done by an experienced operator. Aggressive settings cause paradoxical darkening.

## Managing Expectations

Melasma requires long-term management, not a single treatment course. Most patients achieve significant improvement within 3–6 months, but maintenance therapy and strict sun protection are required indefinitely. We discuss this clearly at the first consultation, so patients aren't surprised by recurrence.
    `.trim(),
  },
  {
    slug: "hair-loss-causes-treatment-bangalore",
    title: "Hair Loss in Bangalore: Common Causes and Treatment Options",
    excerpt:
      "From androgenetic alopecia to telogen effluvium, understanding your type of hair loss determines whether treatment will work.",
    metaDescription:
      "Hair loss causes and treatment in Bangalore. Expert trichologist explains androgenetic alopecia, telogen effluvium, alopecia areata. PRP, GFC, prescriptions.",
    publishedAt: "2025-09-20",
    readingTime: "8 min",
    category: "Hair",
    content: `
Hair loss is among the top three reasons patients visit us at Pranava, and it is the condition most likely to have been mistreated before the patient arrives. The internet is saturated with shampoo and supplement recommendations, most of which address the wrong condition or have no clinical evidence behind them.

## The Diagnosis Comes First

The most important thing a dermatologist can do for hair loss is arrive at the correct diagnosis before recommending any treatment. We do this through trichoscopy — a dermoscopic examination of the scalp that reveals the calibre, density, and miniaturisation patterns of hair follicles. Combined with a detailed history (onset, family history, recent illnesses, medications, dietary changes), trichoscopy allows an accurate diagnosis in the majority of cases.

## Common Hair Loss Types in Bangalore Patients

### Androgenetic Alopecia (AGA)
The most common type, caused by DHT-driven miniaturisation of follicles. It is hereditary and progressive. In men, it follows the Hamilton-Norwood pattern; in women, the Ludwig pattern (diffuse thinning over the crown). Treatment must be continuous — there is no cure, only management.

**Effective treatments**: Minoxidil (topical and oral), finasteride (men), spironolactone (women), PRP/GFC injections, low-level laser therapy.

### Telogen Effluvium (TE)
Diffuse shedding triggered by a stressor 2–3 months prior — illness (including COVID-19), crash dieting, surgery, childbirth, or significant psychological stress. TE is self-limiting in most cases, but can become chronic if the trigger persists or if it unmasked underlying AGA.

**Treatment**: Address the underlying trigger. Nutritional supplementation where deficiencies are identified. PRP can accelerate recovery.

### Alopecia Areata (AA)
An autoimmune condition causing patchy hair loss. Can progress to total scalp (alopecia totalis) or whole-body hair loss (alopecia universalis). New JAK inhibitor treatments have changed the prognosis for severe AA.

**Treatment**: Intralesional corticosteroids, topical immunotherapy, systemic immunosuppressants for extensive disease.

## PRP vs GFC — What's the Difference?

Both PRP (Platelet-Rich Plasma) and GFC (Growth Factor Concentrate) involve drawing the patient's own blood and processing it to concentrate growth factors, which are then injected into the scalp.

GFC is a newer technology that yields a higher, more standardised concentration of growth factors and causes less discomfort because it eliminates the white blood cells that drive injection-site inflammation. At Pranava, we have transitioned to GFC for most hair loss patients.

## What Won't Work

- Shampoos marketed for hair growth have no meaningful clinical evidence
- Biotin supplementation only helps if you have a documented biotin deficiency (rare)
- Platelet activating factor inhibitors sold online are unregulated
- Hair transplants are not appropriate until hair loss has been stabilised with medical treatment
    `.trim(),
  },
  {
    slug: "anti-ageing-treatments-bangalore",
    title: "Anti-Ageing Treatments in Bangalore: What's Worth It",
    excerpt:
      "From retinoids to injectables, a frank assessment of which anti-ageing treatments have evidence and which are marketing.",
    metaDescription:
      "Anti-ageing treatments in Bangalore. Dermatologist's honest assessment: retinoids, fillers, HIFU, threads. What works and what doesn't. Pranava Skin Clinic.",
    publishedAt: "2025-09-05",
    readingTime: "10 min",
    category: "Anti-Ageing",
    content: `
The anti-ageing industry is worth billions of dollars globally, and a significant portion of that is marketing to insecurity rather than evidence. As a dermatologist, I find this frustrating — because there are genuinely effective treatments available, and they get lost in the noise.

This is an honest assessment of what has clinical evidence, what the caveats are, and what we use at Pranava.

## The Foundation: Retinoids and SPF

Before any procedure is discussed, I want to know if the patient uses a retinoid and an SPF 50+. These two interventions have the most robust evidence base in anti-ageing dermatology.

**Retinoids** (tretinoin being the gold standard, with over-the-counter adapalene being a reasonable first step) stimulate collagen synthesis, increase epidermal turnover, and reduce fine lines. They are not overnight solutions — meaningful results appear at 12–16 weeks and continue to improve with sustained use.

**SPF** is not preventive — in an unprotected person who has already accumulated UV damage, adding SPF now still visibly improves the skin over 12 months by halting further degradation. Every study on photoageing confirms this.

## Injectable Treatments with Evidence

### Botulinum Toxin
The most studied aesthetic injectable in existence. When administered by a physician with anatomical knowledge, it reduces dynamic lines (crow's feet, forehead, glabellar) safely and predictably. Results last 3–6 months. The key is conservative dosing that maintains natural expression.

### Hyaluronic Acid Fillers
Effective for volume restoration in the mid-face, tear troughs, and lips. The goal is structural restoration, not augmentation. A skilled injector will use fillers to lift the midface — which addresses jowling and under-eye hollows more effectively than treating those areas directly.

Hyaluronic acid fillers are reversible with hyaluronidase. This is an important safety feature that I prioritise when choosing filler products.

### Biostimulators (Sculptra, Radiesse)
These stimulate the body's own collagen production and provide a more gradual, natural result than traditional fillers. Sculptra (PLLA) in particular has excellent long-term data for facial volume restoration.

## Energy-Based Devices

**HIFU (High-Intensity Focused Ultrasound)**: Ultherapy and similar devices deliver ultrasound energy to the SMAS layer, stimulating neocollagenesis. Results appear over 3–6 months and last 12–18 months. Evidence is solid for mild to moderate skin laxity.

**Radiofrequency (RF) Microneedling**: Devices like Morpheus8 combine microneedling with RF energy for skin tightening and textural improvement. Excellent safety profile on darker skin tones.

## What I Don't Recommend

- "Stem cell facials" and growth factor serums applied topically — molecules too large to penetrate skin
- High-frequency devices sold for home use — insufficient energy to achieve clinical results
- Any procedure promising results in a single session for significant laxity or deep lines
- Permanent fillers — the risk/benefit profile is unacceptable given the availability of excellent reversible options
    `.trim(),
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
