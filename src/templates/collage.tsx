/* eslint-disable react/jsx-no-literals */
import { graphql } from 'gatsby';
import { css } from 'linaria';
import React from 'react';

import { Collages as strings } from '../../data/strings';
import Layout from '../components/Layout';
import { CollagesQuery } from '../types';

export const query = graphql`
  query {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/data/content/collages/" } }) {
      edges {
        node {
          id
          frontmatter {
            title
            image
          }
        }
      }
    }
  }
`;

const headerStyle = css`
  font: var(--normal-font);
  font-size: 1.75rem;
  margin-bottom: 0.25rem;
`;

const listStyle = css`
  border: 0;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const itemStyle = css`
  font: var(--normal-font);

  margin: calc(2 * var(--small-margin)) 0;

  &:first-child {
    margin-top: 1rem;
  }

  img {
    width: stretch;
    width: -moz-available;

    max-height: 720px; /* this is the max width of the containing body. not great but eh */
    object-fit: contain;
    object-position: left;
  }
`;

const titleStyle = css`
  font-size: 1.25rem;
  margin: 0;
`;

const Collages: React.FC<CollagesQuery> = ({ data }) => {
  const collages = data.allMarkdownRemark.edges;

  return (
    <Layout title={strings.pageTitle} description={strings.description} slug={strings.slug}>
      <h1 className={headerStyle}>{strings.title}</h1>
      <ul className={listStyle}>
        {collages.map(({ node }, i) => (
          <li key={i}>
            <article className={itemStyle}>
              <img src={node.frontmatter.image} alt={node.frontmatter.title} />
              <p className={titleStyle}>{node.frontmatter.title}</p>
            </article>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default Collages;
