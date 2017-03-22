import {
  CATEGORIES_LOADED,
  TRANSACTIONS_LOADED,
  MODE_TOGGLED,
} from '../actions';

const rootReducers = (state = {}, action) => {
  switch (action.type) {
    case CATEGORIES_LOADED:
      return { ...state, categories: action.payload };
    case TRANSACTIONS_LOADED:
      return { ...state, transactions: action.payload };
    case MODE_TOGGLED:
      return { ...state, mode: action.payload };
    default: return state;
  }
};

export default rootReducers;
