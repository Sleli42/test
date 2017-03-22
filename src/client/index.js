import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import App from './components/App';
import { loadCategories, loadTransactions } from './actions';

const initialState = {};
const store = configureStore(initialState);

store.dispatch(loadCategories());
store.dispatch(loadTransactions());

const mountNode = window.document.getElementById('root');
const root = (
  <Provider store={store}>
    <App />
  </Provider>
);

render(root, mountNode);
