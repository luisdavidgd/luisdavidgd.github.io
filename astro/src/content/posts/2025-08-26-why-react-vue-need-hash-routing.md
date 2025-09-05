---
title: "Why React and Vue need hash routing but Svelte does not"
pubDate: 2025-08-26
author: "Luda"
tags: ["react", "vue", "svelte", "routing", "webhashhistory", "static-hosting"]
categories: ["Frontend Frameworks", "Routing"]
description: "A deep dive into why static hosting environments break client-side routing for React and Vue, but not always for Svelte."
heroImage: "@assets/images/blog-placeholder-1.jpg"
---

Every frontend developer has hit this bug: your SPA works locally, but `/about` gives a **404** on production.  
Why? Because static hosts don’t know how to serve routes that don’t exist as files.

## The routing problem

*(Explain how history API routing works, why it fails on static hosting, and what hash routing solves.)*

## React and Vue

*(Detail why these frameworks need `HashRouter` or `createWebHashHistory` on static hosts like GitHub Pages.)*

## Svelte’s difference

*(Show how Svelte (or SvelteKit with proper adapters) approaches routing in a slightly different way.)*

## Lessons

- Static hosting is file-based, not route-aware.  
- Hash routing is a workaround, not a feature.  
- Choosing the right framework and adapter matters.  
