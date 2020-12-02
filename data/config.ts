export const slugs = {
  contact: 'contact',
  home: '',
  cv: 'cv',
  poetry: 'poetry',
  fiction: 'fiction',
  'theory-and-criticism': 'theory-and-criticism',
};

export const path = (slug: keyof typeof slugs) => `/${slug}`;

export const BASE_URL = 'https://moira-barrett.com';
