# Update Next.js and Dependencies Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Upgrade Next.js from 14.2.4 to Next.js 15 and modernize all dependencies to ensure the portfolio is secure, fast, and optimized with zero build errors or warnings.

**Architecture:** Incrementally upgrade Next.js and related core dependencies (React 19, Radix UI, framer-motion, lucide-react, ESLint 9), purge unused Markdown/Shiki packages, fix TypeScript and configuration issues, and re-enable strict type and lint checking during builds.

**Tech Stack:** Next.js 15, React 19, TypeScript 5, Tailwind CSS, Framer Motion, Radix UI, Bun.

---

## Global Constraints
- Must use Bun as the package manager and update `bun.lockb`.
- Must not break any existing portfolio UI sections (Hero, About, Stack, Projects, GitHub Activity, Education, Contact).
- All TypeScript errors must be resolved; `ignoreBuildErrors` and `ignoreDuringBuilds` in `next.config.mjs` must be removed so type safety is enforced.
- The production build (`bun run build`) must succeed with zero errors.

---

### Task 1: Fix existing TypeScript and component typing issues
**Files:**
- Modify: `src/components/magicui/blur-fade.tsx:1-35`

- [ ] **Step 1: Update `BlurFadeProps` type definition in `src/components/magicui/blur-fade.tsx`**
  Import `UseInViewOptions` from `framer-motion` and change `inViewMargin?: string;` to `inViewMargin?: UseInViewOptions["margin"];`
- [ ] **Step 2: Run `bun x tsc --noEmit` to verify type checking passes**
  Run: `bun x tsc --noEmit`
  Expected: Exits with code 0 (no errors).

---

### Task 2: Prune unused bloated dependencies
**Files:**
- Modify: `package.json`

- [ ] **Step 1: Remove unused packages from `package.json`**
  Remove `gray-matter`, `rehype-pretty-code`, `rehype-stringify`, `remark-parse`, `remark-rehype`, `shiki`, `unified`, `@types/mdx`.
- [ ] **Step 2: Update `packageManager` field if needed to reflect `bun`**
- [ ] **Step 3: Run `bun install` to prune lockfile**
  Run: `bun install`
  Expected: Clean installation with reduced package count.

---

### Task 3: Upgrade Next.js, React, and UI dependencies
**Files:**
- Modify: `package.json`

- [ ] **Step 1: Upgrade core and UI dependencies in `package.json`**
  - `next`: `^15.2.0` (or `^15.5.27`)
  - `react`: `^19.0.0`
  - `react-dom`: `^19.0.0`
  - `@types/react`: `^19.0.0`
  - `@types/react-dom`: `^19.0.0`
  - `@types/node`: `^20` (or `^22`)
  - `eslint-config-next`: `^15.2.0` (matches Next version)
  - `eslint`: `^9`
  - `@radix-ui/react-avatar`: `^1.1.3`
  - `@radix-ui/react-label`: `^2.1.2`
  - `@radix-ui/react-separator`: `^1.1.2`
  - `@radix-ui/react-slot`: `^1.1.2`
  - `@radix-ui/react-tooltip`: `^1.1.8`
  - `next-themes`: `^0.4.4`
  - `lucide-react`: `^1.16.0` (or latest)
  - `framer-motion`: `^12.4.10`
  - `tailwind-merge`: `^3.0.0` or `^2.6.0`
- [ ] **Step 2: Run `bun install`**
  Run: `bun install`
  Expected: Installed successfully.

---

### Task 4: Configure Next.js and ESLint for Next.js 15
**Files:**
- Modify: `next.config.mjs`
- Modify: `eslint.config.mjs`

- [ ] **Step 1: Update `next.config.mjs`**
  Remove `ignoreBuildErrors: true` and `ignoreDuringBuilds: true`. Add production optimization settings (`poweredByHeader: false`, etc.).
- [ ] **Step 2: Update `eslint.config.mjs` for Next.js 15 flat config**
  Ensure ESLint runs non-interactively and passes.
- [ ] **Step 3: Update browserslist DB**
  Run: `bun x update-browserslist-db@latest`

---

### Task 5: Verification and Build Validation
**Files:**
- None (verification commands)

- [ ] **Step 1: Run type checking**
  Run: `bun x tsc --noEmit`
  Expected: Clean pass with 0 errors.
- [ ] **Step 2: Run lint check**
  Run: `bun run lint`
  Expected: Clean pass without interactive prompts.
- [ ] **Step 3: Run production build**
  Run: `bun run build`
  Expected: Next.js 15 builds production bundle cleanly, generating static pages.
