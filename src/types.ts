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

// Works-related Types
export type Category = 'Fiction' | 'Poetry' | 'Theory and Criticism' | 'Other';

export type WorkFrontmatter = {
  title: string;
  link?: string;
  metainfo?: string;
  isSubpage: boolean;
  category: Category;
};

export interface Work extends WorkFrontmatter {
  text: string;
}

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

export interface WorkQuery extends BaseQuery<WorkFrontmatter> {
  pageContext: {
    slug: string;
  };
}
