import React from 'react';

import { Writing } from '../../data/strings';
import Layout from '../components/Layout';

export default () => (
  <Layout title={Writing.title} description={Writing.description} slug={Writing.slug}></Layout>
);
