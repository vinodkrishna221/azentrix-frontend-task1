# Design System & CSS Tokens

This document outlines the design system, CSS tokens, and theme properties for the portfolio website, inspired by the high-contrast, modern, tech-focused aesthetic you provided.

## 1. Core Principles
- **Vibe:** Modern, tech-forward, cyberpunk-lite, highly professional yet experimental.
- **Aesthetic:** Dark mode only, high contrast, clean large typography, and subtle micro-animations.
- **Styling Approach:** Vanilla CSS with CSS Custom Properties (Variables) for maximum flexibility and control.

## 2. Color Palette
The color palette focuses on deep dark tones with a vibrant neon mint green accent to draw attention to call-to-actions (CTAs) and technical elements (like tags or code-like comments).

```css
:root {
  /* Surface Colors */
  --color-bg-primary: #121212;      /* Almost black for main background */
  --color-bg-secondary: #1E1E1E;    /* Slightly lighter for cards/sections */
  --color-bg-tertiary: #2D2D2D;     /* For hover states and borders */

  /* Text Colors */
  --color-text-primary: #F3F4F6;    /* High contrast light gray/white for headings */
  --color-text-secondary: #9CA3AF;  /* Muted gray for body text and subtle info */

  /* Accent Colors */
  --color-accent-primary: #6EE7B7;  /* Neon Mint Green (Brand color) */
  --color-accent-hover: #34D399;    /* Slightly darker mint for button hovers */
  
  /* Utility Colors */
  --color-error: #EF4444;
  --color-success: #10B981;
}
```

## 3. Typography
The typography uses an experimental font stack that mixes a bold display font for impact, a clean sans-serif for readability, and a monospace font for technical flair.

### Font Families
- **Headings (`--font-display`):** **Clash Display** (Provides a bold, structured, and modern look).
- **Body (`--font-sans`):** **Satoshi** (Clean, legible geometric sans-serif).
- **Tech Accents (`--font-mono`):** **JetBrains Mono** (Used for elements like `// DevSync` or `<Tags>`).

```css
:root {
  /* Font Families */
  --font-display: 'Clash Display', system-ui, sans-serif;
  --font-sans: 'Satoshi', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;

  /* Font Weights */
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-bold: 700;
  --font-weight-black: 900;
}
```

### Typographic Scale
```css
:root {
  --text-xs: 0.75rem;    /* 12px */
  --text-sm: 0.875rem;   /* 14px - Used for tech tags */
  --text-base: 1rem;     /* 16px - Standard body text */
  --text-lg: 1.125rem;   /* 18px */
  --text-xl: 1.25rem;    /* 20px - Subheadings */
  --text-2xl: 1.5rem;    /* 24px */
  --text-4xl: 2.25rem;   /* 36px - Section titles */
  --text-6xl: 4rem;      /* 64px - Massive hero text */
  --text-8xl: 6rem;      /* 96px - Desktop hero emphasis */
}
```

## 4. Spacing System
A consistent spacing scale is crucial for the clean layout seen in the design.

```css
:root {
  /* Spacing Scale */
  --space-1: 0.25rem;   /* 4px */
  --space-2: 0.5rem;    /* 8px */
  --space-3: 0.75rem;   /* 12px */
  --space-4: 1rem;      /* 16px */
  --space-6: 1.5rem;    /* 24px */
  --space-8: 2rem;      /* 32px */
  --space-12: 3rem;     /* 48px */
  --space-16: 4rem;     /* 64px */
  --space-24: 6rem;     /* 96px - Section padding */
  --space-32: 8rem;     /* 128px */
}
```

## 5. Shadows and Borders
To maintain the flat, clean aesthetic, shadows are kept minimal, relying more on subtle borders.

```css
:root {
  --border-radius-sm: 4px;
  --border-radius-md: 8px;
  --border-radius-lg: 16px;
  --border-radius-full: 9999px; /* For pill-shaped buttons */

  --border-thin: 1px solid var(--color-bg-tertiary);
  
  --shadow-subtle: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --shadow-glow: 0 0 20px rgba(110, 231, 183, 0.15); /* Subtle green glow for hovered elements */
}
```

## 6. CSS Reset & Global Styles Recommendation
Include this baseline in your global `index.css`:

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: var(--color-bg-primary);
  color: var(--color-text-secondary);
  font-family: var(--font-sans);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-display);
  color: var(--color-text-primary);
  line-height: 1.1;
  font-weight: var(--font-weight-bold);
}

/* Tech Accent Utility Class */
.tech-tag {
  font-family: var(--font-mono);
  color: var(--color-accent-primary);
  font-size: var(--text-sm);
  letter-spacing: 0.05em;
}

/* Primary Button */
.btn-primary {
  background-color: var(--color-accent-primary);
  color: var(--color-bg-primary); /* Dark text on green button */
  font-family: var(--font-sans);
  font-weight: var(--font-weight-medium);
  padding: var(--space-3) var(--space-6);
  border-radius: var(--border-radius-full);
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.btn-primary:hover {
  background-color: var(--color-accent-hover);
  box-shadow: var(--shadow-glow);
}
```
