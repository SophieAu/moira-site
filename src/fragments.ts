import { graphql } from 'gatsby';

export const contact = graphql`
  fragment contact on MarkdownRemark {
    frontmatter {
      email
    }
  }
`;

export const writing = graphql`
  fragment writing on MarkdownRemark {
    frontmatter {
      writing {
        title
        link
        info
      }
    }
  }
`;

export const cv = graphql`
  fragment cv on MarkdownRemark {
    html
  }
`;

export const work = graphql`
  fragment work on MarkdownRemark {
    id
    html
    frontmatter {
      title
    }
  }
`;

export const works = graphql`
  fragment works on MarkdownRemarkConnection {
    edges {
      node {
        id
        html
        frontmatter {
          title
          link
          metainfo
          isSubpage
          category
        }
      }
    }
  }
`;
