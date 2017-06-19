import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import styles from './Description.stylesheet.css';
import { getDescription } from '../../selectors/main';
import background from '../../common_images/background.jpg';

const Description = ({ description }) =>
  <section className={styles.Description}>
    <div className={styles.background}
         style={{ background: `url(${background}) center/cover fixed` }}
    />
    <div className={styles.contentWrapper}>
      <h3 className={styles.heading}>{description.heading}</h3>
      <hr className={styles.underlining} />
      <div className={styles.text}>{description.text}</div>
    </div>
  </section>

const mapStateToProps = state => {
  return {
    description: getDescription(state)
  }
}

Description.propTypes = {
  description: PropTypes.object
};

export default connect(mapStateToProps)(Description);
