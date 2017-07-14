import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ClientLogos.stylesheet.css';
import { headerDict } from '../../static_data/dictionary';
import logo1 from './clientLogos/logo1.jpg';
import logo2 from './clientLogos/logo2.png';
import logo3 from './clientLogos/logo3.jpg';
import logo4 from './clientLogos/logo4.jpg';
import logo5 from './clientLogos/logo5.jpg';
import logo6 from './clientLogos/logo6.jpg';

const logoList = [logo1, logo2, logo3, logo4, logo5, logo6]

class ClientLogos extends Component {
  constructor() {
    super();
    this.state = {
      componentVisible: true
    };
  }

  render() {
    return (
      <section className={`${styles.ClientLogos} ${!this.state.componentVisible ? styles.hideComponent : null}`}>
        <h5 className={styles.title}>
          {headerDict.clientLogosText}
          <span
            className={styles.closeIcon}
            onClick={() => this.setState({ componentVisible: false })}
          >
            X
          </span>
        </h5>
        <hr className={styles.underlining} />
        <div>
          {
            logoList.map((logo, index) =>
              <img
                src={logo}
                alt='client_logo'
                height={this.props.logoHeight}
                width={'auto'}
                className={styles.logo}
                style={{ animationDelay: `${index * 3}s` }}
                key={index}
              />
            )
          }
        </div>
      </section>
    )
  }
}


ClientLogos.propTypes = {
  logoHeight: PropTypes.number,
  logoList: PropTypes.arrayOf(PropTypes.string)
};

export default ClientLogos;
