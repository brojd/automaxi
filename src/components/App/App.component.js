import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getMainData } from '../../reducers/main';
import { getIsLoading } from '../../selectors/main';
import styles from './App.stylesheet.css';
import Header from '../Header/Header.component';
import Footer from '../Footer/Footer.component';

class App extends Component {
  componentDidMount() {
    this.props.getMainData()
  }

  render() {
    return (
      <section className={styles.App}>
        <Header />
        {
          this.props.isLoading ?
            <div>is loading...</div>
            : <main className={styles.main}>
            {this.props.children}
          </main>
        }
        <Footer />
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoading: getIsLoading(state)
  };
};

const mapDispatchToProps = {
  getMainData
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
