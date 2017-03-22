import requestJson from '../utils';

export const DATAS_LOADED = 'datas/loaded';

export const datasLoaded = datas => ({
  type: DATAS_LOADED,
  payload: datas,
});

export const loadDatas = (toLoad) => (dispatch) => {
  const uri = `https://crossquantum.com/technicaltest/${toLoad}`;
  setTimeout(() => {
    requestJson(uri)
      .then(datas => dispatch(datasLoaded(datas)))
      .catch(err => console.log('error: ', err));
  }, 2000);
};
