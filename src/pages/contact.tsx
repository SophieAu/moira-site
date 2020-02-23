import React from 'react';

import { Contact } from '../../data/strings';
import Layout from '../components/Layout';

export default () => (
  <Layout title={Contact.title} description={Contact.description} slug={Contact.slug}></Layout>
);
