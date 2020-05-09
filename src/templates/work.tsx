import { graphql } from 'gatsby';
import React from 'react';

import { buildPageTitle } from '../../data/strings';
import Layout from '../components/Layout';
import { WorkQuery } from '../types';

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      ...work
    }
  }
`;

const Writing: React.FC<WorkQuery> = ({ data, pageContext }) => {
  const { html, frontmatter } = data.markdownRemark;

  return (
    <Layout title={buildPageTitle(frontmatter.title)} description={''} slug={pageContext.slug}>
      <h1>{frontmatter.title}</h1>
      <p>{frontmatter.date}</p>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
};

export default Writing;
