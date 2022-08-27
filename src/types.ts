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
      edges: T[];
    };
  };
};

// TEMPLATE PAGES
export type ContactQuery = SingleQuery<{ email: string }>;
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

export interface WorkQuery extends SingleQuery<WorkFrontmatter> {
  pageContext: { slug: string };
}

export type WorkNode = {
  node: {
    id: number;
    frontmatter: WorkFrontmatter;
    html: string;
  };
};

export type WorksQuery = ListQuery<WorkNode>;
export type WritingQuery = {
  data: {
    poetry: { edges: WorkNode[] };
    fiction: { edges: WorkNode[] };
    theory: { edges: WorkNode[] };
    other: { edges: WorkNode[] };
  };
};

// OTHER
export type PageMetaData = {
  title: string;
  pageTitle: string;
  description: string;
  slug: string;
  path: string;
};
