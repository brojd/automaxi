import React from 'react';
import { IndexRoute, Router, Route, hashHistory } from 'react-router';
import App from './components/App/App.component';
import MainPage from './components/MainPage/MainPage.component';
import About from './components/About/About.component';

const routes =
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={MainPage} />
      <Route path='about' component={About} />
    </Route>
  </Router>;

export default routes;
