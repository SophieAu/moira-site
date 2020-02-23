import React from 'react';

import { Translation } from '../../data/strings';
import Layout from '../components/Layout';

export default () => (
  <Layout
    title={Translation.title}
    description={Translation.description}
    slug={Translation.slug}
  ></Layout>
);
