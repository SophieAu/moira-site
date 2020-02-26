import React from 'react';

import { Writing } from '../../data/strings';
import Layout from '../components/Layout';
import Link from '../components/Link';
import styles from './writing.module.css';

export default () => (
  <Layout title={Writing.pageTitle} description={Writing.description} slug={Writing.slug}>
    <article>
      <Link to="" className={styles.link}>
        Link to a Writing Work here
      </Link>
      <p className={styles.meta}>Meta info on that work</p>
    </article>
  </Layout>
);
