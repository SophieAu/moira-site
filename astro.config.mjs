import { defineConfig, passthroughImageService } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import robotsTxt from 'astro-robots-txt';

// https://astro.build/config
export default defineConfig({
  site: 'https://moira-barrett.com',
  integrations: [sitemap(), robotsTxt()],
  image: { domains: ['res.cloudinary.com'], service: passthroughImageService },
});
