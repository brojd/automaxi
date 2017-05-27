import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { devToolsEnhancer  } from 'redux-devtools-extension';
import routes from './routes';
import automaxi from './reducers';
import './global_styles/index.css';

let store = createStore(automaxi, devToolsEnhancer());

ReactDOM.render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById('root')
);
