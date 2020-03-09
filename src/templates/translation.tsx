import { graphql, Link } from 'gatsby';
import { css } from 'linaria';
import React from 'react';

import { Translation as strings } from '../../data/strings';
import Layout from '../components/Layout';
import { TranslationQuery } from '../types';

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      ...translation
    }
  }
`;

const infoTextStyle = css`
  font: var(--normal-font);
  color: var(--black);
  margin-bottom: var(--large-margin);
`;

const linkStyle = css`
  font: var(--normal-font);
  color: var(--black);
`;

const metaStyle = css`
  font: var(--meta-font);
  color: var(--grey);
`;

const Translation: React.FC<TranslationQuery> = ({ data }) => {
  const { translations, infotext } = data.markdownRemark.frontmatter;
  const { title, link, info } = translations[0];

  return (
    <Layout title={strings.pageTitle} description={strings.description} slug={strings.slug}>
      <p className={infoTextStyle}>{infotext}</p>
      <article>
        <Link to={link} className={linkStyle}>
          {title}
        </Link>
        <p className={metaStyle}>{info}</p>
      </article>
    </Layout>
  );
};

export default Translation;
