import {
  DATAS_LOADED,
} from '../actions';

const datasReducer = (state = {}, action) => {
  switch (action.type) {
    case DATAS_LOADED:
      return { data: [...action.payload] };
    default: return state;
  }
};

export default datasReducer;
