import { css } from 'linaria';
import React from 'react';

import { BASE_TITLE, Home, SubPages } from '../../data/strings';
import Link from '../components/Link';
import { MEDIA_DESKTOP, MEDIA_MOBILE } from '../styles';
import { cn } from '../util';

const root = css`
  width: 320px;
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
  justify-content: space-between;
`;

const title = css`
  font: var(--title-font);
  color: var(--black);
  margin-bottom: var(--small-margin);
`;

const navItem = css`
  font: var(--nav-font);
  color: var(--black);
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
            <li key={page.slug} className={`${navItem}${cn(!isActivePage(page.slug) && inactive)}`}>
              <Link to={page.path}>{page.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Sidebar;
