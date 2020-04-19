/* eslint-disable @typescript-eslint/no-var-requires */

exports.PAGES_QUERY = `
  {
  contact: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/data\/content\/contact/"}}) {
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
