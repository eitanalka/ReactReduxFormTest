import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import promise from 'redux-promise';

import reducers from './reducers';

let store = createStore(reducers, applyMiddleware(promise));

ReactDOM.render(
  <Provider store={ store }>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.querySelector('.container'));
