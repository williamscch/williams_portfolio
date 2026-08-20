# AGENTS.md

Welcome! This document provides full context, architecture details, and development guidelines for AI agents working in this repository.

---

## 1. Repository Overview

This repository is the personal portfolio website for **Williams Colmenares** (Senior Software Engineer). It is a fast, responsive Single Page Application (SPA) showcasing experience, technical skills, services, projects, client testimonials, and contact details.

- **Framework**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS + `tailwindcss-animate` + Radix UI / shadcn-style primitives
- **Icons**: `lucide-react` + custom SVG brand icons
- **Smooth Navigation**: `react-scroll`
- **State & Data**: React Context with static data store (no dedicated backend)

---

## 2. Essential Commands

| Command           | Description                                                                |
| ----------------- | -------------------------------------------------------------------------- |
| `npm run dev`     | Launch local Vite dev server with Hot Module Replacement (HMR)             |
| `npm run build`   | TypeScript typecheck (`tsc -b`) and production bundle build (`vite build`) |
| `npm run lint`    | Run ESLint across the codebase                                             |
| `npm run preview` | Locally preview the built production output (`dist/`)                      |

> [!NOTE]
> There is currently no automated test runner configured. Always run `npm run build` and `npm run lint` to verify changes.

---

## 3. Repository & Architecture Map

```
williams_portfolio/
├── context/
│   └── career-master.md    # Master career history, verified timelines & accomplishments
├── public/                 # Static assets copied directly to build root
├── src/
│   ├── assets/             # Brand SVGs (IconGithub, IconLinkedin, etc.) and images
│   ├── components/         # Page sections & feature components
│   │   ├── About.tsx       # About Me section
│   │   ├── Contact.tsx     # Contact form and direct contact links
│   │   ├── Footer.tsx      # Page footer with social links & copyright
│   │   ├── Layout.tsx      # Main layout wrapper, header navbar, and scroll triggers
│   │   ├── Me.tsx          # Hero section / introduction
│   │   ├── Portfolio.tsx   # Project grid showcase
│   │   ├── ProjectCard.tsx # Individual project preview card
│   │   ├── ProjectModal.tsx# Detailed project modal dialog
│   │   ├── Services.tsx    # Services offered section
│   │   ├── Skills.tsx      # Tech stack & skills categorization
│   │   └── Testimonials.tsx# Client recommendations / carousel
│   ├── context/
│   │   ├── data.ts         # SINGLE SOURCE OF TRUTH for all portfolio content
│   │   └── portfolio.tsx   # React Context & usePortfolioContext hook
│   ├── ui/                 # Reusable UI primitives (Button, Card, Dialog, Sheet, etc.)
│   ├── utils/
│   │   └── cn.ts           # clsx + tailwind-merge helper function
│   ├── App.tsx             # Main App layout mounting sections and navigation targets
│   ├── index.css           # Global Tailwind directives & HSL CSS color variables
│   └── main.tsx            # React root mount
├── package.json
├── tailwind.config.js      # Tailwind configuration with theme extensions
├── tsconfig.json           # Root TypeScript configuration
├── tsconfig.app.json       # App-specific TS compiler options & '@/*' path alias
└── vite.config.ts          # Vite configuration with React plugin & path resolver
```

---

## 4. Key Conventions & Workflows

### 4.1 Content & Career History Management

- **Single Source of Truth for Display**: All displayed portfolio content (profile info, experience cards, skills, services, project details, testimonials, contact endpoints) is defined in [`src/context/data.ts`](file:///Users/williamscolmenares/Desktop/Repos/williams_portfolio/src/context/data.ts).
- **Career Master Reference**: When updating or expanding content, refer to [`context/career-master.md`](file:///Users/williamscolmenares/Desktop/Repos/williams_portfolio/context/career-master.md) (if present). This file contains unabridged, verified timelines, job history, and achievement metrics. Ensure all numbers and details stay aligned.
- **Consumption**: Components access content via `usePortfolioContext()` from [`src/context/portfolio.tsx`](file:///Users/williamscolmenares/Desktop/Repos/williams_portfolio/src/context/portfolio.tsx).

### 4.2 Navigation & Section IDs

- Navigation is hash-free smooth scrolling powered by `react-scroll`.
- Each section component in [`src/components/`](file:///Users/williamscolmenares/Desktop/Repos/williams_portfolio/src/components/) receives an `id` prop that must match the `toId` defined in [`src/App.tsx`](file:///Users/williamscolmenares/Desktop/Repos/williams_portfolio/src/App.tsx) / [`src/components/Layout.tsx`](file:///Users/williamscolmenares/Desktop/Repos/williams_portfolio/src/components/Layout.tsx).
- The sticky header activates styling when `window.scrollY >= 64`.

### 4.3 Styling & UI Primitives

- **Tailwind Tokens**: Color tokens are defined as CSS variables (HSL) in [`src/index.css`](file:///Users/williamscolmenares/Desktop/Repos/williams_portfolio/src/index.css).
- **Class Merging**: Always use `cn(...)` from [`src/utils/cn.ts`](file:///Users/williamscolmenares/Desktop/Repos/williams_portfolio/src/utils/cn.ts) for conditional or merged Tailwind classes.
- **Modals & Overlays**: Use Radix UI primitives inside [`src/ui/`](file:///Users/williamscolmenares/Desktop/Repos/williams_portfolio/src/ui/) (e.g., [`ProjectModal.tsx`](file:///Users/williamscolmenares/Desktop/Repos/williams_portfolio/src/components/ProjectModal.tsx) leverages Radix Dialog).

### 4.4 TypeScript & Aliasing

- Use the `@/` path alias (resolves to `./src/`) for clean imports across the project.
- Maintain strict typing in all new code and refactors.

---

## 5. Agent Verification Checklist

Before finishing any task:

1. Run `npm run build` to ensure there are no TypeScript compile errors or Vite build failures.
2. Run `npm run lint` to catch ESLint warnings and code style issues.
3. Verify responsive design and formatting if UI components were modified.
