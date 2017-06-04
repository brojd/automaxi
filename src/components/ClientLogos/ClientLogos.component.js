import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ClientLogos.stylesheet.css';
import { headerDict } from '../../static_data/dictionary';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

let currentLogoIndex = -1;

class ClientLogos extends Component {

  constructor() {
    super();
    this.state = {
      currentLogoIndex
    }
    this.changeImgIndex = this.changeImgIndex.bind(this);
  }

  changeImgIndex() {
    const nextIndex = this.state.currentLogoIndex === (this.props.logoList.length - 1) ?
      0
      : this.state.currentLogoIndex + 1;
    currentLogoIndex = nextIndex;
    this.setState({
      currentLogoIndex: nextIndex
    });
  }

  componentDidMount() {
    this.changeImgIndex()
    this.logoInterval = window.setInterval(this.changeImgIndex, 5100);
  }

  componentWillUnmount() {
    window.clearInterval(this.logoInterval);
  }

  render() {
    return (
      <section className={styles.ClientLogos}>
        <h4>{headerDict.clientLogosText}</h4>
        <div>
          <ReactCSSTransitionGroup
            transitionName={styles}
            transitionEnterTimeout={5000}
            transitionLeaveTimeout={1}
          >
            {
              this.props.logoList.map((logo, index) =>
                currentLogoIndex === index ?
                  <img
                    src={logo}
                    alt='client_logo'
                    height={this.props.logoHeight}
                    width={'auto'}
                    className={styles.logo}
                  />
                  : null
              )
            }
          </ReactCSSTransitionGroup>
        </div>
      </section>
    )
  }
}

ClientLogos.propTypes = {
  logoHeight: PropTypes.number,
  logoList: PropTypes.arrayOf(PropTypes.string)
};

export default ClientLogos;
