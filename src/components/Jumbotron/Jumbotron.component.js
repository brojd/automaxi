import React  from 'react';
import styles from './Jumbotron.stylesheet.css';
import BackgroundImage from '../../HOC/OuterJumbotron/OuterJumbotron.component';
import jumbo1 from './images/jumbo1.jpg';
import jumbo2 from './images/jumbo2.jpg';
import jumbo3 from './images/jumbo3.jpeg';

const Jumbotron = () =>
  <section
    className={styles.Jumbotron}
  >
    jumbotron
  </section>

export default BackgroundImage(Jumbotron, [jumbo1, jumbo2, jumbo3]);
