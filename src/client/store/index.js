import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducers from '../reducers';

const configureStore = (initialState) => createStore(
  rootReducers,
  initialState,
  compose(applyMiddleware(thunk, createLogger())),
);

export default configureStore;
