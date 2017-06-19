import React from 'react';
import PropTypes from 'prop-types';
import styles from './ServiceDetails.stylesheet.css';
import checkboxBlue from './images/checkbox.png';
import checkboxRed from './images/checkboxRed.png';

const ServiceDetails = props =>
  <section className={styles.ServiceDetails}>
    <img src={props.image}
         alt="service-details"
         className={styles.image}
         style={{
           float: props.isBright ? 'left' : 'right',
           width: props.imageWidth
         }}
    />
    <div className={styles.contentWrapper}
         style={{ width: `${100 - props.imageWidth}vw`}}
    >
      <h3 className={styles.heading}>{props.heading}</h3>
      <hr className={styles.underlining} />
      <span className={styles.text}>{props.text}</span>
      <ul>
        {props.bulletList.map(
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
      </ul>
    </div>
  </section>

ServiceDetails.propTypes = {
  isBright: PropTypes.bool,
  heading: PropTypes.string,
  text: PropTypes.string,
  image: PropTypes.string,
  imageWidth: PropTypes.string,
  bulletList: PropTypes.arrayOf(PropTypes.string)
};

export default ServiceDetails;
