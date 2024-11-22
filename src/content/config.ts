import { defineCollection, z } from 'astro:content';

const artwork = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		image: z.string(),
		embed: z.string().optional(),
	}),
});

const artworkslist = defineCollection({
	type: 'content',
	schema: z.object({
		list: z.array(
			z.object({
				artwork: z.string(),
			}),
		),
	}),
});

const works = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		link: z.string().url(),
		metainfo: z.string().optional(),
		isSubpage: z.boolean().default(false),
		category: z.enum(['Fiction', 'Poetry', 'Theory and Criticism', 'Other']),
	}),
});

const contact = defineCollection({
	type: 'content',
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
	type: 'content',
	schema: z.object({}),
});

const news = defineCollection({
	type: 'content',
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
	type: 'content',
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
