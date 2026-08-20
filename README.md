# Portfolio & Agent Workflow

This repository is the personal portfolio site for **Williams Colmenares**, a senior software engineer.

- **Framework**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS, `tailwindcss-animate`, Radix UI primitives
- **Icons**: `lucide-react` and custom SVG brand icons
- **Navigation**: Smooth scroll via `react-scroll`
- **State**: React Context (`src/context/data.ts`) – single source of truth for all displayed content.

## Development Commands

| Command | Description |
|---|---|
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | Type‑check (`tsc -b`) and bundle production build |
| `npm run lint` | Run ESLint across the codebase |
| `npm run preview` | Preview the production output locally |

> **Note**: No automated test runner is configured; always run `npm run build` and `npm run lint` after changes.

## Agent‑Enabled Workflow

The project ships with an **AGENTS.md** guide that describes how to use Antigravity agents (brainstorming, planning, code‑review, etc.) directly inside the repository. Typical workflow:

1. **Brainstorm** – `/grill-me` or `/plan` to explore new ideas (e.g., repurposing the portfolio).
2. **Write a Plan** – `/plan` generates a step‑by‑step implementation checklist.
3. **Execute** – Run the generated commands or let the CLI assistant apply changes.
4. **Verify** – `npm run build` + `npm run lint` before committing.

## Project Structure

```
src/
├─ assets/           # Brand SVGs & images
├─ components/       # Page sections (About, Me, Portfolio, …)
├─ context/          # data.ts & portfolio.tsx (React Context)
├─ ui/               # Reusable UI primitives (Button, Dialog, …)
├─ utils/            # Helper functions (cn.ts)
└─ App.tsx, main.tsx
```

Feel free to explore the **AGENTS.md** file for detailed agent usage instructions.

