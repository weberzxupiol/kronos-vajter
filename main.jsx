import { useScrollAnimationGroup } from "../hooks/useScrollAnimation";

const specs = [
  { label: "Movement",      value: "Calibre K-01 Quantum" },
  { label: "Case",          value: "Grade 23 Titanium, 42mm" },
  { label: "Crystal",       value: "Synthetic Sapphire, AR-coated" },
  { label: "Water Resist.", value: "300m / 30 ATM" },
  { label: "Power Reserve", value: "72h Quantum Cell" },
  { label: "Connectivity",  value: "Quantum Bluetooth 6.0, NFC" },
];

export default function ProductShowcase() {
  const ref = useScrollAnimationGroup();

  return (
    <section className="py-28 lg:py-40 overflow-hidden">

      {/* Section label */}
      <div className="px-6 lg:px-12 max-w-7xl mx-auto mb-16">
        <div className="flex items-center gap-4">
          <div className="quantum-dot" />
          <span className="section-label">The Timepiece</span>
        </div>
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* ── VIDEO / PRODUCT VISUAL ── */}
        <div className="anim-ready relative group">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">

            {/* REPLACE src WITH YOUR HIGGSFIELD ASSET #2 */}
            <video
              src="/videos/product-showcase.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Placeholder visual */}
            <WatchPlaceholder />

            {/* Corner marks */}
            <div className="absolute top-4 left-4 w-5 h-5 border-t border-l border-kronos-gold/40" />
            <div className="absolute top-4 right-4 w-5 h-5 border-t border-r border-kronos-gold/40" />
            <div className="absolute bottom-4 left-4 w-5 h-5 border-b border-l border-kronos-gold/40" />
            <div className="absolute bottom-4 right-4 w-5 h-5 border-b border-r border-kronos-gold/40" />

            {/* Glow overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-kronos-black via-transparent to-transparent" />
          </div>

          {/* Floating badge */}
          <div className="absolute -right-4 lg:-right-8 top-1/3 glass-card rounded-sm px-5 py-4 animate-float">
            <div className="quantum-dot mb-2" />
            <div className="font-mono text-kronos-quantum text-xs">QC-7 ACTIVE</div>
            <div className="font-mono text-white/30 text-[10px] mt-0.5">SYNCHRONIZED</div>
          </div>
        </div>

        {/* ── TEXT CONTENT ── */}
        <div className="anim-ready anim-delay-2 flex flex-col gap-8">

          <div>
            <h2 className="font-display font-light text-[clamp(2.5rem,4vw,4.5rem)] leading-none tracking-tight">
              <span className="block text-white/90">KRONOS</span>
              <span className="block text-gold-gradient italic">Infinitum</span>
              <span className="block text-white/20 text-3xl mt-2">Reference 001</span>
            </h2>
          </div>

          <p className="font-sans text-white/45 text-sm leading-relaxed max-w-md">
            The inaugural Infinitum is hand-assembled over 340 hours by a single 
            master watchmaker in our Geneva atelier. Each component machined to 
            tolerances of 0.2 microns. Limited to 99 pieces worldwide.
          </p>

          <div className="divider-gold" />

          {/* Specs table */}
          <div className="grid grid-cols-1 gap-3">
            {specs.map((s) => (
              <div key={s.label} className="flex items-center justify-between py-3 border-b border-white/5 group/row hover:border-kronos-gold/20 transition-colors duration-300">
                <span className="section-label text-white/30 group-hover/row:text-kronos-gold/50 transition-colors duration-300">
                  {s.label}
                </span>
                <span className="font-sans text-sm text-white/60 group-hover/row:text-white/80 transition-colors duration-300">
                  {s.value}
                </span>
              </div>
            ))}
          </div>

          <div className="divider-gold" />

          {/* Price + CTA */}
          <div className="flex flex-wrap items-center gap-6">
            <div>
              <div className="section-label text-white/25 mb-1">Starting From</div>
              <div className="font-display text-4xl text-gold-gradient">
                $48,000
              </div>
            </div>
            <a href="/collection" className="btn-primary">
              <span>Configure Yours</span>
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                <path d="M1 5h12M8 1l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function WatchPlaceholder() {
  return (
    <div className="absolute inset-0 video-placeholder flex items-center justify-center">
      <div className="relative animate-float">
        {/* Watch body */}
        <div
          className="relative w-40 h-48 animate-glow-pulse"
          style={{
            background: "linear-gradient(160deg, #1A1A26 0%, #0D0D18 60%, #08080F 100%)",
            borderRadius: "32px",
            border: "1.5px solid rgba(201,168,76,0.2)",
            boxShadow: "0 0 60px rgba(0,212,255,0.15), 0 0 120px rgba(0,212,255,0.05), inset 0 1px 0 rgba(201,168,76,0.15)",
          }}
        >
          {/* Screen */}
          <div
            className="absolute inset-4 rounded-2xl overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #050510 0%, #0A0A20 100%)",
              border: "1px solid rgba(0,212,255,0.15)",
            }}
          >
            {/* Holographic UI elements */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 p-3">
              <div className="section-label text-kronos-quantum/60 text-[8px]">QUANTUM TIME</div>
              <div className="font-mono text-kronos-gold text-xl font-light leading-none">22:41</div>
              <div className="font-mono text-white/30 text-[9px]">07.06.2025</div>
              <div className="mt-2 w-full h-px bg-gradient-to-r from-transparent via-kronos-quantum/30 to-transparent" />
              <div className="flex gap-3 mt-1">
                <div className="flex flex-col items-center">
                  <div className="font-mono text-kronos-quantum/60 text-[7px]">Hz</div>
                  <div className="font-mono text-white/40 text-[9px]">9.2G</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="font-mono text-kronos-gold/50 text-[7px]">SYNC</div>
                  <div className="font-mono text-white/40 text-[9px]">100%</div>
                </div>
              </div>
            </div>
          </div>

          {/* Crown */}
          <div
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-[60%] w-2.5 h-8"
            style={{
              background: "linear-gradient(90deg, #1A1A26, #C9A84C40)",
              borderRadius: "0 4px 4px 0",
              border: "1px solid rgba(201,168,76,0.3)",
            }}
          />

          {/* Lug highlights */}
          <div className="absolute -top-1 left-6 right-6 h-1 rounded-sm" style={{ background: "rgba(201,168,76,0.15)" }} />
          <div className="absolute -bottom-1 left-6 right-6 h-1 rounded-sm" style={{ background: "rgba(201,168,76,0.1)" }} />
        </div>

        {/* Watch band stubs */}
        <div
          className="absolute -top-7 left-1/2 -translate-x-1/2 w-16 h-8"
          style={{ background: "linear-gradient(0deg, #1A1A26, #101018)", borderRadius: "4px 4px 0 0", border: "1px solid rgba(201,168,76,0.1)" }}
        />
        <div
          className="absolute -bottom-7 left-1/2 -translate-x-1/2 w-16 h-8"
          style={{ background: "linear-gradient(180deg, #1A1A26, #101018)", borderRadius: "0 0 4px 4px", border: "1px solid rgba(201,168,76,0.1)" }}
        />
      </div>
    </div>
  );
}
