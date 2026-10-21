import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import robotsTxt from 'astro-robots-txt';

import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
	site: 'https://moira-barrett.com',
	integrations: [sitemap(), robotsTxt(), svelte()],
	fonts: [
		{
			provider: fontProviders.google(),
			name: 'Italiana',
			cssVariable: '--font-italiana',
		},
		{
			provider: fontProviders.local(),
			name: 'Fanwood Text',
			cssVariable: '--font-fanwood',
			options: {
				variants: [
					{
						style: 'normal',
						weight: 400,
						src: ['./src/assets/fonts/Fanwood Text.otf'],
					},
					{
						style: 'italic',
						weight: 400,
						src: ['./src/assets/fonts/Fanwood Text Italic.otf'],
					},
				],
			},
		},
	],
});
