import { css, cx } from 'linaria';
import React from 'react';

import { BASE_TITLE, Home, SubPages } from '../../data/strings';
import Link from '../components/Link';
import { MEDIA_DESKTOP, MEDIA_MOBILE, SIDEBAR_WIDTH } from '../styles';

const root = css`
  width: ${SIDEBAR_WIDTH}px;
  margin-top: var(--margin-top);

  ${MEDIA_DESKTOP} {
    --margin-top: 10vh;
  }

  ${MEDIA_MOBILE} {
    --margin-top: var(--small-margin);
  }
`;

const linkList = css`
  display: flex;
  justify-content: flex-start;
  margin-bottom: var(--small-margin);

  border: 0;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const title = css`
  font: var(--title-font);
  color: var(--black);
  margin-bottom: var(--small-margin);
`;

const navItem = css`
  font: var(--nav-font);
  color: var(--black);

  &:not(:last-child) {
    padding-right: 1.875rem;
  }
  a {
    color: var(--black);
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
`;

const inactive = css`
  color: var(--grey);
`;

interface Props {
  currentPage: string;
}

const Sidebar: React.FC<Props> = ({ currentPage }) => {
  const onHomePage = SubPages.findIndex(page => page.slug === currentPage) === -1;
  const isActivePage = (slug: string) => onHomePage || currentPage === slug;

  return (
    <header className={root}>
      <h1 className={title}>
        <Link to={Home.path}>{BASE_TITLE}</Link>
      </h1>
      <nav>
        <ul className={linkList}>
          {SubPages.map(page => (
            <li key={page.slug} className={cx(navItem, !isActivePage(page.slug) && inactive)}>
              <Link to={page.path}>{page.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Sidebar;
