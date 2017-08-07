import React, { Component } from 'react';
import { Link, scrollSpy } from 'react-scroll';
import cn from 'classnames'
import styles from './Nav.stylesheet.css';
import { headerDict } from '../../static_data/dictionary';

const navDict = headerDict.nav

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      menuVisible: true
    }
  }

  componentDidMount() {
    scrollSpy.update();
  }

  render() {
    return (
      <nav className={styles.Nav}>
        <div
          // style={{ visibility: this.state.menuVisible ? 'visible' : 'hidden' }}
          className={
            cn(styles.linksWrapper,
              { [styles.expandNav]: this.state.menuVisible },
              { [styles.collapseNav]: !this.state.menuVisible })
          }
        >
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
            offset={10}
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
            to="jobs"
            offset={-85}
            activeClass={styles['listItem--active']}
            className={styles.listItem}
          >
            {navDict.jobs}
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
        </div>
        <button
          type="button"
          onClick={() => this.setState({ menuVisible: !this.state.menuVisible })}
          className={styles.toggleMenuButton}
        >
          {
            document.documentElement.clientWidth < 950 ?
                <i
                  className={cn("fa", this.state.menuVisible ?  "fa-angle-up" : "fa-bars")}
                  aria-hidden="true"
                ></i>
              : null
          }
        </button>
      </nav>
    )
  }
}

export default Nav;
