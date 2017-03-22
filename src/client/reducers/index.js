import {
  DATA_LOADED,
} from '../actions';

const rootReducer = (state = {}, action) => {
  switch (action.type) {
    case DATA_LOADED:
      return { data: [action.payload] };
    default: return state;
  }
};

export default rootReducer;
