import React, { Component } from 'react';
import styles from './OuterJumbotron.stylesheet.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

let currentImagesIndex = 0;

function OuterJumbotron(WrappedComponent, images, timeout) {
  return class extends Component {

    constructor() {
      super();
      this.changeBackground = this.changeBackground.bind(this);
      this.state = {
        currentImagesIndex
      };
    }

    changeBackground() {
      const nextIndex = this.state.currentImagesIndex === (images.length - 1) ? 0 : this.state.currentImagesIndex + 1;
      currentImagesIndex = nextIndex;
      this.setState({
        currentImagesIndex: nextIndex
      })
    }

    componentDidMount() {
      this.backgroundInterval = window.setInterval(this.changeBackground, timeout);
    }

    componentWillUnmount() {
      window.clearInterval(this.backgroundInterval);
    }

    render() {
      const props = Object.assign({...this.props, textIndex: this.state.currentImagesIndex})
      return (
        <div className={styles.OuterJumbotron}>
          <ReactCSSTransitionGroup
            transitionName={styles}
            transitionEnterTimeout={timeout}
            transitionLeaveTimeout={timeout}
          >
            {
              images.map((image, index) =>
                index === this.state.currentImagesIndex &&
                <div
                  key={image}
                  style={{'background': `url(${images[this.state.currentImagesIndex]}) center/cover fixed`}}
                  className={styles.image}
                >
                  <div className={styles.secondBackground}></div>
                  <WrappedComponent {...props} />
                </div>
              )
            }
          </ReactCSSTransitionGroup>
        </div>
      )
    }
  }
}

export default OuterJumbotron;
