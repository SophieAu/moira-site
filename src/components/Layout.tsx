import { css, cx } from 'linaria';
import React from 'react';

import bgPattern from '../../data/img/bg_pattern.png';
import { globals, MEDIA_DESKTOP, MEDIA_MOBILE, reset, SIDEBAR_WIDTH } from '../styles';
import SEO from './SEO';
import Sidebar from './Sidebar';

const webpSupportDetection =
  '!function(e){"use strict";function s(s){if(s){var t=e.documentElement;t.classList?t.classList.add("webp"):t.className+=" webp",window.sessionStorage.setItem("webpSupport",!0)}}!function(e){if(window.sessionStorage&&window.sessionStorage.getItem("webpSupport"))s(!0);else{var t=new Image;t.onload=t.onerror=function(){e(2===t.height)},t.src="data:image/webp;base64,UklGRi4AAABXRUJQVlA4TCEAAAAvAUAAEB8wAiMwAgSSNtse/cXjxyCCmrYNWPwmHRH9jwMA"}}(s)}(document);';

const body = css`
  display: grid;
  width: min(calc(100vw - 2 * var(--padding)), 1600px);
  padding: 0 0 0 var(--padding);
  grid-gap: var(--padding);

  ${MEDIA_DESKTOP} {
    --padding: var(--large-margin);
    --right-column: calc(100vw - 2 * var(--padding) - ${SIDEBAR_WIDTH}px);
    height: 100vh;
    grid-template-columns: ${SIDEBAR_WIDTH}px var(--right-column);
  }

  ${MEDIA_MOBILE} {
    --padding: var(--small-margin);
    grid-template-columns: 1fr;
    min-height: calc(100vh - var(--padding));
    padding-bottom: var(--padding);
    grid-template-rows: auto 1fr;
  }
`;

const root = css`
  ${MEDIA_DESKTOP} {
    padding: var(--padding) max(calc(var(--padding) / 2), calc(var(--right-column) - 45rem)) 0 0;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
  }
`;

const wrapper = css`
  background: url(${bgPattern});
`;

interface Props {
  title: string;
  description: string;
  slug: string;
  children?: React.ReactNode;
  additionalHead?: React.ReactNode;
  className?: string;
}

const Layout: React.FC<Props> = props => {
  const { title, description, slug, additionalHead, children, className } = props;

  return (
    <React.StrictMode>
      <SEO title={title} description={description} slug={slug}>
        <link
          href="https://fonts.googleapis.com/css?family=Italiana&display=swap"
          rel="stylesheet"
        />
        <script type="text/javascript">{webpSupportDetection}</script>
        {additionalHead}
      </SEO>
      <div className={wrapper}>
        <div className={cx(body, globals, reset)}>
          <Sidebar />
          <main className={cx(root, className)}>{children}</main>
        </div>
      </div>
    </React.StrictMode>
  );
};

export default Layout;
