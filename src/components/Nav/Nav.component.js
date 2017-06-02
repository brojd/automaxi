import React from 'react';
import styles from './Nav.stylesheet.css';

const Nav = () =>
  <nav className={styles.Description}>
    <ul className={styles.list}>
      <li className={`${styles.listItem} ${styles['listItem--active']}`}>Start</li>
      <li className={styles.listItem}>O nas</li>
      <li className={styles.listItem}>Oferta</li>
      <li className={styles.listItem}>Kontakt</li>
    </ul>
  </nav>

export default Nav;
