import requestJson from '../utils';
import { uri } from '../../../config/';

export const DATA_LOADED = 'datas/loaded';

export const dataLoaded = data => ({
  type: DATA_LOADED,
  payload: data,
});

export const loadData = () => (dispatch) => {
  requestJson(uri)
    .then(data => dispatch(dataLoaded(data)))
    .catch(err => console.log('error: ', err));
};
