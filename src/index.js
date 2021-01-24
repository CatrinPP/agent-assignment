import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import allReducers from './reducer/reducer';
import createAPI from './api';
import {Operation as UserOperation} from './reducer/user/user';
import {App} from './components/app/app';

import './index.scss';

const api = createAPI();

const store = createStore(
  allReducers,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
  ),
);

store.dispatch(UserOperation.checkAuth());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root'),
);
