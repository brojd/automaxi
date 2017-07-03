import React, { Component } from 'react';
import { animateScroll } from 'react-scroll';
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
        <a
          onClick={() => { animateScroll.scrollToTop(); this.changeTab(1); }}
          className={cn(styles.listItem, { [styles['listItem--active']]: this.state.currentTab === 1 })}
        >
          {navDict.start}
        </a>
        <a
          onClick={() => { animateScroll.scrollTo(660); this.changeTab(2); }}
          className={cn(styles.listItem, { [styles['listItem--active']]: this.state.currentTab === 2 })}
        >
          {navDict.about}
        </a>
        <a
          onClick={() => { animateScroll.scrollTo(1325); this.changeTab(3); }}
          className={cn(styles.listItem, { [styles['listItem--active']]: this.state.currentTab === 3 })}
        >
          {navDict.offer}
        </a>
        <a
          onClick={() => { animateScroll.scrollToBottom(); this.changeTab(4); }}
          className={cn(styles.listItem, { [styles['listItem--active']]: this.state.currentTab === 4 })}
        >
          {navDict.contact}
        </a>
      </nav>
    )
  }
}

export default Nav;
