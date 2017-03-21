import { combineReducers } from 'redux';
import categories from './categories';
import transactions from './transactions';

export default combineReducers({ categories, transactions });
