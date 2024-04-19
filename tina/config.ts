import { defineConfig, type TinaField } from 'tinacms';
import {
  workFields,
  artworkFields,
  cvFields,
  contactFields,
  newsFields,
  translationFields,
  artworksListFields,
} from './templates';

const collection = (label: string, fields: TinaField[], isCollection: boolean = false) => ({
  format: 'md' as 'md' | 'json' | 'markdown' | 'mdx' | 'yaml' | 'yml' | 'toml',
  label,
  name: label.toLowerCase(),
  path: `src/content/${label.toLowerCase()}`,
  ...(!isCollection && { ui: { allowedActions: { create: false, delete: false } } }),
  match: { include: '**/*' },
  fields,
});

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || 'master';

export default defineConfig({
  branch,
  clientId: process.env.TINA_CLIENT_ID || null,
  token: process.env.TINA_TOKEN || null,
  client: { skip: true },
  build: { outputFolder: 'admin', publicFolder: 'public' },
  media: { tina: { mediaRoot: '', publicFolder: 'public' } },
  schema: {
    collections: [
      collection('Works', workFields, true),
      collection('Artwork', artworkFields, true),
      collection('Artworks', artworksListFields),
      collection('CV', cvFields),
      collection('Contact', contactFields),
      collection('News', newsFields),
      collection('Translation', translationFields),
    ],
  },
});
