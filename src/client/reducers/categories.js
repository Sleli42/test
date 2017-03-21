import {
  CATEGORIES_LOADED,
} from '../actions';

const categories = (state = [], action) => {
  switch (action.type) {
    case CATEGORIES_LOADED:
      // console.log('state: ', state, 'action:', action);
      return [...action.payload];
    default: return state;
  }
};

export default categories;
