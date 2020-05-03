type BaseQuery<T> = {
  data: {
    markdownRemark: {
      frontmatter: T;
    };
  };
};

export type List = {
  title: string;
  link: string;
  info: string;
};

export type ContactQuery = BaseQuery<{ email: string }>;
export type WritingQuery = BaseQuery<{ writing: List[] }>;
export type CVQuery = BaseQuery<{ cv: string }>;
