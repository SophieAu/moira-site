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
  collage: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/data\/content\/collages/"}}) {
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
  news: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/data\/content\/news/"}}) {
    edges {
      node {
        id
      }
    }
  }
}
`;
