import React from 'react';
import styles from './Bullets.stylesheet.css';
import PropTypes from 'prop-types';
import checkboxBlue from './images/checkbox.png';
import checkboxRed from './images/checkboxRed.png';

const Bullets = (props) =>
  <ul style={{ color: props.isBright ? '#333' : '#fff' }}>
    {props.bulletList && props.bulletList.map(
      (item, index) =>
        <li key={index}
            className={styles.listItem}
        >
          <img src={props.isBright ? checkboxBlue : checkboxRed}
               alt="checkbox"
               className={styles.checkbox}
          />
          <span>{item}</span>
        </li>
    )}
  </ul>;

Bullets.propTypes = {
  isBright: PropTypes.bool,
  bulletList: PropTypes.arrayOf(PropTypes.string)
};


export default Bullets;
