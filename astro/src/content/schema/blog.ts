import { glob } from "astro/loaders";
import { z, defineCollection } from "astro:content";

export const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/posts" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      pubDate: z.date(),
      description: z.string(),
      author: z.string().optional(),
      image: z.object({
        url: z.string(),
        alt: z.string()
      }).optional(),
      categories: z.array(z.string()).optional(),
      tags: z.array(z.string()),
      heroImage: image().optional()
    })
});