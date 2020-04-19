type BaseQuery<T> = {
  data: {
    markdownRemark: {
      frontmatter: T;
    };
  };
};

type TranslationData = {
  infotext: string;
  translations: List[];
};

export type List = {
  title: string;
  link: string;
  info: string;
};

export type ContactQuery = BaseQuery<{ email: string }>;
export type TranslationQuery = BaseQuery<TranslationData>;
export type WritingQuery = BaseQuery<{ writing: List[] }>;
