import { defineConfig } from 'tinacms';
import { artworkFields } from './templates';
import { contactFields } from './templates';
import { cvFields } from './templates';
import { newsFields } from './templates';
import { translationFields } from './templates';
import { workFields } from './templates';

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || 'master';

export default defineConfig({
  branch,
  clientId: process.env.TINA_CLIENT_ID || null, // Get this from tina.io
  token: process.env.TINA_TOKEN || null, // Get this from tina.io
  client: { skip: true },
  build: {
    outputFolder: 'admin',
    publicFolder: 'static',
  },
  media: {
    tina: {
      mediaRoot: 'static/uploads/',
      publicFolder: 'static',
    },
  },
  schema: {
    collections: [
      {
        format: 'md',
        label: 'Works',
        name: 'works',
        path: 'data/content/works',
        match: {
          include: '**/*',
        },
        fields: [
          {
            type: 'rich-text',
            name: 'body',
            label: 'Body of Document',
            description: 'This is the markdown body',
            isBody: true,
          },
          ...workFields(),
        ],
      },
      {
        format: 'md',
        label: 'Artwork',
        name: 'artwork',
        path: 'data/content/artwork',
        match: {
          include: '**/*',
        },
        fields: [
          {
            type: 'rich-text',
            name: 'body',
            label: 'Body of Document',
            description: 'This is the markdown body',
            isBody: true,
          },
          ...artworkFields(),
        ],
      },
      {
        format: 'md',
        label: 'CV',
        name: 'cv',
        path: 'data/content',
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: 'cv',
        },
        fields: [
          {
            type: 'rich-text',
            name: 'body',
            label: 'Body of Document',
            description: 'This is the markdown body',
            isBody: true,
          },
        ],
      },
      {
        format: 'md',
        label: 'Contact',
        name: 'contact',
        path: 'data/content',
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: 'contact',
        },
        fields: [...contactFields()],
      },
      {
        format: 'md',
        label: 'News',
        name: 'news',
        path: 'data/content',
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: 'news',
        },
        fields: [...newsFields()],
      },
      {
        format: 'md',
        label: 'Translation',
        name: 'translation',
        path: 'data/content',
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: 'translation',
        },
        fields: [
          {
            type: 'rich-text',
            name: 'body',
            label: 'Body of Document',
            description: 'This is the markdown body',
            isBody: true,
          },
          ...translationFields(),
        ],
      },
    ],
  },
});
