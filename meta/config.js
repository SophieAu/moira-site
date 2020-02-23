/* eslint-disable @typescript-eslint/camelcase */

const hiddenPages = [];

exports.siteMetadata = {
  title: `Moira Barett`,
  description: `The Home of artist and translator Moira Barrett.`,
  author: `Moira Barrett`,
  siteUrl: `https://moira-barrett.com`,
};

exports.cspOptions = {
  disableOnDev: true,
  mergeStyleHashes: false,
  directives: { 'style-src': "'self' 'unsafe-inline' blob:" },
};

exports.manifestOptions = {
  name: `moira-barrett`,
  short_name: `moira`,
  start_url: `/`,
  background_color: `#FFFFFF`,
  theme_color: `#FFFFFF`,
  display: `minimal-ui`,
  // icon: `data/img/favicon.png`, // This path is relative to the root of the site.
};

exports.robotsTxtOptions = {
  policy: [{ userAgent: '*', disallow: hiddenPages, noindex: hiddenPages }],
};

exports.sitemapOptions = { exclude: hiddenPages };

exports.filesystemContentOptions = { name: `content`, path: `${__dirname}/../data/content` };
exports.filesystemImageOptions = { name: `images`, path: `${__dirname}/../data/img` };

exports.transformerRemarkOptions = {
  plugins: [
    { resolve: 'gatsby-remark-images', options: { maxWidth: 970, quality: 90, withWebp: true } },
  ],
};
