import { Link } from 'gatsby';
import { css } from 'linaria';
import React from 'react';

import { Translation as strings } from '../../data/strings';
import Layout from '../components/Layout';

const infoText = css`
  font: var(--normal-font);
  color: var(--black);
  margin-bottom: var(--large-margin);
`;

const link = css`
  font: var(--normal-font);
  color: var(--black);
`;

const meta = css`
  font: var(--meta-font);
  color: var(--grey);
`;

const Translation = () => (
  <Layout title={strings.pageTitle} description={strings.description} slug={strings.slug}>
    <p className={infoText}>{strings.infoText}</p>
    <article>
      <Link to="" className={link}>
        Link to a Translation Work here
      </Link>
      <p className={meta}>Meta info on that work</p>
    </article>
  </Layout>
);

export default Translation;
