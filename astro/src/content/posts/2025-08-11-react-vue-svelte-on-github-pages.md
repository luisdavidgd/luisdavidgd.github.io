---
title: "React, Vue, and Svelte on GitHub Pages: what static hosting really means"
pubDate: 2025-08-11
author: "Luda"
tags: ["react", "vue", "svelte", "github-pages", "routing", "static-hosting"]
categories: ["Frontend Frameworks", "Static Hosting"]
description: "Trying out React, Vue, and Svelte on GitHub Pages, and seeing how each one adapts to a static-only environment."
heroImage: "@assets/images/blog/frameworks-github-pages.jpg"
---

Playing with different frameworks on **GitHub Pages** quickly shows the difference between static hosting and server rendering.

## React and Vue

When I deployed small demos with React (React Router) and Vue (Vue Router), I hit the classic issue:  
GitHub Pages doesn’t know what to do with routes like `/about` or `/blog/123`.  
It only serves files that exist in the repository, so anything else returns a 404.

The usual fixes are:

- Using **hash routing** (`/#/about`) so the browser never asks the server for `/about`.  
- Or adding a catch-all `404.html` that loads the app and lets the router handle navigation.  

Both work, but they feel more like workarounds than native solutions.

## Svelte

With Svelte (and SvelteKit’s static adapter) the experience was smoother.  
Each route gets pre-built as an HTML file, so `/about` is just `about/index.html`.  
That means GitHub Pages can serve it without any extra tricks, behaving more like a traditional static site.

## What “static” really means

On GitHub Pages you only get **files**: HTML, CSS, and JavaScript.  
No server runtime, no SSR, no API routes.  
Frameworks that expect a server run into walls. Frameworks that pre-render have a much easier time.

## My takeaway

- Static hosting is simple but limited.  
- React and Vue demos need routing workarounds.  
- Svelte (and Astro too) feel more “at home” in this setup.  

For experiments or portfolios, GitHub Pages works well — as long as you know how your framework behaves in a static-only world.
