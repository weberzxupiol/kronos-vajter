# KRONOS — Quantum Timepieces

## Deploy na Cloudflare Pages

### Metoda 1: GitHub + Cloudflare Pages (zalecana)

1. Wrzuć projekt na GitHub (nowe repo)
2. Wejdź na https://pages.cloudflare.com
3. Kliknij **"Create a project"** → **"Connect to Git"**
4. Wybierz repo → ustaw:
   - **Framework preset:** `Vite`
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Node.js version:** `18`
5. Kliknij **"Save and Deploy"** — gotowe ✓

### Metoda 2: Wrangler CLI (deploy lokalny)

```bash
npm install
npm run build
npx wrangler pages deploy dist --project-name=kronos
```

### Wideo (Higgsfield)
Wstaw wygenerowane pliki do `public/videos/`:
- `hero-quantum.mp4` — tło sekcji Hero
- `product-showcase.mp4` — sekcja Product Showcase

## Dev lokalnie

```bash
npm install
npm run dev
```
