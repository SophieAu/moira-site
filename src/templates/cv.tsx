import { graphql } from 'gatsby';
import { css } from 'linaria';
import React from 'react';

import { CV as strings } from '../../data/strings';
import Layout from '../components/Layout';
import { CVQuery } from '../types';

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      ...cv
    }
  }
`;

const placeholderStyle = css`
  margin: calc(2 * var(--small-margin)) 0 0;
  font: var(--normal-font);
  color: var(--black);
`;

const Writing: React.FC<CVQuery> = ({ data }) => {
  const { cv } = data.markdownRemark.frontmatter;

  return (
    <Layout title={strings.pageTitle} description={strings.description} slug={strings.slug}>
      <p className={placeholderStyle}>{cv}</p>
    </Layout>
  );
};

export default Writing;
