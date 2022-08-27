/* eslint-disable react/jsx-no-literals */
import { graphql } from 'gatsby';
import { css } from 'linaria';
import React from 'react';

import { buildPageTitle } from '../../data/strings';
import Layout from '../components/Layout';
import { WorkQuery } from '../types';

export const query = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      ...work
    }
  }
`;

const titleStyle = css`
  font: var(--title-font);
  color: var(--black);
`;

const contentStyle = css`
  margin: calc(2 * var(--small-margin)) 0;
  font: var(--normal-font);
  color: var(--black);
`;

const Writing: React.FC<WorkQuery> = ({ data, pageContext }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout title={buildPageTitle(frontmatter.title)} description={''} slug={pageContext.slug}>
      <article>
        {/* <h2 className={titleStyle}>{frontmatter.title}</h2> */}
        {/* <div className={contentStyle} dangerouslySetInnerHTML={{ __html: html }} /> */}
        <h2 className={titleStyle}>Collages</h2>
        <p className={contentStyle}> Collages will appear here soon</p>
      </article>
    </Layout>
  );
};

export default Writing;
