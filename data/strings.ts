import { paths, slugs } from './config';

export const Collage = {
  title: 'Collage',
  description: '',
  slug: slugs.collage,
  path: paths.collage,
};

export const Contact = {
  title: 'Contact',
  description: '',
  slug: slugs.contact,
  path: paths.contact,
};

export const Home = {
  title: 'Home',
  description: '',
  slug: slugs.home,
  path: paths.home,
};

export const Translation = {
  title: 'Translation',
  description: '',
  slug: slugs.translation,
  path: paths.translation,
  infoText: 'Infotext on Moira here',
};

export const Writing = {
  title: 'Writing',
  description: '',
  slug: slugs.writing,
  path: paths.writing,
};

export const SubPages = [Collage, Translation, Writing, Contact];
