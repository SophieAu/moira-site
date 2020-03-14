import React from 'react';

import { Home as strings } from '../../data/strings';
import Layout from '../components/Layout';

const Home = () => (
  <Layout title={strings.pageTitle} description={strings.description} slug={strings.slug} />
);

export default Home;
