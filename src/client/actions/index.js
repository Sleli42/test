import requestJson from '../utils';

export const CATEGORIES_LOADED = 'categories/loaded';
export const TRANSACTIONS_LOADED = 'transactions/loaded';

export const categoriesLoaded = categories => ({
  type: CATEGORIES_LOADED,
  payload: categories,
});

export const transactionsLoaded = transactions => ({
  type: TRANSACTIONS_LOADED,
  payload: transactions,
});

export const loadCategories = () => (dispatch) => {
  const uri = 'https://crossquantum.com/technicaltest/categories';
  requestJson(uri)
    .then(categories => dispatch(categoriesLoaded(categories)))
    .catch(err => console.log('err: ', err))
}

export const loadTransactions = () => (dispatch) => {
  const uri = 'https://crossquantum.com/technicaltest/transactions';
  requestJson(uri)
    .then(transactions => dispatch(transactionsLoaded(transactions)))
    .catch(err => console.log('err: ', err))
}

export default { loadCategories, loadTransactions };
