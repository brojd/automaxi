import React from 'react';
import { animateScroll } from 'react-scroll';
import styles from './Nav.stylesheet.css';
import { headerDict } from '../../static_data/dictionary';


const navDict = headerDict.nav

const Nav = () =>
  <nav className={styles.Nav}>
    <a
      onClick={() => animateScroll.scrollToTop()}
      className={styles.listItem}
    >
      {navDict.start}
    </a>
    <a
      onClick={() => animateScroll.scrollTo(660)}
      className={styles.listItem}
    >
      {navDict.about}
    </a>
    <a
      onClick={() => animateScroll.scrollTo(1325)}
      className={styles.listItem}
    >
      {navDict.offer}
    </a>
    <a
      onClick={() => animateScroll.scrollToBottom()}
      className={styles.listItem}
    >
      {navDict.contact}
    </a>
  </nav>

export default Nav;
