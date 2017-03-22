import 'whatwg-fetch';

const checkStatus = (result) => {
  if (result.status !== 200) {
    throw new Error(result.statusText);
  }
  return result;
};

const paserJson = result => result.json();

const requestJson = (uri, { method = 'GET', body, dispatch } = {}) => {
  const params = {
    headers: { 'Content-Type': 'application/json' },
    method,
    credentials: 'same-origin',
  };
  if (body) {
    params.body = JSON.stringify(body || {});
  }
  return fetch(uri, params)
    .then(checkStatus).then(paserJson)
    .then((result) => result)
    .catch((error) => {
      console.log('ERROR:', error);
    });
};

export default requestJson;
