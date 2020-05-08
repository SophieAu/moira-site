type BaseQuery<T> = {
  data: {
    markdownRemark: {
      frontmatter: T;
    };
  };
};

export type ContactQuery = BaseQuery<{ email: string }>;
export type CVQuery = BaseQuery<{ cv: string }>;
export type WritingQuery = BaseQuery<{
  writing: {
    title: string;
    link: string;
    info: string;
  }[];
}>;
