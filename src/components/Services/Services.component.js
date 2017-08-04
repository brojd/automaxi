import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { getServices } from '../../selectors/main';
import styles from './Services.stylesheet.css';
import Description from '../Description/Description.component';
import Bullets from '../Bullets/Bullets.component';
import ServiceDetails from '../ServiceDetails/ServiceDetails.component';
import service1 from './images/service1.png';
import service2 from './images/service2.png';
import service3 from './images/service3.png';
import service4 from './images/service4.png';
import service5 from './images/service5.png';
import background from '../../common_images/backgroundDark2.jpg';

const Services = ({ services }) =>
  <section className={styles.Services}>
    <Description
      heading={services.heading}
      text={services.text}
      backgroundImg={background}
      isDark={true}
    >
      <Bullets
        isBright={false}
        bulletList={services.list}
      />
    </Description>
    <ServiceDetails
      bulletList={services.services1.list}
      heading={services.services1.heading}
      image={service1}
      imageWidthInVW={50}
      isBright={true}
      text={services.services1.text}
    />
    <ServiceDetails
      bulletList={services.services2.list}
      heading={services.services2.heading}
      image={service2}
      imageWidthInVW={40}
      isBright={false}
      text={services.services2.text}
    >
      <a
        href="https://az-serwer1798119.online.pro/automaxi/cennik_przegladow.pdf"
        target="_blank"
        className={styles.link}
      >
        Szczegółowy cennik
      </a>
    </ServiceDetails>
    <ServiceDetails
      bulletList={services.services3.list}
      heading={services.services3.heading}
      image={service3}
      imageWidthInVW={50}
      isBright={true}
      text={services.services3.text}
    />
    <ServiceDetails
      bulletList={services.services4.list}
      heading={services.services4.heading}
      image={service4}
      imageWidthInVW={52}
      isBright={false}
      text={services.services4.text}
    />
    <ServiceDetails
      bulletList={services.services5.list}
      heading={services.services5.heading}
      image={service5}
      imageWidthInVW={55}
      isBright={true}
      text={services.services5.text}
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
