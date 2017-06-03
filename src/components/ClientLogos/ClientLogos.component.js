import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ClientLogos.stylesheet.css';
import { headerDict } from '../../static_data/dictionary';

class ClientLogos extends Component {

  render() {
    return (
      <section className={styles.ClientLogos}>
        <h4>{headerDict.clientLogosText}</h4>
        <div>
          {
            this.props.logoList.map((logo, index) =>
              <img
                src={logo}
                key={index}
                height={this.props.logoHeight}
                width={'auto'}
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
