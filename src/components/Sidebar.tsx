import { css, cx } from 'linaria';
import React from 'react';

import { BASE_TITLE, Home, pages, writingPages } from '../../data/strings';
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

const writingStyle = css`
  p {
    margin: 0;
  }

  ul {
    margin: 0;
    padding: 0;

    position: absolute;
    height: 0;
    overflow: hidden;
  }

  li {
    border: 0;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  &:focus-within,
  &:hover {
    ul {
      padding: 1rem 0 0;
      display: flex;
      flex-direction: row;
      height: auto;

      overflow: unset;
    }
  }
`;

const Sidebar: React.FC = () => (
  <header className={root}>
    <h1 className={title}>
      <Link to={Home.path}>{BASE_TITLE}</Link>
    </h1>
    <nav>
      <ul className={linkList}>
        <>
          <li key={writingPages.title} className={cx(navItem, writingStyle)}>
            <p>{writingPages.title}</p>
            <ul>
              {writingPages.pages.map(page => (
                <li key={page.slug} className={navItem}>
                  <Link to={page.path}>{page.title}</Link>
                </li>
              ))}
            </ul>
          </li>
          {pages.map(page => (
            <li key={page.slug} className={navItem}>
              <Link to={page.path}>{page.title}</Link>
            </li>
          ))}
        </>
      </ul>
    </nav>
  </header>
);

export default Sidebar;
