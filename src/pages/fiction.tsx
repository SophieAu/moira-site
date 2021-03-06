import { graphql } from 'gatsby';
import React from 'react';

import { Fiction as strings } from '../../data/strings';
import WritingSubpage from '../components/WritingSubpage';
import { WorksQuery } from '../types';

export const query = graphql`
  query {
    allMarkdownRemark(filter: { frontmatter: { category: { eq: "Fiction" } } }) {
      ...works
    }
  }
`;

const Fiction: React.FC<WorksQuery> = ({ data }) => (
  <WritingSubpage workNodes={data.allMarkdownRemark.edges} strings={strings} />
);

export default Fiction;
