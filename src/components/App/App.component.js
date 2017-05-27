import React from 'react';
import styles from './App.stylesheet.css';
import Header from '../Header/Header.component';
import Footer from '../Footer/Footer.component';

const App = ({ children }) =>
  <section className={styles.App}>
    <Header />
    <main className={styles.main}>
      {children}
    </main>
    <Footer />
  </section>;

export default App;
