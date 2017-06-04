import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ClientLogos.stylesheet.css';
import { headerDict } from '../../static_data/dictionary';

const ClientLogos = ({ logoList, logoHeight }) =>
  <section className={styles.ClientLogos}>
    <h4>{headerDict.clientLogosText}</h4>
    <div>
      {
        logoList.map((logo, index) =>
            <img
              src={logo}
              alt='client_logo'
              height={logoHeight}
              width={'auto'}
              className={styles.logo}
              style={{ animationDelay: `${index * 2.4}s` }}
            />
        )
      }
    </div>
  </section>

ClientLogos.propTypes = {
  logoHeight: PropTypes.number,
  logoList: PropTypes.arrayOf(PropTypes.string)
};

export default ClientLogos;
