import React from 'react';
import styles from './Nav.stylesheet.css';
import { headerDict } from '../../static_data/dictionary';

const navDict = headerDict.nav

const Nav = () =>
  <nav className={styles.Nav}>
    <ul className={styles.list}>
      <li className={`${styles.listItem} ${styles['listItem--active']}`}>{navDict.start}</li>
      <li className={styles.listItem}>{navDict.about}</li>
      <li className={styles.listItem}>{navDict.offer}</li>
      <li className={styles.listItem}>{navDict.contact}</li>
    </ul>
  </nav>

export default Nav;
