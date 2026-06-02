# Aria Vance — Interactive Portfolio Experience

An award-winning, single-page scroll narrative for a fictional **Interactive Product Designer & Creative Technologist**. Designed with ultimate aesthetic restraint, vibrant HSL gradients, sharp glassmorphic borders, and high-performance GSAP ScrollTrigger animations.

---

## 🚀 Quick Start (Local Run)

Ensure you have **Node.js (v20+)** and **pnpm** installed on your system.

### 1. Install Dependencies
```bash
pnpm install
```

### 2. Launch Development Server
```bash
pnpm dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to experience the site.

### 3. Compile Production Bundle
```bash
pnpm build
```

---

## 🛠️ Technology Stack & Libraries

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/) in strict TypeScript mode.
- **Styling Engine**: [Vanilla CSS](https://tailwindcss.com/) backed by modern Tailwind utility helpers.
- **Motion & Core Scroll Physics**: [GSAP](https://gsap.com/) & [GSAP ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/) for scroll-driven reveals, stagger letter animations, and panel pinning.
- **Icon Set**: [Lucide React](https://lucide.dev/) for crisp, scalable line art.
- **Visual Micro-Effects**: [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti) for celebration milestones.

---

## 📐 Portfolio Architecture (The 5 Key Sections)

### 1. Hero Section (The Hook)
- **Concept**: Aria Vance — Interactive Product Designer & Creative Technologist.
- **Visuals**: Ambient SVG line meshes with an **interactive mouse spotlight follow** updating CSS variables on mouse coordinates.
- **Motion**: Staggered, word-by-word fade-up headline reveal using GSAP spring transitions and **magnetic CTA buttons** that dynamically snap toward the user's cursor.

### 2. About Section (The Story)
- **Concept**: Creative biography detailing Aria's trajectory bridging fine art and robust coding.
- **Interactions**: Editorial tab switcher ("My Story" vs. "Trajectory Timeline") loaded with visual transition wipes and a custom graphic layout displaying her journey.

### 3. Skills Section (The Arsenal)
- **Concept**: Grid of professional proficiencies (UX Strategy, WebGL, Next.js, and Motion Physics).
- **Aesthetic**: Premium **Bento Grid** layout.
- **Interaction**: Custom **animated circular SVG progress rings** that track viewport entry via an `IntersectionObserver` to trigger progress draws.

### 4. Projects Section (The Case Studies)
- **Concept**: 3 highly detailed, high-fidelity fictional case studies:
  1. *Aetheria Space* — WebGL orbital mechanics trajectory visualizer.
  2. *Synapse Cognitive* — Deep-tech AI visual dashboard.
  3. *Nova Protocol* — Premium algorithmic FinTech charting engine.
- **Choreography**: Butter-smooth **GSAP ScrollTrigger horizontal pinned carousel**. As vertical scroll advances, the workspace pins, card layouts undergo custom 3D perspective tilts (`rotateY`), and projects slide horizontally.
- **Responsive Fallback**: Gracefully wraps to a vertical column deck on touch-based mobile displays.

### 5. Contact Section (The Conversion)
- **Concept**: Premium glassmorphic contact form designed to capture inquiries.
- **Form Mechanics**: Strict client-side regex validations that dynamically trigger state transitions: borders turn emerald on success and crimson on errors.
- **Visual Flair**: Form fields feature custom sliding floating labels and submit button loader transition, culminating in a spectacular **canvas-confetti explosion** on success.

---

## ⚙️ Core Styling & Design Tokens (`src/app/globals.css`)

Our styling foundation implements modern visual design systems:
- **Obsidian Dark Mode**: Deep space black background (`#0D0E15`) offset by rich, translucent glass surfaces (`background: rgba(18, 20, 31, 0.65)`).
- **Brilliant Gradients**: Vibrant Indigo (`#6366F1`) and Electrifying Cyan (`#06B6D4`) highlight accents.
- **Glassmorphism borders**: Sharp `1px` translucent highlights (`rgba(255, 255, 255, 0.06)`) and premium blur filters (`backdrop-filter: blur(16px)`).
- **Typography Integration**: Smooth geometric display headings via Google Fonts (`Outfit`) paired with extremely legible geometric sans-serif body text (`Plus Jakarta Sans`).

---

## ♿ Accessibility & Performance Compliance

- **No Scroll Hijacking**: Native kinetic touch gestures are completely unaltered. GSAP links reveals and horizontal panels to natural, native scroll indicators.
- **Semantic HTML5 Layouts**: Built entirely using `<header>`, `<main>`, `<section>`, and `<footer>` layouts.
- **Interactive Associations**: Proper ARIA mappings, hidden layouts for screen readers (`aria-hidden="true"`), explicit `<label>` associations, and customized, high-visibility keyboard focus rings (`focus-visible`).
- **Leaf-Interactive Architecture**: Strict separation between static Server Components and dynamic Client Components (`use client` is kept at leaf level) for optimum PageSpeed metrics.
- **Memory Leaks Cleanup**: All GSAP timelines and ScrollTriggers are properly initialized inside `useEffect` Hooks and completely killed on component unmount.
