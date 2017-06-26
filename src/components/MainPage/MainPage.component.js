import React from 'react';
import Jumbotron from '../Jumbotron/Jumbotron.component.js';
import Description from '../Description/Description.component.js';
import Services from '../Services/Services.component.js';
import Summary from '../Summary/Summary.component.js';
import Contact from '../Contact/Contact.component.js';

const MainPage = () =>
  <section>
    <Jumbotron />
    <Description />
    <Services />
    <Summary />
    <Contact />
  </section>

export default MainPage;
