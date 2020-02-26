import React from 'react';

import { cn } from '../util';
import styles from './Layout.module.css';
import SEO from './SEO';
import Sidebar from './Sidebar';

const webpSupportDetection =
  '!function(e){"use strict";function s(s){if(s){var t=e.documentElement;t.classList?t.classList.add("webp"):t.className+=" webp",window.sessionStorage.setItem("webpSupport",!0)}}!function(e){if(window.sessionStorage&&window.sessionStorage.getItem("webpSupport"))s(!0);else{var t=new Image;t.onload=t.onerror=function(){e(2===t.height)},t.src="data:image/webp;base64,UklGRi4AAABXRUJQVlA4TCEAAAAvAUAAEB8wAiMwAgSSNtse/cXjxyCCmrYNWPwmHRH9jwMA"}}(s)}(document);';

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
    <>
      <SEO title={title} description={description} slug={slug}>
        <script type="text/javascript">{webpSupportDetection}</script>
        {additionalHead}
      </SEO>
      <div id={styles.body}>
        <Sidebar />
        <main className={`${styles.root}${cn(className)}`}>{children}</main>
      </div>
    </>
  );
};

export default Layout;
