type BaseQuery<T> = {
  data: {
    markdownRemark: {
      frontmatter: T;
    };
  };
};

export type ContactQuery = BaseQuery<{ email: string; instagram: string }>;
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
