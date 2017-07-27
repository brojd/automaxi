import React, { Component } from 'react';
import { Link, scrollSpy } from 'react-scroll';
import styles from './Nav.stylesheet.css';
import { headerDict } from '../../static_data/dictionary';

const navDict = headerDict.nav

class Nav extends Component {

  componentDidMount() {
    scrollSpy.update();
  }

  render() {
    return (
      <nav className={styles.Nav}>
        <Link
          spy={true}
          smooth={true}
          to="start"
          activeClass={styles['listItem--active']}
          className={styles.listItem}
        >
          {navDict.start}
        </Link>
        <Link
          spy={true}
          smooth={true}
          offset={-5}
          to="about-us"
          activeClass={styles['listItem--active']}
          className={styles.listItem}
        >
          {navDict.about}
        </Link>
        <Link
          spy={true}
          smooth={true}
          offset={15}
          to="offer"
          activeClass={styles['listItem--active']}
          className={styles.listItem}
        >
          {navDict.offer}
        </Link>
        <Link
          spy={true}
          smooth={true}
          offset={15}
          to="cooperation"
          activeClass={styles['listItem--active']}
          className={styles.listItem}
        >
          {navDict.cooperation}
        </Link>
        <Link
          spy={true}
          smooth={true}
          to="contact"
          offset={-15}
          activeClass={styles['listItem--active']}
          className={styles.listItem}
        >
          {navDict.contact}
        </Link>
      </nav>
    )
  }
}

export default Nav;
