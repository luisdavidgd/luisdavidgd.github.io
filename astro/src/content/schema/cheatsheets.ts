import { glob } from "astro/loaders";
import { z, defineCollection } from "astro:content";

export const cheatsheets = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/cheatsheets" }),
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    author: z.string(),
    tags: z.array(z.string()),
    categories: z.array(z.string()),
    description: z.string(),
  })
});