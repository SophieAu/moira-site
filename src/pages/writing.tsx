import { css } from 'linaria';
import React from 'react';

import { Writing as strings } from '../../data/strings';
import Layout from '../components/Layout';
import Link from '../components/Link';

const link = css`
  font: var(--normal-font);
  color: var(--black);
`;

const meta = css`
  font: var(--meta-font);
  color: var(--grey);
`;

const Writing = () => (
  <Layout title={strings.pageTitle} description={strings.description} slug={strings.slug}>
    <article>
      <Link to="" className={link}>
        Link to a Writing Work here
      </Link>
      <p className={meta}>Meta info on that work</p>
    </article>
  </Layout>
);

export default Writing;
