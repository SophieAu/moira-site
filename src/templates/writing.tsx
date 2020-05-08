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

const itemStyle = css`
  margin: calc(2 * var(--small-margin)) 0;
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

  return (
    <Layout title={strings.pageTitle} description={strings.description} slug={strings.slug}>
      <ul>
        {writing.map((item, i) => (
          <li key={i}>
            <article className={itemStyle}>
              <Link to={item.link} className={linkStyle}>
                {item.title}
              </Link>
              <p className={metaStyle}>{item.info}</p>
            </article>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default Writing;
