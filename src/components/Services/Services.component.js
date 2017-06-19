import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { getServices } from '../../selectors/main';
import styles from './Services.stylesheet.css';
import ServicesIntro from '../ServicesIntro/ServicesIntro.component';
import ServiceDetails from '../ServiceDetails/ServiceDetails.component';
import service1 from './images/service1.jpg';

const Services = ({ services }) =>
  <section className={styles.Services}>
    <ServicesIntro heading={services.heading} text={services.text} />
    <ServiceDetails bulletList={services.services1.list}
                    heading={services.services1.heading}
                    image={service1}
                    imageWidth={'50vw'}
                    isBright={true}
                    text={services.services1.text}
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
