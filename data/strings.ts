import { paths, slugs } from './config';

export const BASE_TITLE = 'Moira Barrett';

const buildTitle = (title: string) => `${title} | ${BASE_TITLE}`;

export const Collage = {
  title: 'Collage',
  pageTitle: buildTitle('Collage'),
  description: '',
  slug: slugs.collage,
  path: paths.collage,
};

export const Contact = {
  title: 'Contact',
  pageTitle: buildTitle('Contact'),
  description: '',
  slug: slugs.contact,
  path: paths.contact,
};

export const Home = {
  title: BASE_TITLE,
  pageTitle: BASE_TITLE,
  description: '',
  slug: slugs.home,
  path: paths.home,
};

export const Translation = {
  title: 'Translation',
  pageTitle: buildTitle('Translation'),
  description: '',
  slug: slugs.translation,
  path: paths.translation,
  infoText: 'Infotext on Moira here',
};

export const Writing = {
  title: 'Writing',
  pageTitle: buildTitle('Writing'),
  description: '',
  slug: slugs.writing,
  path: paths.writing,
};

export const SubPages = [Collage, Translation, Writing, Contact];
