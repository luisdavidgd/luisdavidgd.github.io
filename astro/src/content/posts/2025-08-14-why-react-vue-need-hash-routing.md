---
title: "Why React and Vue need hash routing but Svelte does not"
pubDate: 2025-08-14
author: "Luda"
tags: ["react", "vue", "svelte", "routing", "webhashhistory", "static-hosting"]
categories: ["Frontend Frameworks", "Routing"]
description: "A deep dive into why static hosting environments break client-side routing for React and Vue, but not always for Svelte."
heroImage: "@assets/images/blog-placeholder-1.jpg"
---

Every frontend developer has hit this bug: your SPA works locally, but `/about` gives a **404** on production.  
Why? Because static hosts don’t know how to serve routes that don’t exist as files.

## The routing problem

This issue doesn’t happen everywhere.  
Platforms like Vercel, Netlify, or Cloudflare Pages provide smart redirects so `/about` won’t break.  
But on stricter static hosts like GitHub Pages, you only get file-based routing — and that’s where the 404s appear.

Frameworks like React and Vue often use the **HTML5 History API** (`pushState`) for navigation.  
This makes URLs look clean (`/about` instead of `/#/about`) but creates a problem on static hosts:

**Hash routing** (`/#/about`) avoids this by never letting the browser request `/about`. Everything after `#` stays in the client, so the server just delivers `index.html`.

## React and Vue

React Router and Vue Router both default to history-based routing.  
On static hosts, this breaks unless you:

- Switch to **HashRouter** (React) or `createWebHashHistory` (Vue).  
- Or set up a fallback redirect to always serve `index.html`.  

Since GitHub Pages doesn’t allow custom rewrite rules, hash routing becomes the easiest solution.

## Svelte’s difference

Svelte itself doesn’t include a router. Many Svelte apps just use simple anchor links and multiple HTML files, which work fine on static hosts.  

SvelteKit, with the static adapter, can pre-render each route into an actual file (`/about/index.html`).  
This means you can refresh `/about` without errors — no hash URLs required.

## Lessons

- Static hosting is file-based, not route-aware.  
- Hash routing is a workaround, not a feature.  
- Frameworks that pre-render routes (Astro, SvelteKit static) feel more natural on GitHub Pages.  

In short: if your framework depends on a client-only router, static hosts will force you into hacks. If it can pre-render, you win.
