type SingleQuery<T> = {
  data: {
    markdownRemark: {
      frontmatter: T;
      html: string;
    };
  };
};

type ListQuery<T> = {
  data: {
    allMarkdownRemark: {
      edges: Node<T>[];
    };
  };
};

export type Node<T> = {
  node: {
    id: number;
    frontmatter: T;
    html: string;
  };
};

// SINGLE PAGES
export type ContactQuery = SingleQuery<{
  email: string;
  socialMedia: { profileName: string; platformName: string; link: string }[];
}>;
export type CVQuery = SingleQuery<{ cv: string }>;

// WORK-QUERY RELATED
export type Category = 'Fiction' | 'Poetry' | 'Theory and Criticism' | 'Other';

export type WorkFrontmatter = {
  title: string;
  link?: string;
  metainfo?: string;
  isSubpage: boolean;
  category: Category;
};

export type WritingQuery = {
  data: {
    poetry: { edges: Node<WorkFrontmatter>[] };
    fiction: { edges: Node<WorkFrontmatter>[] };
    theory: { edges: Node<WorkFrontmatter>[] };
    other: { edges: Node<WorkFrontmatter>[] };
  };
};

export type ArtworkQuery = ListQuery<{ title: string; image: string }>;
export type NewsQuery = SingleQuery<{ news: { title: string; link: string }[] }>;
export type TranslationQuery = SingleQuery<{ links: { title: string; link: string }[] }>;

// OTHER
export type PageMetaData = {
  title: string;
  pageTitle: string;
  description: string;
  slug: string;
  path: string;
};
