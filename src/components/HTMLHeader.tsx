import React from 'react';

import { BASE_URL } from '../../data/config';

const CSP_POLICY =
  "base-uri 'self';" +
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com/;" +
  "font-src 'self' https://fonts.gstatic.com/s/;";

const WEBP_SUPPORT_DETECTION =
  '!function(e){"use strict";function s(s){if(s){var t=e.documentElement;t.classList?t.classList.add("webp"):t.className+=" webp",window.sessionStorage.setItem("webpSupport",!0)}}!function(e){if(window.sessionStorage&&window.sessionStorage.getItem("webpSupport"))s(!0);else{var t=new Image;t.onload=t.onerror=function(){e(2===t.height)},t.src="data:image/webp;base64,UklGRi4AAABXRUJQVlA4TCEAAAAvAUAAEB8wAiMwAgSSNtse/cXjxyCCmrYNWPwmHRH9jwMA"}}(s)}(document);';

interface Props {
  title: string;
  description: string;
  slug: string;
  children?: React.ReactNode;
}

const HTMLHeader: React.FC<Props> = ({ title, description, slug, children }) => (
  <>
    <html lang="en" prefix="og: http://ogp.me/ns#" />
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={`${BASE_URL}/${slug}`} />
    <meta property="og:type" content="website" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:url" content={`${BASE_URL}/${slug}`} />
    <meta name="twitter:card" content="summary" />
    <meta httpEquiv="Content-Security-Policy" content={CSP_POLICY} />
    <link href="https://fonts.googleapis.com/css?family=Italiana&display=swap" rel="stylesheet" />
    <script type="text/javascript">{WEBP_SUPPORT_DETECTION}</script>
    {children}
  </>
);

export default HTMLHeader;
