I want to rethink the identity of this website.

This is my personal developer site, hosted at `luisdavidgd.github.io`.

## Context

I already have a full-time job, so this website is **not primarily a portfolio for finding employment, attracting recruiters, or selling freelance services**.

Software development is also something I enjoy as a hobby. I want this site to become my personal corner of the internet: a **developer digital garden** where I can publish things I build, things I learn, experiments, technical notes, and ideas.

The site already exists. Before proposing changes, explore the repository carefully and understand:

* the current architecture and stack
* the existing pages and navigation
* the current visual identity
* existing content and blog posts
* reusable components
* how content is structured
* deployment constraints
* anything worth preserving

Do not start implementing changes yet.

## Desired identity

I want to move away from the traditional developer portfolio identity:

* no "hire me" positioning
* no recruiter-oriented messaging
* no exaggerated claims about expertise
* no generic SaaS/freelancer marketing language
* no need to present a fixed technology stack as my professional identity

Instead, think of the site as a **Digital Garden / Personal Dev Site**.

It should feel like a place that can naturally evolve over many years.

Possible content includes:

* personal software projects
* experiments and prototypes
* technical notes
* things I recently learned
* longer technical articles when I feel like writing them
* tools and technologies I'm currently exploring
* small useful things I've built
* unfinished ideas
* links/resources worth keeping
* occasional non-work software thoughts

The distinction between polished "articles" and smaller "notes" may be useful.

## Personality

I want the site to feel:

* personal
* technical
* curious
* minimal
* calm
* slightly nerdy
* opinionated without trying to look like a personal brand
* intentionally maintained by a developer, not generated from a generic portfolio template

It can have personality and small playful details, but it should remain clean and pleasant to read.

Avoid turning "Digital Garden" into a visual gimmick. I don't necessarily want literal plants, leaves, green colors, or garden illustrations. The garden is primarily a metaphor for evolving knowledge and projects.

## Things to reconsider

Analyze whether the existing concepts should remain, change, or disappear entirely:

* homepage hero
* skills/technology sections
* portfolio/projects
* blog
* About page
* contact CTA
* navigation
* footer
* social links

For example, a hero could communicate something closer to:

"Hi, I'm Luis. This is my corner of the internet."

or

"Things I build, things I learn, and notes along the way."

These are examples of direction, not copy that must be used.

## Information architecture

Explore whether concepts such as these make sense:

* `/`
* `/projects`
* `/notes`
* `/posts` or `/writing`
* `/about`

But don't assume this structure is correct. Recommend something better if the existing content suggests it.

Also consider how a digital garden could distinguish content maturity, for example:

* seed / growing / evergreen
* draft / note / article
* recently updated
* currently exploring

Only introduce these concepts if they genuinely improve the site. Avoid unnecessary taxonomy.

## Visual direction

Evaluate the existing design rather than blindly replacing it.

Think about typography, spacing, content density, navigation, code presentation, dark/light mode, subtle interactions, and how the site could develop a recognizable personality while staying simple.

Prefer timeless and maintainable design over trendy effects.

The website should work particularly well for reading technical content.

## Technical philosophy

Keep the site lightweight.

Prefer:

* static generation where possible
* minimal JavaScript
* semantic HTML
* accessibility
* excellent performance
* simple architecture
* maintainable components
* good Markdown/MDX authoring experience

Do not add frameworks, dependencies, databases, CMSs, analytics, or services unless there is a clear reason.

## Your task

For now, **do not implement anything**.

Explore the repository and then help me brainstorm the new identity.

Give me:

1. Your assessment of what the site currently is.
2. What you would preserve.
3. What feels inconsistent with the new Digital Garden direction.
4. A proposed identity and design philosophy.
5. A proposed information architecture.
6. A homepage concept, section by section.
7. Recommendations for Projects, Notes/Writing, and About.
8. Visual/design directions worth exploring.
9. Features that could make the site feel personal without becoming overengineered.
10. Things you explicitly recommend removing.
11. A phased migration plan from the current site to the new identity.

For important decisions, explain the trade-offs and give me alternatives where appropriate.

Treat this as a collaborative design/architecture brainstorming session. Challenge my assumptions if you think there is a better direction.

Do not write code yet. I want us to agree on the identity and structure first, and implementation can happen afterward.
