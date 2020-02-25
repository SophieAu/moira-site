import { Link } from 'gatsby';
import React from 'react';

import { Translation } from '../../data/strings';
import Layout from '../components/Layout';
import styles from './translation.module.css';

export default () => (
  <Layout title={Translation.title} description={Translation.description} slug={Translation.slug}>
    <p className={styles.infoText}>{Translation.infoText}</p>
    <article>
      <Link to="" className={styles.link}>
        Link to a Translation Work here
      </Link>
      <p className={styles.meta}>Meta info on that work</p>
    </article>
  </Layout>
);
