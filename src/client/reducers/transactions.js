import {
  TRANSACTIONS_LOADED,
} from '../actions';

const transactions = (state = [], action) => {
  switch (action.type) {
    case TRANSACTIONS_LOADED:
      // console.log('state: ', state, 'action:', action);
      return [...action.payload];
    default: return state;
  }
};

export default transactions;
