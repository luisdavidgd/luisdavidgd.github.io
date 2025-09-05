---
title: "React, Vue, and Svelte on GitHub Pages: what static hosting really means"
pubDate: 2025-08-11
author: "Luda"
tags: ["react", "vue", "svelte", "github-pages", "routing", "ssr"]
categories: ["Frontend Frameworks", "Static Hosting"]
description: "Comparing how React, Vue, and Svelte behave when deployed to a purely static hosting environment like GitHub Pages."
heroImage: "@assets/images/blog-placeholder-1.jpg"
---

When you put modern frameworks on GitHub Pages, you quickly realize the difference between **static hosting** and **server rendering**.

## React and Vue on Pages

Both React (with React Router) and Vue (with Vue Router) expect a server that knows how to respond to any route.  
On GitHub Pages, that server does not exist — it only serves files that physically exist in your repository.  

That means `/about` or `/blog/123` will fail with a **404**, unless you use one of these workarounds:

- Enable **hash routing** (`/#/about`) so the browser never requests `/about` from the server.  
- Or, configure a catch-all redirect (`404.html`) that loads your app and lets the router take over.  

Neither is elegant, but they are necessary if you want React or Vue SPAs to survive on static-only hosting.

## Svelte on Pages

Svelte (and especially SvelteKit with its static adapter) can build routes directly into HTML files.  
So `/about` becomes `about/index.html`, which GitHub Pages can serve without extra tricks.  

This makes Svelte feel much closer to “native static” hosting. It avoids the awkwardness of hash URLs and just works like a traditional site.

## What static hosting really means

Static hosting like GitHub Pages only serves **files**.  
There is no runtime server, no API routes, no SSR — just HTML, CSS, and JavaScript.  

Frameworks that assume a server will hit walls. Frameworks that prioritize pre-rendering thrive.

## Closing thoughts

- Static hosting is simple but restrictive.  
- Frameworks designed for SPA (single-page apps) need extra tricks.  
- Astro and Svelte feel closer to “native static.”  

If you want the smoothest deployment to GitHub Pages, choose a framework that can render to plain HTML at build time.
