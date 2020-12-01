/* eslint-disable @typescript-eslint/no-var-requires */
//@ts-check

const {
  siteMetadata,
  cspOptions,
  manifestOptions,
  robotsTxtOptions,
  sitemapOptions,
  filesystemContentOptions,
  filesystemImageOptions,
} = require('./meta/config');

module.exports = {
  siteMetadata,
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-linaria`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-transformer-remark`,
    { resolve: `gatsby-plugin-csp`, options: cspOptions },
    { resolve: `gatsby-plugin-manifest`, options: manifestOptions },
    { resolve: 'gatsby-plugin-robots-txt', options: robotsTxtOptions },
    { resolve: `gatsby-plugin-sitemap`, options: sitemapOptions },
    { resolve: `gatsby-source-filesystem`, options: filesystemContentOptions },
    { resolve: `gatsby-source-filesystem`, options: filesystemImageOptions },
  ],
};
