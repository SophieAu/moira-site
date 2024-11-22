import { path, slugs, type PageMetaData } from './consts';

export const BASE_TITLE = 'Moira Barrett';

const toTitleCase = (str: string) =>
	str.length ? `${str.charAt(0).toUpperCase()}${str.slice(1)}` : str;

export const buildPageTitle = (str: string) => `${toTitleCase(str)} | ${BASE_TITLE}`;

const buildMetaData = (title: keyof typeof slugs, stringTitle?: string): PageMetaData => ({
	title: toTitleCase(stringTitle || title),
	description: '',
	slug: slugs[title],
	path: path(title),
});

export const Home = buildMetaData('home');

export const Contact = { ...buildMetaData('contact'), email: 'Email' };

export const Poetry = buildMetaData('poetry');
export const Fiction = buildMetaData('fiction');
export const TaC = buildMetaData('theory-and-criticism', 'Theory and Criticism');

export const CV = buildMetaData('cv', 'CV');
export const Writing = buildMetaData('writing', 'Writing');
export const Artwork = buildMetaData('artwork', 'Artwork');
export const Translation = buildMetaData('translation', 'Translation');
export const News = buildMetaData('news', 'News');

export const pages = [Writing, Artwork, Translation, News, CV, Contact];
export const writingPages = { title: 'Writing', pages: [Poetry, Fiction, TaC] };
