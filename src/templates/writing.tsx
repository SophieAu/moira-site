import { graphql } from 'gatsby';
import React from 'react';

import { Writing as strings } from '../../data/strings';
import Layout from '../components/Layout';
import List from '../components/List';
import { WritingQuery } from '../types';

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      ...writing
    }
  }
`;

const Writing: React.FC<WritingQuery> = ({ data }) => {
  const { writing } = data.markdownRemark.frontmatter;

  return (
    <Layout title={strings.pageTitle} description={strings.description} slug={strings.slug}>
      <List list={writing} />
    </Layout>
  );
};

export default Writing;
