@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --gold: #C9A84C;
    --gold-light: #E8C97A;
    --quantum: #00D4FF;
  }

  * {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: #080808;
    color: #ffffff;
    font-family: 'Inter', sans-serif;
    overflow-x: hidden;
  }

  ::selection {
    background: rgba(201, 168, 76, 0.25);
    color: #E8C97A;
  }

  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-track {
    background: #080808;
  }
  ::-webkit-scrollbar-thumb {
    background: #C9A84C;
    border-radius: 2px;
  }
}

@layer components {
  .glass-card {
    background: rgba(20, 20, 31, 0.6);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(201, 168, 76, 0.12);
  }

  .glass-nav {
    background: rgba(8, 8, 8, 0.7);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    border-bottom: 1px solid rgba(201, 168, 76, 0.08);
  }

  .text-gold-gradient {
    background: linear-gradient(135deg, #C9A84C 0%, #E8C97A 40%, #C9A84C 70%, #7A6230 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .text-quantum-gradient {
    background: linear-gradient(135deg, #00D4FF 0%, #0088AA 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .btn-primary {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1rem 2.5rem;
    background: transparent;
    border: 1px solid rgba(201, 168, 76, 0.5);
    color: #C9A84C;
    font-family: 'Inter', sans-serif;
    font-size: 0.8rem;
    font-weight: 500;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    cursor: pointer;
    overflow: hidden;
    transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .btn-primary::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(201,168,76,0.15), rgba(0,212,255,0.05));
    opacity: 0;
    transition: opacity 0.5s ease;
  }

  .btn-primary::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 1px;
    width: 0;
    background: linear-gradient(90deg, #C9A84C, #00D4FF);
    transition: width 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .btn-primary:hover {
    border-color: rgba(201, 168, 76, 0.8);
    color: #E8C97A;
    box-shadow: 0 0 40px rgba(201, 168, 76, 0.15), 0 0 80px rgba(0, 212, 255, 0.05);
  }

  .btn-primary:hover::before {
    opacity: 1;
  }

  .btn-primary:hover::after {
    width: 100%;
  }

  .quantum-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #00D4FF;
    box-shadow: 0 0 10px #00D4FF, 0 0 20px rgba(0,212,255,0.5);
  }

  .section-label {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.65rem;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: rgba(201, 168, 76, 0.6);
  }

  .feature-card {
    position: relative;
    overflow: hidden;
    background: rgba(16, 16, 26, 0.8);
    border: 1px solid rgba(201, 168, 76, 0.08);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .feature-card::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(201,168,76,0.06) 0%, transparent 60%);
    opacity: 0;
    transition: opacity 0.6s ease;
  }

  .feature-card:hover {
    border-color: rgba(201, 168, 76, 0.25);
    transform: translateY(-4px);
    box-shadow:
      0 20px 60px rgba(0,0,0,0.5),
      0 0 40px rgba(201,168,76,0.06),
      inset 0 1px 0 rgba(201,168,76,0.1);
  }

  .feature-card:hover::before {
    opacity: 1;
  }

  .video-placeholder {
    background: linear-gradient(135deg, #0A0A14 0%, #0F0F1C 50%, #080812 100%);
    position: relative;
    overflow: hidden;
  }

  .video-placeholder::after {
    content: '';
    position: absolute;
    inset: 0;
    background:
      repeating-linear-gradient(
        0deg,
        transparent,
        transparent 2px,
        rgba(0,212,255,0.015) 2px,
        rgba(0,212,255,0.015) 4px
      );
    pointer-events: none;
  }

  .divider-gold {
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(201,168,76,0.4), rgba(0,212,255,0.2), transparent);
  }

  /* Animate on scroll utility */
  .anim-ready {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1);
  }

  .anim-ready.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .anim-delay-1 { transition-delay: 0.1s; }
  .anim-delay-2 { transition-delay: 0.2s; }
  .anim-delay-3 { transition-delay: 0.35s; }
  .anim-delay-4 { transition-delay: 0.5s; }
  .anim-delay-5 { transition-delay: 0.65s; }
}
