/* eslint-disable @typescript-eslint/no-var-requires */

exports.PAGES_QUERY = `
  {
  collage: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/data\/content\/collage/"}}) {
    edges {
      node {
        id
      }
    }
  }
  contact: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/data\/content\/contact/"}}) {
    edges {
      node {
        id
      }
    }
  }
  translation: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/data\/content\/translation/"}}) {
    edges {
      node {
        id
      }
    }
  }
  writing: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/data\/content\/writing/"}}) {
    edges {
      node {
        id
      }
    }
  }
}
`;
