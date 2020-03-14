import { graphql } from 'gatsby';
import { css } from 'linaria';
import React from 'react';

import { Translation as strings } from '../../data/strings';
import Layout from '../components/Layout';
import List from '../components/List';
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

const Translation: React.FC<TranslationQuery> = ({ data }) => {
  const { translations, infotext } = data.markdownRemark.frontmatter;

  return (
    <Layout title={strings.pageTitle} description={strings.description} slug={strings.slug}>
      <p className={infoTextStyle}>{infotext}</p>
      <List list={translations} />
    </Layout>
  );
};

export default Translation;
