/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        kronos: {
          black:   "#080808",
          void:    "#0A0A0F",
          surface: "#10101A",
          card:    "#14141F",
          gold:    "#C9A84C",
          "gold-light": "#E8C97A",
          "gold-dim":   "#7A6230",
          quantum: "#00D4FF",
          "quantum-dim":"#005F73",
          mist:    "rgba(201,168,76,0.08)",
        },
      },
      fontFamily: {
        display: ["'Cormorant Garamond'", "serif"],
        sans:    ["'Inter'", "sans-serif"],
        mono:    ["'JetBrains Mono'", "monospace"],
      },
      fontSize: {
        "10xl": ["10rem",  { lineHeight: "1",    letterSpacing: "-0.04em" }],
        "9xl":  ["8rem",   { lineHeight: "1",    letterSpacing: "-0.03em" }],
        "8xl":  ["6rem",   { lineHeight: "1.05", letterSpacing: "-0.03em" }],
      },
      backgroundImage: {
        "gold-gradient":    "linear-gradient(135deg, #C9A84C 0%, #E8C97A 50%, #C9A84C 100%)",
        "quantum-gradient": "linear-gradient(135deg, #00D4FF 0%, #0088AA 100%)",
        "hero-overlay":     "linear-gradient(to bottom, rgba(8,8,8,0.3) 0%, rgba(8,8,8,0.6) 60%, rgba(8,8,8,1) 100%)",
        "card-shine":       "linear-gradient(135deg, rgba(201,168,76,0.1) 0%, rgba(0,212,255,0.05) 100%)",
      },
      animation: {
        "fade-up":     "fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) forwards",
        "fade-in":     "fadeIn 1.2s ease forwards",
        "glow-pulse":  "glowPulse 3s ease-in-out infinite",
        "scan-line":   "scanLine 4s linear infinite",
        "float":       "float 6s ease-in-out infinite",
        "shimmer":     "shimmer 2.5s linear infinite",
        "border-flow": "borderFlow 4s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        glowPulse: {
          "0%,100%": { boxShadow: "0 0 20px rgba(0,212,255,0.3), 0 0 60px rgba(0,212,255,0.1)" },
          "50%":     { boxShadow: "0 0 40px rgba(0,212,255,0.6), 0 0 100px rgba(0,212,255,0.2)" },
        },
        scanLine: {
          "0%":   { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(400%)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%":     { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        borderFlow: {
          "0%":   { backgroundPosition: "0% 50%"   },
          "50%":  { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%"   },
        },
      },
      backdropBlur: { xs: "2px" },
      transitionTimingFunction: {
        luxury: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
