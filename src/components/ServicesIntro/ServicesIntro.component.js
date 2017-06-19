import React from 'react';
import PropTypes from 'prop-types'
import styles from './ServicesIntro.stylesheet.css';
import background from '../../common_images/backgroundDark.jpg';

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
  text: PropTypes.string
};

export default ServicesIntro;
