import React from 'react';

import { EMAIL } from '../../data/config';
import { Contact } from '../../data/strings';
import Layout from '../components/Layout';
import styles from './contact.module.css';

export default () => (
  <Layout title={Contact.title} description={Contact.description} slug={Contact.slug}>
    <main className={styles.root}>
      <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
    </main>
  </Layout>
);
