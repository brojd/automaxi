import React, { Component } from 'react';
import { Link } from 'react-scroll';
import cn from 'classnames';
import styles from './Nav.stylesheet.css';
import { headerDict } from '../../static_data/dictionary';

const navDict = headerDict.nav

class Nav extends Component {
  constructor() {
    super();
    this.changeTab = this.changeTab.bind(this);
    this.state = {
      currentTab: 1
    }
  }

  changeTab(tab) {
    this.setState({ currentTab: tab })
  }

  render() {
    return (
      <nav className={styles.Nav}>
        <Link
          smooth={true}
          to="start"
          onClick={() => this.changeTab(1)}
          className={cn(styles.listItem, { [styles['listItem--active']]: this.state.currentTab === 1 })}
        >
          {navDict.start}
        </Link>
        <Link
          smooth={true}
          to="about-us"
          onClick={() => this.changeTab(2)}
          className={cn(styles.listItem, { [styles['listItem--active']]: this.state.currentTab === 2 })}
        >
          {navDict.about}
        </Link>
        <Link
          smooth={true}
          to="offer"
          onClick={() => this.changeTab(3)}
          className={cn(styles.listItem, { [styles['listItem--active']]: this.state.currentTab === 3 })}
        >
          {navDict.offer}
        </Link>
        <Link
          smooth={true}
          to="contact"
          onClick={() => this.changeTab(4)}
          className={cn(styles.listItem, { [styles['listItem--active']]: this.state.currentTab === 4 })}
        >
          {navDict.contact}
        </Link>
      </nav>
    )
  }
}

export default Nav;
