/** @jsx jsx */

import { graphql } from 'gatsby';
import React from 'react';

import { Contact as strings } from '../../data/strings';
import Layout from '../components/Layout';
import { MEDIA_DESKTOP } from '../styles';
import { ContactQuery } from '../types';
import { css, jsx } from '@emotion/react';
import HTMLHeader from '../components/HTMLHeader';

export const query = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      ...contact
    }
  }
`;

const emailStyle = css`
  font: var(--normal-font);
  color: var(--black);

  margin: 0 0 var(--small-margin);

  ${MEDIA_DESKTOP} {
    :first-child {
      margin-top: calc(2 * var(--small-margin));
    }
  }
`;

const Contact: React.FC<ContactQuery> = ({ data }) => {
  const { email, socialMedia } = data.markdownRemark.frontmatter;

  return (
    <Layout>
      <p css={emailStyle}>
        {strings.email}
        <a href={`mailto:${email}`}>{email}</a>
      </p>
      {socialMedia.map(s => (
        <p key={s.platformName} css={emailStyle}>
          {`${s.platformName}: `}
          <a href={s.link}>{s.profileName}</a>
        </p>
      ))}
    </Layout>
  );
};

export const Head = () => (
  <HTMLHeader title={strings.pageTitle} description={strings.description} slug={strings.slug} />
);

export default Contact;
