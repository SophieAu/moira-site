import { css } from 'linaria';
import React from 'react';

import { BASE_TITLE, Home, pages } from '../../data/strings';
import Link from '../components/Link';
import { MEDIA_DESKTOP, MEDIA_MOBILE, SIDEBAR_WIDTH } from '../styles';

const root = css`
  width: ${SIDEBAR_WIDTH}px;
  margin-top: var(--margin-top);

  a {
    color: var(--black);
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }

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
`;

interface NavItemProps {
  title: string;
  slug: string;
  path: string;
}

const NavItem: React.FC<NavItemProps> = props => (
  <li key={props.slug} className={navItem}>
    <Link to={props.path}>{props.title}</Link>
  </li>
);

const Sidebar: React.FC = () => (
  <header className={root}>
    <h1 className={title}>
      <Link to={Home.path}>{BASE_TITLE}</Link>
    </h1>
    <nav>
      <ul className={linkList}>
        {pages.map(page => (
          <NavItem key={page.slug} {...page} />
        ))}
      </ul>
    </nav>
  </header>
);

export default Sidebar;
