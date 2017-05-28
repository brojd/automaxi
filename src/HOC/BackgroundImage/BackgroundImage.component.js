import React, { Component } from 'react';
import styles from './BackgroundImage.stylesheet.css';

function BackgroundImage(WrappedComponent, images) {
  return class extends Component {

    constructor() {
      super();
      this.changeBackground = this.changeBackground.bind(this);
      this.state = {
        currentImagesIndex: 0
      };
    }

    changeBackground() {
      this.setState({
        currentImagesIndex: this.state.currentImagesIndex === (images.length - 1) ?
          0
          : this.state.currentImagesIndex + 1
      })
    }

    componentDidMount() {
      this.backgroundInterval = window.setInterval(this.changeBackground, 4000);
    }

    componentWillUnmount() {
      window.clearInterval(this.backgroundInterval);
    }

    render() {
      return (
        <div
          alt="background-image"
          className={styles.BackgroundImage}
          style={{'background': `url(${images[this.state.currentImagesIndex]}) center/cover fixed`}}
        >
          <WrappedComponent {...this.props} />
        </div>
      )
    }
  }
}

export default BackgroundImage;
