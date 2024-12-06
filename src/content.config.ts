import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const artwork = defineCollection({
	loader: glob({ pattern: '**/[^_]*.md', base: './content/artwork' }),
	schema: z.object({
		title: z.string(),
		image: z.string(),
		embed: z.string().optional(),
	}),
});

const artworkslist = defineCollection({
	loader: glob({ pattern: '**/[^_]*.md', base: './content/artworkslist' }),
	schema: z.object({
		list: z.array(
			z.object({
				artwork: z.string(),
			}),
		),
	}),
});

const works = defineCollection({
	loader: glob({ pattern: '**/[^_]*.md', base: './content/works' }),
	schema: z.object({
		title: z.string(),
		link: z.string().url(),
		metainfo: z.string().optional(),
		isSubpage: z.boolean().default(false),
		category: z.enum(['Fiction', 'Poetry', 'Theory and Criticism', 'Other']),
	}),
});

const contact = defineCollection({
	loader: glob({ pattern: '**/[^_]*.md', base: './content/contact' }),
	schema: z.object({
		email: z.string().email(),
		socialMedia: z.array(
			z.object({
				platformName: z.enum(['Instagram']),
				link: z.string().url(),
				profileName: z.string(),
			}),
		),
	}),
});

const cv = defineCollection({
	loader: glob({ pattern: '**/[^_]*.md', base: './content/cv' }),
	schema: z.object({}),
});

const news = defineCollection({
	loader: glob({ pattern: '**/[^_]*.md', base: './content/news' }),
	schema: z.object({
		news: z.array(
			z.object({
				title: z.string(),
				link: z.string().url().optional(),
			}),
		),
	}),
});

const translation = defineCollection({
	loader: glob({ pattern: '**/[^_]*.md', base: './content/translation' }),
	schema: z.object({
		links: z
			.array(
				z.object({
					title: z.string(),
					link: z.string().url(),
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
