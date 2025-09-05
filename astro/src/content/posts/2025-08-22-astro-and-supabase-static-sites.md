---
title: "Astro and Supabase: static sites with dynamic data"
pubDate: 2025-08-22
author: "Luda"
tags: ["astro", "supabase", "static-site-generation", "database", "jamstack"]
categories: ["Astro", "Databases", "Static Hosting"]
description: "Exploring how Astro can consume Supabase data and still export static HTML when possible."
heroImage: "@assets/images/blog/astro-supabase.jpg"
---

One of the most interesting things about Astro is how flexible it is with data sources.  
You can pull content from Markdown, APIs, or even databases like Supabase — and still export to static HTML.

## The setup

Supabase provides a Postgres database with an instant API.  
From Astro, it’s just a fetch call away:

```js
// example.ts
const res = await fetch("https://your-project.supabase.co/rest/v1/posts", {
  headers: { apikey: import.meta.env.SUPABASE_KEY },
});
const posts = await res.json();
```

Once you have the data, you can render it into .astro components the same way you would with Markdown content.

Static export

The magic is that Astro can pre-fetch this data at build time.
That means when you run npm run build, the pages are generated with the Supabase content baked in as HTML.

Visitors don’t need to hit the database — they just get fast static pages.

When you need dynamic data

Of course, not everything can be static. For example:

User-specific dashboards.

Real-time updates (chat, notifications).

In those cases, you can still query Supabase client-side, but the core of your site can stay static.

Takeaways

Astro + Supabase works great for blogs, portfolios, or content sites.

Build-time fetch keeps performance high and hosting simple.

You only need client-side queries for truly dynamic features.

Static doesn’t mean limited — with the right setup, you can mix database-driven content with Astro’s static-first approach.
