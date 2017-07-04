import React from 'react';
import PropTypes from 'prop-types';
import styles from './Description.stylesheet.css';

const Description = ({ backgroundImg, heading, text, isDark }) =>
  <div className={`${styles.Description} ${styles[isDark ? 'color-white' : 'color-dark']}`}>
    <div className={styles.background}
         style={{ background: `url(${backgroundImg}) center/cover fixed` }}
    />
    <div className={styles.contentWrapper}>
      <h3 className={`${styles.heading} ${styles[isDark ? 'color-white' : 'color-dark']}`}>{heading}</h3>
      <hr className={`${styles.underlining} ${styles[isDark ? 'underlining-yellow' : 'underlining-blue']}`} />
      <div className={styles.text}>{text}</div>
    </div>
  </div>

Description.propTypes = {
  backgroundImg: PropTypes.string,
  heading: PropTypes.string,
  text: PropTypes.string
};

export default Description;
