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
