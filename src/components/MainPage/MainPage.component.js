import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import Jumbotron from '../Jumbotron/Jumbotron.component';
import Description from '../Description/Description.component';
import Services from '../Services/Services.component';
import Contact from '../Contact/Contact.component';
import background from '../../common_images/background2.jpg';
import summaryBackground from './images/tires2.jpg';
import { getDescription, getSummary } from '../../selectors/main';

const MainPage = ({ description, summary }) =>
  <section>
    <Jumbotron />
    <Description
      backgroundImg={background}
      heading={description.heading}
      text={description.text}
    />
    <Services />
    <Description
      backgroundImg={summaryBackground}
      heading={description.heading}
      text={description.text}
      isDark={true}
    />
    <Contact />
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
