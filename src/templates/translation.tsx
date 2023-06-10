/** @jsx jsx */

import { graphql } from 'gatsby';
import React from 'react';

import { Translation as strings } from '../../data/strings';
import Layout from '../components/Layout';
import Link from '../components/Link';
import { TranslationQuery } from '../types';
import { css, jsx } from '@emotion/react';
import HTMLHeader from '../components/HTMLHeader';

export const query = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        links {
          title
          link
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

  li {
    margin: 1.25rem 0;
  }

  li:first-child {
    margin-top: 1.5rem;
  }
`;

const linkStyle = css`
  color: var(--black);
  font: var(--normal-font);
  font-size: 1.25rem;
  margin: 1rem 0;
`;

const contentStyle = css`
  color: var(--black);
  font: var(--normal-font);
  font-size: 1rem;
`;

const Translation: React.FC<TranslationQuery> = ({ data }) => (
  <Layout>
    <h1 css={headerStyle}>{strings.title}</h1>
    <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} css={contentStyle} />
    <ul css={listStyle}>
      {data.markdownRemark.frontmatter.links.map(({ title, link }, i) => (
        <li key={i}>
          <Link eCss={linkStyle} to={link}>
            {title}
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
);

export const Head = () => (
  <HTMLHeader title={strings.pageTitle} description={strings.description} slug={strings.slug} />
);

export default Translation;
