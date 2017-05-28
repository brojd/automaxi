import React, { Component } from 'react';
import styles from './OuterJumbotron.stylesheet.css';

function OuterJumbotron(WrappedComponent, images) {
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
      const props = Object.assign({...this.props, textIndex: this.state.currentImagesIndex})
      return (
        <div
          alt="background-image"
          className={styles.OuterJumbotron}
          style={{'background': `url(${images[this.state.currentImagesIndex]}) center/cover fixed`}}
        >
          <WrappedComponent {...props} />
        </div>
      )
    }
  }
}

export default OuterJumbotron;
