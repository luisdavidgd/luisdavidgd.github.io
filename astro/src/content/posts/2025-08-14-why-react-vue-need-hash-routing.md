---
title: "Why React and Vue need hash routing but Svelte does not"
pubDate: 2025-08-14
author: "Luda"
tags: ["react", "vue", "svelte", "routing", "hash-routing", "static-hosting"]
categories: ["Frontend Frameworks", "Routing"]
description: "Testing how routing works on static hosting: why React and Vue break without hash routing, and how Svelte gets around it."
heroImage: "@assets/images/blog/hash-routing.jpg"
---

If you’ve ever deployed a small SPA to **GitHub Pages**, you’ve probably seen it:  
the app runs fine locally, but refreshing `/about` gives a **404**.  

The reason is simple — static hosts only serve files, not routes.

## Why React and Vue break

React Router and Vue Router use the **History API** (`pushState`) for clean URLs like `/about`.  
That looks nice, but on GitHub Pages the server doesn’t know what `/about` is.  
It only sees that there’s no `/about/index.html` and returns a 404.

The quick fixes are:

- Switch to **HashRouter** (React) or `createWebHashHistory` (Vue).  
- Or set up a redirect so every path falls back to `index.html` (not possible on GitHub Pages).  

That’s why on strict static hosts, hash routing is usually the only option.

## Why Svelte feels different

Svelte doesn’t ship with a router by default. Many small Svelte apps just use plain anchor links, so each route is already an actual HTML file — which works perfectly on static hosting.  

With **SvelteKit + static adapter**, it goes further: every route is pre-rendered as a file (`/about/index.html`).  
This makes routes behave naturally, no hash fragments required.

## Takeaways

- Static hosting only knows about files, not client-side routes.  
- Hash routing is a workaround to survive on hosts without rewrites.  
- Frameworks that pre-render routes (SvelteKit, Astro) avoid the problem entirely.  

So if you’re deploying to GitHub Pages, expect React and Vue to need some extra setup — while Svelte can feel more “static friendly” out of the box.
