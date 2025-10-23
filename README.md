# 🎵 LUFS Music Analyzer — Landing Page

Professional landing page for LUFS Music Analyzer Telegram bot. Built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4.

## ✨ Features

### 🎨 **UI/UX**
- ✅ Modern dark theme with neon gradient accents
- ✅ Smooth animations with Framer Motion
- ✅ 3D audio visualization with Three.js
- ✅ Responsive design (mobile-first)
- ✅ Advanced micro-interactions (magnetic buttons, tilt cards, shimmer effects)
- ✅ Accessibility (WCAG 2.1 AA, keyboard navigation, screen reader support)
- ✅ `prefers-reduced-motion` support

### 📦 **Sections**
- ✅ **Hero** — Animated title, 3D visualization, CTA buttons
- ✅ **Stats** — Animated counters with comparison badges
- ✅ **Social Proof** — User count, tracks analyzed, ratings
- ✅ **Features** — Grid layout with hover previews
- ✅ **Live Demo** — Interactive fake analysis demo
- ✅ **Comparison** — Table comparing with competitors
- ✅ **Pricing** — 3 plans (Free, Monthly, Yearly) with psychology triggers
- ✅ **FAQ** — Accordion with 10 common questions

### 🎯 **Tech Stack**
- **Framework:** Next.js 16.0.0 (App Router, RSC)
- **React:** 19.2.0
- **TypeScript:** 5.x (strict mode)
- **Styling:** Tailwind CSS v4 (oxide engine)
- **Animations:** Framer Motion 12, GSAP 3.13
- **3D Graphics:** Three.js + React Three Fiber
- **UI Components:** Radix UI + shadcn/ui
- **State:** Zustand 5.0.8
- **Icons:** Lucide React
- **Testing:** Vitest (unit) + Playwright (E2E)

### 🧪 **Testing**
- ✅ Unit tests (24 tests) — Button, Hero, Stats, hooks, utilities
- ✅ E2E tests (16 tests) — Landing page, navigation, interactions
- ✅ TypeScript strict mode
- ✅ ESLint + Prettier configured

### 🚀 **Performance**
- ✅ SSG (Static Site Generation) for maximum performance
- ✅ Image optimization with next/image
- ✅ Font optimization (Inter, Space Grotesk)
- ✅ Code splitting and lazy loading
- ✅ SEO optimized (meta tags, JSON-LD, sitemap, robots.txt)

### 🎉 **Easter Eggs**
- ✅ Konami Code (↑↑↓↓←→←→BA) — Confetti explosion
- ✅ Logo click (10 times) — Secret stats reveal
- ✅ Glow cursor trail
- ✅ Magnetic buttons
- ✅ Ripple effects on clicks

---

## 🛠️ Installation

### Prerequisites
- Node.js 18+ (recommended: 20+)
- pnpm 8+ (or npm/yarn)

### Setup

```bash
# Clone repository
git clone <your-repo-url>
cd lufs_web

# Install dependencies
pnpm install

# Run development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 📜 Available Scripts

### Development
```bash
pnpm dev          # Start dev server (localhost:3000)
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
pnpm lint:fix     # Fix ESLint errors
pnpm format       # Format code with Prettier
pnpm type-check   # TypeScript type checking
```

### Testing
```bash
pnpm test              # Run unit tests (watch mode)
pnpm test:run          # Run unit tests (once)
pnpm test:coverage     # Unit tests with coverage
pnpm test:e2e          # Run E2E tests with Playwright
pnpm test:e2e:ui       # Playwright UI mode
pnpm test:e2e:headed   # E2E tests in headed browser
pnpm test:e2e:report   # Show Playwright report
```

---

## 📂 Project Structure

```
lufs_web/
├── app/
│   ├── layout.tsx           # Root layout with metadata, JSON-LD
│   ├── page.tsx             # Main landing page
│   ├── globals.css          # Global styles, Tailwind directives
│   ├── sitemap.ts           # Sitemap generation
│   └── robots.ts            # Robots.txt configuration
│
├── components/
│   ├── sections/            # Page sections
│   │   ├── Hero/
│   │   ├── Stats/
│   │   ├── Features/
│   │   ├── LiveDemo/
│   │   ├── Comparison/
│   │   ├── Pricing/
│   │   ├── FAQ/
│   │   └── SocialProof/
│   │
│   ├── effects/             # Advanced animations & Easter eggs
│   │   ├── MagneticButton.tsx
│   │   ├── TiltCard.tsx
│   │   ├── ShimmerText.tsx
│   │   ├── RippleButton.tsx
│   │   ├── ScrollReveal.tsx
│   │   ├── GlowCursor.tsx
│   │   ├── KonamiCode.tsx
│   │   └── LogoClickEasterEgg.tsx
│   │
│   ├── ui/                  # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── accordion.tsx
│   │   ├── tabs.tsx
│   │   └── ...
│   │
│   └── shared/              # Reusable components
│       ├── Logo.tsx
│       ├── Navigation.tsx
│       ├── ThemeToggle.tsx
│       ├── ShareButton.tsx
│       └── CopyButton.tsx
│
├── lib/
│   ├── hooks/               # Custom React hooks
│   │   ├── useMediaQuery.ts
│   │   ├── useScrollProgress.ts
│   │   ├── useIntersectionObserver.ts
│   │   ├── useKeyPress.ts
│   │   ├── useCopyToClipboard.ts
│   │   └── useReducedMotion.ts
│   │
│   ├── stores/              # Zustand stores
│   │   └── useUIStore.ts
│   │
│   ├── constants/           # Constants & config
│   │   └── cta.ts
│   │
│   └── utils.ts             # Utility functions (cn, etc.)
│
├── tests/
│   ├── setup.ts             # Test setup (mocks, globals)
│   ├── unit/                # Unit tests (Vitest)
│   │   ├── components/
│   │   ├── hooks/
│   │   └── utils/
│   └── e2e/                 # E2E tests (Playwright)
│       ├── landing.spec.ts
│       ├── navigation.spec.ts
│       └── interactions.spec.ts
│
├── public/                  # Static assets
├── vitest.config.ts         # Vitest configuration
├── playwright.config.ts     # Playwright configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── next.config.ts           # Next.js configuration
└── tsconfig.json            # TypeScript configuration
```

---

## 🚀 Deployment

### Option 1: Static Export (Recommended for your server)

```bash
# Build static site
pnpm build

# Output will be in `.next` folder
# Upload contents to your web server
```

### Option 2: Docker

```bash
# Build Docker image
docker build -t lufs-landing .

# Run container
docker run -p 3000:3000 lufs-landing
```

### Option 3: Vercel (if needed later)

```bash
# Install Vercel CLI
pnpm add -g vercel

# Deploy
vercel
```

---

## 🎨 Customization

### Colors
Edit `tailwind.config.ts`:
```ts
colors: {
  'neon-green': '#00ff88',
  'neon-purple': '#ff00ff',
  'neon-cyan': '#00d4ff',
  // ... customize
}
```

### Content
- **Hero text:** `components/sections/Hero/Hero.tsx`
- **Stats data:** `components/sections/Stats/Stats.tsx`
- **Pricing plans:** `components/sections/Pricing/Pricing.tsx`
- **FAQ questions:** `components/sections/FAQ/FAQ.tsx`

### CTA Links
Edit `lib/constants/cta.ts`:
```ts
export const TELEGRAM_BOT_URL = "https://t.me/lufs_loader_bot";
```

---

## 📊 Performance Metrics

**Lighthouse Scores (Target):**
- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

**Bundle Size:**
- First Load JS: ~250KB (gzipped)
- FCP: < 1.2s
- TTI: < 3s

---

## 🐛 Known Issues

1. **Canvas warnings in tests** — Three.js WebGL warnings в Vitest (ожидаемо, не критично)
2. **E2E некоторых секций** — 6/16 E2E тестов падают из-за Features/FAQ секций на странице

---

## 📝 TODO (Optional)

- [ ] Block 10: Analytics (PostHog) — для production
- [ ] Block 11: Security headers — для production server
- [ ] Block 12: PWA (manifest, service worker)
- [ ] Block 13: CI/CD (GitHub Actions)

---

## 🎯 Key Components Usage

### Magnetic Button
```tsx
import { MagneticButton } from '@/components/effects';

<MagneticButton strength={0.3}>
  <Button>Hover me</Button>
</MagneticButton>
```

### Tilt Card
```tsx
import { TiltCard } from '@/components/effects';

<TiltCard maxTilt={10}>
  <Card>...</Card>
</TiltCard>
```

### Scroll Reveal
```tsx
import { ScrollReveal } from '@/components/effects';

<ScrollReveal direction="up" delay={0.2}>
  <div>Content appears on scroll</div>
</ScrollReveal>
```

---

## 🤝 Contributing

Этот проект создан для локальной разработки. Если нужны изменения:

1. Создайте feature branch
2. Внесите изменения
3. Запустите `pnpm test:run` и `pnpm build`
4. Убедитесь что нет ошибок TypeScript и линтера

---

## 📄 License

MIT

---

## 🙏 Credits

- **Framework:** [Next.js](https://nextjs.org)
- **UI Library:** [shadcn/ui](https://ui.shadcn.com)
- **Icons:** [Lucide](https://lucide.dev)
- **3D Graphics:** [Three.js](https://threejs.org) + [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)

---

**Made with ❤️ for LUFS Music Analyzer**
