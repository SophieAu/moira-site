export const slugs = {
  contact: 'contact',
  home: '',
  cv: 'cv',
  collages: 'collages',
  writing: 'writing',
  poetry: 'poetry',
  fiction: 'fiction',
  'theory-and-criticism': 'theory-and-criticism',
};

export const path = (slug: keyof typeof slugs) => `/${slugs[slug]}`;

export const BASE_URL = 'https://moira-barrett.com';

export const WORK_SUBPATH = '/work';
