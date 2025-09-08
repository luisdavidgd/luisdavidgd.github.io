---
title: "Astro on GitHub Pages: a static-only stage"
pubDate: 2025-08-09
author: "Luda"
tags: ["astro", "github-pages", "static-sites", "portfolio", "demos"]
categories: ["Astro", "Static Hosting"]
description: "Using GitHub Pages as a free and simple way to host my Astro site and other small demos."
heroImage: "@assets/images/blog/astro-github-pages.jpg"
---

GitHub Pages is a very basic hosting service: no server-side rendering, no databases, no backend features.  
But that simplicity makes it perfect for what I needed: a place to put a personal site and some small demos.  

## Why GitHub Pages?

Two main reasons:  

1. It’s free and comes with a `github.io` subdomain.  
2. It only requires static files, which matched perfectly with Astro.  

Instead of paying for hosting just to serve plain HTML, GitHub Pages was a natural choice.

## The deployment process

The process was simple: configure Astro with the static adapter, build the project, and push the result to a branch that GitHub Pages can serve.  
I automated it with a GitHub Action so I don’t need to think about uploads or manual steps.  

Within minutes, the site was live under my `username.github.io` domain.

## More than Astro

Since I already had the free domain, I decided to use the same repository to showcase other experiments.  
Alongside this blog made with Astro, I added small demos with React, Svelte, and Vue.  
It turned my GitHub Pages site into a lightweight portfolio of experiments.

## Takeaways

- GitHub Pages is limited, but that’s fine for static sites.  
- Astro works well in this environment because it generates everything as static HTML.  
- A free `github.io` domain is a great way to share quick demos without extra setup.  

For me, GitHub Pages became less about hosting a single site and more about having a small public stage for different projects.
