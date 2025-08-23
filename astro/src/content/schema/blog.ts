import { glob } from "astro/loaders";
import { z, defineCollection } from "astro:content";

export const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string()
    }),
    categories: z.array(z.string()),
    tags: z.array(z.string())
  })
});