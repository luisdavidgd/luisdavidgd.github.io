---
title: "Vercel vs Netlify for Astro sites"
pubDate: 2025-08-19
author: "Luda"
tags: ["astro", "vercel", "netlify", "deployment", "ssr", "static-hosting"]
categories: ["Astro", "Deployment", "Static Hosting"]
description: "Notes on how Vercel and Netlify handle Astro, comparing static output and SSR capabilities."
heroImage: "@assets/images/blog/vercel-netlify.jpg"
---

Astro is flexible: you can deploy it fully static or with SSR enabled.  
Vercel and Netlify are both popular choices, but they handle Astro in slightly different ways.

## Vercel

Vercel is tightly integrated with frameworks that use SSR by default (Next.js, Nuxt, etc.).  
When you deploy Astro there:

- **Static builds**: work flawlessly. Just set the `static` adapter, and everything deploys fast on their CDN.  
- **SSR builds**: also supported, but the adapter is still young and not as seamless as with Next.js.  
- **Preview deployments**: every branch gets its own live URL.  

The catch: cold starts are noticeable if you enable serverless functions for SSR.

## Netlify

Netlify is more focused on static-first projects, so Astro feels very at home here:

- **Static builds**: zero issues. The default adapter works out of the box.  
- **SSR builds**: supported via Netlify Functions, but with some limitations compared to a true backend.  
- **Redirects and rewrites**: easy to configure with a `_redirects` file, which helps with routing quirks.  

Netlify’s build UI is beginner-friendly, and logs are very transparent.

## Static output vs SSR

- If you stick to Astro’s static output, both hosts perform almost identically.  
- If you want **SSR features** (dynamic content, APIs), Vercel feels more mature but heavier, while Netlify is simpler but with a lighter SSR layer.  

## Takeaways

- For pure static Astro sites → **either platform works great**.  
- For SSR experiments → **Vercel has the edge**, though Netlify is catching up.  
- For a portfolio like this → **static is enough**, so the choice comes down to personal preference.  
