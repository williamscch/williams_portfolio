# Portfolio & Agent Workflow

This repository is the personal portfolio site for **Williams Colmenares**, a senior software engineer.

- **Framework**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS, `tailwindcss-animate`, Radix UI primitives
- **Icons**: `lucide-react` and custom SVG brand icons
- **Navigation**: Smooth scroll via `react-scroll`
- **State**: React Context (`src/context/data.ts`) – single source of truth for all displayed content.
- **Bilingual**: Fully localized EN/ES — content, case studies, and UI strings all switch via locale context (`data.ts` per-locale `ui` objects + `esCaseStudyOverrides`).

## Development Commands

| Command | Description |
|---|---|
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | Type‑check (`tsc -b`) and bundle production build |
| `npm run lint` | Run ESLint across the codebase |
| `npm run preview` | Preview the production output locally |

> **Note**: No automated test runner is configured; always run `npm run build` and `npm run lint` after changes.

## Agent‑Enabled Workflow

The project ships with an **AGENTS.md** guide that provides detailed architecture and development guidelines. Run `npm run build` + `npm run lint` to verify changes.

## Project Structure

```
src/
├─ assets/           # Brand SVGs, profile photo, icon components
├─ components/       # Page sections (Hero, StoryChapters, HumanSide, Toolkit, Contact, Footer, CaseStudyModal, DesktopNavbar, MobileTabBar, Layout, StructuredData)
├─ context/          # data.ts (single source of truth) & portfolio.tsx (React Context)
├─ ui/               # Reusable UI primitives (Button, Dialog, Input, Textarea)
├─ utils/            # Helper functions (cn.ts)
└─ App.tsx, main.tsx
```

Feel free to explore the **AGENTS.md** file for detailed agent usage instructions.

