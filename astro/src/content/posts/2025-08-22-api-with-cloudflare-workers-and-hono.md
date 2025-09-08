---
title: "Building APIs with Cloudflare Workers and Hono"
pubDate: 2025-08-22
author: "Luda"
tags: ["cloudflare", "hono", "api", "workers", "serverless", "supabase"]
categories: ["APIs", "Serverless"]
description: "How I used Cloudflare Workers, Hono, and Supabase to create a lightweight API for my projects."
heroImage: "@assets/images/blog/cloudflare-hono-api.jpg"
---

Most of my projects need a backend — not a heavy monolith, just a simple and fast API.  
For **chacla.pe**, I decided to use **Cloudflare Workers** together with **Hono**, a small but powerful web framework.

## Why Cloudflare Workers?

Cloudflare Workers run code at the edge, close to the user.  
That means:

- No traditional servers to manage.  
- Scales automatically.  
- Pay only for what you use.  

For APIs, this is ideal: fast responses, simple deployments, and global reach.

## Where Hono fits

Writing APIs directly with the Workers API can feel low-level.  
**Hono** makes it cleaner:

- Define routes like in Express (`app.get("/users", ...)`).  
- Middleware support (auth, logging, etc.).  
- Easy to keep code modular and organized.  

In practice, it feels like a modern replacement for Express, but optimized for edge environments.

## Where Supabase comes in

Workers and Hono give me the API layer, but I still need a reliable database and authentication system.  
That’s where **Supabase** fits perfectly:

- Managed **Postgres** with a familiar SQL layer.  
- Built-in **auth** and role-based policies.  
- Easy integration with external clients through REST and GraphQL.  

In my API, Workers handle the requests, and Supabase takes care of data and user management.  
This way, I keep the backend simple but still powerful.

## My setup for chacla.pe

For my API I used:

- **Cloudflare Workers** as the runtime.  
- **Hono** to organize routes (`/business`, `/categories`, `/auth`, etc.).  
- **Supabase** as the database + authentication provider.  

The result: a lightweight API where each request runs at the edge and connects securely to Supabase.

## Takeaways

- Workers + Hono is a great match for **small to medium APIs**.  
- Supabase complements them by providing database, auth, and storage.  
- The developer experience is familiar (similar to Express) but with edge-native benefits.  

What I liked the most is the simplicity: push to GitHub, let Cloudflare deploy, and the API is live globally within seconds.
