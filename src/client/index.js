import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import App from './components/App';
import { loadDatas } from './actions';

const initialState = {};
const store = configureStore(initialState);

store.dispatch(loadDatas('transactions'));
// store.dispatch(loadDatas('categories'));

const mountNode = window.document.getElementById('root');
const root = (
  <Provider store={store}>
    <App />
  </Provider>
);

console.log('testCrossQ in progress...'); // eslint-disable-line no-console
render(root, mountNode);
