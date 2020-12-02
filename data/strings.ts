import { path, slugs } from './config';

export const BASE_TITLE = 'Moira Barrett';

const toTitleCase = (str: string) =>
  str.length ? `${str.charAt(0).toUpperCase()}${str.slice(1)}` : str;

export const buildPageTitle = (str: string) => `${toTitleCase(str)} | ${BASE_TITLE}`;

const buildMetaData = (title: keyof typeof slugs, stringTitle?: string) => ({
  title: toTitleCase(stringTitle || title),
  pageTitle: buildPageTitle(stringTitle || title),
  description: '',
  slug: slugs[title],
  path: path(title),
});

export const Home = buildMetaData('home');

export const Contact = { ...buildMetaData('contact'), email: 'Email: ' };

export const Poetry = buildMetaData('poetry');
export const Fiction = buildMetaData('fiction');
export const TaC = buildMetaData('theory-and-criticism', 'Theory and Criticism');

export const CV = buildMetaData('cv', 'CV');

export const pages = [CV, Contact];
export const writingPages = { title: 'Writing', pages: [Poetry, Fiction, TaC] };
