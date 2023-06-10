import React from 'react';

import { Home as strings } from '../../data/strings';
import Layout from '../components/Layout';
import HTMLHeader from '../components/HTMLHeader';

const Home = () => <Layout />;

export const Head = () => (
  <HTMLHeader title={strings.pageTitle} description={strings.description} slug={strings.slug} />
);

export default Home;
