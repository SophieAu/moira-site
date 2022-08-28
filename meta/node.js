/* eslint-disable @typescript-eslint/no-var-requires */
//@ts-check

exports.PAGES_QUERY = `
  {
  contact: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/data\/content\/contact/"}}) {
    edges {
      node {
        id
      }
    }
  }
  cv: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/data\/content\/cv/"}}) {
    edges {
      node {
        id
      }
    }
  }
  writing: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/data\/content\/works/"}}) {
    edges {
      node {
        id
        frontmatter {
          title
          isSubpage
        }
      }
    }
  }
  collages: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/data\/content\/collages/"}}) {
    edges {
      node {
        id
        frontmatter {
          title
          isSubpage
        }
      }
    }
  }
}
`;
