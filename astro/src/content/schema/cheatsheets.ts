import { glob } from "astro/loaders";
import { z, defineCollection } from "astro:content";

export const cheatsheets = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/cheatsheets" }),
  schema: z.object({
    title: z.string(),
    // pubDate: z.date(),
    // description: z.string(),
    // author: z.string(),
    // image: z.object({
    //   url: z.string(),
    //   alt: z.string()
    // }),
    // tags: z.array(z.string())
  })
});