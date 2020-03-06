import { css } from 'linaria';
import React from 'react';

import { EMAIL } from '../../data/config';
import { Contact as strings } from '../../data/strings';
import Layout from '../components/Layout';

const email = css`
  font: var(--normal-font);
  color: var(--black);
`;

const Contact = () => (
  <Layout title={strings.pageTitle} description={strings.description} slug={strings.slug}>
    <a className={email} href={`mailto:${EMAIL}`}>
      {EMAIL}
    </a>
  </Layout>
);

export default Contact;
