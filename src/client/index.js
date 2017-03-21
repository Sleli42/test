import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import enUS from 'antd/lib/locale-provider/en_US';
import { LocaleProvider } from 'antd';
import configureStore from './store';
import App from './components/App';
import initialState from './mystate';
import { loadCategories, loadTransactions } from './actions';

const store = configureStore(initialState);

store.dispatch(loadCategories());
store.dispatch(loadTransactions());

const mountNode = window.document.getElementById('root');
const root = (
  <LocaleProvider locale={enUS}>
    <Provider store={store}>
      <App />
    </Provider>
  </LocaleProvider>
);

console.log('testCrossQ in progress...'); // eslint-disable-line no-console
render(root, mountNode);
