/* eslint-disable @typescript-eslint/camelcase */
//@ts-check
import type { GatsbyConfig } from 'gatsby';

const hiddenPages: string[] = [];

const siteMetadata = {
  title: `Moira Barett`,
  description: `The Home of artist and translator Moira Barrett.`,
  author: `Moira Barrett`,
  siteUrl: `https://moira-barrett.com`,
};

const manifestOptions = {
  name: `moira-barrett`,
  short_name: `moira`,
  start_url: `/`,
  background_color: `#FFFFFF`,
  theme_color: `#FFFFFF`,
  display: `minimal-ui`,
  icon: `data/images/favicon.png`, // This path is relative to the root of the site.
};

const robotsTxtOptions = {
  policy: [{ userAgent: '*', disallow: hiddenPages, noindex: hiddenPages }],
};

const sitemapOptions = { exclude: hiddenPages };

const filesystemContentOptions = { name: `content`, path: `${__dirname}/data/content` };
const filesystemImageOptions = { name: `images`, path: `${__dirname}/data/images` };

const config: GatsbyConfig = {
  siteMetadata: siteMetadata,
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-mdx',
    'gatsby-plugin-sharp',
    'gatsby-plugin-emotion',
    'gatsby-transformer-sharp',
    `gatsby-transformer-remark`,
    { resolve: `gatsby-plugin-sitemap`, options: sitemapOptions },
    { resolve: 'gatsby-plugin-robots-txt', options: robotsTxtOptions },
    { resolve: 'gatsby-plugin-manifest', options: manifestOptions },
    {
      resolve: 'gatsby-source-filesystem',
      options: filesystemImageOptions,
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: filesystemContentOptions,
      __key: 'content',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
  ],
};

export default config;
