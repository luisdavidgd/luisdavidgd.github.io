---
title: "Deploying Astro to Cloudflare Pages"
pubDate: 2025-08-16
author: "Luda"
tags: ["astro", "cloudflare", "deployment", "static-hosting"]
categories: ["Astro", "Deployment", "Static Hosting"]
description: "A short log of deploying an Astro site to Cloudflare Pages, with pros and quirks compared to GitHub Pages."
heroImage: "@assets/images/blog-placeholder-1.jpg"
---

Cloudflare Pages feels like the “next level” after GitHub Pages.  
It’s still free and static-first, but adds a global CDN and some flexibility that GitHub doesn’t offer.

## Setup

Deployment was almost effortless:

1. Push the Astro repo to GitHub.  
2. Connect Cloudflare Pages to the repo.  
3. Use the default build command: `npm run build`.  
4. Set `dist` as the output directory.  

Within minutes, the site was live — no custom Actions, no extra configuration.

## Pros

- **Global CDN**: assets load fast everywhere.  
- **Automatic HTTPS** with no hassle.  
- **Preview builds** on every branch, which is great for testing.  
- **Cleaner routing**: `/about` works without hacks, unlike GitHub Pages.  

## Quirks

- Pages is static by default, but you can add **Functions** (serverless). For this project, I kept it static.  
- Build times are slightly longer than GitHub Pages, though not by much.  
- Requires linking your domain through Cloudflare DNS if you want custom domains — smooth if you’re already using it, extra steps if not.  

## Takeaways

Compared to GitHub Pages, Cloudflare Pages feels more modern and production-ready.  
Astro runs just as fast here, but you also get the safety net of a CDN and better routing.  

For small portfolios, either host works. For anything larger, Cloudflare Pages is a clear step up.
