import { graphql } from 'gatsby';

export const collage = graphql`
  fragment collage on MarkdownRemark {
    frontmatter {
      images {
        image {
          preview: childImageSharp {
            fluid(maxWidth: 525, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
          fullScreen: childImageSharp {
            fixed(height: 2000, quality: 90) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
      }
    }
  }
`;

export const contact = graphql`
  fragment contact on MarkdownRemark {
    frontmatter {
      email
    }
  }
`;

export const translation = graphql`
  fragment translation on MarkdownRemark {
    frontmatter {
      infotext
      translations {
        title
        link
        info
      }
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

export const heroImage = graphql`
  fragment heroImage on File {
    childImageSharp {
      fluid(maxWidth: 1360) {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
  }
`;
