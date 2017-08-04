import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { Element } from 'react-scroll';
import Jumbotron from '../Jumbotron/Jumbotron.component';
import Description from '../Description/Description.component';
import Services from '../Services/Services.component';
import Contact from '../Contact/Contact.component';
import ClientLogos from '../ClientLogos/ClientLogos.component';
import background from '../../common_images/background2.jpg';
import backgroundDark from '../../common_images/backgroundDark2.jpg';
import tiresBackground from './images/tires.jpg';
import { getDescription, getSummary, getCooperation1, getCooperation2 } from '../../selectors/main';
import styles from './MainPage.stylesheet.css';

const MainPage = ({ description, summary, cooperation1, cooperation2 }) =>
  <section>
    <ClientLogos logoHeight={40} />
    <Element name="start">
      <Jumbotron />
    </Element>
    <Element name="about-us">
      <Description
        backgroundImg={background}
        heading={description.heading}
        text={description.text}
      />
    </Element>
    <Element name="offer">
      <Services />
    </Element>
    <Element name="cooperation">
      <Description
        backgroundImg={backgroundDark}
        heading={cooperation2.heading}
        text={cooperation2.text}
        isDark={true}
      />
    </Element>
    <Element name="jobs">
      <div
        className={styles.lastSectionsWrapper}
        style={{ background: `url(${tiresBackground}) center center / cover fixed` }}
      >
        <div className={styles.descriptionBackground}></div>
        <Description
          heading={cooperation1.heading}
          text={cooperation1.text}
          isDark={true}
        />
        <Description
          text={cooperation1.text2}
          isDark={true}
        />
        <div className={styles.contactBackground}></div>
      </div>
    </Element>
    <Element name="contact">
      <Contact />
    </Element>
  </section>

const mapStateToProps = state => {
  return {
    description: getDescription(state),
    summary: getSummary(state),
    cooperation1: getCooperation1(state),
    cooperation2: getCooperation2(state)
  }
}

MainPage.propTypes = {
  description: PropTypes.object,
  summary: PropTypes.object
};

export default connect(mapStateToProps)(MainPage);
