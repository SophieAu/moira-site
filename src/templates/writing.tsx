import { graphql } from 'gatsby';
import { css } from 'linaria';
import React from 'react';

import { Writing as strings } from '../../data/strings';
import Layout from '../components/Layout';
import Link from '../components/Link';
import { WritingQuery } from '../types';

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      ...writing
    }
  }
`;

const linkStyle = css`
  font: var(--normal-font);
  color: var(--black);
`;

const metaStyle = css`
  font: var(--meta-font);
  color: var(--grey);
`;

const Writing: React.FC<WritingQuery> = ({ data }) => {
  const { writing } = data.markdownRemark.frontmatter;
  const { title, link, info } = writing[0];

  return (
    <Layout title={strings.pageTitle} description={strings.description} slug={strings.slug}>
      <article>
        <Link to={link} className={linkStyle}>
          {title}
        </Link>
        <p className={metaStyle}>{info}</p>
      </article>
    </Layout>
  );
};

export default Writing;
