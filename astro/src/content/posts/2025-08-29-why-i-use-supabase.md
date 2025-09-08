---
title: "Why I use Supabase for my APIs"
pubDate: 2025-08-29
author: "Luda"
tags: ["supabase", "postgres", "auth", "api", "serverless"]
categories: ["Databases", "Backend as a Service"]
description: "A quick overview of how Supabase helps me manage databases and authentication without running my own servers."
heroImage: "@assets/images/blog/supabase-api.jpg"
---

When building APIs, I don’t just need endpoints — I need a **database**, authentication, and sometimes file storage.  
Instead of setting all that up myself, I use **Supabase**.

## Why Supabase?

Supabase is basically “Postgres as a service.”  
It gives me:

- A managed **Postgres database** with SQL I already know.  
- **Authentication** out of the box (email, OAuth, magic links).  
- **Row-level security** so I can enforce permissions at the database level.  
- Extras like file storage and auto-generated APIs.  

This means I don’t need to install or manage servers. Everything runs in the cloud.

## How it fits with Workers + Hono

In my setup:

- **Cloudflare Workers** handle requests at the edge.  
- **Hono** organizes API routes.  
- **Supabase** stores data and manages users.  

The flow is simple: a client calls my API → Hono handles the request → Supabase is the data layer behind it.

## What I like

- **No infrastructure headaches**: I don’t have to maintain a Postgres server.  
- **Developer-friendly**: the dashboard, SQL editor, and auth tools are easy to use.  
- **Scalable**: starts free, but can grow as the project grows.  

For projects like **chacla.pe**, Supabase gave me just enough backend power without the overhead of running everything myself.

## Closing thought

Supabase is not the only option, but for developers who want **a real database with modern conveniences**, it’s one of the easiest ways to start.
