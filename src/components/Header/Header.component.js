import React from 'react';
import Nav from '../Nav/Nav.component';
import styles from './Header.stylesheet.css';
import logo from './images/logo.png';

const Header = () =>
  <header className={styles.Header}>
    <div className={styles.contentWrapper}>
      <img
        src={logo}
        alt="logo"
        className={styles.logo}
      />
      <Nav />
    </div>
  </header>;

export default Header;
