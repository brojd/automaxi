import React, { Component } from 'react';
import cn from 'classnames';
import Nav from '../Nav/Nav.component';
import styles from './Header.stylesheet.css';
import logo from './images/logo.png';

class Header extends Component {
  constructor() {
    super();
    this.onScroll = this.onScroll.bind(this);
    this.setHeaderVisibility = this.setHeaderVisibility.bind(this);
    this.state = {
      scrollY: 0,
      headerVisible: true
    }
  }

  setHeaderVisibility(value) {
    this.setState({ headerVisible: value });
  }

  onScroll() {
    this.setState({
      headerVisible: window.scrollY <= this.state.scrollY,
      scrollY: window.scrollY
    });
  }

  componentWillMount() {
    window.addEventListener('scroll', this.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }

  render() {
    return (
      <header className={cn(
        styles.Header,
        { [styles.hideHeader]: !this.state.headerVisible },
        { [styles.showHeader]: this.state.headerVisible }
      )}>
        <div
          className={cn(
            styles.arrow,
            {[styles['arrow--down']]: !this.state.headerVisible},
            {[styles['arrow--up']]: this.state.headerVisible}
          )}
          onMouseOver={() => !this.state.headerVisible && this.setHeaderVisibility(true)}
          onClick={() => this.state.headerVisible && this.setHeaderVisibility(false)}
        >
          &#8249;
        </div>
        <div className={styles.contentWrapper}>
          <img
            src={logo}
            alt="logo"
            className={styles.logo}
          />
          <Nav />
        </div>
      </header>
    )
  }
}


export default Header;
