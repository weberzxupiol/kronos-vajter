import { Link } from "react-router-dom";

const footerLinks = {
  "Maison": ["Our Story", "Atelier", "Craftsmanship", "Press"],
  "Timepieces": ["Infinitum Reference 001", "Quantum Series", "Bespoke", "Archive"],
  "Services": ["Reserve", "Servicing", "Warranty", "Concierge"],
};

export default function Footer() {
  return (
    <footer className="border-t border-white/5 pt-20 pb-10 px-6 lg:px-12 max-w-7xl mx-auto">

      {/* Giant wordmark */}
      <div className="mb-16 overflow-hidden">
        <div
          className="font-display font-thin tracking-[0.15em] text-[clamp(4rem,14vw,14rem)] leading-none select-none"
          style={{
            background: "linear-gradient(135deg, rgba(201,168,76,0.08) 0%, rgba(201,168,76,0.15) 50%, rgba(201,168,76,0.05) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          KRONOS
        </div>
      </div>

      <div className="divider-gold mb-16" />

      {/* Link columns */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Brand column */}
        <div className="col-span-2 lg:col-span-1">
          <Link to="/" className="flex items-center gap-3 mb-6 group">
            <div className="relative w-8 h-8 flex items-center justify-center">
              <div className="absolute inset-0 border border-kronos-gold/30 rotate-45" />
              <div className="w-1.5 h-1.5 rounded-full bg-kronos-gold/60" />
            </div>
            <span className="font-display text-lg font-light tracking-[0.25em] text-white/60 uppercase">KRONOS</span>
          </Link>
          <p className="font-sans text-sm text-white/30 leading-relaxed max-w-xs">
            Quantum horology for those who understand that time is not a constraint — it is a dimension to be mastered.
          </p>
          <div className="flex items-center gap-4 mt-6">
            {["IG", "TW", "YT", "LI"].map((s) => (
              <a
                key={s}
                href="#"
                className="w-8 h-8 border border-white/10 flex items-center justify-center font-mono text-[10px] text-white/30 hover:border-kronos-gold/30 hover:text-kronos-gold/60 transition-all duration-300"
              >
                {s}
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(footerLinks).map(([category, links]) => (
          <div key={category}>
            <div className="section-label text-white/40 mb-5">{category}</div>
            <ul className="flex flex-col gap-3">
              {links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="font-sans text-sm text-white/30 hover:text-white/70 transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="divider-gold mb-8" />

      {/* Bottom bar */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
        <div className="font-mono text-[11px] text-white/20 tracking-wider">
          © 2025 KRONOS QUANTUM HOROLOGY S.A. — GENEVA, SWITZERLAND
        </div>
        <div className="flex items-center gap-6">
          {["Privacy Policy", "Terms", "Cookie Settings"].map((t) => (
            <a key={t} href="#" className="font-mono text-[10px] text-white/20 hover:text-white/40 transition-colors duration-300 tracking-wider">
              {t}
            </a>
          ))}
        </div>
      </div>

      {/* Quantum signature */}
      <div className="flex items-center gap-2 mt-8">
        <div className="quantum-dot" style={{ width: "4px", height: "4px" }} />
        <span className="font-mono text-[10px] text-kronos-quantum/30 tracking-widest">
          QUANTUM SYNCHRONIZED — UTC +0.000000000001s
        </span>
      </div>

    </footer>
  );
}
