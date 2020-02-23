import React from 'react';

import { Collage } from '../../data/strings';
import Layout from '../components/Layout';

export default () => (
  <Layout title={Collage.title} description={Collage.description} slug={Collage.slug}></Layout>
);
