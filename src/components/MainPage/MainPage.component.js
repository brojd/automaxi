import React from 'react';
import Jumbotron from '../Jumbotron/Jumbotron.component.js';
import Description from '../Description/Description.component.js';
import Services from '../Services/Services.component.js';
import Contact from '../Contact/Contact.component.js';
import styles from './MainPage.stylesheet.css';

const MainPage = () =>
  <section>
    <Jumbotron />
    <Description />
    <Services />
    <Contact />
  </section>

export default MainPage;
