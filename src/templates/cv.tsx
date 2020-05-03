import { graphql } from 'gatsby';
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

const Writing: React.FC<CVQuery> = ({ data }) => {
  const { cv } = data.markdownRemark.frontmatter;

  return (
    <Layout title={strings.pageTitle} description={strings.description} slug={strings.slug}>
      {cv}
    </Layout>
  );
};

export default Writing;
