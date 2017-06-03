import React from 'react';
import Nav from '../Nav/Nav.component';
import ClientLogos from '../ClientLogos/ClientLogos.component';
import styles from './Header.stylesheet.css';
import logo from './images/logo.png';
import logo1 from './clientLogos/logo1.jpg';
import logo2 from './clientLogos/logo2.png';
import logo3 from './clientLogos/logo3.jpg';
import logo4 from './clientLogos/logo4.jpg';
import logo5 from './clientLogos/logo5.jpg';
import logo6 from './clientLogos/logo6.jpg';

const logoList = [logo1, logo2, logo3, logo4, logo5, logo6]

const Header = () =>
  <header className={styles.Header}>
    <img
      src={logo}
      alt="logo"
      className={styles.logo}
    />
    <ClientLogos
      logoHeight={50}
      logoList={logoList}
    />
    <Nav />
  </header>;

export default Header;
