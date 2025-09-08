---
title: "Migrating from cPanel to Astro: escaping the static past"
pubDate: 2025-08-05
author: "Luda"
tags: ["astro", "cPanel", "static-sites", "developer-experience"]
categories: ["Astro", "Static Hosting"]
description: "How I moved away from cPanel and discovered Astro while looking for a better way to handle static sites."
heroImage: "@assets/images/blog/cpanel-to-astro.jpg"
---

For years, my websites lived inside **cPanel** — a place where everything was manual:  
Updating them usually meant uploading files via FTP, dealing with outdated PHP versions, and hoping nothing broke.  
It worked, but it always felt clunky and old-fashioned.

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

When I started looking for alternatives, I explored several static site generators. That’s when I found **Astro**.  
What caught my eye was how Astro delivers plain HTML by default, while still letting you use frameworks like React or Svelte 
if you need them.

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
Within minutes, I had a site running locally with a cleaner structure.

The experience was refreshing: content in Markdown files, layouts as components, and deployment through Git instead of FTP.  
It wasn’t about chasing trends — it was about finally having a workflow that felt modern and maintainable.

Astro turned out to be a great fit for simple, **database-free projects**.  
That’s how I first discovered it, and it’s what led me to use it for this very site.

## Lessons learned

- **Static-first beats static-only**: Astro generates static files but still lets you sprinkle in interactivity where you need it.  
- **Developer experience matters**: going from FTP to Git-based deploys is a world of difference.  
- **Performance is a feature**: Astro gives it by default, not as an afterthought.  
- **Not for everything**: Astro was perfect for migrating my static sites with PHP includes,  
  but for full WordPress sites the migration path wasn’t as straightforward.  