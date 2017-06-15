import React from 'react';
import PropTypes from 'prop-types'
import styles from './ServicesIntro.stylesheet.css';
import background from './images/background.jpg';

const ServicesIntro = ({ heading, text }) =>
  <div className={styles.ServicesIntro}
       style={{ background: `url(${background}) center/cover fixed` }}
  >
    <div className={styles.contentWrapper}>
      <h3 className={styles.heading}>{heading}</h3>
      <hr className={styles.underlining} />
      <div className={styles.text}>{text}</div>
    </div>
  </div>

ServicesIntro.propTypes = {
  text: PropTypes.text
};

export default ServicesIntro;
