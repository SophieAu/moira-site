import React from 'react';

import { Collage } from '../../data/strings';
import Layout from '../components/Layout';
import styles from './collage.module.css';

export default () => (
  <Layout title={Collage.pageTitle} description={Collage.description} slug={Collage.slug}></Layout>
);
