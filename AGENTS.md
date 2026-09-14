# AGENTS.md

Instructions for AI agents working on this repository.

---

## Project overview

This is a **personal developer digital garden** — a website for Luis David Gallo Dawson (`luisdavidgd.github.io`). It's an Astro-based site deployed on GitHub Pages.

**Read `prompt.md` and `PLAN.md` before making changes.** They define the desired identity and implementation plan.

---

## Language policy (binding)

| Context | Language |
|---------|----------|
| **Documentation** (`PLAN.md`, `AGENTS.md`, `README.md`, `docs/`, commit messages, PRs) | English |
| **Code** (identifiers, file names, comments, logs, error messages) | English |
| **User-visible strings** (page copy in `.astro` views, form labels/placeholders, alerts/toasts, `alt` texts, mail subject/body) | Spanish (`es`) |
| **Chat replies** | Match the language of the user's last message |

When citing code in chat, always include `file:line`.

---

## Tech stack

- **Framework:** Astro v5 (SSG, static generation)
- **Runtime JS:** Alpine.js (sparingly)
- **Language:** TypeScript
- **Styling:** Hand-written CSS with custom properties (no Tailwind)
- **Content:** Astro content collections with Zod schemas
- **Deployment:** GitHub Pages via GitHub Actions

---

## Repository structure

```
/                     → Monorepo root
├── astro/            → Primary site (Astro)
│   ├── src/
│   │   ├── components/
│   │   │   ├── sections/    → Page sections (Nav, Footer, Hero, etc.)
│   │   │   ├── landing/     → Homepage-specific components
│   │   │   ├── ui/          → Reusable UI (Button, Badge, Card, etc.)
│   │   │   └── ...
│   │   ├── content/
│   │   │   ├── posts/       → Blog posts (Markdown)
│   │   │   └── cheatsheets/ → Cheatsheets (Markdown)
│   │   ├── layouts/         → Page layouts
│   │   ├── pages/           → Routes
│   │   ├── styles/          → CSS files
│   │   ├── data/            → TypeScript data files
│   │   └── lib/             → Utility functions
│   ├── public/              → Static assets
│   └── package.json
├── misc/             → Legacy files
├── prompt.md         → Design brief
├── PLAN.md           → Implementation plan
└── AGENTS.md         → This file
```

---

## Rules

### Do

- Read existing code before writing new code. Follow existing patterns and conventions.
- Use Astro components (`.astro`) for static content. Use Alpine.js only when interactivity is needed.
- Keep the site lightweight. No new frameworks, heavy dependencies, or external services without clear justification.
- Use semantic HTML (`<nav>`, `<main>`, `<article>`, `<section>`, `<header>`, `<footer>`).
- Ensure accessibility (proper headings hierarchy, alt texts, keyboard navigation, color contrast).
- Write user-visible strings in Spanish (page copy, labels, placeholders, alerts).
- Write all code, comments, and identifiers in English.
- Run `npm run build` in the `astro/` directory to verify changes compile.
- Check that dark/light mode works after visual changes.

### Don't

- Don't add Tailwind CSS, CSS frameworks, or heavy UI libraries.
- Don't add analytics, tracking, or external services.
- Don't add comment systems, newsletters, or social feeds.
- Don't use placeholder/fake data. If real data isn't available, leave the field empty or remove the section.
- Don't add emojis to code or documentation unless explicitly asked.
- Don't commit without running the build first.

---

## Content collections

### Blog posts (`astro/src/content/posts/`)

```yaml
title: string          # Required
pubDate: date          # Required
description: string    # Required
author: string         # Default: "Luda"
categories: string[]   # Required
tags: string[]         # Required
heroImage?: image      # Optional
image?: image          # Optional (legacy)
```

### Cheatsheets (`astro/src/content/cheatsheets/`)

```yaml
title: string          # Required
pubDate: date          # Required
author: string         # Default: "Luda"
tags: string[]         # Required
categories: string[]   # Required
description: string    # Required
```

---

## CSS conventions

- Use CSS custom properties defined in `src/styles/base/variables.css`.
- Follow the `--color-*` naming convention for new variables.
- Component styles go in scoped `<style>` blocks in `.astro` files.
- Global styles go in `src/styles/components/`.
- Use BEM-ish class naming (`.card`, `.card-title`, `.card-description`).
- Dark mode: use `.dark` class on `<html>` element.

---

## Common commands

```bash
# Development (from astro/ directory)
npm run dev

# Build
npm run build

# Preview production build
npm run preview
```

---

## Common tasks

### Adding a new blog post

1. Create `astro/src/content/posts/YYYY-MM-DD-slug.md`
2. Add required frontmatter (title, pubDate, description, categories, tags)
3. Write content in Markdown
4. Run build to verify

### Adding a new cheatsheet

1. Create `astro/src/content/cheatsheets/slug.md`
2. Add required frontmatter
3. Run build to verify

### Modifying navigation

Edit `astro/src/components/sections/Navigation.astro`. Only one navigation component should be used across the site.

### Modifying the homepage

Edit `astro/src/pages/index.astro` and related components in `astro/src/components/landing/`.

### Changing CSS variables

Edit `astro/src/styles/base/variables.css`. Both light and dark mode values must be updated together.

---

## Commit conventions

- Use conventional commits: `feat:`, `fix:`, `refactor:`, `docs:`, `style:`, `chore:`
- Keep commits focused on a single change
- Write commit messages in English
- Example: `feat: add notes content type to writing section`

---

## Deployment

Changes pushed to `main` trigger GitHub Actions which:
1. Build the Astro site
2. Deploy to GitHub Pages

Always verify the build passes locally before pushing.
