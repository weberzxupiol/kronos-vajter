import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const links = [
  { label: "Collection", href: "/collection" },
  { label: "Technology", href: "/technology" },
  { label: "Atelier",    href: "#atelier"    },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-luxury ${
          scrolled ? "glass-nav" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative w-8 h-8 flex items-center justify-center">
                <div className="absolute inset-0 border border-kronos-gold/40 rotate-45 group-hover:rotate-[90deg] transition-transform duration-700" />
                <div className="absolute inset-1.5 border border-kronos-quantum/30 rotate-45 group-hover:rotate-[0deg] transition-transform duration-700" />
                <div className="w-1.5 h-1.5 rounded-full bg-kronos-gold group-hover:bg-kronos-quantum transition-colors duration-500" />
              </div>
              <span className="font-display text-xl font-light tracking-[0.25em] text-white uppercase">
                KRONOS
              </span>
            </Link>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-10">
              {links.map((link) => (
                link.href.startsWith("/") ? (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="section-label text-white/50 hover:text-kronos-gold/80 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    className="section-label text-white/50 hover:text-kronos-gold/80 transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                )
              ))}
            </div>

            {/* CTA + Hamburger */}
            <div className="flex items-center gap-6">
              <Link
                to="/collection"
                className="hidden md:inline-flex btn-primary text-xs py-2.5 px-5"
              >
                Reserve
              </Link>

              <button
                className="md:hidden flex flex-col gap-1.5 p-2"
                onClick={() => setMenuOpen((v) => !v)}
                aria-label="Toggle menu"
              >
                <span className={`block w-6 h-px bg-kronos-gold transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
                <span className={`block w-4 h-px bg-kronos-gold transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
                <span className={`block w-6 h-px bg-kronos-gold transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-kronos-black/95 backdrop-blur-2xl" onClick={() => setMenuOpen(false)} />
        <div className="relative z-10 flex flex-col items-center justify-center h-full gap-10">
          {links.map((link, i) => (
            link.href.startsWith("/") ? (
              <Link
                key={link.label}
                to={link.href}
                className="font-display text-4xl font-light text-gold-gradient hover:opacity-80 transition-opacity"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-display text-4xl font-light text-gold-gradient hover:opacity-80 transition-opacity"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {link.label}
              </a>
            )
          ))}
          <Link to="/collection" className="btn-primary mt-4">
            Reserve Your Timepiece
          </Link>
        </div>
      </div>
    </>
  );
}
