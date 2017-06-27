import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { getServices } from '../../selectors/main';
import styles from './Services.stylesheet.css';
import Description from '../Description/Description.component';
import ServiceDetails from '../ServiceDetails/ServiceDetails.component';
import service1 from './images/service1.jpg';
import service2 from './images/service2.jpeg';
import service3 from './images/service3.jpg';
import background from '../../common_images/backgroundDark2.jpg';

const Services = ({ services }) =>
  <section className={styles.Services}>
    <Description
      heading={services.heading}
      text={services.text}
      backgroundImg={background}
      isDark={true}
    />
    <ServiceDetails
      bulletList={services.services1.list}
      heading={services.services1.heading}
      image={service1}
      imageWidth={'50vw'}
      isBright={true}
      text={services.services1.text}
    />
    <ServiceDetails
      bulletList={services.services2.list}
      heading={services.services2.heading}
      image={service2}
      imageWidth={'40vw'}
      isBright={false}
      text={services.services2.text}
    />
    <ServiceDetails
      bulletList={services.services1.list}
      heading={services.services1.heading}
      image={service1}
      imageWidth={'40vw'}
      isBright={true}
      text={services.services1.text}
    />
    <ServiceDetails
      bulletList={services.services3.list}
      heading={services.services3.heading}
      image={service3}
      imageWidth={'46vw'}
      isBright={false}
      text={services.services3.text}
    />
  </section>

const mapStateToProps = state => {
  return {
    services: getServices(state)
  }
}

Services.propTypes = {
  services: PropTypes.object
};

export default connect(mapStateToProps)(Services);
