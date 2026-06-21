import { useScrollAnimationGroup } from "../hooks/useScrollAnimation";

const features = [
  {
    id: "01",
    tag: "Quantum Core",
    title: "Picosecond Precision",
    body: "Our proprietary QC-7 oscillator leverages quantum tunneling to maintain synchronization accurate to 10⁻¹² seconds. Certified by BIPM.",
    stat: "10⁻¹²s",
    statLabel: "Accuracy",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
        <circle cx="24" cy="24" r="20" stroke="rgba(201,168,76,0.3)" strokeWidth="1"/>
        <circle cx="24" cy="24" r="12" stroke="rgba(0,212,255,0.4)" strokeWidth="1" strokeDasharray="3 3"/>
        <circle cx="24" cy="24" r="4" fill="rgba(201,168,76,0.6)"/>
        <path d="M24 4v6M24 38v6M4 24h6M38 24h6" stroke="rgba(201,168,76,0.3)" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M24 24L36 12" stroke="rgba(0,212,255,0.6)" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    accent: "gold",
    span: "col-span-2 lg:col-span-1",
  },
  {
    id: "02",
    tag: "Materials",
    title: "Liquid-Crystal Titanium Alloy",
    body: "Grade 23 Ti-Al-V-Nb alloy with quantum-annealed crystalline structure. 40% lighter than steel, 3× the tensile strength. Scratch-proof nano-ceramic coating.",
    stat: "340 HV",
    statLabel: "Hardness",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
        <path d="M24 4L44 40H4L24 4z" stroke="rgba(201,168,76,0.3)" strokeWidth="1"/>
        <path d="M24 14L38 36H10L24 14z" stroke="rgba(0,212,255,0.3)" strokeWidth="1" strokeDasharray="2 2"/>
        <circle cx="24" cy="28" r="4" fill="none" stroke="rgba(201,168,76,0.5)" strokeWidth="1.5"/>
        <line x1="24" y1="4" x2="24" y2="14" stroke="rgba(0,212,255,0.5)" strokeWidth="1.5"/>
      </svg>
    ),
    accent: "quantum",
    span: "col-span-2 lg:col-span-1",
  },
  {
    id: "03",
    tag: "Interface",
    title: "Holographic Quantum Display",
    body: "A 1.45″ micro-OLED display generating true-holographic depth perception without glasses. 4000 nit peak brightness, quantum-dot color volume, always-on with 72h battery.",
    stat: "4000",
    statLabel: "Peak Nits",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
        <rect x="10" y="14" width="28" height="20" rx="2" stroke="rgba(201,168,76,0.3)" strokeWidth="1"/>
        <rect x="14" y="18" width="20" height="12" rx="1" fill="rgba(0,212,255,0.06)" stroke="rgba(0,212,255,0.3)" strokeWidth="0.75"/>
        <path d="M19 24h10M24 21v6" stroke="rgba(0,212,255,0.6)" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M6 34l4 4M42 34l-4 4M6 14l4-4M42 14l-4-4" stroke="rgba(201,168,76,0.2)" strokeWidth="1"/>
      </svg>
    ),
    accent: "gold",
    span: "col-span-2",
  },
];

export default function FeaturesSection() {
  const groupRef = useScrollAnimationGroup();

  return (
    <section className="py-28 lg:py-40 px-6 lg:px-12 max-w-7xl mx-auto">

      {/* Section header */}
      <div className="mb-16 lg:mb-24">
        <div className="anim-ready flex items-center gap-4 mb-6" ref={null}>
          <div className="quantum-dot" />
          <span className="section-label">Engineering</span>
        </div>

        <AnimHeader />
      </div>

      <div className="divider-gold mb-16" />

      {/* Bento Grid */}
      <div ref={groupRef} className="grid grid-cols-2 gap-4 lg:gap-6">
        {features.map((f, i) => (
          <FeatureCard key={f.id} feature={f} delay={i} />
        ))}
      </div>

    </section>
  );
}

function AnimHeader() {
  const ref = useScrollAnimationGroup();
  return (
    <div ref={ref}>
      <div className="anim-ready anim-delay-1">
        <h2 className="font-display font-light text-[clamp(2.5rem,5vw,5rem)] leading-none tracking-tight">
          <span className="text-white/90">Precision </span>
          <span className="text-gold-gradient italic">beyond</span>
        </h2>
        <h2 className="font-display font-light text-[clamp(2.5rem,5vw,5rem)] leading-none tracking-tight text-white/20">
          measurement
        </h2>
      </div>
    </div>
  );
}

function FeatureCard({ feature, delay }) {
  return (
    <div
      className={`anim-ready feature-card rounded-sm p-7 lg:p-10 flex flex-col justify-between min-h-[280px] lg:min-h-[340px] ${feature.span}`}
      style={{ transitionDelay: `${delay * 0.12}s` }}
    >
      {/* Top row */}
      <div className="flex items-start justify-between">
        <div>
          <span className={`section-label ${feature.accent === "quantum" ? "text-kronos-quantum/50" : "text-kronos-gold/50"}`}>
            {feature.tag}
          </span>
          <h3 className="mt-3 font-display font-light text-2xl lg:text-3xl text-white/90 leading-tight">
            {feature.title}
          </h3>
        </div>
        <div className="w-12 h-12 lg:w-14 lg:h-14 flex-shrink-0 ml-4">
          {feature.icon}
        </div>
      </div>

      {/* Body */}
      <p className="mt-4 font-sans text-sm text-white/40 leading-relaxed">
        {feature.body}
      </p>

      {/* Stat */}
      <div className="mt-6 pt-6 border-t border-white/5 flex items-end justify-between">
        <div>
          <div className={`font-mono text-3xl lg:text-4xl font-light ${feature.accent === "quantum" ? "text-quantum-gradient" : "text-gold-gradient"}`}>
            {feature.stat}
          </div>
          <div className="section-label text-white/30 mt-0.5">{feature.statLabel}</div>
        </div>
        <div className="section-label text-white/15">{feature.id}</div>
      </div>
    </div>
  );
}
