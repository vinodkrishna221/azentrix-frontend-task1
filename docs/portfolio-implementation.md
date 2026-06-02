# Portfolio Website Implementation Phases

Based on the requirements (Vite + React + TypeScript, React Hook Form + Zod, and pnpm), along with our established design system and architectural blueprints, here is the detailed technical plan for the portfolio website.

## Core Documentation References
Before beginning implementation, ensure you have reviewed the following core documents:
- **Design System & Tokens**: [DESIGN.md](file:///d:/azentrix-task1/docs/DESIGN.md) - Contains the color palette, typography scale (Clash Display, Satoshi), and baseline CSS reset.
- **Section Layouts Blueprint**: [layouts.md](file:///d:/azentrix-task1/docs/layouts.md) - Contains the ASCII architectural structures for the Hero, About/Skills, Projects, and Contact sections.
- **UI Mockups**: [references/](file:///d:/azentrix-task1/docs/references) - Directory containing visual references and UI screen layouts.

## Phase 1: Project Setup and Dependencies
- Initialize the Vite project with React and TypeScript templates using `pnpm`.
- Install necessary dependencies (`react-hook-form`, `@hookform/resolvers`, `zod`, `react-scroll`).
- Configure ESLint, Prettier, and standard TypeScript compilation options.
- Integrate the global CSS tokens and resets defined in [DESIGN.md](file:///d:/azentrix-task1/docs/DESIGN.md) into the main `index.css`.
- **Relevant Skills**: 
  - `C:\Users\Vinod krishna\antigravity_skills\frontend-developer\SKILL.md`
  - `C:\Users\Vinod krishna\antigravity_skills\typescript-expert\SKILL.md`

## Phase 2: Project Architecture & Core Structure
- Establish standard directory architecture: `/components`, `/sections`, `/hooks`, `/utils`, and `/types`.
- Scaffold the 5 primary sections as independent React components in `src/sections`:
  - `Hero.tsx` (The "Command Center" layout)
  - `About.tsx` & `Skills.tsx` (The "Terminal & Constellation" layout)
  - `Projects.tsx` (The "Asymmetric Sticky Scroll" layout)
  - `Contact.tsx` (The "Brutalist Mad-Libs" layout)
- Aggregate all sections sequentially within the main `App.tsx` layout.
- Review [layouts.md](file:///d:/azentrix-task1/docs/layouts.md) during scaffolding to ensure the DOM structure matches the blueprints.
- **Relevant Skills**:
  - `C:\Users\Vinod krishna\antigravity_skills\react-best-practices\SKILL.md`

## Phase 3: Navigation and Smooth Scrolling
- Build a sticky `Navbar` component.
- Implement anchor points for all 5 sections.
- Utilize `react-scroll` to implement smooth scroll navigation when clicking a navigation item.
- Implement active state highlighting on the Navbar based on scroll position using `react-scroll`'s built-in active class capabilities.

## Phase 4: Component Implementation & Responsiveness
- Implement semantic HTML structure for each section component according to the structures in [layouts.md](file:///d:/azentrix-task1/docs/layouts.md).
- Apply the CSS Variables from [DESIGN.md](file:///d:/azentrix-task1/docs/DESIGN.md) to implement the dark mode, neon accents, and typography.
- Structure responsive layout (Mobile, Tablet, Desktop) purely via structural CSS/utilities as preferred.
- Ensure all inputs and interactive elements are accessible.
- Use images/mockups from the [references/](file:///d:/azentrix-task1/docs/references) folder as visual guides.

## Phase 5: Form Architecture and Validation
- Implement the `ContactForm` component inside the Contact section following the "Brutalist Mad-Libs" design.
- Define a `zod` schema to enforce:
  - Required fields (e.g., Name, Message)
  - Valid Email format (e.g., `z.string().email()`)
- Bind the schema to `react-hook-form` via `@hookform/resolvers/zod`.
- Construct client-side error handling to display validation messages below respective fields without a page reload.
- **Relevant Skills**:
  - `C:\Users\Vinod krishna\antigravity_skills\zod-validation-expert\SKILL.md`
