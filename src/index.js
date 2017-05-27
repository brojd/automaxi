import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { devToolsEnhancer  } from 'redux-devtools-extension';
import routes from './routes';
import automaxi from './reducers';
import './global_styles/index.css';

let store = createStore(automaxi, compose(applyMiddleware(thunk), devToolsEnhancer()));

ReactDOM.render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById('root')
);
