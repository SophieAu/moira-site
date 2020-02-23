import React from 'react';

import { Home } from '../../data/strings';
import Layout from '../components/Layout';
import styles from './index.module.css';

export default () => (
  <Layout title={Home.title} description={Home.description} slug={Home.slug}>
    <main className={styles.root}></main>
  </Layout>
);
