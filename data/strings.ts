import { paths, slugs } from './config';

type Titles = 'contact' | 'writing' | 'home';

export const BASE_TITLE = 'Moira Barrett';

const toTitleCase = (str: string) =>
  str.length ? `${str.charAt(0).toUpperCase()}${str.slice(1)}` : str;

const buildMetaData = (title: Titles) => ({
  title: toTitleCase(title),
  pageTitle: `${toTitleCase(title)} | ${BASE_TITLE}`,
  description: '',
  slug: slugs[title],
  path: paths[title],
});

export const Home = buildMetaData('home');

export const Contact = buildMetaData('contact');

export const Writing = buildMetaData('writing');

export const SubPages = [Writing, Contact];
