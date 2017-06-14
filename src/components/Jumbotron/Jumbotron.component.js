import React, { Component }  from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { getJumbotron } from '../../selectors/main.js'
import styles from './Jumbotron.stylesheet.css';
import OuterJumbotron from '../../HOC/OuterJumbotron/OuterJumbotron.component';
import jumbo1 from './images/jumbo1.jpg';
import jumbo2 from './images/jumbo2.jpg';
import jumbo3 from './images/jumbo3.jpeg';
import jumbo4 from './images/jumbo4.jpg';
import jumbo5 from './images/jumbo5.jpeg';
import jumbo6 from './images/jumbo6.jpg';

class Jumbotron extends Component {

  render() {
    return (
      <section
        className={styles.Jumbotron}
      >
        <div className={styles.headingWrapper}>
          <span className={styles.heading}>
            {this.props.jumbotron.headings[this.props.textIndex]}
            <hr className={styles.underlining} />
          </span>
        </div>
        <div className={styles.arrow}>↓</div>
      </section>
    )
  }
}

const mapStateToProps = state => {
  return {
    jumbotron: getJumbotron(state)
  }
};

Jumbotron.propTypes = {
  textIndex: PropTypes.number,
  jumbotron: PropTypes.object
}

const component = OuterJumbotron(Jumbotron, [jumbo1, jumbo2, jumbo3, jumbo4, jumbo5, jumbo6], 4200)

export default connect(mapStateToProps)(component);
