export type Category = 'Fiction' | 'Poetry' | 'Theory and Criticism' | 'Other';

export type PageMetaData = {
  title: string;
  description: string;
  slug: string;
  path: string;
};

export const SITE_TITLE = 'Astro Blog';
export const SITE_DESCRIPTION = 'Welcome to my website!';

export const slugs = {
  contact: 'contact',
  home: '',
  cv: 'cv',
  artwork: 'artwork',
  translation: 'translation',
  news: 'news',
  writing: 'writing',
  poetry: 'poetry',
  fiction: 'fiction',
  'theory-and-criticism': 'theory-and-criticism',
};

export const path = (slug: keyof typeof slugs) => `/${slugs[slug]}`;

export const BASE_URL = 'https://moira-barrett.com';

export const WORK_SUBPATH = '/work';
