type BaseQuery<T> = {
  data: {
    markdownRemark: {
      frontmatter: T;
      html: string;
    };
  };
};

export type ContactQuery = BaseQuery<{}>;
export type CVQuery = BaseQuery<{ cv: string }>;
export type WritingQuery = BaseQuery<{ writing: WorkFrontmatter[] }>;

export type WorkQuery = {
  data: {
    markdownRemark: {
      frontmatter: WorkFrontmatter;
      html: string;
    };
  };
  pageContext: {
    slug: string;
  };
};

export type WorkFrontmatter = {
  title: string;
  link?: string;
  metainfo?: string;
  isSubpage: boolean;
  category: Category;
};

export type Category = 'Writing' | 'Poetry' | 'Theory and Criticism' | 'Other';

export type WorksQuery = {
  data: {
    allMarkdownRemark: {
      edges: {
        node: {
          id: number;
          frontmatter: WorkFrontmatter;
          html: string;
        };
      }[];
    };
  };
};

export interface Work extends WorkFrontmatter {
  text: string;
}
