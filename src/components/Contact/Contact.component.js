import React from 'react';
import PropTypes from 'prop-types'
import GoogleMapReact from 'google-map-react';
import { connect } from 'react-redux';
import ReactMarkdown from 'react-markdown'
import backgroundDark from '../../common_images/backgroundDark2.jpg';
import { getContact } from '../../selectors/main';
import styles from './Contact.stylesheet.css';
import building from './images/building.jpg';
import marker from './images/marker.png';
import config from '../../../config.json';

const GoogleMarker = () =>
  <img
    src={marker}
    alt="map-marker"
    className={styles.googleMarker}
  />

const Contact = ({ contact }) =>
  <section
    className={styles.Contact}
    style={{ background: `url(${backgroundDark}) center/cover fixed` }}
  >
    <div className={styles.contactInfoWrapper}>
      <div className={styles.contactInfo}>
        <h3>Adres:</h3>
        <p>{contact.address1}</p>
        <p>{contact.address2}</p>
        {contact.address3 && <ReactMarkdown source={contact.address3} />}
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
      <div className={styles.map}>
        <GoogleMapReact
          defaultCenter={{ lat: 51.1483784, lng: 17.0298001 }}
          defaultZoom={13}
          bootstrapURLKeys={{
            key: config.googleAPIKey
          }}
        >
          <GoogleMarker
            lat={51.151555}
            lng={17.0298001}
          />
        </GoogleMapReact>
      </div>
      <img
        src={building}
        alt="warsztat"
        className={styles.buildingPhoto}
      />
      <div className={styles.links}>
        <i className="fa fa-google-plus" aria-hidden="true"></i>
        <a
          href="https://dobrymechanik.pl/mechanicy/wroclaw/auto-maxi-sp-j-w-pomykala-j-grabczyk-rozwadowski.html"
          target="_blank"
        >
          DobryMechanik.pl
        </a>
      </div>
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
