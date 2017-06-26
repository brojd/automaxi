import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import styles from './Summary.stylesheet.css';
import { getSummary} from '../../selectors/main';

const Summary = ({ summary }) =>
  <div className={styles.Summary}>
    <h3>{summary.heading}</h3>
    <p>{summary.text}</p>
  </div>

const mapStateToProps = state => {
  return {
    summary: getSummary(state)
  }
}

Summary.propTypes = {
  summary: PropTypes.object
};

Summary.defaultProps = {
  summary: {
    heaading: '',
    text: ''
  }
};

export default connect(mapStateToProps)(Summary);
