import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown'
import Bullets from '../Bullets/Bullets.component'
import styles from './ServiceDetails.stylesheet.css';
import background from '../../common_images/background2.jpg';
import backgroundDark from '../../common_images/backgroundDark2.jpg';

const ServiceDetails = props => {
  const mainImg =
    <img src={props.image}
         alt="service-details"
         className={styles.image}
         style={{
           order: props.isBright ? 0 : 1,
           width: `${props.imageWidthInVW}vw`
         }}
    />;

  return (
    <section className={styles.ServiceDetails}
             style={{
               background: `url(${props.isBright ? background : backgroundDark}) center/cover fixed`,
               color: props.isBright ? '#333333' : '#fff'
             }}
    >
      {mainImg}
      <div className={styles.contentWrapper}
           style={{ width: `${100 - props.imageWidthInVW}vw` }}
      >
        <h3 className={styles.heading}>{props.heading}</h3>
        <hr className={
          `${styles.underlining} ${props.isBright ?
            styles['underlining--primary-color']
            : styles['underlining--secondary-color']}`
          } />
        <span className={styles.text}><ReactMarkdown source={props.text || ''} /></span>
        <Bullets
          isBright={props.isBright}
          bulletList={props.bulletList}
        />
        {props.children}
      </div>
    </section>
  )
}


ServiceDetails.propTypes = {
  isBright: PropTypes.bool,
  heading: PropTypes.string,
  text: PropTypes.string,
  image: PropTypes.string,
  imageWidthInVW: PropTypes.number,
  bulletList: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.element
};

export default ServiceDetails;
