import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { getServices } from '../../selectors/main';
import styles from './Services.stylesheet.css';
import ServicesIntro from '../ServicesIntro/ServicesIntro.component';

const Services = ({ services }) =>
  <section className={styles.Services}>
    <ServicesIntro heading={services.heading} text={services.text} />
    <div>detailed</div>
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
