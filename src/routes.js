import React from 'react';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';
import App from './components/App/App.component';
import MainPage from './components/MainPage/MainPage.component';
import About from './components/About/About.component';

const routes =
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={MainPage} />
      <Route path='about' component={About} />
    </Route>
  </Router>;

export default routes;
