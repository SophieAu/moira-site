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
export type WritingQuery = BaseQuery<{ writing: { title: string; link: string; info: string }[] }>;

export type WorkQuery = {
  data: {
    markdownRemark: {
      frontmatter: { title: string; date: string };
      html: string;
    };
  };
  pageContext: {
    slug: string;
  };
};
