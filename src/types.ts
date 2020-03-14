import { FixedObject, FluidObject } from 'gatsby-image';

type BaseQuery<T> = {
  data: {
    markdownRemark: {
      frontmatter: T;
    };
  };
};

type CollageData = {
  images: CollageInnerData[];
};

export type CollageInnerData = {
  image: {
    preview: {
      fluid: FluidObject;
    };
    fullScreen: {
      fixed: FixedObject;
    };
  };
};

type ContactData = {
  email: string;
};

type TranslationData = {
  infotext: string;
  translations: {
    title: string;
    link: string;
    info: string;
  }[];
};

type WritingData = {
  writing: {
    title: string;
    link: string;
    info: string;
  }[];
};

export type CollageQuery = BaseQuery<CollageData>;
export type ContactQuery = BaseQuery<ContactData>;
export type TranslationQuery = BaseQuery<TranslationData>;
export type WritingQuery = BaseQuery<WritingData>;
