import React from 'react';

import { Home, SubPages } from '../../data/strings';
import Link from '../components/Link';
import styles from './Sidebar.module.css';

export default () => (
  <header className={styles.root}>
    <h1 className={styles.title}>
      <Link to={Home.path}>Moira Barrett</Link>
    </h1>
    <Nav />
  </header>
);

const Nav = () => (
  <nav>
    <ul className={styles.linkList}>
      {SubPages.map(page => (
        <li className={styles.navItem} key={page.slug}>
          <Link to={page.path}>{page.title}</Link>
        </li>
      ))}
    </ul>
  </nav>
);
