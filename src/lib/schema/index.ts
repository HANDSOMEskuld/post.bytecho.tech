import { reference, z } from "astro:content";
import type { ImageFunction } from "astro:content";

export const articleSchema = (image: ImageFunction) =>
  z.object({
    isDraft: z.boolean().default(false),
    isMainHeadline: z.boolean().default(false),
    isSubHeadline: z.boolean().default(false),
    cover: image(),
    covert_alt: z.string().optional(),
    // 修改下面两行：放宽字符限制
    title: z.string().max(120, "Too long, max 120 characters"), 
    description: z.string().max(320, "Too long, max 320 characters"),
    category: reference("categories"),
    authors: z.array(reference("authors")).min(1),
    publishedTime: z.string().datetime().or(z.date()),
  });

export const viewSchema = z.object({
  title: z.string(),
  description: z.string(),
  blocks: z.array(z.any()),
});

export const categorySchema = z.object({
  title: z.string(),
  path: z
    .string()
    .regex(
      /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
      "The string must be a slug (only lowercase letters, numbers, and hyphens)."
    ),
});

export const authorSchema = (Image: ImageFunction) =>
  z.object({
    name: z.string(),
    job: z.string(),
    avatar: Image(),
    bio: z.string(),
    social: z.array(
      z.object({
        name: z.string(),
        url: z.string(),
        icon: z.string(),
      })
    ),
  });