import { glob } from 'astro/loaders';
import { defineCollection } from 'astro:content';
import { z } from "astro/zod"

const artwork = defineCollection({
	loader: glob({ pattern: '**.md', base: './content/artwork' }),
	schema: z.object({
		title: z.string(),
		image: z.string(),
		embed: z.string().optional(),
	}),
});

const artworkslist = defineCollection({
	loader: glob({ pattern: '**.md', base: './content/artworkslist' }),
	schema: z.object({
		list: z.array(
			z.object({
				artwork: z.string(),
			}),
		),
	}),
});

const works = defineCollection({
	loader: glob({ pattern: '**.md', base: './content/works' }),
	schema: z.object({
		title: z.string(),
		link: z.url(),
		metainfo: z.string().optional(),
		isSubpage: z.boolean().default(false),
		category: z.enum(['Fiction', 'Poetry', 'Theory and Criticism', 'Other']),
	}),
});

const contact = defineCollection({
	loader: glob({ pattern: '**.md', base: './content/contact' }),
	schema: z.object({
		email: z.email(),
		socialMedia: z.array(
			z.object({
				platformName: z.enum(['Instagram']),
				link: z.url(),
				profileName: z.string(),
			}),
		),
	}),
});

const cv = defineCollection({
	loader: glob({ pattern: '**.md', base: './content/cv' }),
	schema: z.object({}),
});

const news = defineCollection({
	loader: glob({ pattern: '**.md', base: './content/news' }),
	schema: z.object({
		news: z.array(
			z.object({
				title: z.string(),
				link: z.url().optional(),
			}),
		),
	}),
});

const translation = defineCollection({
	loader: glob({ pattern: '**.md', base: './content/translation' }),
	schema: z.object({
		links: z
			.array(
				z.object({
					title: z.string(),
					link: z.url(),
				}),
			)
			.optional(),
	}),
});

export const collections = {
	artwork,
	works,
	contact,
	cv,
	news,
	translation,
	artworkslist,
};
