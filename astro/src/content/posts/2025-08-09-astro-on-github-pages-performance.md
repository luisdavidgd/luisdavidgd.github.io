---
title: "Astro on GitHub Pages: performance in a static-only world"
pubDate: 2025-08-09
author: "Luda"
tags: ["astro", "github-pages", "performance", "static-site-generation", "portfolio"]
categories: ["Astro", "Web Performance", "Static Hosting"]
description: "Deploying Astro to GitHub Pages to see how it performs without any server-side rendering or edge functions."
heroImage: "@assets/images/blog/astro-github-pages.jpg"
---

GitHub Pages is a very basic hosting service: no server-side rendering, no edge functions, no CDN tricks.  
But that makes it the perfect lab to test how far Astro’s **static-first philosophy** can go.

## Why GitHub Pages?

I chose GitHub Pages because it is free, simple, and almost universally accessible.  
There’s no backend to configure, no server to manage, and the constraints are clear: you only get static files.  

For frameworks that depend on SSR, that’s a limitation. For Astro, it’s an opportunity — since most pages are rendered to static HTML at build time, it plays right into Astro’s strengths.

## The deployment process

Deployment turned out to be very straightforward:

1. Update `astro.config.mjs` to use the `static` adapter.
2. Run `npm run build` to generate the `/dist` folder.
3. Push the `dist` output to a `gh-pages` branch (I used GitHub Actions for automation).
4. Enable GitHub Pages from repository settings.

Within minutes, the site was live — no configuration headaches, no hidden costs.

## Measuring performance

The first thing I checked was Lighthouse. The results were nearly perfect:

- Performance: **99–100**
- SEO: **100**
- Best Practices: **100**

Even without a CDN, pages felt instant. Static HTML with almost zero JavaScript meant the browser had very little work to do.

## Results and takeaways

- **Astro remains fast even on barebones hosting.**  
- **GitHub Pages is viable for small portfolios and blogs.**  
- **Performance is not just about the platform — it’s baked into the framework.**

In short, if you want to showcase what Astro can do, GitHub Pages is a surprisingly good stage.
