---
title: "Astro + Supabase Cheat Sheet"
pubDate: 2025-09-05
author: "Luda"
tags: ["astro", "supabase", "cheatsheet"]
categories: ["Cheat Sheets", "Database"]
description: "How to connect Astro projects to Supabase: static and client-side."
---

## Client-side fetch
```js
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
const { data } = await supabase.from("posts").select("*");
```