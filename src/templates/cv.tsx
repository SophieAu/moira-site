import { graphql } from 'gatsby';
import { css } from 'linaria';
import React from 'react';

import { CV as strings } from '../../data/strings';
import Layout from '../components/Layout';
import { MEDIA_MOBILE } from '../styles';
import { CVQuery } from '../types';

export const query = graphql`
  query($id: String!) {
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

const Writing: React.FC<CVQuery> = ({ data }) => {
  const { html } = data.markdownRemark;

  return (
    <Layout title={strings.pageTitle} description={strings.description} slug={strings.slug}>
      <div dangerouslySetInnerHTML={{ __html: html }} className={rootStyle} />
    </Layout>
  );
};

export default Writing;
