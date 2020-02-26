import React from 'react';

import { EMAIL } from '../../data/config';
import { Contact } from '../../data/strings';
import Layout from '../components/Layout';
import styles from './contact.module.css';

export default () => (
  <Layout title={Contact.pageTitle} description={Contact.description} slug={Contact.slug}>
    <a className={styles.email} href={`mailto:${EMAIL}`}>
      {EMAIL}
    </a>
  </Layout>
);
