# Udyam Tatva — Build Different

A hyper-brutalist, Gen-Z startup landing page built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

---

## 🚀 Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| Next.js | 14.2 | App Router, SSR, Image optimization |
| TypeScript | 5.x | Type safety |
| Tailwind CSS | 3.x | Utility-first styling |
| Framer Motion | 11.x | Animations (optional enhancement) |
| Node.js | 18+ | Runtime |

---

## 📁 Project Structure

```
udyam-tatva/
├── public/
│   ├── images/          # Static images (if any local assets)
│   └── videos/          # Static videos (if any local assets)
│
├── src/
│   ├── app/
│   │   ├── globals.css  # Global styles, Tailwind directives, animations
│   │   ├── layout.tsx   # Root layout with metadata
│   │   └── page.tsx     # Home page — composes all sections
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx       # Fixed top nav with mobile menu
│   │   │   └── Footer.tsx       # Footer with links
│   │   │
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx         # Full-screen hero with video bg
│   │   │   ├── TickerSection.tsx       # Scrolling marquee ticker
│   │   │   ├── BlueprintSection.tsx    # 2-col: text + image collage
│   │   │   ├── CoreFourSection.tsx     # 4 feature cards grid
│   │   │   ├── GalleryStrip.tsx        # Auto-scroll image gallery
│   │   │   ├── VideoFeatureSection.tsx # Video + How it Works steps
│   │   │   ├── TestimonialsSection.tsx # Auto-scroll testimonials
│   │   │   └── CtaSection.tsx          # Final call to action
│   │   │
│   │   └── ui/
│   │       ├── Button.tsx    # Reusable Button (4 variants)
│   │       ├── Badge.tsx     # Tag/label badges (4 variants)
│   │       └── StatBlock.tsx # Stat display with colored border
│   │
│   ├── hooks/
│   │   └── useScrollReveal.ts  # IntersectionObserver for scroll animations
│   │
│   ├── lib/
│   │   ├── data.ts   # All site content (nav links, features, testimonials)
│   │   └── utils.ts  # cn() utility for class merging
│   │
│   └── types/
│       └── index.ts  # TypeScript interfaces for all data shapes
│
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
├── postcss.config.mjs
└── package.json
```

---

## ⚙️ Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production

```bash
npm run build
npm start
```

---

## 🎨 Design System

Based on **"Hyper-Link Brutalism"** — see `DESIGN.md` for full guidelines.

### Colors
- **Primary:** `#0040e0` (Electric Blue)
- **Secondary Container:** `#fe9d00` (Neon Saffron)
- **On Primary Fixed:** `#001356` (Deep Navy)
- **Surface:** `#f8f9fa`

### Typography
- **Headlines:** Space Grotesk (Bold, Tight tracking)
- **Body:** Be Vietnam Pro

### Key Rules
- 0px border radius everywhere (sharp corners = the brand)
- No grey divider lines — use color blocks or whitespace
- Hard offset shadows instead of soft drop shadows
- Snap animations (≤100ms) — no slow fades

---

## 📦 Adding New Content

All site content lives in `src/lib/data.ts`. To update:

- **Nav links** → edit `NAV_LINKS`
- **Hero stats** → edit `HERO_STATS`
- **Feature cards** → edit `CORE_FEATURES`
- **Testimonials** → edit `TESTIMONIALS`
- **Gallery images** → edit `GALLERY_IMAGES`

All types are defined in `src/types/index.ts`.

---

## 🌐 Deployment

### Deploy to Vercel (recommended)

```bash
npx vercel
```

Or connect your GitHub repo to [vercel.com](https://vercel.com) for automatic deployments.

### Deploy to any Node.js server

```bash
npm run build
npm start          # Runs on port 3000
```

---

## 📝 Environment Variables

No environment variables required for the base setup.

For future API integrations, create `.env.local`:

```env
NEXT_PUBLIC_API_URL=https://your-api.com
```

---

Built with ❤️ for the Bold.
