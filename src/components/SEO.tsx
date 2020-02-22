import React from 'react';
import Helmet from 'react-helmet';

import { BASE_URL } from '../../data/config';

interface Props {
  title: string;
  description: string;
  slug: string;
  children?: React.ReactNode;
}

const SEO: React.FC<Props> = ({ title, description, slug, children }) => (
  <Helmet
    htmlAttributes={{ lang: 'en', prefix: 'og: http://ogp.me/ns#' }}
    title={title}
    meta={[
      { name: `description`, content: description },
      { property: `og:title`, content: title },
      { property: `og:description`, content: description },
      { property: `og:url`, content: `${BASE_URL}/${slug}` },
      { property: `og:type`, content: `website` },
      { name: `twitter:title`, content: title },
      { name: `twitter:description`, content: description },
      { name: `twitter:url`, content: `${BASE_URL}/${slug}` },
      { name: `twitter:card`, content: `summary` },
    ]}
  >
    {children}
  </Helmet>
);

export default SEO;
