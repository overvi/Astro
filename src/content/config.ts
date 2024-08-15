// collections/blog.ts
import { z, defineCollection } from "astro:content";

const postSchema = z.object({
  title: z.string(),
  pubDate: z.date(),
  author: z.string().transform((val) => new Date(val)),
  image: z.object({
    url: z.string(),
    alt: z.string(),
  }),
  tags: z.string().array(),
});

const postCollection = defineCollection({
  type: "content",
  schema: postSchema,
});

export const collections = {
  posts: postCollection,
};

export type Post = z.infer<typeof postSchema>;
