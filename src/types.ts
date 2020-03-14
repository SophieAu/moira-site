import { FixedObject, FluidObject } from 'gatsby-image';

type BaseQuery<T> = {
  data: {
    markdownRemark: {
      frontmatter: T;
    };
  };
};

export type ImgData = {
  image: {
    preview: {
      fluid: FluidObject;
    };
    fullScreen: {
      fixed: FixedObject;
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

export type CollageQuery = BaseQuery<{ images: ImgData[] }>;
export type ContactQuery = BaseQuery<{ email: string }>;
export type TranslationQuery = BaseQuery<TranslationData>;
export type WritingQuery = BaseQuery<{ writing: List[] }>;
