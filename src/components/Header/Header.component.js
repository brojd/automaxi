import React from 'react';
import Nav from '../Nav/Nav.component';
import styles from './Header.stylesheet.css';
import logo from './images/logo.png';

const Header = () =>
  <header className={styles.Header}>
    <img
      src={logo}
      alt="logo"
      className={styles.logo}
    />
    <Nav />
  </header>;

export default Header;
