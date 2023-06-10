/** @jsx jsx */

import { graphql } from 'gatsby';
import React from 'react';

import { CV as strings } from '../../data/strings';
import Layout from '../components/Layout';
import { MEDIA_MOBILE } from '../styles';
import { CVQuery } from '../types';
import { css, jsx } from '@emotion/react';
import HTMLHeader from '../components/HTMLHeader';

export const query = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      ...cv
    }
  }
`;

const rootStyle = css`
  margin: calc(2 * var(--small-margin)) 0 0;
  font: var(--normal-font);
  color: var(--black);

  li {
    padding-bottom: 0.5rem;
  }

  h2 {
    font-size: 1.25rem;
  }

  li,
  p {
    font-size: 1rem;
  }

  ${MEDIA_MOBILE} {
    margin: 0;
  }
`;

const CV: React.FC<CVQuery> = ({ data }) => {
  const { html } = data.markdownRemark;

  return (
    <Layout>
      <div dangerouslySetInnerHTML={{ __html: html }} css={rootStyle} />
    </Layout>
  );
};

export const Head = () => (
  <HTMLHeader title={strings.pageTitle} description={strings.description} slug={strings.slug} />
);

export default CV;
