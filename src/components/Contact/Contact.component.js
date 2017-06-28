import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { getContact } from '../../selectors/main';
import styles from './Contact.stylesheet.css';
import building from './images/building.jpg';

const Contact = ({ contact }) =>
  <section className={styles.Contact}>
    <div className={styles.contactInfoWrapper}>
      <div className={styles.contactInfo}>
        <h3>Adres:</h3>
        <p>{contact.address1}</p>
        <p>{contact.address2}</p>
      </div>
      <div className={styles.contactInfo}>
        <h3>Godziny otwarcia:</h3>
        <p>{contact.openingHours[0]}</p>
        <p>{contact.openingHours[1]}</p>
      </div>
      <div className={styles.contactInfo}>
        <h3>Numery telefonu:</h3>
        <p>{contact.phoneNumbers[0]}</p>
        <p>{contact.phoneNumbers[1]}</p>
        <p>{contact.phoneNumbers[2]}</p>
      </div>
    </div>
    <div className={styles.pictureMapWrapper}>
      <img
        src={building}
        alt="warsztat"
        className={styles.buildingPhoto}
      />
      <div className={styles.map}>map</div>
    </div>
  </section>

const mapStateToProps = state => {
  return {
    contact: getContact(state)
  }
}

Contact.propTypes = {
  contact: PropTypes.object
};

export default connect(mapStateToProps)(Contact);
