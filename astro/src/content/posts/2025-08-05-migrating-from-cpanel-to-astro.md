---
title: "Migrating from cPanel to Astro: escaping the static past"
pubDate: 2025-08-05
author: "Luda"
tags: ["astro", "cPanel", "static-site-generation", "jamstack", "developer-experience"]
categories: ["Astro", "Static Hosting"]
description: "How moving away from old cPanel hosting led me to discover Astro and embrace the modern Jamstack."
heroImage: "@assets/images/blog-placeholder-1.jpg"
---

For years, my websites lived inside **cPanel** — a place where everything was manual:  
FTP uploads, fragile PHP pages, and the occasional 500 error that seemed to appear for no reason.  
It worked, but it always felt heavy and outdated.  

I started to wonder: if the web has evolved so much, why was I still dragging sites through the same early-2000s workflow?

## Life inside cPanel

Most of my sites were **static pages stitched together with PHP**.  
I didn’t use PHP for complex logic, just to keep things DRY:  
`include 'header.php';`, `include 'footer.php';` — a poor man’s templating system.  

Deploying them with cPanel often meant:

- Zipping files locally, uploading via FTP, and praying the transfer didn’t break.  
- Managing a patchwork of PHP “partials” and HTML files.  
- Hoping the server’s outdated PHP version didn’t kill something.  
- No real version control, no CI/CD, just copy-paste and cross your fingers.  


## Discovering Astro

In the search for a better way, I stumbled upon **Astro**.  
What caught my attention was Astro’s **static-first philosophy**:  

- Ship **zero JavaScript** by default.  
- Keep what works from modern frameworks (React, Vue, Svelte, etc.).  
- Generate pure static HTML where possible, but hydrate components only if needed.  

That sounded like the exact opposite of my cPanel experience: lightweight, modern, and fast.

## My first migration attempt

To test the waters, I decided to rebuild one of my old static sites in Astro.  

```bash
# start a new Astro project
npm create astro@latest my-portfolio
cd my-portfolio
npm install
npm run dev
```
Within minutes, I had a site running locally with a cleaner structure than anything I’d managed with cPanel in years.

Migrating content was simple: Markdown files became blog entries, layouts were just `.astro` components, and global styles worked without hacks.

## The difference in performance

The first Lighthouse report I ran on the Astro version blew my mind:  
Astro served mostly static HTML, so pages loaded instantly compared to the old PHP site.  

| Metric        | cPanel site | Astro build |
|---------------|-------------|-------------|
| Performance   | ~65         | 99–100      |
| SEO           | 70          | 100         |
| Best Practices| 80          | 100         |

It was clear: Astro wasn’t just “modern,” it was **faster, cleaner, and easier**.


## Lessons learned

- **Static-first beats static-only**: Astro generates static files but still lets you sprinkle in interactivity where you need it.  
- **Developer experience matters**: going from FTP to Git-based deploys is a world of difference.  
- **Performance is a feature**: Astro gives it by default, not as an afterthought.  
- **Not for everything**: Astro was perfect for migrating my static sites with PHP includes,  
  but for full WordPress sites the migration path wasn’t as straightforward.  