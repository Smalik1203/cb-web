# ClassBridge Web

Marketing and landing site for **ClassBridge** — school management software for modern education. One platform for students, teachers, and parents: attendance, grades, fees, and communication in one place.

By [Operium Technologies Pvt Ltd](mailto:contact@classbridge.in).

---

## Overview

ClassBridge Web is a single-page React landing site that introduces ClassBridge to schools and administrators. It highlights benefits, features, implementation flow, FAQs, and a clear path to contact for demos.

---

## Tech Stack

| Category      | Technology                            |
|---------------|---------------------------------------|
| Framework     | React 18                              |
| Language      | TypeScript                            |
| Build Tool    | Vite 5                                |
| Styling       | Tailwind CSS                          |
| Animations    | Framer Motion                         |
| Icons         | Lucide React                          |
| Utilities     | clsx, tailwind-merge                  |

---

## Project Structure

```
cb-web/
├── index.html              # Entry HTML, SEO meta, Open Graph, JSON-LD
├── src/
│   ├── main.tsx            # App entry point
│   ├── App.tsx              # Main landing page + all sections
│   ├── index.css            # Tailwind + design tokens
│   ├── lib/
│   │   └── utils.ts         # cn() helper for classnames
│   └── components/
│       ├── demo.tsx         # Hero wrapper
│       └── ui/
│           └── shape-landing-hero.tsx  # Animated geometric hero
├── tailwind.config.js
├── vite.config.ts
└── package.json
```

---

## Getting Started

### Prerequisites

- Node.js 18+ (or compatible)
- npm (or pnpm, yarn)

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

Output goes to `dist/`.

### Preview Production Build

```bash
npm run preview
```

---

## Scripts

| Command         | Description                     |
|-----------------|---------------------------------|
| `npm run dev`   | Start Vite dev server          |
| `npm run build` | Build for production           |
| `npm run lint`  | Run ESLint                     |
| `npm run preview` | Preview the production build |

---

## Landing Page Sections

1. **Hero** — Animated geometric hero with tagline: “The Bridge to Modern Education”
2. **Features** — Student Management, Learning Resources, Complete Management
3. **Benefits** — Reasons schools choose ClassBridge
4. **How It Works** — Quick Setup → Start Teaching → Watch It Work
5. **Key Features** — Daily operations, learning resources, parent updates, grades, fees, communication
6. **CTA** — Contact for demo
7. **FAQ** — Expandable accordion with common questions
8. **Footer** — Operium Technologies, Privacy, Terms, Contact links

---

## Accessibility & SEO

- Skip-to-content link
- Semantic HTML and ARIA where needed (e.g. FAQ accordion)
- Framer Motion respects `prefers-reduced-motion`
- Open Graph and Twitter Card meta tags
- JSON-LD schema for Organization and WebSite
- Canonical URL and meta description for search engines

---

## Customization

- **Brand colors**: `tailwind.config.js` defines the `stratos` palette; `src/index.css` includes design tokens (`--color-primary`, etc.).
- **Hero copy**: `src/components/demo.tsx` — `badge`, `title1`, `title2`, `subtitle`.
- **Features, benefits, FAQ**: Content is in `src/App.tsx` (`FAQ_ITEMS` and inline arrays).

---

## Contact

- **Email**: [contact@classbridge.in](mailto:contact@classbridge.in)
- **Website**: [classbridge.in](https://classbridge.in)
