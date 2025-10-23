# 🗺️ LUFS Music Analyzer — УЛУЧШЕННЫЙ ROADMAP v2.0

## 📋 **Что изменено в v2.0**

### ✨ **Ключевые улучшения:**

- 🔍 Добавлен Block 0 для валидации уже созданного кода
- 🧪 Добавлено полноценное тестирование (Unit, E2E)
- 📊 Расширена аналитика и мониторинг
- ♿ Усилен фокус на Accessibility (WCAG 2.1 AA)
- 🎯 Добавлены конверсионные элементы (Social Proof, FAQ, Comparison)
- 🚀 Улучшена архитектура (state management, error boundaries)
- 📱 Добавлена поддержка PWA
- 🔒 Добавлена безопасность и privacy
- 🎨 Расширены UI/UX микроинтеракции

---

## 🎯 **Tech Stack (Обновлено)**

### **Frontend Framework**

- **Next.js 15** (App Router) — RSC, PPR, Server Actions
- **React 19** — с Suspense Streaming
- **TypeScript 5.3+** — strict mode

### **Styling & Animations**

- **Tailwind CSS v4** — oxide engine, container queries
- **Framer Motion 11** — layout animations, scroll-linked
- **CSS Houdini** — custom properties, paint API
- **GSAP 3.12** — ScrollTrigger, ScrollSmoother

### **UI & Components**

- **Radix UI** — headless, accessible primitives
- **shadcn/ui** — reusable component collection
- **Lucide React** — иконки (tree-shakeable)
- **Vaul** — drawer component (mobile)
- **Sonner** — toast notifications

### **State & Data**

- **Zustand** — легковесный state management
- **TanStack Query (React Query)** — server state caching
- **Zod** — runtime validation

### **Testing & Quality**

- **Vitest** — unit testing (быстрее Jest)
- **Playwright** — E2E testing
- **Testing Library** — component testing
- **Lighthouse CI** — automated performance audits

### **Analytics & Monitoring**

- **Vercel Analytics** — Web Vitals
- **PostHog** — product analytics + session replay
- **Sentry** — error tracking
- **Vercel Speed Insights** — real user monitoring

### **Additional**

- **next-themes** — темная/светлая тема
- **react-hot-toast** — уведомления
- **clsx** + **tailwind-merge** — условные классы
- **react-intersection-observer** — lazy loading
- **embla-carousel-react** — карусели
- **qrcode.react** — QR коды

---

## 🏗️ **Улучшенная Project Structure**

```
lufs_web/
├── app/
│   ├── (marketing)/            # Route group для marketing pages
│   │   ├── page.tsx            # Landing page
│   │   ├── layout.tsx          # Marketing layout
│   │   ├── faq/                # FAQ страница
│   │   └── privacy/            # Privacy policy
│   ├── api/
│   │   ├── analytics/          # Analytics endpoints
│   │   └── health/             # Health check
│   ├── layout.tsx              # Root layout
│   ├── globals.css
│   ├── error.tsx               # Error boundary
│   ├── not-found.tsx           # 404 page
│   └── loading.tsx             # Loading UI
│
├── components/
│   ├── sections/
│   │   ├── Hero/
│   │   │   ├── Hero.tsx
│   │   │   ├── HeroBackground.tsx
│   │   │   ├── HeroStats.tsx
│   │   │   └── index.ts
│   │   ├── Stats/
│   │   ├── Features/
│   │   ├── TechStack/
│   │   ├── Platforms/
│   │   ├── Pricing/
│   │   ├── FAQ/              # ✨ Новая секция
│   │   ├── SocialProof/      # ✨ Новая секция
│   │   ├── Comparison/       # ✨ Новая секция
│   │   ├── CTA/
│   │   └── Footer/
│   │
│   ├── ui/                   # shadcn/ui компоненты
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── dialog.tsx
│   │   ├── accordion.tsx     # ✨ Для FAQ
│   │   ├── tabs.tsx
│   │   ├── toast.tsx
│   │   └── ...
│   │
│   ├── effects/
│   │   ├── AudioVisualizer.tsx
│   │   ├── ParticleField.tsx
│   │   ├── GlowCursor.tsx
│   │   ├── ScrollProgress.tsx
│   │   └── BackgroundGrid.tsx
│   │
│   ├── shared/              # ✨ Переиспользуемые компоненты
│   │   ├── Logo.tsx
│   │   ├── Navigation.tsx
│   │   ├── ThemeToggle.tsx
│   │   ├── ShareButton.tsx
│   │   └── CopyButton.tsx
│   │
│   └── providers/           # ✨ Context providers
│       ├── ThemeProvider.tsx
│       ├── AnalyticsProvider.tsx
│       └── ToastProvider.tsx
│
├── lib/
│   ├── constants/           # ✨ Организованные константы
│   │   ├── colors.ts
│   │   ├── urls.ts
│   │   ├── content.ts
│   │   └── config.ts
│   ├── hooks/              # ✨ Custom hooks
│   │   ├── useScrollProgress.ts
│   │   ├── useMediaQuery.ts
│   │   ├── useIntersectionObserver.ts
│   │   └── useAnalytics.ts
│   ├── utils/
│   │   ├── cn.ts           # clsx + tailwind-merge
│   │   ├── analytics.ts
│   │   └── validators.ts
│   ├── stores/             # ✨ Zustand stores
│   │   └── useUIStore.ts
│   └── types/              # ✨ TypeScript types
│       ├── api.ts
│       └── components.ts
│
├── tests/                  # ✨ Тесты
│   ├── unit/
│   │   └── components/
│   ├── e2e/
│   │   ├── landing.spec.ts
│   │   └── navigation.spec.ts
│   └── setup.ts
│
├── public/
│   ├── images/
│   │   ├── og-image.png
│   │   ├── logo.svg
│   │   └── platforms/
│   ├── icons/
│   │   └── favicon.svg
│   ├── animations/
│   │   └── lottie/
│   └── manifest.json        # ✨ PWA manifest
│
├── .github/
│   └── workflows/
│       ├── ci.yml           # ✨ CI/CD pipeline
│       └── lighthouse.yml   # ✨ Performance checks
│
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── next.config.js
├── vitest.config.ts         # ✨ Test config
├── playwright.config.ts     # ✨ E2E config
├── .env.local.example
└── README.md
```

---

## 📦 **BLOCK-BY-BLOCK IMPLEMENTATION**

---

## **🔍 Block 0 — Validation & Code Review (НОВЫЙ)**

> **Цель:** Проверить корректность уже созданного кода из Block 1

### **Step 0.1 — Audit existing setup**

**Контекст:** Проверяем, что проект создан правильно и готов к дальнейшей разработке.

**Задание:**

- Запустить проект (`pnpm dev`), проверить что открывается на localhost:3000
- Проверить `package.json` на правильные версии:
  - Next.js 14+ (лучше 15)
  - React 18+ (лучше 19 RC)
  - TypeScript 5.0+
  - Tailwind CSS 3.4+
- Проверить `tailwind.config.ts`:
  - Кастомные цвета присутствуют (`neon-green`, `neon-purple`, `dark`)
  - Dark mode настроен (`darkMode: 'class'`)
  - Content paths корректны
- Проверить `globals.css`:
  - Tailwind directives присутствуют
  - Базовые стили для dark mode
  - CSS variables для цветов

**DoD:**

- ✅ Проект запускается без ошибок
- ✅ TypeScript проверка проходит (`pnpm tsc --noEmit`)
- ✅ Tailwind CSS компилируется корректно
- ✅ Кастомные цвета доступны (проверить в dev tools)

**Что делать если что-то не так:**

```bash
# Если версии устарели
pnpm update next react react-dom typescript tailwindcss

# Если Tailwind не работает
pnpm tailwindcss init -p --ts

# Если есть ошибки TypeScript
pnpm tsc --noEmit --diagnostics
```

---

### **Step 0.2 — Fix & enhance initial setup**

**Контекст:** Исправляем проблемы из Step 0.1 и добавляем упущенное.

**Задание:**

- Если цветовая палитра неполная, добавить все необходимые цвета:
  ```ts
  // tailwind.config.ts
  colors: {
    dark: {
      DEFAULT: '#0a0a0f',
      lighter: '#1a1a2e',
      card: '#16161f'
    },
    neon: {
      green: '#00ff88',
      purple: '#ff00ff',
      cyan: '#00d4ff',
      pink: '#ff0080'
    },
    // ... gradient stops
  }
  ```
- Добавить typography plugin для лучшего текста
- Добавить animation utilities
- Создать базовые CSS custom properties в `globals.css`:
  ```css
  :root {
    --glow-green: 0 0 20px #00ff88;
    --glow-purple: 0 0 20px #ff00ff;
    --transition-smooth: cubic-bezier(0.4, 0, 0.2, 1);
  }
  ```

**DoD:**

- ✅ Все цвета из дизайн-системы добавлены
- ✅ CSS variables созданы и работают
- ✅ Typography plugin установлен
- ✅ Нет warnings в консоли

---

### **Step 0.3 — Setup ESLint & Prettier**

**Контекст:** Настраиваем линтинг и форматирование для чистого кода.

**Задание:**

- Установить ESLint plugins:
  ```bash
  pnpm add -D @typescript-eslint/parser @typescript-eslint/eslint-plugin
  pnpm add -D eslint-plugin-react-hooks eslint-plugin-jsx-a11y
  ```
- Установить Prettier + Tailwind plugin:
  ```bash
  pnpm add -D prettier prettier-plugin-tailwindcss
  ```
- Создать `.eslintrc.json` с правилами
- Создать `.prettierrc` с настройками
- Добавить scripts в `package.json`:
  ```json
  {
    "lint": "eslint . --ext .ts,.tsx",
    "lint:fix": "eslint . --ext .ts,.tsx --fix",
    "format": "prettier --write ."
  }
  ```

**DoD:**

- ✅ `pnpm lint` проходит без ошибок
- ✅ `pnpm format` форматирует файлы
- ✅ VSCode автоматически форматирует при сохранении

---

## **📐 Block 1 — Enhanced Base Components**

> **Примечание:** Block 1 из оригинального roadmap уже выполнен. Этот блок добавляет компоненты, которых не хватало.

### **Step 1.1 — Install shadcn/ui**

**Контекст:** Добавляем shadcn/ui для готовых accessible компонентов.

**Задание:**

- Инициализировать shadcn/ui:
  ```bash
  pnpm dlx shadcn-ui@latest init
  ```
- Добавить базовые компоненты:
  ```bash
  pnpm dlx shadcn-ui@latest add button card dialog accordion tabs toast
  ```
- Кастомизировать theme в `components/ui` под неоновую палитру

**DoD:**

- ✅ shadcn/ui настроен
- ✅ Компоненты добавлены в `components/ui`
- ✅ Темизация соответствует дизайн-системе

---

### **Step 1.2 — Create utility hooks**

**Контекст:** Создаём переиспользуемые хуки для общей логики.

**Задание:**

- `useMediaQuery.ts` — responsive breakpoints
  ```ts
  export function useMediaQuery(query: string) {
    const [matches, setMatches] = useState(false);
    // ... media query logic
  }
  ```
- `useScrollProgress.ts` — прогресс скролла страницы
- `useIntersectionObserver.ts` — видимость элемента
- `useKeyPress.ts` — keyboard shortcuts
- `useCopyToClipboard.ts` — копирование в буфер

**DoD:**

- ✅ Все хуки типизированы
- ✅ Хуки переиспользуемые и универсальные
- ✅ Есть JSDoc комментарии

---

### **Step 1.3 — Create shared components**

**Контекст:** Создаём компоненты, которые будут использоваться везде.

**Задание:**

- `Logo.tsx` — анимированный логотип LUFS
  - SVG с gradient fill
  - Hover animation (rotate/scale)
  - Разные размеры (sm, md, lg)
- `Navigation.tsx` — навигация (если будет multi-page)
  - Sticky header
  - Smooth scroll к секциям
  - Mobile hamburger menu (использовать Vaul)
- `ThemeToggle.tsx` — переключатель темы
  - Кнопка sun/moon
  - Smooth transition
  - Сохранение в localStorage
- `ShareButton.tsx` — кнопка "Share"
  - Native Web Share API
  - Fallback: копирование ссылки
- `CopyButton.tsx` — универсальная кнопка копирования
  - Анимация checkmark после копирования
  - Toast notification

**DoD:**

- ✅ Все компоненты типизированы с Props interface
- ✅ Компоненты работают на mobile и desktop
- ✅ Анимации плавные (60fps)

---

### **Step 1.4 — Setup Zustand store**

**Контекст:** Добавляем легковесный state management для UI состояния.

**Задание:**

- Создать `lib/stores/useUIStore.ts`:
  ```ts
  interface UIState {
    isPricingModalOpen: boolean;
    isMenuOpen: boolean;
    activeSection: string | null;
    // ...
    openPricingModal: () => void;
    closePricingModal: () => void;
    // ...
  }
  ```
- Использовать для модалок, меню, активных секций

**DoD:**

- ✅ Store создан и типизирован
- ✅ Можно использовать из любого компонента
- ✅ DevTools интеграция работает (Redux DevTools)

---

## **🎨 Block 2 — Enhanced Hero Section**

### **Step 2.1 — Hero with advanced animations**

**Контекст:** Улучшаем Hero секцию с более впечатляющими анимациями.

**Задание:**

- Заголовок с эффектом **text reveal** (буквы появляются поочередно)
- Gradient text с **animated gradient shift**
- Субтитр с **typewriter effect** (опционально, не перегружать)
- Floating particles на фоне (Canvas API или CSS)
- **Scroll indicator** внизу секции (animated arrow)

**Код паттерн (text reveal с Framer Motion):**

```tsx
const title = "LUFS Music Analyzer";
<motion.h1>
  {title.split("").map((char, i) => (
    <motion.span
      key={i}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.05 }}
    >
      {char}
    </motion.span>
  ))}
</motion.h1>;
```

**DoD:**

- ✅ Text reveal animation работает
- ✅ Gradient анимируется (keyframes)
- ✅ Scroll indicator плавно pulse-анимируется
- ✅ FPS стабилен (60fps) на всех устройствах

---

### **Step 2.2 — Hero 3D audio visualization**

**Контекст:** Добавляем впечатляющую 3D визуализацию с Three.js.

**Задание:**

- Установить Three.js:
  ```bash
  pnpm add three @react-three/fiber @react-three/drei
  ```
- Создать `HeroVisualization.tsx`:
  - Анимированные 3D bars или waveform
  - Reactive to scroll (ускоряется при скролле)
  - Neon glow эффект (bloom post-processing)
- Использовать `@react-three/drei` для:
  - `<Stars />` — звёздное небо на фоне
  - `<Environment />` — HDR окружение
- **Fallback:** Если WebGL не поддерживается, показывать 2D Canvas версию

**DoD:**

- ✅ 3D визуализация работает плавно (60fps)
- ✅ Mobile fallback на 2D версию
- ✅ Не блокирует First Contentful Paint (<1.5s)

---

### **Step 2.3 — Hero CTA with conversion optimization**

**Контекст:** Оптимизируем CTA кнопку для максимальной конверсии.

**Задание:**

- Кнопка "Open in Telegram" с:
  - **Микрокопией:** "Start analyzing in 30 seconds" под кнопкой
  - **Social proof:** "Join 10,000+ users" badge
  - **Urgency indicator:** "Free tier ending soon" (если актуально)
- Добавить **alternative CTA:** "Watch Demo" (открывает видео)
- **A/B testing готовность:** параметризовать текст кнопки через константы

**Паттерн (конверсионная кнопка):**

```tsx
<div className="flex flex-col items-center gap-4">
  <Button size="lg" className="neon-button">
    <TelegramIcon />
    Open in Telegram
  </Button>
  <p className="text-sm text-gray-400">⚡ Start analyzing in 30 seconds</p>
  <Badge variant="outline">🔥 10,000+ users</Badge>
</div>
```

**DoD:**

- ✅ CTA кнопка максимально заметная (размер, цвет, анимация)
- ✅ Микрокопия усиливает действие
- ✅ Social proof badge добавлен
- ✅ Hover эффекты работают

---

## **📊 Block 3 — Enhanced Stats with Social Proof**

### **Step 3.1 — Stats cards with live counters**

**Контекст:** Делаем Stats секцию более убедительной с живыми счётчиками.

**Задание:**

- Использовать **react-countup** для анимации чисел:
  ```bash
  pnpm add react-countup
  ```
- Цифры начинают считаться при появлении в viewport (Intersection Observer)
- Добавить **comparison badges:** "15% better than competitors"
- Каждая карточка с **tooltip:** при hover показывать детали моделей

**DoD:**

- ✅ Счётчики анимируются при скролле
- ✅ Comparison badges добавлены
- ✅ Tooltips работают (можно использовать Radix Tooltip)

---

### **Step 3.2 — Add trust indicators**

**Контекст:** Добавляем элементы доверия (social proof).

**Задание:**

- Создать `SocialProof.tsx` секцию с:
  - **User count:** "10,000+ active users"
  - **Analysis count:** "1M+ tracks analyzed"
  - **Rating:** "4.9/5 stars from 2,000+ reviews"
  - **Trust badges:** "Trusted by top artists" с логотипами (если есть)
- Animated counters для всех цифр
- Использовать Marquee для бесконечной прокрутки логотипов клиентов

**Паттерн (marquee):**

```tsx
import Marquee from "react-fast-marquee";

<Marquee gradient={false} speed={40}>
  {logos.map((logo) => (
    <img key={logo} src={logo} />
  ))}
</Marquee>;
```

**DoD:**

- ✅ Social proof элементы добавлены
- ✅ Анимации плавные
- ✅ Логотипы клиентов (если есть) отображаются

---

## **⚡ Block 4 — Features with Interactive Demo**

### **Step 4.1 — Features grid with hover preview**

**Контекст:** Улучшаем Features секцию с интерактивными превью.

**Задание:**

- Grid 3x2 (или 2x3 на mobile) с features:
  1. Multi-platform support (1000+ platforms)
  2. Lightning fast (10-15s analysis)
  3. AI-powered accuracy (90-97%)
  4. Best pricing ($3.99/$24.99)
  5. BPM/Key/Hz detection
  6. No registration needed
- При hover на feature:
  - Показывать **screenshot/mockup** использования
  - Или **mini video/GIF** демонстрацию
- Использовать `<Tabs>` (shadcn) для переключения между features на mobile

**DoD:**

- ✅ Grid layout responsive
- ✅ Hover previews работают
- ✅ Mobile tabs переключаются плавно

---

### **Step 4.2 — Interactive live demo**

**Контекст:** Создаём более реалистичную демонстрацию.

**Задание:**

- `LiveDemo.tsx` с **fake progress bar:**
  - Показывать поддельный процесс анализа (0% → 100% за 15 сек)
  - Этапы: "Uploading... → Analyzing BPM... → Detecting Key... → Done!"
- После "завершения" показывать fake результаты:
  ```
  BPM: 128.5
  Key: A minor
  Hz: +5.3 cents
  ```
- Кнопка "Analyze Another Track" перезапускает demo
- **Bonus:** Drag & drop zone (fake, только UI)

**DoD:**

- ✅ Progress bar анимируется реалистично
- ✅ Результаты отображаются с fade-in
- ✅ Demo можно перезапустить

---

## **🔥 Block 5 — Comparison Table (Competitor Analysis)**

> **НОВЫЙ БЛОК** — показываем преимущества над конкурентами

### **Step 5.1 — Create comparison table**

**Контекст:** Создаём таблицу сравнения с конкурентами.

**Задание:**

- Создать `Comparison.tsx` секцию с таблицей:
  | Feature | LUFS Analyzer | Competitor A | Competitor B |
  |---------|---------------|--------------|--------------|
  | BPM Accuracy | ✅ 94% | ⚠️ 85% | ⚠️ 88% |
  | Speed | ✅ 10-15s | ❌ 30-60s | ❌ 45s |
  | Platforms | ✅ 1000+ | ⚠️ 50 | ⚠️ 100 |
  | Price | ✅ $3.99 | ❌ $9.99 | ❌ $7.99 |
  | No Signup | ✅ | ❌ | ⚠️ Limited |
- Использовать checkmarks (✅), warnings (⚠️), crosses (❌)
- Highlight свою колонку с border/glow
- Mobile: horizontal scroll или Tabs

**DoD:**

- ✅ Таблица responsive
- ✅ Визуально понятно, что мы лучше
- ✅ Checkmarks/crosses анимируются

---

## **❓ Block 6 — FAQ Section**

> **НОВЫЙ БЛОК** — отвечаем на частые вопросы

### **Step 6.1 — Create FAQ accordion**

**Контекст:** Создаём FAQ секцию для снижения трения.

**Задание:**

- Использовать `<Accordion>` (shadcn/ui)
- Популярные вопросы:
  1. "How accurate is the BPM detection?" → 90-94%, 5 models
  2. "What platforms are supported?" → 1000+, including YouTube, SoundCloud, TikTok
  3. "How long does analysis take?" → 10-15 seconds average
  4. "Do I need to create an account?" → No, use directly via Telegram
  5. "What's included in the free tier?" → 3 analyses per week
  6. "Can I cancel subscription anytime?" → Yes, instant cancellation
  7. "Is my music data safe?" → No storage, analyzed and deleted
  8. "What file formats are supported?" → All major formats (mp3, wav, flac, etc.)
- Добавить CTA внизу FAQ: "Have more questions? Ask in Telegram"

**DoD:**

- ✅ Accordion работает плавно
- ✅ Минимум 8 вопросов
- ✅ CTA кнопка внизу

---

## **💎 Block 7 — Pricing with Psychology**

### **Step 7.1 — Pricing cards with optimization**

**Контекст:** Улучшаем Pricing секцию с психологическими триггерами.

**Задание:**

- 3 карточки:
  1. **Free** — 3 analyses/week, "Perfect to try"
  2. **Monthly** — $3.99, unlimited, "Most Flexible"
  3. **Yearly** — $24.99, unlimited, **"BEST VALUE" badge**, "-48% saving"
- **Психологические элементы:**
  - Yearly план визуально выделен (border glow, scale)
  - Показать "save $23.89/year" на Yearly
  - Добавить "Most Popular" badge на Monthly
  - Кнопка "Start Free" на Free, "Upgrade" на платных
- **Money-back guarantee badge:** "30-day refund guarantee"

**DoD:**

- ✅ Yearly план визуально доминирует
- ✅ Saving highlighted
- ✅ Money-back badge добавлен

---

## **🚀 Block 8 — Performance & SEO Optimization**

### **Step 8.1 — Implement advanced SEO**

**Контекст:** Делаем сайт максимально SEO-friendly.

**Задание:**

- **Structured Data (JSON-LD):**
  ```json
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "LUFS Music Analyzer",
    "applicationCategory": "MusicApplication",
    "offers": {
      "@type": "Offer",
      "price": "3.99",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "2000"
    }
  }
  ```
- **Open Graph tags:** полные meta tags для социалок
- **Twitter Card:** large image summary
- **Canonical URL:** если будет multi-language
- **Sitemap.xml & robots.txt**

**DoD:**

- ✅ Rich Snippets валидируются (Google Rich Results Test)
- ✅ OG preview выглядит отлично (опиум в Facebook Debugger)
- ✅ Sitemap генерируется автоматически

---

### **Step 8.2 — Performance optimization**

**Контекст:** Оптимизируем производительность до максимума.

**Задание:**

- **Image Optimization:**
  - Использовать `next/image` везде
  - WebP формат с fallback
  - Lazy loading для images ниже fold
  - Priority для Hero image
- **Code Splitting:**
  - Dynamic imports для тяжёлых компонентов (Three.js, charts)
  - Route-based splitting (Next.js автоматом)
- **Font Optimization:**
  - Preload критичных шрифтов
  - Font-display: swap
  - Subset fonts (только нужные символы)
- **Bundle Optimization:**
  - Анализ bundle size (webpack-bundle-analyzer)
  - Tree shaking проверка
  - Remove unused dependencies

**Команды для проверки:**

```bash
pnpm build
pnpm analyze  # добавить в scripts с bundle analyzer
```

**DoD:**

- ✅ Total Bundle Size < 250KB (gzipped)
- ✅ First Contentful Paint < 1.2s
- ✅ Time to Interactive < 3s
- ✅ Lighthouse Performance > 95

---

### **Step 8.3 — Accessibility (WCAG 2.1 AA)**

**Контекст:** Делаем сайт доступным для всех пользователей.

**Задание:**

- **Keyboard Navigation:**
  - Все интерактивные элементы доступны с клавиатуры
  - Focus states видимые (outline/ring)
  - Skip to content link
- **ARIA labels:**
  - `aria-label` для иконок-кнопок
  - `aria-expanded` для accordion
  - `role` attributes где нужно
- **Color Contrast:**
  - Проверить contrast ratio (минимум 4.5:1 для текста)
  - Неоновые цвета могут быть проблемой — добавить fallback
- **Screen Reader Testing:**
  - Тестировать с NVDA/JAWS
  - Логичный порядок чтения
- **Motion Preferences:**
  - Respect `prefers-reduced-motion`
  - Отключать анимации для пользователей с motion sickness

**Проверка:**

```bash
pnpm dlx axe-cli http://localhost:3000
```

**DoD:**

- ✅ Axe DevTools 0 violations
- ✅ Keyboard navigation работает полностью
- ✅ Color contrast > 4.5:1
- ✅ Animations respecting reduced-motion

---

## **🧪 Block 9 — Testing**

> **НОВЫЙ БЛОК** — добавляем тестирование

### **Step 9.1 — Setup Vitest & Testing Library**

**Контекст:** Настраиваем unit testing.

**Задание:**

- Установить Vitest:
  ```bash
  pnpm add -D vitest @testing-library/react @testing-library/jest-dom jsdom
  ```
- Создать `vitest.config.ts`:
  ```ts
  export default defineConfig({
    test: {
      environment: "jsdom",
      setupFiles: ["./tests/setup.ts"],
    },
  });
  ```
- Написать тесты для UI компонентов:
  - `Button.test.tsx` — проверка hover, click events
  - `Hero.test.tsx` — рендеринг, CTA присутствует
  - `Stats.test.tsx` — правильные данные отображаются

**DoD:**

- ✅ `pnpm test` запускается
- ✅ Минимум 70% code coverage

---

### **Step 9.2 — Setup Playwright E2E**

**Контекст:** Настраиваем end-to-end тестирование.

**Задание:**

- Установить Playwright:
  ```bash
  pnpm create playwright
  ```
- Написать E2E тесты:
  - `landing.spec.ts` — проверка Hero, Stats, CTA
  - `navigation.spec.ts` — скролл к секциям работает
  - `interactions.spec.ts` — кнопки кликаются, модалки открываются
- Добавить visual regression tests (опционально)

**DoD:**

- ✅ E2E тесты проходят
- ✅ Тесты запускаются в CI

---

## **📈 Block 10 — Analytics & Monitoring**

### **Step 10.1 — Setup PostHog**

**Контекст:** Добавляем product analytics.

**Задание:**

- Установить PostHog:
  ```bash
  pnpm add posthog-js
  ```
- Создать `lib/analytics.ts`:

  ```ts
  import posthog from "posthog-js";

  export const analytics = {
    track: (event: string, properties?: any) => {
      posthog.capture(event, properties);
    },
    identify: (userId: string) => {
      posthog.identify(userId);
    },
  };
  ```

- Отслеживать ключевые события:
  - `hero_cta_clicked` — клик на главную CTA
  - `pricing_viewed` — просмотр pricing секции
  - `telegram_link_clicked` — клик на Telegram ссылку
  - `demo_started` — запуск live demo
  - `faq_opened` — открытие FAQ вопроса

**DoD:**

- ✅ События отправляются в PostHog
- ✅ Session replay настроен
- ✅ Можно смотреть воронку конверсии

---

### **Step 10.2 — Setup Sentry**

**Контекст:** Добавляем error tracking.

**Задание:**

- Установить Sentry:
  ```bash
  pnpm add @sentry/nextjs
  ```
- Настроить `sentry.client.config.ts` и `sentry.server.config.ts`
- Добавить Error Boundaries:
  - Root level error boundary в `app/error.tsx`
  - Section level boundaries для критичных блоков
- Настроить Source Maps для production

**DoD:**

- ✅ Ошибки попадают в Sentry
- ✅ Source maps загружаются
- ✅ Error boundaries рендерят fallback UI

---

## **🔒 Block 11 — Security & Privacy**

### **Step 11.1 — Security headers**

**Контекст:** Добавляем security headers в Next.js.

**Задание:**

- Настроить `next.config.js`:
  ```js
  headers: async () => [
    {
      source: "/(.*)",
      headers: [
        {
          key: "X-Frame-Options",
          value: "DENY",
        },
        {
          key: "X-Content-Type-Options",
          value: "nosniff",
        },
        {
          key: "Referrer-Policy",
          value: "strict-origin-when-cross-origin",
        },
        // CSP, HSTS, etc.
      ],
    },
  ];
  ```
- Настроить Content Security Policy (CSP)

**DoD:**

- ✅ Security headers проверены (securityheaders.com)
- ✅ CSP не блокирует легитимные ресурсы

---

### **Step 11.2 — Privacy policy & GDPR**

**Контекст:** Добавляем Privacy Policy страницу.

**Задание:**

- Создать `app/privacy/page.tsx` с Privacy Policy
- Добавить Cookie Consent banner (если используются cookies):
  ```bash
  pnpm add react-cookie-consent
  ```
- Упомянуть:
  - Какие данные собираются (analytics)
  - Что НЕ собираем музыкальные файлы
  - Политика безопасности
- Добавить ссылку в Footer

**DoD:**

- ✅ Privacy Policy страница создана
- ✅ Cookie banner работает
- ✅ Ссылка в Footer присутствует

---

## **📱 Block 12 — PWA Support**

### **Step 12.1 — Setup PWA**

**Контекст:** Делаем сайт installable PWA.

**Задание:**

- Установить next-pwa:
  ```bash
  pnpm add next-pwa
  ```
- Создать `public/manifest.json`:
  ```json
  {
    "name": "LUFS Music Analyzer",
    "short_name": "LUFS",
    "description": "AI-Powered Audio Analysis",
    "start_url": "/",
    "display": "standalone",
    "background_color": "#0a0a0f",
    "theme_color": "#00ff88",
    "icons": [...]
  }
  ```
- Добавить Service Worker для offline support
- Создать icons для разных размеров (PWA требует 192x192, 512x512)

**DoD:**

- ✅ PWA installable на mobile
- ✅ Service worker регистрируется
- ✅ Lighthouse PWA score 100

---

## **🚀 Block 13 — Deployment & CI/CD**

### **Step 13.1 — Setup GitHub Actions**

**Контекст:** Автоматизируем CI/CD pipeline.

**Задание:**

- Создать `.github/workflows/ci.yml`:
  ```yaml
  name: CI
  on: [push, pull_request]
  jobs:
    build:
      runs-on: ubuntu-latest
      steps:
        - uses: actions/checkout@v3
        - uses: pnpm/action-setup@v2
        - uses: actions/setup-node@v3
        - run: pnpm install
        - run: pnpm lint
        - run: pnpm tsc --noEmit
        - run: pnpm test
        - run: pnpm build
  ```
- Создать `.github/workflows/lighthouse.yml`:
  - Запускать Lighthouse CI на каждом PR
  - Блокировать merge если score < 90

**DoD:**

- ✅ CI pipeline работает
- ✅ Lighthouse CI интегрирован
- ✅ Тесты запускаются автоматически

---

### **Step 13.2 — Deploy to Vercel**

**Контекст:** Деплоим на production.

**Задание:**

- Подключить GitHub repo к Vercel
- Настроить Environment Variables:
  - `NEXT_PUBLIC_TELEGRAM_BOT_URL`
  - `NEXT_PUBLIC_POSTHOG_KEY`
  - `SENTRY_DSN`
- Настроить custom domain (если есть)
- Включить Vercel Analytics & Speed Insights
- Настроить Preview Deployments для PR

**DoD:**

- ✅ Production deployment работает
- ✅ Custom domain настроен (или vercel.app)
- ✅ Analytics подключены
- ✅ HTTPS работает

---

## **🎯 Block 14 — Final Polish**

### **Step 14.1 — Advanced animations**

**Контекст:** Добавляем финальные "wow" эффекты.

**Задание:**

- **Magnetic cursor effect:** элементы "притягиваются" к курсору
- **Hover tilt effect:** карточки наклоняются при hover (react-tilt)
- **Text shimmer:** gradient shimmer на заголовках
- **Button ripple:** Material-like ripple effect на кнопках
- **Scroll-linked animations:** элементы меняются при скролле (GSAP ScrollTrigger)

**DoD:**

- ✅ Анимации работают плавно (60fps)
- ✅ Отключаются при `prefers-reduced-motion`
- ✅ Не лагают на mobile

---

### **Step 14.2 — Easter eggs & delighters**

**Контекст:** Добавляем маленькие сюрпризы для пользователей.

**Задание:**

- **Konami code:** Вводишь ↑↑↓↓←→←→BA — что-то происходит (confetti?)
- **Custom cursor:** Неоновый cursor trail (уже было, но улучшить)
- **Hidden achievement:** При 10 кликах на logo — показывать "secret" статистику
- **Dark/Light theme toggle:** Добавить переключатель (пока только dark)

**DoD:**

- ✅ Минимум 2 easter eggs добавлено
- ✅ Не мешают основному UX

---

### **Step 14.3 — Final audit & fixes**

**Контекст:** Последняя проверка всего сайта.

**Чеклист:**

- ✅ Все ссылки работают (Telegram, GitHub, social)
- ✅ QR код генерируется и работает
- ✅ Копирование ссылки работает
- ✅ Все анимации плавные
- ✅ Mobile responsive (320px-2560px)
- ✅ Cross-browser (Chrome, Firefox, Safari, Edge)
- ✅ Lighthouse: Performance 95+, Accessibility 100, Best Practices 100, SEO 100
- ✅ No console errors/warnings
- ✅ Loading states присутствуют
- ✅ Error states обработаны
- ✅ Toasts работают
- ✅ Analytics события отправляются
- ✅ Sentry ошибки ловятся

---

## 📊 **Updated Timeline Estimate**

| Block                            | Tasks           | Time Estimate |
| -------------------------------- | --------------- | ------------- |
| 0. Validation & Code Review      | Steps 0.1-0.3   | 2-3 hours     |
| 1. Enhanced Base Components      | Steps 1.1-1.4   | 3-4 hours     |
| 2. Enhanced Hero                 | Steps 2.1-2.3   | 4-5 hours     |
| 3. Enhanced Stats + Social Proof | Steps 3.1-3.2   | 2-3 hours     |
| 4. Features + Interactive Demo   | Steps 4.1-4.2   | 3-4 hours     |
| 5. Comparison Table              | Step 5.1        | 2 hours       |
| 6. FAQ Section                   | Step 6.1        | 1-2 hours     |
| 7. Pricing with Psychology       | Step 7.1        | 2 hours       |
| 8. Performance & SEO             | Steps 8.1-8.3   | 4-6 hours     |
| 9. Testing                       | Steps 9.1-9.2   | 4-5 hours     |
| 10. Analytics & Monitoring       | Steps 10.1-10.2 | 2-3 hours     |
| 11. Security & Privacy           | Steps 11.1-11.2 | 2-3 hours     |
| 12. PWA Support                  | Step 12.1       | 2 hours       |
| 13. Deployment & CI/CD           | Steps 13.1-13.2 | 3-4 hours     |
| 14. Final Polish                 | Steps 14.1-14.3 | 4-6 hours     |

**Total: ~45-60 hours** (vs. ~25-35 в оригинале)

---

## 🎨 **Additional Design Assets Needed**

### **Icons & Logos**

- ✅ LUFS logo (SVG, multiple sizes: 24px, 48px, 96px, 256px)
- ✅ Platform icons (высокое качество, colored + grayscale versions)
- ✅ Tech stack logos (PyTorch, TensorFlow, etc.)
- ✅ Telegram icon (brand guidelines compliant)
- ✅ Social icons (GitHub, Twitter/X, etc.)

### **Graphics**

- ✅ OG image (1200x630px) — hero визуал + текст
- ✅ Twitter Card image (800x418px)
- ✅ PWA icons (192x192, 512x512, maskable)
- ✅ Favicon (SVG для modern browsers, PNG fallback)
- ✅ Apple Touch Icon (180x180)

### **Animations**

- ✅ Loading spinner (Lottie JSON)
- ✅ Success checkmark (Lottie JSON)
- ✅ Error animation (Lottie JSON)
- ✅ Audio waveform (CSS or Canvas)

### **Mockups/Screenshots**

- ✅ Telegram bot interface screenshot
- ✅ Analysis results mockup
- ✅ Feature previews (для hover states)

---

## 🚀 **Post-Launch Roadmap**

### **Phase 1 (Week 1-2)**

- 🎯 Monitor analytics daily
- 🐛 Fix critical bugs reported by users
- 📊 A/B test CTA variations
- 📝 Write first blog post about LUFS technology

### **Phase 2 (Month 1)**

- 🌐 Add multi-language support (EN, RU, ES, DE, FR)
- 🎥 Create demo video (30-60 seconds)
- 📱 Optimize for more screen sizes
- 💬 Add live chat support widget (optional)

### **Phase 3 (Month 2-3)**

- 📚 Create documentation/help center
- 🎤 Add user testimonials section (collect via form)
- 🏆 Add "Success Stories" page
- 📰 SEO content marketing (blog posts)

### **Phase 4 (Month 3+)**

- 🤖 Add AI chatbot for support
- 📊 Advanced analytics dashboard (for admins)
- 🎨 Seasonal themes (Christmas, Halloween, etc.)
- 🎮 Gamification elements (badges, achievements)

---

## 📝 **Updated Definition of Done**

Проект считается **production-ready**, когда:

### **Functionality**

- ✅ Все 15+ секций реализованы и работают
- ✅ Все интерактивные элементы функциональны
- ✅ Все ссылки ведут на правильные destinations
- ✅ QR код работает и открывает Telegram бота

### **Performance**

- ✅ Lighthouse Performance: 95+
- ✅ First Contentful Paint: < 1.2s
- ✅ Time to Interactive: < 3s
- ✅ Total Bundle Size: < 250KB (gzipped)
- ✅ Анимации: стабильные 60fps на всех устройствах

### **Accessibility**

- ✅ Lighthouse Accessibility: 100
- ✅ Axe DevTools: 0 violations
- ✅ Keyboard navigation: полностью функциональная
- ✅ Screen reader: корректный порядок чтения
- ✅ Color contrast: > 4.5:1

### **SEO**

- ✅ Lighthouse SEO: 100
- ✅ Rich Snippets: валидируются
- ✅ Open Graph: работает на всех платформах
- ✅ Sitemap.xml: генерируется автоматически

### **Testing**

- ✅ Unit tests: > 70% coverage
- ✅ E2E tests: критичные флоу покрыты
- ✅ Cross-browser: Chrome, Firefox, Safari, Edge
- ✅ Mobile responsive: 320px - 2560px+

### **Security**

- ✅ Security headers: A+ на securityheaders.com
- ✅ CSP: настроен правильно
- ✅ HTTPS: enforced
- ✅ Privacy policy: присутствует

### **DevOps**

- ✅ CI/CD: работает автоматически
- ✅ Production: deployed на Vercel
- ✅ Monitoring: Sentry + PostHog активны
- ✅ Backups: настроены (если есть backend)

### **UX/UI**

- ✅ Loading states: везде присутствуют
- ✅ Error handling: graceful fallbacks
- ✅ Toast notifications: работают
- ✅ Animations: respect reduced-motion
- ✅ Dark/Light mode: плавное переключение

---

## 🎯 **Key Improvements Summary**

### **Что добавлено:**

1. ✅ **Block 0** — валидация уже созданного кода
2. ✅ **Testing** — полноценное unit & E2E тестирование
3. ✅ **Social Proof** — trust indicators, testimonials
4. ✅ **Comparison Table** — показ преимуществ над конкурентами
5. ✅ **FAQ Section** — ответы на частые вопросы
6. ✅ **Enhanced Pricing** — психологические триггеры
7. ✅ **Analytics** — PostHog для product insights
8. ✅ **Monitoring** — Sentry для error tracking
9. ✅ **Security** — headers, CSP, privacy policy
10. ✅ **PWA Support** — installable приложение
11. ✅ **CI/CD** — автоматизированный pipeline
12. ✅ **Accessibility** — WCAG 2.1 AA compliance
13. ✅ **Advanced Animations** — более впечатляющие эффекты
14. ✅ **Easter Eggs** — delightful surprises

### **Улучшено:**

- 📐 Архитектура проекта (лучшая структура папок)
- 🎨 UI components (shadcn/ui вместо ручной разработки)
- ⚡ Performance оптимизация (code splitting, lazy loading)
- 🔍 SEO улучшения (structured data, rich snippets)
- 📱 Mobile experience (лучшая адаптивность)
- 🎯 Conversion optimization (CTA improvements, social proof)

---

## 🔥 **Next Steps**

1. **Начать с Block 0** — проверить существующий код
2. **Исправить найденные проблемы** из Block 0
3. **Продолжить по блокам** — последовательно, не пропуская
4. **Тестировать постоянно** — не оставлять тесты на конец
5. **Мониторить performance** — проверять Lighthouse после каждого блока
6. **Коммитить часто** — маленькие коммиты лучше больших

---

**🎉 Roadmap v2.0 готов к исполнению! Удачи!**

_Made with ❤️ by Claude (Anthropic)_

---

## 📌 **Quick Reference Checklist**

### **Phase 1: Foundation (Block 0-1)**

- [ ] Валидация существующего кода
- [ ] Исправление найденных проблем
- [ ] shadcn/ui setup
- [ ] Utility hooks
- [ ] Shared components

### **Phase 2: Core Features (Block 2-7)**

- [ ] Enhanced Hero с 3D viz
- [ ] Stats + Social Proof
- [ ] Interactive Demo
- [ ] Comparison Table
- [ ] FAQ Section
- [ ] Pricing Psychology

### **Phase 3: Quality (Block 8-9)**

- [ ] SEO Optimization
- [ ] Performance Tuning
- [ ] Accessibility WCAG 2.1 AA
- [ ] Unit Tests
- [ ] E2E Tests

### **Phase 4: Infrastructure (Block 10-13)**

- [ ] PostHog Analytics
- [ ] Sentry Monitoring
- [ ] Security Headers
- [ ] PWA Setup
- [ ] CI/CD Pipeline
- [ ] Vercel Deployment

### **Phase 5: Polish (Block 14)**

- [ ] Advanced Animations
- [ ] Easter Eggs
- [ ] Final Audit
- [ ] Cross-browser Testing
- [ ] Mobile Testing

---

**💡 Pro Tip:** Не пытайтесь сделать всё сразу. Двигайтесь блок за блоком, тестируя каждый этап. Качество важнее скорости!
