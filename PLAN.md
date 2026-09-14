# Digital Garden Redesign Plan

> Personal developer site for Luis David Gallo Dawson  
> `luisdavidgd.github.io`

---

## 1. Current State Assessment

### What the site is

A personal developer website built with **Astro v5** (SSG) + **Alpine.js**, deployed on **GitHub Pages**. It's a monorepo that also hosts React, Svelte, and Vue demo apps under `/demos/` (to be removed).

The site currently sits between two identities: a **traditional developer portfolio** (inherited from a template) and the content direction described in `prompt.md` (a personal digital garden).

### What works well

- **Solid technical foundation:** Astro content collections with Zod schemas, proper dark mode, RSS feed, reading time calculation, tag/category taxonomy, pagination, prev/next navigation.
- **Genuine blog content:** 9 posts forming a cohesive narrative series about the author's stack evolution. The tone is personal, educational, and honest.
- **Cheatsheets section:** 4 quick reference notes — useful content type that fits the digital garden concept.
- **Lightweight philosophy:** Minimal dependencies (Astro + Alpine.js only), hand-written CSS, no heavy frameworks. This aligns perfectly with the desired direction.
- **Working dark/light mode:** CSS class-based toggle with localStorage persistence.

### What needs to change

| Area | Current state | Issue |
|------|---------------|-------|
| **Site metadata** | "Personal Blog & Portfolio", "Growth engineering, analytics, and product marketing notes" | Completely outdated and inaccurate |
| **Footer CTA** | "Want to work with me?", "Let's build something together!" | Recruiter-oriented, conflicts with digital garden identity |
| **Navigation** | Home, Portfolio, About, Blog | "Portfolio" implies job-seeking |
| **About page** | GitHub stats, work experience timeline with placeholder data, education with placeholders | Feels like a resume, not a personal page |
| **Hero section** | Generic gradient title with "Luis Gallo" | Could communicate the garden concept better |
| **Skills/Technology section** | 6 skill cards + logo carousel | Portfolio convention, not needed for a garden |
| **Two navigation systems** | `Navigation.astro` and `Header.astro` are different | Inconsistent across pages |
| **Two theme toggle systems** | `ThemeIcon.astro` and `ThemeToggle.astro` | Different implementations, should unify |
| **CSS variable naming** | Mixed: `--text-color` vs `--color-text-primary` | Inconsistent, hard to maintain |
| **Template remnants** | Links to `guihubie/free-astro-template`, generic copy | Should be cleaned up |
| **Placeholder data** | Fake work experience ("Acme Cloud", "FinchPay") and education | Should be removed or replaced with real data |
| **Cheatsheets not in nav** | `/cheatsheets/` section exists but isn't linked | Should be discoverable |
| **Spanish comments in CSS** | Some files have Spanish comments | Code should be in English per language policy |

---

## 2. Proposed Identity & Design Philosophy

### Identity

**"Luis David Gallo Dawson's digital garden"** — a personal corner of the internet where a developer from Lima, Peru publishes things he builds, learns, and explores.

### Personality traits

- **Personal** — it's clearly maintained by one person, not a team or brand
- **Technical** — content is about software development, not marketing
- **Curious** — shows ongoing exploration, not just finished products
- **Minimal** — clean, calm, no visual noise
- **Slightly nerdy** — personality shows through details, not through flashy design
- **Intentionally maintained** — feels hand-crafted, not template-generated

### Design principles

1. **Content-first:** Typography and spacing should optimize for reading technical content.
2. **Timeless over trendy:** No parallax, no heavy animations, no glassmorphism. Clean grids, good type, subtle interactions.
3. **Lightweight by default:** Static generation, minimal JS, semantic HTML, accessible.
4. **Evolvable:** The structure should accommodate new content types without restructuring.
5. **Recognizable but not branded:** A consistent visual language without feeling like a "personal brand."

---

## 3. Information Architecture

### Proposed structure

```
/                          → Home (garden overview)
/projects                  → Projects showcase
/blog                      → Blog posts (existing, keep as-is)
/cheatsheets               → Quick reference notes (existing)
/about                     → About Luis
```

**Decisions made:**
- `/blog` stays as `/blog` (no rename to `/writing/`) — avoids unnecessary refactoring, RSS and internal links remain intact.
- `/demos/` routes removed — demo apps (React, Svelte, Vue) will be deleted from the repo.
- No separate `/notes` route for now — can be added later if needed.

### Additional discovery

- **Tags** on all content (keep existing system)
- **"Currently exploring"** section on home page (manually curated, not automated)

### Routes to remove

| Route | Reason |
|-------|--------|
| `/portfolio` | Replaced by `/projects` with different framing |
| `/demos/*` | Demo apps removed from repo |
| `/blog/author/[slug]` | Only one author, unnecessary |
| `/blog/category/[category]` | Tags are sufficient for discovery |

---

## 4. Homepage Concept

### Section-by-section

#### 4.1 Hero

Replace the current generic hero with a personal, calm introduction.

```
┌─────────────────────────────────────────────┐
│                                             │
│  Hi, I'm Luis.                              │
│  This is my corner of the internet.         │
│                                             │
│  Things I build, things I learn,            │
│  and notes along the way.                   │
│                                             │
│  [Projects]  [Blog]  [Cheatsheets]          │
│                                             │
└─────────────────────────────────────────────┘
```

- No gradient text (or very subtle)
- System font, good size hierarchy
- The three CTA buttons link to main sections
- Clean, calm, personal

#### 4.2 Currently Exploring

A small curated section showing what's currently interesting the author.

```
┌─────────────────────────────────────────────┐
│ Currently exploring                         │
│                                             │
│ [Astro islands] [Cloudflare Workers] [Hono] │
│                                             │
└─────────────────────────────────────────────┘
```

**Data source:** `src/data/exploring.ts`

```ts
export const exploring = [
  { name: "Astro islands", url: "/blog/astro-on-github-pages" },
  { name: "Cloudflare Workers", url: "https://workers.cloudflare.com" },
  { name: "Hono", url: "https://hono.dev" },
];
```

- Manually maintained (2-4 items)
- Simple pill/chip format
- Can link to internal posts or external resources
- No automation, no content dependency

#### 4.3 Latest from the blog

Show the 3 most recent posts from `/blog/`.

```
┌─────────────────────────────────────────────┐
│ Latest from the blog                        │
│                                             │
│ ┌──────────┐ ┌──────────┐ ┌──────────┐     │
│ │ Post     │ │ Post     │ │ Post     │     │
│ │ card     │ │ card     │ │ card     │     │
│ └──────────┘ └──────────┘ └──────────┘     │
│                                             │
│                        See all posts →      │
└─────────────────────────────────────────────┘
```

- Use existing `PostCard` component (simplified)
- "See all posts →" link at bottom

#### 4.4 Latest Projects

Show 3-4 recent or featured projects.

```
┌─────────────────────────────────────────────┐
│ Projects                                     │
│                                             │
│ ┌──────────┐ ┌──────────┐ ┌──────────┐     │
│ │ Project  │ │ Project  │ │ Project  │     │
│ │ card     │ │ card     │ │ card     │     │
│ └──────────┘ └──────────┘ └──────────┘     │
│                                             │
│                        See all projects →   │
└─────────────────────────────────────────────┘
```

- Simplified project cards (name, description, tech, links)
- "See all projects →" link at bottom

#### 4.5 Footer

Replace the recruiter CTA with something more personal.

```
┌─────────────────────────────────────────────┐
│                                             │
│ Luis David Gallo Dawson                     │
│ Lima, Peru                                  │
│                                             │
│ [GitHub]  [RSS]  [Blog]                    │
│                                             │
│ © 2025 Luis David Gallo Dawson             │
└─────────────────────────────────────────────┘
```

- No "Want to work with me?" CTA
- Simple identity + location
- Social links (GitHub, RSS)
- Copyright

---

## 5. Projects Page

### Concept

Not a "portfolio" — a collection of things built, experiments, and explorations.

### Structure

```
/projects

Featured Projects
┌─────────────────────────────────────────────┐
│ ┌─────────────────────────────────────────┐ │
│ │ Project name                           │ │
│ │ Description                            │ │
│ │ [tech] [tech] [tech]                   │ │
│ │ [Live] [Source]                         │ │
│ └─────────────────────────────────────────┘ │
└─────────────────────────────────────────────┘

All Projects
┌──────────┐ ┌──────────┐ ┌──────────┐
│ Project  │ │ Project  │ │ Project  │
│ card     │ │ card     │ │ card     │
└──────────┘ └──────────┘ └──────────┘
```

### Project data model

**File:** `src/data/projects.ts`

```ts
export interface Project {
  name: string;
  description: string;
  tech: string[];
  url?: string;        // live demo
  source?: string;     // GitHub repo
  featured?: boolean;
  status?: "active" | "archived" | "experiment";
  date?: string;
}

export const projects: Project[] = [
  {
    name: "Project name",
    description: "Short description",
    tech: ["Astro", "TypeScript"],
    url: "https://example.com",
    source: "https://github.com/luisdavidgd/project",
    featured: true,
    status: "active",
  },
  // ...
];
```

### Content to migrate

From the existing `Projects.astro` component (7 projects), clean up and restructure as a content collection or data file.

---

## 6. Blog Page (kept as-is)

### Decision

Keep `/blog/` routes unchanged. No rename to `/writing/`. This avoids:
- Refactoring all internal links
- Updating RSS feed paths
- Breaking existing URLs

The blog structure already works well. Focus changes on the homepage, projects, and about page instead.

---

## 7. About Page

### Concept

Personal, not professional. No resume elements, no GitHub stats widgets, no placeholder data.

### Structure

```
/about

┌─────────────────────────────────────────────┐
│                                             │
│  [Avatar]  Luis David Gallo Dawson          │
│            Lima, Peru                       │
│                                             │
│  Developer. Interested in [interests].      │
│  I build things, learn in public, and       │
│  occasionally write about it.               │
│                                             │
│  Currently working at [company] as          │
│  [role].                                    │
│                                             │
│  When I'm not coding, I [hobbies].          │
│                                             │
│  ─────────────────────────────              │
│                                             │
│  Where to find me                           │
│  [GitHub]  [X/Twitter]  [RSS]              │
│                                             │
└─────────────────────────────────────────────┘
```

### What to remove

- GitHub stats widget (it's a portfolio convention)
- Work experience timeline with placeholder data
- Education section with placeholder data
- Skills grid

### What to keep

- Avatar image (`/public/img/profile.jpg`)
- Real bio from `AboutMe.astro` (Lima, Peru, Universidad Ricardo Palma)
- Social links

---

## 8. Visual/Design Directions

### Typography

- **Keep system font stack** (`system-ui, sans-serif`) — it's fast, accessible, and timeless
- Alternatively, consider **Atkinson Hyperlegible** (already referenced in `BaseHead.astro` but commented out) — designed for readability, free, distinctive personality
- Establish clear type scale: h1 (clamp), h2, h3, body, small, code

### Color

- **Keep the blue accent** (`#2563eb`) — it's clean and works well
- Consider slightly warming the palette for a calmer feel:
  - Light bg: `#fafafa` or `#f8f9fa` (instead of pure white)
  - Dark bg: keep `#000` or very dark gray `#0a0a0a`
- Ensure sufficient contrast ratios (WCAG AA minimum)

### Spacing

- Establish a consistent spacing scale (4px base: 4, 8, 12, 16, 24, 32, 48, 64)
- Increase content width slightly for better reading (current 72rem is good)

### Components to keep

- `PostCard` (simplified)
- `Badge` (for tags)
- `Button` (3 variants)
- `ThemeToggle`
- `Pagination`
- `FormattedDate`
- `BaseHead`

### Components to remove or replace

- `HeroSection` → replace with simpler, personal hero
- `SkillsSection` → remove entirely
- `Carousel` → remove (logo carousel is portfolio convention)
- `GlowLineSeparator` → replace with simpler separator
- `ArrowSeparator` → remove (too flashy)
- `ContactModal` → remove (no need for contact form on a garden)
- `ShareButtons` → keep but simplify (just copy link + HN)

### CSS cleanup

- Unify CSS variable naming: adopt `--color-*` convention
- Remove undefined variable references (`--accent-rgb`, `--foreground`, etc.)
- Consolidate the two theme toggle systems into one
- Translate Spanish comments to English

---

## 9. Features for Personal Feel

### Without overengineering

| Feature | Description | Complexity |
|---------|-------------|------------|
| **"Currently exploring"** | Manually curated chips on homepage | Low |
| **Reading time** | Already implemented, keep it | Done |
| **Last updated date** | Show on notes that evolve | Low |
| **Simple tag system** | Already implemented, keep it | Done |
| **RSS feed** | Already implemented, keep it | Done |
| **404 page** | Already exists, update copy | Low |
| **System font** | Fast, personal, no external deps | Done |
| **Dark/light mode** | Already implemented, unify implementation | Medium |

### Do NOT add

- View counters or analytics
- Newsletter signup
- Comment system
- Social media feeds
- "Powered by" badges
- Animated page transitions
- Complex filtering/search (tags are enough for now)

---

## 10. Things to Remove

| Item | Reason |
|------|--------|
| **Demo apps** (`react/`, `svelte/`, `vue/` dirs + `/demos/*` routes) | Not part of digital garden identity, adds deployment complexity |
| Skills/Technology section | Portfolio convention, not needed |
| Logo carousel | Portfolio convention |
| "Want to work with me?" CTA | Recruiter-oriented |
| GitHub stats widget | Portfolio convention |
| Placeholder work experience | Fake data, misleading |
| Placeholder education data | Fake data, misleading |
| Contact modal/form | Not needed for a garden |
| `ContactModal.astro` component | Removing contact form |
| `/blog/author/[slug]` route | Only one author, unnecessary |
| `WorkExperience.astro` | Placeholder data |
| `Studies.astro` | Placeholder data |
| `AboutMe.astro` (as currently structured) | Replace with simpler about content |
| Template GitHub link (`guihubie/free-astro-template`) | Template remnant |
| Outdated site metadata | "Growth engineering" description is wrong |

---

## 11. Phased Migration Plan

### Phase 1: Clean up demos and technical debt ✅

**Goal:** Remove demo apps and fix existing issues before restructuring.

- [x] Delete `react/`, `svelte/`, `vue/` directories from repo
- [x] Remove `/demos/*` routes from Astro
- [x] Update GitHub Actions workflow to stop building demos
- [x] Update root `package.json` scripts (remove demo-related commands)
- [x] Unify CSS variable naming convention (`--color-*` throughout)
- [x] Remove undefined CSS variable references
- [x] Consolidate theme toggle into single implementation
- [x] Choose one navigation component (remove the other)
- [x] Translate Spanish CSS comments to English
- [x] Update site metadata (title, description)
- [x] Remove template remnants (GitHub link to template repo)

### Phase 2: Identity shift (content restructure) ✅

**Goal:** Restructure content and routes to match the garden concept.

- [x] Create `/projects/` route (replace `/portfolio`)
- [x] Create `src/data/projects.ts` with project data
- [x] Create `src/data/exploring.ts` with curated exploring list
- [x] Update navigation links (remove "Portfolio", add "Projects")
- [x] Update all internal links across the site

### Phase 3: Homepage redesign ✅

**Goal:** Replace portfolio homepage with garden overview.

- [x] Replace hero section with personal intro
- [x] Add "Currently exploring" section
- [x] Replace skills section with latest blog posts + projects
- [x] Simplify footer (remove CTA, keep identity + social links)
- [x] Remove `SkillsSection.astro` and `Carousel.astro`

### Phase 4: About page rewrite ✅

**Goal:** Personal page, not resume.

- [x] Remove GitHub stats widget
- [x] Remove placeholder work/education data
- [x] Write genuine about content
- [x] Simplify component structure

### Phase 5: Projects page ✅

**Goal:** Replace portfolio with project collection.

- [x] Restructure 7 existing projects with proper data model
- [x] Create project card component
- [x] Mark featured projects
- [x] Add project status (active/archived/experiment)

### Phase 6: Polish ✅

**Goal:** Visual refinements and consistency.

- [x] Review and refine typography scale
- [x] Check color contrast ratios
- [x] Test dark/light mode consistency
- [x] Review mobile responsiveness
- [x] Verify RSS feed works correctly
- [x] Update 404 page copy
- [x] Remove unused components

---

## 12. Decisions Made

| Decision | Choice | Rationale |
|----------|--------|-----------|
| `/blog` vs `/writing/` | **Keep `/blog`** | Avoids refactoring, RSS paths, and broken URLs |
| Demo apps | **Remove entirely** | Not part of garden identity, adds deployment complexity |
| `/notes` route | **Not implementing now** | Can add later if needed |
| Cheatsheets | **Keep as separate section** | Already works, useful content type |
| Font | **Keep system font** | Fast, zero dependencies, personal feel through layout not typography |
| "Currently exploring" | **Curated list** | Simple, intentional, no automation needed. Data file with 3-4 items, can link to internal posts or external resources |
| Project data | **TypeScript data file** | Projects are structured data (name, description, tech, links), not markdown content. Consistent with existing pattern |

---

*This plan is a living document. Update it as decisions are made and implementation progresses.*
