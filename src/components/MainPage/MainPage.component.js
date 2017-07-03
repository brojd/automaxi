import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import Jumbotron from '../Jumbotron/Jumbotron.component';
import Description from '../Description/Description.component';
import Services from '../Services/Services.component';
import Contact from '../Contact/Contact.component';
import ClientLogos from '../ClientLogos/ClientLogos.component';
import background from '../../common_images/background2.jpg';
import tiresBackground from './images/tires.jpg';
import { getDescription, getSummary } from '../../selectors/main';
import styles from './MainPage.stylesheet.css';

const MainPage = ({ description, summary }) =>
  <section>
    <ClientLogos logoHeight={40} />
    <Jumbotron />
    <Description
      backgroundImg={background}
      heading={description.heading}
      text={description.text}
    />
    <Services />
    <div
      className={styles.lastSectionsWrapper}
      style={{ background: `url(${tiresBackground}) center center / cover fixed` }}
    >
      <div className={styles.descriptionBackground}></div>
      <Description
        heading={description.heading}
        text={description.text}
        isDark={true}
      />
      <div className={styles.contactBackground}></div>
      <Contact />
    </div>
  </section>

const mapStateToProps = state => {
  return {
    description: getDescription(state),
    summary: getSummary(state)
  }
}

MainPage.propTypes = {
  description: PropTypes.object,
  summary: PropTypes.object
};

export default connect(mapStateToProps)(MainPage);
