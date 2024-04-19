import { defineConfig, type TinaField } from 'tinacms';
import {
  workFields,
  artworkFields,
  cvFields,
  contactFields,
  newsFields,
  translationFields,
} from './templates';

const collection = (label: string, fields: TinaField[], path?: string) => ({
  format: 'md' as 'md' | 'json' | 'markdown' | 'mdx' | 'yaml' | 'yml' | 'toml',
  label,
  name: label.toLowerCase(),
  path: 'data/content' + path ? `/${path}` : '',
  ...(path && { ui: { allowedActions: { create: false, delete: false } } }),
  match: { include: path ? label.toLowerCase() : '**/*' },
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
      collection('Works', workFields, 'works'),
      collection('Artwork', artworkFields, 'artwork'),
      collection('CV', cvFields),
      collection('Contact', contactFields),
      collection('News', newsFields),
      collection('Translation', translationFields),
    ],
  },
});
