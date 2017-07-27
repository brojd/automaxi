import React from 'react';
import PropTypes from 'prop-types';
import styles from './ServiceDetails.stylesheet.css';
import checkboxBlue from './images/checkbox.png';
import checkboxRed from './images/checkboxRed.png';
import background from '../../common_images/background2.jpg';
import backgroundDark from '../../common_images/backgroundDark2.jpg';

const ServiceDetails = props => {
  const mainImg =
    <img src={props.image}
         alt="service-details"
         className={styles.image}
         style={{
           float: props.isBright ? 'left' : 'right',
           width: props.imageWidth
         }}
    />;

  return (
    <section className={styles.ServiceDetails}
             style={{
               background: `url(${props.isBright ? background : backgroundDark}) center/cover fixed`,
               color: props.isBright ? '#333333' : '#fff'
             }}
    >
      {props.isBright && mainImg}
      <div className={styles.contentWrapper}
           style={{ width: `${100 - props.imageWidth}vw`}}
      >
        <h3 className={styles.heading}>{props.heading}</h3>
        <hr className={
          `${styles.underlining} ${props.isBright ?
            styles['underlining--primary-color']
            : styles['underlining--secondary-color']}`
          } />
        <span className={styles.text}>{props.text}</span>
        <ul>
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
        </ul>
      </div>
      {!props.isBright && mainImg}
    </section>
  )
}


ServiceDetails.propTypes = {
  isBright: PropTypes.bool,
  heading: PropTypes.string,
  text: PropTypes.string,
  image: PropTypes.string,
  imageWidth: PropTypes.string,
  bulletList: PropTypes.arrayOf(PropTypes.string)
};

export default ServiceDetails;
