---
title: "GitHub Pages Deployment Cheat Sheet"
pubDate: 2025-09-05
author: "Luda"
tags: ["github-pages", "deployment", "cheatsheet"]
categories: ["Cheat Sheets", "Hosting"]
description: "Steps and tips for deploying static sites to GitHub Pages."
---

## Steps

1. Push your site to a GitHub repo.  
2. Go to **Settings → Pages → Deploy from GitHub Actions**.  
3. Use an Astro GitHub Action (`with: path: ./dist`).  
4. Ensure correct `site` in `astro.config.mjs`.  
5. Test on `https://username.github.io/repo/`.  

## Notes
- No SSR, only static files.  
- Use `HashRouter` in React/Vue if needed.  
