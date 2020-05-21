import { graphql } from 'gatsby';
import { css } from 'linaria';
import React from 'react';

import { Contact as strings, INSTAGRAM_BASE } from '../../data/strings';
import Layout from '../components/Layout';
import { MEDIA_DESKTOP } from '../styles';
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

  margin: 0 0 calc(2 * var(--small-margin));

  ${MEDIA_DESKTOP} {
    :first-child {
      margin: calc(2 * var(--small-margin)) 0;
    }
  }
`;

const Contact: React.FC<ContactQuery> = ({ data }) => {
  const { email, instagram } = data.markdownRemark.frontmatter;

  return (
    <Layout title={strings.pageTitle} description={strings.description} slug={strings.slug}>
      <p className={emailStyle}>
        {strings.email}
        <a href={`mailto:${email}`}>{email}</a>
      </p>
      <p className={emailStyle}>
        {strings.instagram}
        <a href={`${INSTAGRAM_BASE}${instagram}`}>{instagram}</a>
      </p>
    </Layout>
  );
};

export default Contact;
