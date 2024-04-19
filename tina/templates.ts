import type { TinaField } from 'tinacms';

export const mdField: TinaField = {
  type: 'rich-text',
  name: 'body',
  label: 'Document Body',
  isBody: true,
};

export const artworkFields: TinaField[] = [
  { type: 'image', name: 'image', label: 'Image' },
  { type: 'string', name: 'title', label: 'Title etc.' },
  mdField,
];

export const contactFields: TinaField[] = [
  { type: 'string', name: 'email', label: 'email' },
  {
    type: 'object',
    name: 'socialMedia',
    label: 'Social Media',
    list: true,
    ui: { itemProps: item => ({ label: `${item?.platformName} | ${item?.profileName}` }) },
    fields: [
      { type: 'string', name: 'platformName', label: 'Platform Name' },
      { type: 'string', name: 'profileName', label: 'Profile Name' },
      { type: 'string', name: 'link', label: 'Link' },
    ],
  },
];

export const cvFields: TinaField[] = [mdField];

export const newsFields: TinaField[] = [
  {
    type: 'object',
    name: 'news',
    label: 'News Items',
    list: true,
    ui: { itemProps: item => ({ label: item?.title }) },
    fields: [
      { type: 'string', name: 'title', label: 'Link Name' },
      { type: 'string', name: 'link', label: 'Link' },
    ],
  },
];

export const translationFields: TinaField[] = [
  mdField,
  {
    type: 'object',
    name: 'links',
    label: 'Translations',
    list: true,
    ui: { itemProps: item => ({ label: item?.title }) },
    fields: [
      { type: 'string', name: 'title', label: 'Link Name' },
      { type: 'string', name: 'link', label: 'Link' },
    ],
  },
];

export const workFields: TinaField[] = [
  { type: 'string', name: 'title', label: 'Title' },
  { type: 'string', name: 'link', label: 'External Link' },
  { type: 'string', name: 'metainfo', label: 'Metainfo' },
  { type: 'boolean', name: 'isSubpage', label: 'Create Subpage' },
  {
    type: 'string',
    name: 'category',
    label: 'Category',
    options: ['Fiction', 'Poetry', 'Theory and Criticism', 'Other'],
  },
  mdField,
];

export const artworksListFields: TinaField[] = [
  {
    type: 'object',
    list: true,
    name: 'list',
    label: 'ListOrder',
    ui: { itemProps: item => ({ label: item?.artwork }) },
    fields: [
      {
        type: 'reference',
        label: 'Artwork',
        name: 'artwork',
        collections: ['artwork'],
      },
    ],
  },
];
