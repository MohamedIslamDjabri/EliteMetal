import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import {
  ArrowRight,
  Shield,
  CloudLightning,
  CheckCircle2,
  Hourglass,
  Wind,
  Flame,
  Scale,
  TrendingUp,
  Plane,
  Ruler,
  Cpu,
  Wrench,
  Award,
  PhoneCall,
} from 'lucide-react';
import FinishSelector from '@/components/metal-roofing/FinishSelector';
import QuoteForm from '@/components/forms/QuoteForm';
import { SITE_CONFIG } from '@/constants/data';

export const metadata: Metadata = {
  title: 'Metal Roofing | Precision Architectural Standing Seam Systems',
  description:
    'Engineered to withstand extreme elements with razor-thin shadow lines, concealed engineering, Class 4 impact resistance, and generational permanence.',
};

export default function MetalRoofingPage() {
  const advantages = [
    {
      code: 'ADV_01',
      title: 'Extreme Durability & Weather Resistance',
      description:
        'Tested to withstand Class 4 UL 2218 steel-ball impacts and sustained wind speeds surpassing Category 5 hurricane criteria (up to 160 MPH) without fastener failure.',
      spec: 'ASTM E1592 / FM 4471',
    },
    {
      code: 'ADV_02',
      title: '50+ Year Longevity',
      description:
        'Lasts more than three times longer than petroleum-based asphalt shingles. A true legacy asset installed once in a lifetime, eliminating recurring re-roofing expense.',
      spec: 'Non-Prorated Warranty',
    },
    {
      code: 'ADV_03',
      title: 'Architectural Freedom',
      description:
        'Provides crisp planar lines, concealed clip anchoring, smooth transitions, and bespoke barrel curvatures down to 1:12 low-pitch profiles for vanguard blueprints.',
      spec: 'Concealed Fastener Joints',
    },
    {
      code: 'ADV_04',
      title: 'Thermal & Energy Efficiency',
      description:
        'Reflective cool-metal pigments redirect solar thermal absorption, diminishing attitudinal air-conditioning load by up to 25% while creating an above-sheathing ventilation barrier.',
      spec: 'Cool Roof Rating Council',
    },
    {
      code: 'ADV_05',
      title: 'Zero Maintenance Peace of Mind',
      description:
        'Non-combustible Class A fire rating safeguards against airborne embers. Surface molecular coatings are immune to rot, termite intrusion, lichen, and algae staining.',
      spec: 'Class A Non-Combustible',
    },
    {
      code: 'ADV_06',
      title: '100% Recyclable & Sustainable',
      description:
        'Produced with up to 95% recycled high-grade steel and aluminum. Unlike asphalt debris congesting landfills by the ton, architectural metal retains eternal closed-loop material value.',
      spec: 'LEED v4.1 Contributor',
    },
  ];

  const steps = [
    {
      number: '01',
      title: 'Architectural Consultation & Drone Scan',
      phase: 'Discovery',
      description:
        'High-resolution LiDAR photogrammetry generates a millimeter-exact 3D spatial twin of your roof geometry, detecting rafter pitch deviations and structural hips.',
    },
    {
      number: '02',
      title: 'Engineering & Substrate Assessment',
      phase: 'Engineering',
      description:
        'Decking inspection, high-temp self-adhered synthetic underlayment spec, continuous ridge airflow calculations, and custom snow retention engineering.',
    },
    {
      number: '03',
      title: 'Custom Fabrication & Roll-Profiling',
      phase: 'Fabrication',
      description:
        'Coils are precision cold roll-formed on-site directly into continuous panel runs from eave to peak. Eliminates unsightly horizontal panel lap joints completely.',
    },
    {
      number: '04',
      title: 'Master Artisan Installation',
      phase: 'Craftsmanship',
      description:
        'Panels are locked down using stainless thermal expansion clips and mechanically seamed. Valleys, sidewalls, and parapet caps are hand-folded without exposed caulk.',
    },
    {
      number: '05',
      title: '50-Point Audit & Warranty Seal',
      phase: 'Certification',
      description:
        'Senior engineering sign-off with thermal imaging leak analysis. Handover of transferable 50-year non-prorated system warranty credentials and deed documentation.',
    },
  ];

  return (
    <div className="flex flex-col w-full text-on-surface">
      {/* 1. HERO SECTION */}
      <section className="relative w-full -mt-20 overflow-hidden bg-surface-container-lowest">
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center opacity-40 mix-blend-luminosity scale-105 transform"
            style={{
              backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDNBx04vrAbV_erS29UdoJI1jlhlGBKdd2zceboyEz9N5a8MXnFvxj83CCENZIp4K00InBirtNyYw2JtTzxwp72fbnjmfZiUjccLhfTKeERPT_8TeiqrqQi4bEV-7_f_FSTphhCK246uyolry8okWMw2sZRq4y1sZYoDj3Ls01QTVam8JslYKZLD92h6fLlwqO68q3u_8SCcnIFjZDCep6N_E3GUYPWAwplADZ2OZ6_jP5MxXadyn0u')`,
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-surface-container-lowest/80 to-surface-container-lowest/40"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent"></div>
        </div>

        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 pt-40 pb-20 lg:pb-32 flex flex-col justify-between min-h-[90vh]">
          {/* Architectural Datum & Sub-tag */}
          <div className="flex items-center gap-4 mb-8">
            <span className="w-12 h-[1px] bg-tertiary"></span>
            <span className="font-label-caps text-xs tracking-[0.25em] text-tertiary uppercase">
              Precision Architectural Systems • Spec Series 01
            </span>
          </div>

          {/* Monumental Headline & Narrative */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 space-y-4">
              <h1 className="font-headline-hero text-4xl sm:text-5xl lg:text-7xl tracking-tight text-on-surface font-light leading-[1.08]">
                The Performance of Metal. <br />
                <span className="italic font-normal text-tertiary">The Beauty of Architecture.</span>
              </h1>
              <p className="font-body-xl text-on-surface-variant max-w-2xl font-light leading-relaxed">
                Engineered to withstand extreme elements while presenting an uncompromising
                contemporary aesthetic. Defined by razor-thin shadow lines, concealed engineering, and
                generational permanence.
              </p>
            </div>

            {/* Metric Accent Stamp */}
            <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-end">
              <div className="bg-surface-container-low/80 backdrop-blur-md p-6 border-l-2 border-tertiary w-full max-w-xs shadow-xl">
                <div className="flex items-baseline justify-between mb-2">
                  <span className="font-headline-lg text-3xl text-on-surface font-normal">
                    160<span className="text-tertiary font-sans text-xl ml-0.5">MPH</span>
                  </span>
                  <span className="font-label-caps text-[10px] text-tertiary uppercase font-semibold">
                    Certified
                  </span>
                </div>
                <p className="font-body-sm text-xs text-on-surface-variant font-light">
                  Class 4 Impact • Category 5 Wind Resistance. Zero structural penetrations.
                </p>
              </div>
            </div>
          </div>

          {/* Action Cluster & System Badges */}
          <div className="pt-12 mt-12 border-t border-outline-variant/30 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#quote-consultation"
                className="px-8 py-4 bg-tertiary text-on-tertiary hover:bg-on-surface hover:text-surface transition-all duration-300 font-label-caps text-xs uppercase tracking-widest shadow-lg font-semibold"
              >
                Request a Material Sample
              </a>
              <a
                href="#profiles-spec"
                className="px-8 py-4 bg-surface-container hover:bg-surface-bright text-on-surface transition-all duration-300 font-label-caps text-xs uppercase tracking-widest flex items-center gap-3"
              >
                <span>Explore Profiles</span>
                <ArrowRight className="w-4 h-4 text-tertiary" />
              </a>
            </div>

            <div className="flex items-center gap-6 font-label-caps text-xs uppercase text-outline">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
                <span>Kynar 500® Finish</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
                <span>50-Year Non-Prorated</span>
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
                <span>Non-Combustible</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHY METAL ROOFING: ARCHITECTURAL ADVANTAGES */}
      <section className="w-full bg-surface-container-lowest py-20 lg:py-28 relative">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="font-label-caps text-xs text-tertiary uppercase tracking-widest">
                  Architectural Superiority
                </span>
                <span className="w-8 h-[1px] bg-tertiary"></span>
              </div>
              <h2 className="font-headline-xl text-3xl sm:text-4xl lg:text-5xl text-on-surface font-light">
                Form follows endurance. <br />
                <span className="italic text-primary">Unrivaled material physics.</span>
              </h2>
            </div>
            <p className="font-body-md text-on-surface-variant max-w-md font-light leading-relaxed">
              Unlike asphalt, slate composites, or tile, structural standing seam metal operates as a
              continuous engineered kinetic envelope that expels thermal load and defies hurricane
              shears.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((adv) => (
              <div
                key={adv.code}
                className="group p-8 bg-surface-container-low hover:bg-surface-container transition-all duration-300 relative flex flex-col justify-between border border-white/5"
              >
                <div className="absolute top-0 left-0 w-full h-[2px] bg-outline-variant/40 group-hover:bg-tertiary transition-colors"></div>
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-label-caps text-xs text-tertiary tracking-widest font-semibold">
                      {adv.code}
                    </span>
                    <Shield className="w-5 h-5 text-primary group-hover:text-tertiary transition-colors" />
                  </div>
                  <h3 className="font-headline-md text-xl text-on-surface mb-3 font-normal">
                    {adv.title}
                  </h3>
                  <p className="font-body-md text-xs sm:text-sm text-on-surface-variant font-light leading-relaxed">
                    {adv.description}
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-outline group-hover:text-tertiary text-xs tracking-wider uppercase font-label-caps">
                  <span>{adv.spec}</span>
                  <CheckCircle2 className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ROOFING PROFILES EXPLORATION */}
      <section className="w-full bg-surface-container py-20 lg:py-28" id="profiles-spec">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-2">
              <span className="font-label-caps text-xs text-tertiary uppercase tracking-widest">
                System Geometry
              </span>
              <span className="w-12 h-[1px] bg-tertiary"></span>
            </div>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <h2 className="font-headline-xl text-3xl sm:text-4xl text-on-surface font-light">
                Roofing Profiles Exploration
              </h2>
              <p className="font-body-md text-on-surface-variant max-w-lg font-light leading-relaxed">
                Precision roll-formed geometries customized on-site with zero exposed fasteners,
                preserving absolute watertight integrity across varying roof planes and geometries.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Profile 1 */}
            <div className="bg-surface-container-low p-8 flex flex-col justify-between border border-white/10 shadow-md">
              <div className="space-y-6">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="font-label-caps text-[10px] text-tertiary uppercase tracking-widest block">
                      Profile 01 • Concealed Fastener
                    </span>
                    <h3 className="font-headline-lg text-2xl text-on-surface mt-1 font-normal">
                      Standing Seam Panel
                    </h3>
                  </div>
                  <span className="font-label-caps text-[10px] bg-primary-container text-tertiary px-3 py-1 border border-tertiary/20">
                    Flagship
                  </span>
                </div>

                {/* Inline SVG cross section */}
                <div className="w-full h-36 bg-surface-container-lowest flex items-center justify-center p-4 relative overflow-hidden border border-white/5">
                  <svg
                    className="w-full h-full text-tertiary"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 400 100"
                  >
                    <path
                      d="M 20 80 L 110 80 L 110 30 L 120 20 L 125 25 L 120 80 L 260 80 L 260 30 L 270 20 L 275 25 L 270 80 L 380 80"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path d="M 124 45 L 132 45 L 132 80" stroke="#8f9097" strokeDasharray="3,3" strokeWidth="1.5" />
                    <path d="M 274 45 L 282 45 L 282 80" stroke="#8f9097" strokeDasharray="3,3" strokeWidth="1.5" />
                    <circle cx="132" cy="80" r="3" fill="#8f9097" />
                    <circle cx="282" cy="80" r="3" fill="#8f9097" />
                    <text x="135" y="32" fill="#c5c6cd" fontSize="10" fontFamily="sans-serif">
                      1.5&quot; - 2.0&quot; Seam
                    </text>
                    <text x="175" y="94" fill="#8f9097" fontSize="10" fontFamily="sans-serif">
                      16&quot; - 18&quot; Width
                    </text>
                  </svg>
                  <div className="absolute bottom-2 left-3 font-label-caps text-[9px] uppercase tracking-wider text-outline">
                    Section Schematic: Double Mechanical Lock
                  </div>
                </div>

                <p className="font-body-md text-sm text-on-surface-variant font-light leading-relaxed">
                  The supreme standard in architectural metal. Features 1.5” to 2” continuous vertical
                  legs joined via concealed floating expansion clips that facilitate free thermal
                  movement without stress fracturing.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5 text-xs">
                  <div>
                    <span className="block font-label-caps text-outline uppercase text-[10px]">
                      Typical Applications
                    </span>
                    <span className="font-body-sm text-on-surface mt-0.5 block">
                      Luxury Custom Estates, Modern Cantilevers, Alpine Cabins
                    </span>
                  </div>
                  <div>
                    <span className="block font-label-caps text-outline uppercase text-[10px]">
                      Material Gauges
                    </span>
                    <span className="font-body-sm text-on-surface mt-0.5 block">
                      24 &amp; 22 Ga. Galvalume®, 16 oz Copper, .032 Zinc
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Profile 2 */}
            <div className="bg-surface-container-low p-8 flex flex-col justify-between border border-white/10 shadow-md">
              <div className="space-y-6">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="font-label-caps text-[10px] text-tertiary uppercase tracking-widest block">
                      Profile 02 • Interlocking Shingle
                    </span>
                    <h3 className="font-headline-lg text-2xl text-on-surface mt-1 font-normal">
                      Architectural Slate &amp; Tile
                    </h3>
                  </div>
                  <span className="font-label-caps text-[10px] bg-surface-container text-on-surface-variant px-3 py-1 border border-white/10">
                    Heritage
                  </span>
                </div>

                <div className="w-full h-36 bg-surface-container-lowest flex items-center justify-center p-4 relative overflow-hidden border border-white/5">
                  <svg
                    className="w-full h-full text-tertiary"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 400 100"
                  >
                    <path
                      d="M 30 75 L 140 60 L 145 62 L 138 65 L 40 80 Z"
                      fill="rgba(240, 189, 137, 0.1)"
                      strokeLinecap="round"
                    />
                    <path
                      d="M 130 61 L 240 46 L 245 48 L 238 51 L 140 66 Z"
                      fill="rgba(240, 189, 137, 0.15)"
                      strokeLinecap="round"
                    />
                    <path
                      d="M 230 47 L 340 32 L 345 34 L 338 37 L 240 52 Z"
                      fill="rgba(240, 189, 137, 0.2)"
                      strokeLinecap="round"
                    />
                    <circle cx="140" cy="58" r="2.5" fill="#8f9097" />
                    <circle cx="240" cy="44" r="2.5" fill="#8f9097" />
                    <text x="210" y="85" fill="#8f9097" fontSize="10" fontFamily="sans-serif">
                      Four-Way Hemmed Interlock
                    </text>
                  </svg>
                  <div className="absolute bottom-2 left-3 font-label-caps text-[9px] uppercase tracking-wider text-outline">
                    Section Schematic: Interlocking Slate Tile
                  </div>
                </div>

                <p className="font-body-md text-sm text-on-surface-variant font-light leading-relaxed">
                  Provides the heavy textured cadence of natural quarried slate or hand-split cedar
                  shakes, crafted entirely from stamped heavy-gauge metal panels with an impervious
                  four-way mechanical interlocking perimeter.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5 text-xs">
                  <div>
                    <span className="block font-label-caps text-outline uppercase text-[10px]">
                      Typical Applications
                    </span>
                    <span className="font-body-sm text-on-surface mt-0.5 block">
                      French Provincial Mansions, Historic Restorations, Chateaus
                    </span>
                  </div>
                  <div>
                    <span className="block font-label-caps text-outline uppercase text-[10px]">
                      Material Gauges
                    </span>
                    <span className="font-body-sm text-on-surface mt-0.5 block">
                      26 &amp; 24 Ga. Steel, Solid Zinc Plates, Mill Copper
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Profile 3 */}
            <div className="bg-surface-container-low p-8 flex flex-col justify-between border border-white/10 shadow-md">
              <div className="space-y-6">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="font-label-caps text-[10px] text-tertiary uppercase tracking-widest block">
                      Profile 03 • European Estate
                    </span>
                    <h3 className="font-headline-lg text-2xl text-on-surface mt-1 font-normal">
                      Batten Seam Systems
                    </h3>
                  </div>
                  <span className="font-label-caps text-[10px] bg-surface-container text-on-surface-variant px-3 py-1 border border-white/10">
                    Monumental
                  </span>
                </div>

                <div className="w-full h-36 bg-surface-container-lowest flex items-center justify-center p-4 relative overflow-hidden border border-white/5">
                  <svg
                    className="w-full h-full text-tertiary"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 400 100"
                  >
                    <path
                      d="M 20 80 L 110 80 L 110 40 L 150 40 L 150 80 L 250 80 L 250 40 L 290 40 L 290 80 L 380 80"
                      strokeLinecap="round"
                    />
                    <rect
                      x="105"
                      y="32"
                      width="50"
                      height="14"
                      fill="rgba(240, 189, 137, 0.2)"
                      stroke="#f0bd89"
                      strokeWidth="1.5"
                    />
                    <rect
                      x="245"
                      y="32"
                      width="50"
                      height="14"
                      fill="rgba(240, 189, 137, 0.2)"
                      stroke="#f0bd89"
                      strokeWidth="1.5"
                    />
                    <text x="165" y="30" fill="#c5c6cd" fontSize="10" fontFamily="sans-serif">
                      Prominent 2&quot; Wide Cap
                    </text>
                    <text x="180" y="94" fill="#8f9097" fontSize="10" fontFamily="sans-serif">
                      Deep Shadow Channel
                    </text>
                  </svg>
                  <div className="absolute bottom-2 left-3 font-label-caps text-[9px] uppercase tracking-wider text-outline">
                    Section Schematic: Structural Box Batten
                  </div>
                </div>

                <p className="font-body-md text-sm text-on-surface-variant font-light leading-relaxed">
                  Characterized by bold, broad-capped seam dividers that cast commanding shadow lines
                  across the roofscape. Inspired by continental European cathedral architecture and
                  prominent country manors.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5 text-xs">
                  <div>
                    <span className="block font-label-caps text-outline uppercase text-[10px]">
                      Typical Applications
                    </span>
                    <span className="font-body-sm text-on-surface mt-0.5 block">
                      Steep-Slope Manors, Civic Structures, Museum Wings
                    </span>
                  </div>
                  <div>
                    <span className="block font-label-caps text-outline uppercase text-[10px]">
                      Material Gauges
                    </span>
                    <span className="font-body-sm text-on-surface mt-0.5 block">
                      24 Ga. Steel, .040 Aluminum, Solid Zinc
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Profile 4 */}
            <div className="bg-surface-container-low p-8 flex flex-col justify-between border border-white/10 shadow-md">
              <div className="space-y-6">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="font-label-caps text-[10px] text-tertiary uppercase tracking-widest block">
                      Profile 04 • Cladding &amp; Transitions
                    </span>
                    <h3 className="font-headline-lg text-2xl text-on-surface mt-1 font-normal">
                      Flush Reveal Panels
                    </h3>
                  </div>
                  <span className="font-label-caps text-[10px] bg-surface-container text-on-surface-variant px-3 py-1 border border-white/10">
                    Minimalist
                  </span>
                </div>

                <div className="w-full h-36 bg-surface-container-lowest flex items-center justify-center p-4 relative overflow-hidden border border-white/5">
                  <svg
                    className="w-full h-full text-tertiary"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 400 100"
                  >
                    <path
                      d="M 20 50 L 120 50 L 120 58 L 135 58 L 135 50 L 235 50 L 235 58 L 250 58 L 250 50 L 370 50"
                      strokeLinecap="round"
                    />
                    <line x1="120" y1="54" x2="135" y2="54" stroke="#8f9097" strokeDasharray="2,2" strokeWidth="1" />
                    <text x="140" y="42" fill="#c5c6cd" fontSize="10" fontFamily="sans-serif">
                      Zero-Seam or 1&quot; Reveal
                    </text>
                    <text x="170" y="80" fill="#8f9097" fontSize="10" fontFamily="sans-serif">
                      Continuous Tongue &amp; Groove
                    </text>
                  </svg>
                  <div className="absolute bottom-2 left-3 font-label-caps text-[9px] uppercase tracking-wider text-outline">
                    Section Schematic: Interlocking Reveal Joint
                  </div>
                </div>

                <p className="font-body-md text-sm text-on-surface-variant font-light leading-relaxed">
                  Engineered for seamless roof-to-fascia-to-wall transitions. Eliminates overhang
                  gutters through hidden drip edge alignments, creating continuous monolithic envelopes
                  for avant-garde cubic architecture.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5 text-xs">
                  <div>
                    <span className="block font-label-caps text-outline uppercase text-[10px]">
                      Typical Applications
                    </span>
                    <span className="font-body-sm text-on-surface mt-0.5 block">
                      Integrated Overhangs, Concealed Gutters, Modern Rainscreens
                    </span>
                  </div>
                  <div>
                    <span className="block font-label-caps text-outline uppercase text-[10px]">
                      Material Gauges
                    </span>
                    <span className="font-body-sm text-on-surface mt-0.5 block">
                      22 Ga. Steel, .032 - .050 Architectural Aluminum
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PREMIUM FINISHES & INTERACTIVE SWATCH BAR */}
      <section className="w-full bg-surface-container-lowest py-20 lg:py-28 relative overflow-hidden">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-2">
                <span className="font-label-caps text-xs text-tertiary uppercase tracking-widest">
                  Resin Formulations
                </span>
                <span className="w-10 h-[1px] bg-tertiary"></span>
              </div>
              <h2 className="font-headline-xl text-3xl sm:text-4xl lg:text-5xl text-on-surface font-light">
                Architectural Finishes &amp; Color Metallurgy
              </h2>
            </div>
            <div className="lg:col-span-5 bg-surface-container p-6 border-l-2 border-primary">
              <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                <strong className="text-on-surface font-medium">Technical Specification:</strong>{' '}
                Coated exclusively with 70% fluoropolymer Kynar 500® / Hylar 5000® PVDF resin
                finishes. Resists harsh ultraviolet degradation, chalking, and coastal saline
                atmosphere with an industry-leading 30-year delta-E ≤ 5 color retention guarantee.
              </p>
            </div>
          </div>

          {/* Interactive Component */}
          <FinishSelector />
        </div>
      </section>

      {/* 5. VISUAL PERFORMANCE MATRIX */}
      <section className="w-full bg-surface-container py-20 lg:py-28">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="font-label-caps text-xs text-tertiary uppercase tracking-widest">
              Engineering Comparison
            </span>
            <h2 className="font-headline-xl text-3xl sm:text-4xl text-on-surface font-light">
              Performance Matrix
            </h2>
            <p className="font-body-md text-on-surface-variant font-light">
              Examine the empirical superiority of architectural standing seam metal contrasted
              against traditional building materials over a 50-year structural lifecycle.
            </p>
          </div>

          <div className="overflow-x-auto shadow-xl border border-white/10">
            <table className="w-full text-left border-collapse bg-surface-container-low min-w-[700px]">
              <thead>
                <tr className="border-b border-white/10 bg-surface-container-lowest">
                  <th className="p-6 font-label-caps text-xs text-tertiary uppercase tracking-wider w-1/3">
                    Evaluation Metric
                  </th>
                  <th className="p-6 font-label-caps text-xs text-tertiary uppercase tracking-wider w-1/3 bg-tertiary/5 border-l border-r border-tertiary/20">
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-tertiary"></span>
                      <span>EliteMetal Standing Seam</span>
                    </span>
                  </th>
                  <th className="p-6 font-label-caps text-xs text-outline uppercase tracking-wider w-1/3">
                    Standard Asphalt Shingles
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 font-body-md text-sm">
                <tr className="hover:bg-surface-bright/20 transition-colors">
                  <td className="p-6 text-on-surface font-medium flex items-center gap-3">
                    <Hourglass className="w-5 h-5 text-primary shrink-0" />
                    <span>Expected Lifespan</span>
                  </td>
                  <td className="p-6 font-semibold text-tertiary bg-tertiary/5 border-l border-r border-tertiary/20">
                    50 to 70+ Years{' '}
                    <span className="block text-xs font-normal text-on-surface-variant mt-1">
                      True permanent lifecycle structure
                    </span>
                  </td>
                  <td className="p-6 text-on-surface-variant">
                    12 to 18 Years{' '}
                    <span className="block text-xs text-outline mt-1">
                      Requires 3 to 4 complete replacements
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-surface-bright/20 transition-colors">
                  <td className="p-6 text-on-surface font-medium flex items-center gap-3">
                    <Wind className="w-5 h-5 text-primary shrink-0" />
                    <span>Wind Resistance Rating</span>
                  </td>
                  <td className="p-6 font-semibold text-on-surface bg-tertiary/5 border-l border-r border-tertiary/20">
                    Up to 160 MPH{' '}
                    <span className="block text-xs font-normal text-tertiary mt-1">
                      Concealed clip kinetic lockdown (Cat. 5)
                    </span>
                  </td>
                  <td className="p-6 text-on-surface-variant">
                    60 - 90 MPH Max{' '}
                    <span className="block text-xs text-outline mt-1">
                      Subject to corner tab blow-offs
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-surface-bright/20 transition-colors">
                  <td className="p-6 text-on-surface font-medium flex items-center gap-3">
                    <Flame className="w-5 h-5 text-primary shrink-0" />
                    <span>Fire Spread Rating</span>
                  </td>
                  <td className="p-6 font-semibold text-on-surface bg-tertiary/5 border-l border-r border-tertiary/20">
                    Class A Non-Combustible{' '}
                    <span className="block text-xs font-normal text-tertiary mt-1">
                      Total ember &amp; spark immunity
                    </span>
                  </td>
                  <td className="p-6 text-on-surface-variant">
                    Class A to C{' '}
                    <span className="block text-xs text-outline mt-1">
                      Petroleum asphalt substrate is flammable
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-surface-bright/20 transition-colors">
                  <td className="p-6 text-on-surface font-medium flex items-center gap-3">
                    <Scale className="w-5 h-5 text-primary shrink-0" />
                    <span>Weight on Roof Trusses</span>
                  </td>
                  <td className="p-6 font-semibold text-on-surface bg-tertiary/5 border-l border-r border-tertiary/20">
                    85 - 140 lbs / 100 sq.ft{' '}
                    <span className="block text-xs font-normal text-tertiary mt-1">
                      Ultra-light structural stress load
                    </span>
                  </td>
                  <td className="p-6 text-on-surface-variant">
                    250 - 450 lbs / 100 sq.ft{' '}
                    <span className="block text-xs text-outline mt-1">
                      Heavy structural dead load deflection
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-surface-bright/20 transition-colors">
                  <td className="p-6 text-on-surface font-medium flex items-center gap-3">
                    <TrendingUp className="w-5 h-5 text-primary shrink-0" />
                    <span>Resale Value &amp; Estate ROI</span>
                  </td>
                  <td className="p-6 font-semibold text-tertiary bg-tertiary/5 border-l border-r border-tertiary/20">
                    85% - 95% Recouped{' '}
                    <span className="block text-xs font-normal text-on-surface-variant mt-1">
                      Plus premium insurance discount credits (up to 30%)
                    </span>
                  </td>
                  <td className="p-6 text-on-surface-variant">
                    50% - 60% Recouped{' '}
                    <span className="block text-xs text-outline mt-1">
                      Depreciates steadily each annual cycle
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 6. 5-STEP PRECISION INSTALLATION PROCESS */}
      <section className="w-full bg-surface-container-lowest py-20 lg:py-28">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="font-label-caps text-xs text-tertiary uppercase tracking-widest">
                  Execution Methodology
                </span>
                <span className="w-10 h-[1px] bg-tertiary"></span>
              </div>
              <h2 className="font-headline-xl text-3xl sm:text-4xl text-on-surface font-light">
                The 5-Step Precision Installation
              </h2>
            </div>
            <p className="font-body-md text-on-surface-variant max-w-md font-light leading-relaxed">
              Architectural metal is only as resilient as its craft. Our full-time guild of master
              tinsmiths executes every valley, gable, and seam under zero-tolerance tolerances.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {steps.map((st) => (
              <div
                key={st.number}
                className="bg-surface-container-low p-6 flex flex-col justify-between h-full relative group hover:bg-surface-container transition-all border border-white/5"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-white/5 pb-3">
                    <span className="font-headline-lg text-3xl text-tertiary font-light">
                      {st.number}
                    </span>
                    <Award className="w-4 h-4 text-outline group-hover:text-tertiary transition-colors" />
                  </div>
                  <h3 className="font-headline-md text-lg text-on-surface font-normal">
                    {st.title}
                  </h3>
                  <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed font-light">
                    {st.description}
                  </p>
                </div>
                <div className="pt-6 font-label-caps text-[10px] uppercase text-outline tracking-wider border-t border-white/5 mt-6">
                  Phase: {st.phase}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. ARCHITECTURAL CONSULTATION & QUOTE CTA */}
      <section className="w-full bg-surface-container-high py-20 lg:py-28 relative overflow-hidden" id="quote-consultation">
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-tertiary to-transparent"></div>
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3">
                <span className="font-label-caps text-xs text-tertiary uppercase tracking-widest">
                  Commence Your Project
                </span>
                <span className="w-12 h-[1px] bg-tertiary"></span>
              </div>
              <h2 className="font-headline-hero text-3xl sm:text-4xl lg:text-5xl text-on-surface font-light leading-tight">
                Schedule Your Architectural Metal Roofing Consultation
              </h2>
              <p className="font-body-lg text-on-surface-variant font-light max-w-xl leading-relaxed">
                Directly interface with our senior structural metal engineers. We evaluate your
                architectural elevations, determine optimum seam profiles, and provide a comprehensive
                turnkey estimate.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <a href={SITE_CONFIG.phoneRaw} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-surface-container flex items-center justify-center border border-tertiary/40 group-hover:border-tertiary transition-colors">
                    <PhoneCall className="w-5 h-5 text-tertiary" />
                  </div>
                  <div>
                    <span className="block font-label-caps text-[10px] text-outline uppercase tracking-wider">
                      Direct Engineering Line
                    </span>
                    <span className="font-headline-md text-xl text-on-surface group-hover:text-tertiary transition-colors font-medium">
                      {SITE_CONFIG.phone}
                    </span>
                  </div>
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <QuoteForm initialProjectType="Residential" initialSystem="Standing Seam" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
