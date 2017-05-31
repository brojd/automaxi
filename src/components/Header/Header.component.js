import React from 'react';
import styles from './Header.stylesheet.css';
import logo from './images/logo.png';

const Header = () =>
  <header className={styles.Header}>
    <img
      src={logo}
      alt="logo"
      className={styles.logo}
    />
  </header>;

export default Header;
