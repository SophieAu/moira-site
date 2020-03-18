/* eslint-disable @typescript-eslint/no-var-requires */
const {
  siteMetadata,
  cspOptions,
  manifestOptions,
  robotsTxtOptions,
  sitemapOptions,
  filesystemContentOptions,
  filesystemImageOptions,
  transformerRemarkOptions,
} = require('./meta/config');

module.exports = {
  siteMetadata,
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-linaria`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    { resolve: `gatsby-plugin-csp`, options: cspOptions },
    { resolve: `gatsby-plugin-manifest`, options: manifestOptions },
    { resolve: 'gatsby-plugin-robots-txt', options: robotsTxtOptions },
    { resolve: `gatsby-plugin-sitemap`, options: sitemapOptions },
    { resolve: `gatsby-source-filesystem`, options: filesystemContentOptions },
    { resolve: `gatsby-source-filesystem`, options: filesystemImageOptions },
    { resolve: `gatsby-transformer-remark`, options: transformerRemarkOptions },
  ],
};
