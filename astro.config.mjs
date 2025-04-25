import { defineConfig, passthroughImageService, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import robotsTxt from 'astro-robots-txt';

import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
	site: 'https://moira-barrett.com',
	integrations: [sitemap(), robotsTxt(), svelte()],
	image: { domains: ['res.cloudinary.com'], service: passthroughImageService() },
	experimental: {
		fonts: [
			{
				provider: fontProviders.google(),
				name: 'Italiana',
				cssVariable: '--font-italiana',
			},
			{
				provider: 'local',
				name: 'Fanwood Text',
				cssVariable: '--font-fanwood',
				variants: [
					{
						style: 'normal',
						weight: 400,
						src: ['./public/fonts/Fanwood Text.otf'],
					},
					{
						style: 'italic',
						weight: 400,
						src: ['./public/fonts/Fanwood Text Italic.otf'],
					},
					// ...
				],
			},
		],
	},
});
