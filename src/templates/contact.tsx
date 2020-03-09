import { graphql } from 'gatsby';
import { css } from 'linaria';
import React from 'react';

import { Contact as strings } from '../../data/strings';
import Layout from '../components/Layout';
import { ContactQuery } from '../types';

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      ...contact
    }
  }
`;

const emailStyle = css`
  font: var(--normal-font);
  color: var(--black);
`;

const Contact: React.FC<ContactQuery> = ({ data }) => {
  const { email } = data.markdownRemark.frontmatter;

  return (
    <Layout title={strings.pageTitle} description={strings.description} slug={strings.slug}>
      <a className={emailStyle} href={`mailto:${email}`}>
        {email}
      </a>
    </Layout>
  );
};

export default Contact;
