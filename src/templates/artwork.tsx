/** @jsx jsx */

/* eslint-disable react/jsx-no-literals */
import { graphql } from 'gatsby';
import { css, jsx } from '@emotion/react';
import React from 'react';

import { Artwork as strings } from '../../data/strings';
import Layout from '../components/Layout';
import { ArtworkQuery } from '../types';
import HTMLHeader from '../components/HTMLHeader';

export const query = graphql`
  query {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/data/content/artwork/" } }) {
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
    max-width: calc(100vw - var(--padding) - var(--padding));

    max-height: 720px; /* this is the max width of the containing body. not great but eh */
    object-fit: contain;
    object-position: left;
  }
`;

const titleStyle = css`
  font-size: 1.25rem;
  margin: 0;
`;

const Artwork: React.FC<ArtworkQuery> = ({ data }) => {
  const artwork = [...data.allMarkdownRemark.edges].reverse();

  return (
    <Layout>
      <h1 css={headerStyle}>{strings.title}</h1>
      <ul css={listStyle}>
        {artwork.map(({ node }, i) => (
          <li key={i}>
            <article css={itemStyle}>
              <img src={node.frontmatter.image} alt={node.frontmatter.title} />
              <p css={titleStyle}>{node.frontmatter.title}</p>
            </article>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export const Head = () => (
  <HTMLHeader title={strings.pageTitle} description={strings.description} slug={strings.slug} />
);

export default Artwork;
