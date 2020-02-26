import React from 'react';

import { BASE_TITLE, Home, SubPages } from '../../data/strings';
import Link from '../components/Link';
import { PageInfo } from '../types';
import { cn } from '../util';
import styles from './Sidebar.module.css';

interface Props {
  currentPage: string;
}

const Sidebar: React.FC<Props> = ({ currentPage }) => {
  const notOnHomePage = SubPages.findIndex(page => page.slug === currentPage) !== -1;

  return (
    <header className={styles.root}>
      <h1 className={styles.title}>
        <Link to={Home.path}>{BASE_TITLE}</Link>
      </h1>
      <nav>
        <ul className={styles.linkList}>
          {SubPages.map(page => (
            <Page
              key={page.slug}
              page={page}
              isActivePage={notOnHomePage && currentPage !== page.slug}
            />
          ))}
        </ul>
      </nav>
    </header>
  );
};

interface PageProps {
  page: PageInfo;
  isActivePage: boolean;
}

const Page: React.FC<PageProps> = ({ isActivePage, page }) => (
  <li className={`${styles.navItem} ${cn(!isActivePage && styles.inactive)}`}>
    <Link to={page.path}>{page.title}</Link>
  </li>
);

export default Sidebar;
