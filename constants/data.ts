export interface NavItem {
  label: string;
  href: string;
  exact?: boolean;
}

export interface MaterialSpec {
  id: string;
  name: string;
  tagline: string;
  gauge: string;
  finish: string;
  description: string;
  badge: string;
  image: string;
  stats: {
    label: string;
    value: string;
  }[];
  tensileYield?: string;
  warranty: string;
  windResistance?: string;
  saltFogTest?: string;
  weight: string;
  rustResistance?: string;
  expectedLife: string;
  maintenance: string;
  coastalZone: string;
  investmentTier: string;
}

export interface ColorFinish {
  name: string;
  code: string;
  hex: string;
  sri: number;
  sr: number;
  type: string;
  description: string;
}

export interface ProfileSpec {
  id: string;
  name: string;
  category: string;
  height: string;
  seamType: string;
  description: string;
  applications: string;
  gauges: string;
  schematic: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle?: string;
  location: string;
  category: 'Residential' | 'Commercial' | 'Coastal' | 'Historic';
  roofingSystem: string;
  material: string;
  squareFeet: string;
  completionYear: string;
  architect?: string;
  description: string;
  image: string;
  featured?: boolean;
  specs: {
    label: string;
    value: string;
  }[];
}

export interface TestimonialItem {
  id: string;
  quote: string;
  clientName: string;
  role: string;
  location: string;
  project: string;
  rating: number;
  avatar?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  details: string[];
}

export const SITE_CONFIG = {
  name: "EliteMetal Roofing",
  brandName: "EliteMetal",
  motto: "Roofing designed to last. Crafted to be seen.",
  phone: "(555) 462-METAL",
  phoneRaw: "tel:5554626382",
  phoneDisplayExt: "(555) 462-METAL ext. 2",
  email: "hello@elitemetalroofing.com",
  commercialEmail: "commercial@elitemetalroofing.com",
  address: {
    street: "1040 Architectural Way, Suite 400",
    city: "Austin",
    state: "TX",
    zip: "78701",
    full: "1040 Architectural Way, Suite 400, Austin, TX 78701",
  },
  hours: "Mon–Sat: 8:00 AM – 6:00 PM",
  primaryCta: "Request a Quote",
  secondaryCta: "Talk to a Roofing Specialist",
  logoUrl:
    "https://lh3.googleusercontent.com/aida/AEtjO1XrOWA2i2YiJh38xP843wrmqTDzXuMy9wMy3SW0eHww1oGyAVoow_f3uvgbYOi3XlWU5oJKCAQwpWC1aFlvz_UiRl_Ewk43kN0yQY4ZNE305X9RflhUsaZT4ZFSy9mE-XPGE9dDQN7eFcp6O1l101adJsCrRutY9EZ6X03mafz4O42YtA9pZ-ByjAp0kwpVHbvZhXmKryMvq1BMU0r8R9Gx3M10rFYVP2q8yyqB4Izj7aV87wMARjE4lzM",
  certifications:
    "ASTM Certified • Class 4 Hail Impact • 140mph+ Wind Resistance • Energy Star Partner • 50-Year Non-Prorated Warranty",
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/", exact: true },
  { label: "Metal Roofing", href: "/metal-roofing" },
  { label: "Residential", href: "/residential-roofing" },
  { label: "Commercial", href: "/commercial-roofing" },
  { label: "Materials", href: "/roofing-materials" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
];

export const KEY_METRICS = [
  {
    value: "25+",
    label: "Years of Craft",
    description: "Architectural metalcraft strictly dedicated to high-end building enclosures.",
  },
  {
    value: "1,500+",
    label: "Estates Completed",
    description: "Precision-installed standing seam, zinc paneling, and tailored copper work.",
  },
  {
    value: "50-Yr",
    label: "Non-Prorated",
    description: "Direct manufacturer and workmanship guarantees backing material fidelity.",
  },
  {
    value: "32+",
    label: "Architectural Finishes",
    description: "Kynar 500 PVDF, natural patinated copper, pre-weathered titanium zinc.",
  },
];

export const MATERIAL_SPECS: MaterialSpec[] = [
  {
    id: "galvalume",
    name: "Standing Seam Galvalume Steel",
    tagline: "Residential & Commercial Standard",
    gauge: "24-Gauge AZ50",
    finish: "Ultra-Matte Kynar 500 / Fluropon PVDF",
    description:
      "The gold standard in modern structural roofing. Engineered with a proprietary zinc-aluminum alloy dip that delivers up to four times the atmospheric corrosion barrier of standard galvanized steel, reinforced by concealed expansion clip assemblies.",
    badge: "Residential & Commercial Standard",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCUsV7d50Vp1Nm0quqMkj_LVcbp8c_cpBSQc_iTDhuG_h-G-lVVXsUytVEnREhFtGysm4AZfCKyp2MDiTiaxCdps9r74wJyLtup37WEAowpsfT0qRmlM15xFsCbcjHbx7nNZNpE8o-6y8i3j0sZd9dDYYyt_pnO4bO3ZYr1xAtg9wK3GsG7UwUoXC7nDDGTRS55EPkDkaOHoCMetEW26okcMxDIDybH0EjALwhvSfpQVkzkP80NuPdu",
    stats: [
      { label: "Tensile Yield", value: "50,000 PSI" },
      { label: "Warranty", value: "50-Year Non-Prorated" },
      { label: "Wind Resistance", value: "140+ MPH Tested" },
    ],
    tensileYield: "50,000 PSI",
    warranty: "50-Year Non-Prorated",
    windResistance: "140+ MPH Tested",
    weight: "1.25 – 1.45 lbs",
    expectedLife: "50 – 60 Years",
    maintenance: "Minimal (Annual inspection)",
    coastalZone: "Inland > 1 mile from salt",
    investmentTier: "Tier I",
  },
  {
    id: "aluminum",
    name: "Marine-Grade Aluminum",
    tagline: "Coastal Specialist",
    gauge: "0.032\" & 0.040\"",
    finish: "Multi-Layer Anodized & PVDF",
    description:
      "Impervious to salt spray, ocean mist, and brackish coastal moisture. Naturally oxidation-resistant, lightweight, and engineered specifically for open shoreline exposure without the risk of red rust.",
    badge: "Coastal Specialist",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAb2LQp-WdDgJP5dQQZmZk71vSKidNrPP4GUx8F_52Kjge9FQ-z4ByAdLxBFQ_xlws6I8Q1oJCkz1mMxBo_ZDxQnyZTJvnBH2VRUFQDOXDLdX_FhxDBFqoxCoqse2jiwgeY7J-jekJuvZC53mdV9Cf2dBlBpWcex4Xg0KD2BybbbC3Fuyv755inpSLq36gbjI_lbxAXR1Vo2vcgUZ3F28Z7X4EV0oPApBfPxrAm-zULKWmOK6c11XNp",
    stats: [
      { label: "Salt Fog Test", value: "4,000+ Hrs" },
      { label: "Weight", value: "0.55 lb/sqft" },
      { label: "Rust Resistance", value: "100% Zero Rust" },
    ],
    saltFogTest: "4,000+ Hrs",
    weight: "0.55 – 0.70 lbs (Ultralight)",
    rustResistance: "100% Zero Rust",
    warranty: "50-Year Non-Prorated",
    expectedLife: "60 – 75 Years",
    maintenance: "Minimal (Rinse in salt spray zone)",
    coastalZone: "Direct Oceanfront",
    investmentTier: "Tier II",
  },
  {
    id: "copper",
    name: "Architectural Natural Copper",
    tagline: "Legacy Heritage",
    gauge: "16 oz & 20 oz",
    finish: "Mill / Naturally Weathering",
    description:
      "The pinnacle of generational architecture. Natural copper develops a protective verdigris oxide layer over decades, regenerating self-healed surfaces and lasting well past a century without paint or chemical maintenance.",
    badge: "Legacy Heritage",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA1gkGvLHi6m1-SxGOsz_QLvySuH8k-bpk5pWZpgaSSjCZ_1NRcDcFyuNjKsTjT7wwV43vMAi3F1GKaZVhnv61ifXbpooZg-pTnmX06BO4dA0AUpUvnTFAUmnSOq851AZJFdECnB9icVSurY1b--pwlJRewQ30o6m91enN-pnX4Jwhf3Kplt71C24VTMdUA9eHiZp3M0zh6ygcrdPOqV_y6JGg-n3tiWYHtvvAw1nqbGAs-TvXdXiL5",
    stats: [
      { label: "Expected Life", value: "100+ Yrs" },
      { label: "Maintenance", value: "Zero Synthetic" },
    ],
    weight: "1.25 – 1.65 lbs",
    warranty: "100+ Year Generational Life",
    expectedLife: "100 – 120+ Years",
    maintenance: "Zero (Perpetual Self-Healing)",
    coastalZone: "Unlimited Coastal",
    investmentTier: "Tier IV",
  },
  {
    id: "zinc",
    name: "Architectural Zinc",
    tagline: "Continental Modernist",
    gauge: "Rheinzink / Quartz 0.8mm",
    finish: "Pre-weathered Slate & Graphite",
    description:
      "Prized by premier European architects for its velvety, non-reflective matte finish. As zinc weathers, it forms zinc hydroxyl-carbonate, a self-passivating shield that naturally fills micro-abrasions over time.",
    badge: "Continental Modernist",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD2R1Er_j0muM2R7IkWGcvx7_G2DRNna3Zn878dDvlYqzy2mQqMK_KSClIWAdqXTQ7ootGq3EAJSK6e9yeExMOBhvoEE7Tw1TXvDeHgb7xihSvMJN6M13sRfPUGh1SbN_DjwNsciVoa9y8n2_04QWzKQUIeFfFSvJiPrvll17ymw7-Q6NQHVxk_MFYOaGL_2UJv07M3kFDNpky7N38mNagFSNmA61jlr3B6Q9i_TyP3np2ofcTzVgf1",
    stats: [
      { label: "Passivation", value: "Continuous" },
      { label: "Expected Life", value: "80-100 Yrs" },
    ],
    weight: "1.30 – 1.60 lbs",
    warranty: "80-Year Self-Healing Life",
    expectedLife: "80 – 100+ Years",
    maintenance: "Zero (Self-passivating patina)",
    coastalZone: "Coastal Suitable (Grade Specific)",
    investmentTier: "Tier III",
  },
  {
    id: "wall-panels",
    name: "Wall & Soffit Envelope",
    tagline: "Envelope Transition",
    gauge: "Flush & Reveal",
    finish: "Fluted, Ribbed, & Shadow Gap",
    description:
      "Enables fluid monolithic transitions from pitched rooflines down vertical facades and soffit overhangs. Engineered with integrated concealed capillary breaks and back-ventilated rainscreen planes.",
    badge: "Envelope Transition",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBSQAPqr4WMVzANqtNvsmEjeRa8LifWYyopvnGWbawvXm0Eo2lw0pomjjvBSyhUtmrGehmtZ2ImNGiDySyO4YzVOoQRWmDp1yO2yLQF42u7njCdUNDR9nSdjs2ial8rYYwq236yW7Wh8kBhg_BlitGiU0xD3IMUAsTytWJyMFy28Ie9_RA2mOP4kYsVWk0cHAHHFKbR4-8c-xtZPlDA2XYVIJfaAl7fYq2oXTQ2ud4Iq8bzajtutU4w",
    stats: [
      { label: "Rainscreen", value: "ASTM E283" },
      { label: "Fastener", value: "100% Concealed" },
    ],
    weight: "1.10 – 1.50 lbs",
    warranty: "50-Year Non-Prorated",
    expectedLife: "50+ Years",
    maintenance: "None (Self-clearing rainscreen)",
    coastalZone: "Substrate Dependent",
    investmentTier: "Tier II – III",
  },
];

export const COLOR_FINISHES: ColorFinish[] = [
  {
    name: "Charcoal Matte",
    code: "REF: K5-8842",
    hex: "#2b2e34",
    sri: 31,
    sr: 0.28,
    type: "Kynar 500 PVDF",
    description: "Ultra-matte architectural charcoal with zero specular glare.",
  },
  {
    name: "Obsidian Slate",
    code: "REF: K5-9102",
    hex: "#16191d",
    sri: 26,
    sr: 0.22,
    type: "Kynar 500 PVDF",
    description: "Deep nocturnal black with deep slate undertones.",
  },
  {
    name: "Architectural Bronze",
    code: "REF: K5-4309",
    hex: "#45382b",
    sri: 34,
    sr: 0.31,
    type: "Kynar 500 PVDF",
    description: "Warm burnished bronze harmonizing with natural cedar & stone.",
  },
  {
    name: "Patina Verdigris",
    code: "REF: K5-3012",
    hex: "#4d6961",
    sri: 42,
    sr: 0.38,
    type: "Mica Metallic",
    description: "Weathered mineral green emulating historic aged copper.",
  },
  {
    name: "Pewter Zinc",
    code: "REF: K5-7711",
    hex: "#6b7280",
    sri: 48,
    sr: 0.44,
    type: "Pre-Weathered Quartz",
    description: "Soft European quartz gray with subtle satin reflection.",
  },
  {
    name: "Deep Forest Slate",
    code: "REF: K5-6540",
    hex: "#26342e",
    sri: 31,
    sr: 0.28,
    type: "Kynar 500 PVDF",
    description: "Refined alpine pine tone suited to wooded hill country.",
  },
  {
    name: "Bone White",
    code: "REF: K5-1100",
    hex: "#e3e4df",
    sri: 82,
    sr: 0.7,
    type: "Cool Roof SRI Certified",
    description: "Maximal thermal deflection white for net-zero envelopes.",
  },
  {
    name: "Burnished Pewter",
    code: "REF: K5-5020",
    hex: "#7a7e85",
    sri: 46,
    sr: 0.42,
    type: "Mica Metallic",
    description: "Dynamic micro-flake metallic finish catching dawn & dusk light.",
  },
];

export const PROFILE_SPECS: ProfileSpec[] = [
  {
    id: "snap-lock",
    name: "1.5\" Snap-Lock Standing Seam",
    category: "Residential Standard",
    height: "1.5\"",
    seamType: "Concealed Floating Expansion Cleat",
    description:
      "Continuous interlocked seams with zero exposed screws. Ideal for luxury residential estates with pitches from 2:12 upwards, accommodating fluid thermal expansion without oil-canning.",
    applications: "Luxury Custom Estates, Modern Cantilevers, Alpine Cabins",
    gauges: "24 & 22 Ga. Galvalume®, 16 oz Copper, .032 Zinc",
    schematic: "Concealed clip with floating sliding base",
  },
  {
    id: "mechanical-seam",
    name: "2.0\" Mechanical Standing Seam",
    category: "Low Slope & Commercial",
    height: "2.0\"",
    seamType: "Continuous Mechanical Rib Cleat",
    description:
      "Electrically or hand-crimped double mechanical lock seam (360-degree). Absolute hydrostatic watertightness down to 0.5:12 pitch slopes and extreme hurricane wind uplift corridors.",
    applications: "Low-Slope Pavilions, Commercial Campuses, High-Wind Coastal",
    gauges: "24 & 22 Ga. Galvalume®, .040 Aluminum",
    schematic: "360-degree double mechanical field fold",
  },
  {
    id: "batten-seam",
    name: "Architectural Batten Seam",
    category: "Monumental Heritage",
    height: "1.75\" x 2\" Cap",
    seamType: "Box Batten Cap with Hidden Anchor",
    description:
      "Bold, broad-capped seam dividers that cast commanding architectural shadow lines across the roofscape. Inspired by continental European cathedral architecture and prominent country manors.",
    applications: "Steep-Slope Manors, Civic Structures, Historic Chateaus",
    gauges: "24 Ga. Steel, .040 Aluminum, Solid Zinc",
    schematic: "Structural box batten with deep shadow channel",
  },
  {
    id: "flush-reveal",
    name: "Flush Reveal & Shingle Tile",
    category: "Envelope Transitions",
    height: "1.0\" Reveal",
    seamType: "Interlocking Recessed Flange",
    description:
      "Engineered for seamless roof-to-fascia-to-wall transitions. Eliminates overhang gutters through hidden drip edge alignments, creating continuous monolithic envelopes for avant-garde cubic architecture.",
    applications: "Integrated Overhangs, Concealed Gutters, Modern Rainscreens",
    gauges: "22 Ga. Steel, .032 - .050 Architectural Aluminum",
    schematic: "Continuous tongue-and-groove reveal joint",
  },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "the-lakeview-residence",
    title: "The Lakeview Residence",
    subtitle: "Architectural Excellence Award",
    location: "Lake Austin, Texas",
    category: "Residential",
    roofingSystem: "1.5\" Mechanical Lock Standing Seam",
    material: "24-Gauge Galvalume Steel",
    squareFeet: "9,400 sq ft",
    completionYear: "2024",
    architect: "Alterstudio Architects",
    description:
      "Designed in collaboration with Alterstudio Architects, this compound required roof planes capable of handling intense 105°F heat waves, sudden torrential flash downpours, and severe hail without visual degradation.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDHTQq7FCDYD9uQ3AkipCTWpbqKHDl7PPJWlHjo3vki7BuYXGZQGJuTyRxvkq-ni2z7r1UWO9ZstqyKZCkQlTiPdx58xvCr0bzU-VyQD3hpzGrDIJljYVToG9ERLNqATA0FjSdfM3QwTooTzJG1BLG-X6DHXdNrMHx-tUHiFSodddpQL6U_bfpznJ94bSINcNjXREHfj5-8JX540fQbEq2FKp8R7KKeQ_pYDPqpiY2m_ZVSjmh3_PgC",
    featured: true,
    specs: [
      { label: "Roof Profile", value: "1.5\" Mechanical Lock Standing Seam" },
      { label: "Core Alloy", value: "24-Gauge Galvalume Steel" },
      { label: "Surface Finish", value: "Matte Charcoal Kynar 500 (Cool Pigment)" },
      { label: "Wind Resistance", value: "UL 580 Class 90 (150 MPH Tested)" },
      { label: "Roof Pitch", value: "Variable 2:12 to 5:12 Contours" },
    ],
  },
  {
    id: "monarch-bay-pavilion",
    title: "Monarch Bay Pavilion & Resort",
    subtitle: "Oceanfront Hospitality Commission",
    location: "Laguna Beach, CA",
    category: "Commercial",
    roofingSystem: "Architectural Standing Seam",
    material: "16 oz Architectural Copper",
    squareFeet: "45,000 sq ft",
    completionYear: "2023",
    architect: "Vance Design Studio",
    description:
      "45,000 sq ft Architectural Standing Seam roof engineered for aggressive coastal salt-fog atmospheric corrosion, utilizing heavy-gauge pre-weathered copper panels that form a natural protective patina.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCnKZtWRLikn6NPA3SGD_NhOlgnvLRuMIm39PIJmGzETA-lMz3axxH2_RH2bndnYG6yqjORA6h3_9uNXI54KMSDfcZExjwFqhWQBfxwK2_0avbeHkUZFlx_rIWfJ2-lKzDpEA63-rWlEhZqnewZNKoKzHFxuwFF6ERQGKzhl-AkxMUsaLKJTmG1LUcgNrWkBf92QF2B6B_LCeF_F82ycTwhS9jb41Bdht_-uu2CqKI7_LkpAmmlUVVR",
    featured: true,
    specs: [
      { label: "Scale", value: "45,000 sq ft" },
      { label: "Substrate", value: "16 oz Cold-Rolled Copper" },
      { label: "Coastal Exposure", value: "Zero Rust / Direct Ocean" },
      { label: "Seaming", value: "Artisan Hand-Seamed Flashing" },
    ],
  },
  {
    id: "vertex-innovation-campus",
    title: "Vertex Innovation Tech Campus",
    subtitle: "LEED Platinum Headquarters",
    location: "Austin, TX",
    category: "Commercial",
    roofingSystem: "Standing Seam with Clamped Solar Arrays",
    material: "24-Ga Galvalume Steel",
    squareFeet: "82,000 sq ft",
    completionYear: "2024",
    architect: "Studio Gensler / Urban Edge",
    description:
      "Custom Charcoal Galvalume with an integrated 420kW solar system secured via zero-penetration S-5! seams, achieving LEED Platinum envelope standards with continuous 120-ft panel runs.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBnbKjCc8WwXlmilagPihVnZIFJGHO_TBTm-8yeHAeM_p-Dmd0sjYx3VdSE_k8O454zleZlyvz6BsIF8cx6b2TtZG5o5IK75NlHReGeSg8UF6RHb12TOuv0FdIsakGfrehSKiIQj4PaIt35DIyZDkxrdNIh30ZmIjgmbCEik5B8IAwg8e5dDm2msTU1mKsd_U3ozNO73dToa4nj5K6KQnZ9pUSqex-VHMvyi1oAq-xUuEioA-hayO0r",
    specs: [
      { label: "Scale", value: "82,000 sq ft" },
      { label: "Substrate", value: "24-Ga AZ50 Galvalume" },
      { label: "Solar Integration", value: "420kW Zero-Penetration" },
      { label: "Wind Uplift", value: "FM 1-90 Approved" },
    ],
  },
  {
    id: "the-luminary-mixed-use",
    title: "The Luminary Mixed-Use",
    subtitle: "Facade-to-Roof Monolithic Envelope",
    location: "Denver, CO",
    category: "Commercial",
    roofingSystem: "Titanium Zinc Cassette Panels",
    material: "Rheinzink Pre-PATINA Slate",
    squareFeet: "38,000 sq ft",
    completionYear: "2023",
    architect: "Dynia Architects",
    description:
      "Seamless facade-to-roof continuous envelope using titanium zinc cassette panels. Engineered with custom high-altitude snow retention mechanisms and concealed gutter overflows.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDfbLqaHgR25A6nyg50HhIHtLBVdOe-pCws0ndMrEX88S0u_LZZ3vKdaTfo7QoW_4vZ2hCwRwvkyUZUyxe6ybgMQWHYtuJIdzk3PKJulhXQ_7taaWL97iLRNZGfJtNNWQnOLruPGSGcJVO0VOx-RrJybgKTBwKUIHu05E5cHoqwx7ScwiqSXOOhYdfE0QZcZ2VC-h_xL2Ts6DKq4uVxZmClL6zMp38ZX9y7zHsEieo2lYUlme26HeZi",
    specs: [
      { label: "Scale", value: "38,000 sq ft" },
      { label: "Substrate", value: "Rheinzink Pre-PATINA Slate" },
      { label: "Snow Retention", value: "Integrated Color-Matched Rail" },
      { label: "Altitude Rating", value: "5,280 ft High Elevation" },
    ],
  },
  {
    id: "the-glasshouse-residence",
    title: "The Glasshouse Residence",
    subtitle: "Sonoran Desert Modern Villa",
    location: "Scottsdale, AZ",
    category: "Residential",
    roofingSystem: "Zinc-Tone Standing Seam",
    material: "24-Gauge Galvalume Zinc-Tone",
    squareFeet: "8,400 sq ft",
    completionYear: "2023",
    architect: "Studio V Modern",
    description:
      "Designed to withstand intense Sonoran Desert thermal cycling. Installed with engineered acoustic isolators underneath standing seams to guarantee silent interiors during violent desert monsoons.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAZnK3lF8c1Tyqd3KVYTy5MQnXv_6V9dHz790BaIyKCpd6EZhkcw5Z8ZMrOeeE8vIEAETtFoQg14_ETc7KJYNkHue1pj4xFMERAtPDS6H4P_KKyLbVExVnIy7NAawtQPsADoCglDR4ybHXE8roS2xLTqhKY4UT8lX3TAYMIIiByifD44UXa8ZGZKz62o27htwLannJ5vLNDeiyH_X6HoXuAzSOt_L8URgRyihw_vCKxOdaALnKh_-BL",
    specs: [
      { label: "Scale", value: "8,400 sq ft" },
      { label: "Thermal Load", value: "Acoustic & Heat Isolator Deck" },
      { label: "Overhangs", value: "8-ft Cantilevered Eaves" },
      { label: "Solar SRI", value: "SRI 34 Cool Roof" },
    ],
  },
  {
    id: "hillside-modern-farmhouse",
    title: "Hillside Modern Farmhouse",
    subtitle: "Steep Pitch Precision",
    location: "Nashville, TN",
    category: "Residential",
    roofingSystem: "Matte Black Standing Seam",
    material: "24-Gauge Galvalume",
    squareFeet: "6,200 sq ft",
    completionYear: "2024",
    architect: "Hastings & Co.",
    description:
      "A 12:12 high-pitch estate configured with custom concealed snow retention brackets and hand-braked chimney shrouds, providing striking contrast against painted brick and black timber frames.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAeR8ju7mA0VE4FojMHS2Bpa702kq04mwHAVzIyBRvBe1dEJl-azO7xw15WJ_PlqDsBwqmLlaXqUThhBN1-m0X_8_7c7OM60Hsyfk3yn6u4is_7s0q-1FzbZ59tsoFgKcHtFaGyfglZ_cvhSTjBr1ZiAPoVB9qnOfj_QDEumRtmFqrpOx2Bh1kiVkWgZA7N70bhDGiVJQK96f6vZmRa7xk4rPMOYcHxYmVhk1fESpBP7Kjr7Z4I4SYL",
    specs: [
      { label: "Scale", value: "6,200 sq ft" },
      { label: "Pitch", value: "12:12 Steep Gabled" },
      { label: "Finish", value: "Matte Black Kynar 500" },
      { label: "Fastening", value: "100% Concealed Clips" },
    ],
  },
  {
    id: "coastal-bluff-estate",
    title: "Coastal Bluff Estate",
    subtitle: "Marine Atmosphere Installation",
    location: "Carmel-by-the-Sea, CA",
    category: "Coastal",
    roofingSystem: "0.040\" Marine-Grade Aluminum",
    material: "High-Tensile Aluminum Alloy",
    squareFeet: "11,200 sq ft",
    completionYear: "2023",
    architect: "Pacific Edge Design",
    description:
      "Perched 80 feet above the Pacific surf line. Specified with 0.040\" high-tensile alloy aluminum panels and 316-marine stainless steel clip fasteners to guarantee zero salt fog corrosion.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCJhfNJOnW_fOM1KRaYow_qONbo8BVcLh5026MkreMtqyv5YOWnhXvxc67D_LL3pRR4XIr9v2eNRBRHXYQmfP4K3esIE4dN-XTdNCg4FQPAjxMZd4m0fXcJmbDSlIuVvHfDhiddvfMpeiNdwfphOQw_a1z78qFKW3gT1FU82YrKcdt2fpLCVyFMRe2KHK067fZQwG48EIgQRl8X90K1OU6pirpqaL3IAf0c1sWM3-zMXDJoH2fU3hga",
    specs: [
      { label: "Scale", value: "11,200 sq ft" },
      { label: "Corrosion Proof", value: "4,000+ Hr Salt Fog Certified" },
      { label: "Fasteners", value: "316 Marine Stainless Steel" },
      { label: "Weight", value: "0.60 lbs / sq ft" },
    ],
  },
  {
    id: "aspen-mountain-chalet",
    title: "Aspen Mountain Chalet",
    subtitle: "High-Altitude Snow Deflection",
    location: "Aspen, CO",
    category: "Residential",
    roofingSystem: "Heavy Mechanical Standing Seam",
    material: "Rheinzink Pre-weathered Graphite",
    squareFeet: "7,800 sq ft",
    completionYear: "2023",
    architect: "Vance Architectural Studio",
    description:
      "Engineered to withstand heavy snow loads up to 120 PSF, freeze-thaw expansion, and rapid alpine UV transitions with dual-stage snow retention clamps.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDNBx04vrAbV_erS29UdoJI1jlhlGBKdd2zceboyEz9N5a8MXnFvxj83CCENZIp4K00InBirtNyYw2JtTzxwp72fbnjmfZiUjccLhfTKeERPT_8TeiqrqQi4bEV-7_f_FSTphhCK246uyolry8okWMw2sZRq4y1sZYoDj3Ls01QTVam8JslYKZLD92h6fLlwqO68q3u_8SCcnIFjZDCep6N_E3GUYPWAwplADZ2OZ6_jP5MxXadyn0u",
    specs: [
      { label: "Scale", value: "7,800 sq ft" },
      { label: "Snow Load Rating", value: "120 PSF Tested" },
      { label: "Underlayment", value: "Dual Breathable Ice Barrier" },
      { label: "Seam Height", value: "2.0\" Double Mechanical" },
    ],
  },
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "marcus-vance",
    quote:
      "When designing contemporary residences with aggressive roof overhangs and minimal fascia reveals, standard roofers ruin the lines. EliteMetal fabricated custom standing seam pans on-site with microscopic tolerance. The result is pure sculpture.",
    clientName: "Marcus Vance, AIA",
    role: "Principal, Vance Architectural Studio",
    location: "Aspen, CO",
    project: "Zinc Mechanical Lock Chalet",
    rating: 5,
  },
  {
    id: "eleanor-david-sterling",
    quote:
      "We replaced our aging cedar shake roof with EliteMetal's matte black standing seam Galvalume. Our summer air conditioning bill dropped by nearly 22%, and during last spring's record hailstorm, we didn't experience a single speck of damage.",
    clientName: "Eleanor & David Sterling",
    role: "Estate Owners",
    location: "Greenwich, CT",
    project: "11,200 sq.ft Colonial Modernization",
    rating: 5,
  },
  {
    id: "julian-c-thorne",
    quote:
      "The precision of their copper work is unmatched in the Southwest. The hand-soldered flashings around our stone chimneys and the hidden water diversion channels are works of engineering art. Worth every dollar for peace of mind.",
    clientName: "Julian C. Thorne",
    role: "Managing Director, Thorne Holdings",
    location: "Austin, TX",
    project: "Lakefront Custom Copper & Zinc Estate",
    rating: 5,
  },
  {
    id: "rebecca-callahan",
    quote:
      "As a general contractor managing $15M+ commercial and hospitality builds, reliability is non-negotiable. EliteMetal's estimating team turned our BIM submittals around in 48 hours, staffed OSHA-30 superintendents, and hit our critical path handover with zero punch-list items.",
    clientName: "Rebecca Callahan",
    role: "VP of Construction, Horizon Builders",
    location: "Laguna Beach, CA",
    project: "Oceanfront Hospitality Pavilion",
    rating: 5,
  },
  {
    id: "arthur-pendelton",
    quote:
      "The 50-year non-prorated warranty gave our family total confidence. Living in a high-fire zone in Colorado, the Class A fire rating lowered our homeowner insurance premium substantially. The look of the matte bronze finish against the pine trees is breathtaking.",
    clientName: "Dr. Arthur Pendelton",
    role: "Private Homeowner",
    location: "Boulder, CO",
    project: "Custom Architectural Standing Seam",
    rating: 5,
  },
  {
    id: "sophia-montgomery",
    quote:
      "Their mobile roll-forming equipment produced 65-foot continuous panels on-site with zero horizontal laps. The crispness of the eaves and concealed downspouts is why high-end architects consistently specify EliteMetal.",
    clientName: "Sophia Montgomery",
    role: "Design Lead, Montgomery & Associates",
    location: "Scottsdale, AZ",
    project: "Contemporary Sonoran Compound",
    rating: 5,
  },
];

export const COMMERCIAL_SECTORS = [
  {
    id: "corporate",
    code: "SECTOR // 01",
    title: "Corporate Campuses",
    description:
      "Expansive low-slope and high-profile standing seam designs with high solar reflectance index (SRI) ratings for net-zero corporate hubs.",
    icon: "corporate_fare",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCY4h-R_qlB3uCiDIWu2ky61Lsx9CYbPqoCcBwjbtnN6zyagKhxFQvTz0lPrd0pLdqZtyS0fUxiJe5Oslnzgb5mGIPju5tNLygKgt9EGHnJInZcjh9akGJImYqSQ--KYoAAjF00OQnBaZ_yDN5SQeR0hpPgXKgpXkOzZWfyJzTsKTc32CDtZfGQMWn7-_R5Cgl5-OT-_4iwgRpXlRUB5T57FKeaws_TD90vIbBDPuBqmyJBfrrim4x9",
  },
  {
    id: "hospitality",
    code: "SECTOR // 02",
    title: "Luxury Hospitality",
    description:
      "Boutique hotels and destination resorts requiring acoustically isolated panel systems and museum-grade artisanal metal finishes.",
    icon: "hotel",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDKOkKgP4k4FSIlffQLdFtXbvcMd7vqsc17Ho5cVzTeDIT5mi7kV9-Hq2Oi2QeuUinF4359LcQ25KBsFruzmlKTFxYNwndiu-uz3YyF9_1Wl0_CjgwEC2O_EVUGYVX30ugo1xVEf5EgVjaf9edkdQRrwJuKdVopdlxudiap6K2jT5w3Q9Sfxw6_0GZ-KgNfJXzBxl3Fl-cDxu_yAWaYUXcB2sR3IV_7_0TZxrXte-CVTcT5rgnVzUKI",
  },
  {
    id: "retail",
    code: "SECTOR // 03",
    title: "High-End Retail",
    description:
      "Sculptural mixed-use districts, high-traffic experiential retail pavilions, and weather-resistant perimeter architectural canopies.",
    icon: "storefront",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA9xfCaUC0ubkjce3hS_a-R4du8SwU6826Hv4UH8ul3yXVPqZIGddkQ_M4LyuwWq9Qr7peK-__WceCRLaIWn-xYVt5s9nJoiBDvtpgWDiJb2XBp_sfRx-N_3WRDkNcqQXggba5ENJyVJKOJuzlCwJUuQwL1BsxCRZZZ4ueSfjodSW-oTj6Uj3VOrp80Y0Pnuch-fjB4EbHdK-huWFqA3NfWhuL9oz08PPCEKe6nYWkwUP_vmOOptTGk",
  },
  {
    id: "multifamily",
    code: "SECTOR // 04",
    title: "Multi-Family Residential",
    description:
      "High-density urban dwellings and upscale multi-family estates engineered for superior lifetime ROI and minimal cyclic maintenance.",
    icon: "apartment",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDvADx2mQMo-ztRPOKt8lDhhTckPm157dyKJZgJLdUl8_M6DkaU4X4hFlIXQUBYXfAzVJqLBiiFKpMDv1IPQw-wjAvXqSiUuUsyZhLpnBXqa48hLOfIjCCsDXX6H2LGsbNoK-VT3blzRtHJB0boMs0IshHg9yaNEY41irs4ADq68XC0HYvMbSHNvcYbPUAy3SCHkMikGMpGpFy55rOcXeDRHmmnXHsjU4aBktNZ06lLrdcqHMj9TQu0",
  },
  {
    id: "cultural",
    code: "SECTOR // 05",
    title: "Cultural Institutions",
    description:
      "Private galleries, civic theaters, and archives requiring stringent vapor barrier control and centuries-long structural lifespans.",
    icon: "museum",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDGg1pBGrneMBctSSed6eRBdaSaCiaHNObOtzmFGS8rUWRR8-0d7kUXbiMn0mJCEZfGGig1ggatBUYk1G98QeCUsS7yOT1AE6JE7DxPtgnwEvrA34qvIC9q0E9CRX43AnMQ_1WDACCWVMQYhToiX8naHiWzfvYttxXm1uOP0kV7Mx2AHP5DApkOtGLSS5cjGYbH-tgUJMZeJ4pGVmEmzYvXxfl5itOMU5YuuwMVy5LwB4sO--Z--86b",
  },
  {
    id: "healthcare",
    code: "SECTOR // 06",
    title: "Healthcare & Education",
    description:
      "Research universities and medical centres operating with zero tolerance for weather intrusion and continuous critical operations.",
    icon: "domain",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDJPSoRlun5NVoDHVnPkCUX91j4-0FuqYtCG7MBf_t382KbQEN8GZUDkDdz1gPqsGgWjuI9mePVvQdH58Oc7KAMTI4zeHoBX-B7veHj0Tb2vPWNsgxobK2I7E1kin1JtV05vrnzpEfnNBfwlswp9Z3K6LGy7HgPo8Kgo2hrs-jdnxFftWC5jZAfXOLnLODmbjfqAsQgjGkgrQgwQlTyY-RWnneGhhPL7f5Mioj7NEsDbJuxILKFJw5O",
  },
];

export const COMMERCIAL_SPECS_PILLARS = [
  {
    tag: "Testing Certification",
    code: "ASTM E1592",
    title: "Wind Uplift Defense: UL 580 Class 90 & FM 1-90",
    description:
      "Full structural validation across pressure envelopes up to 140+ psf. Factory Mutual (FM) Global and Underwriters Laboratories verified clips and structural sub-framing ensure stability under hurricane-force shears.",
    metricLabel: "Dynamic Negative Pressure Gradient",
    metricValue: "Tested to -115 PSF Peak",
  },
  {
    tag: "Thermodynamics",
    code: "Continuous Float",
    title: "Thermal Movement: Spans Exceeding 100+ Feet",
    description:
      "Commercial roofs experience continuous daily expansion and contraction. Our custom-machined two-piece floating clip systems provide up to 2.5 inches of uninhibited bi-directional slip, eliminating oil-canning and fastener shearing.",
    metricLabel: "Free Clip Travel / Delta Tolerance",
    metricValue: "2.50\" Slip / 140°F Delta",
  },
  {
    tag: "Rooftop Integration",
    code: "S-5! Clamp Tech",
    title: "Zero-Penetration Snow Retention & Solar Fit",
    description:
      "Preserve complete weather-tight warranty integrity. We deploy engineered round-point setscrew clamps that bite directly into the seam fold without piercing the metal membrane, capable of anchoring multi-megawatt PV systems.",
    metricLabel: "Structural Seam Bond Guarantee",
    metricValue: "50-Year Non-Piercing Guarantee",
  },
  {
    tag: "Hydraulic Control",
    code: "SMACNA Verified",
    title: "Concealed Drainage & Parapet Systems",
    description:
      "Purge external downspout clutter. Heavy-gauge brake-formed internal gutter assemblies, overflow scuppers, and continuous coping cap flashings are custom tailored to 100-year rainfall intensity metrics.",
    metricLabel: "Emergency Overflow Protection",
    metricValue: "100-Year Storm Discharge",
  },
];

export const FAQS_DATA = [
  {
    question: "Is a metal roof loud when it rains?",
    answer:
      "No. When installed over solid plywood sheathing with modern high-temp acoustic polymer underlayment, an architectural metal roof produces sound decibel levels virtually identical to asphalt shingles. The acoustic barrier absorbs rainfall vibrations completely.",
  },
  {
    question: "How does metal roofing perform in severe hail storms?",
    answer:
      "All EliteMetal systems are certified UL 2218 Class 4—the highest impact rating available. They withstand 2-inch solid steel hail balls traveling at over 90 MPH without structural puncture or seam compromise, saving up to 30% on annual insurance premiums.",
  },
  {
    question: "What is the difference between Galvalume, Aluminum, and Copper?",
    answer:
      "Galvalume is high-strength steel coated in zinc-aluminum alloy with PVDF paint, ideal for 90% of residential and commercial structures. Marine-grade aluminum is lightweight and completely immune to salt spray corrosion within coastal zones. Copper is an untreated living noble metal that naturally oxidizes into a self-healing verdigris patina, lasting over 100 years.",
  },
  {
    question: "What is oil-canning and how do you prevent it?",
    answer:
      "Oil-canning is the visible wavy distortion caused by improper fastening or uneven roof decking. We prevent it through three strict standards: 1) on-site roll forming from heavy 24-gauge or thicker metals, 2) tension-leveling with subtle panel stiffening ribs or striations, and 3) engineered floating expansion clips that allow free thermal expansion.",
  },
  {
    question: "Can solar panels be installed without voiding the roof warranty?",
    answer:
      "Yes. Because our standing seams have continuous raised ribs, solar racking clamps (such as certified S-5! hardware) attach directly to the metal seam without drilling a single hole into the roof deck. Your 50-year watertight warranty remains 100% intact.",
  },
  {
    question: "What does the 50-Year Non-Prorated Warranty actually cover?",
    answer:
      "Unlike standard builder warranties that decrease in value each year, our non-prorated warranty covers 100% of material replacement, structural integrity against rust-through, and finish adhesion (resisting chalking and peeling) for 50 full years, fully transferable to subsequent owners.",
  },
];
