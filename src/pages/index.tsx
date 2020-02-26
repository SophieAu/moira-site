import React from 'react';

import { Home } from '../../data/strings';
import Layout from '../components/Layout';

export default () => (
  <Layout title={Home.pageTitle} description={Home.description} slug={Home.slug}></Layout>
);
