import requestJson from '../utils';
import { uriCategories, uriTransactions } from '../../../config';

export const CATEGORIES_LOADED = 'categories/loaded';
export const TRANSACTIONS_LOADED = 'transactions/loaded';
export const MODE_TOGGLED = 'mode/toggled';

export const categoriesLoaded = categories => ({
  type: CATEGORIES_LOADED,
  payload: categories,
});

export const transactionsLoaded = transactions => ({
  type: TRANSACTIONS_LOADED,
  payload: transactions,
});

export const modeToggled = mode => ({
  type: MODE_TOGGLED,
  payload: mode,
});

export const loadCategories = () => (dispatch) => {
  requestJson(uriCategories)
    .then(categories => dispatch(categoriesLoaded(categories)))
    .catch(err => console.log('err: ', err))
}

export const loadTransactions = () => (dispatch) => {
  requestJson(uriTransactions)
    .then(transactions => dispatch(transactionsLoaded(transactions)))
    .catch(err => console.log('err: ', err))
}

export const toggleMode = value => (dispatch) => {
  if (value) dispatch(modeToggled(value))
}
