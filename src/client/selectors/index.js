import R from 'ramda';
import { createSelector } from 'reselect';

const getCategories = state => state.categories;
const getTransactions = state => state.transactions;

const matchTransactions = (transactions, id) => R.filter(t => t.category.id === id)(transactions);

const matchAll = (categories, transactions) => {
  return (categories, transactions)
    ? R.reduce((acc, value) => ({ ...acc, [value.name]: { name: value.name, transactions: matchTransactions(transactions, value._id) } }), {})(categories)
    : null
}

const sumAllData = data => {
  return R.mapObjIndexed(({ name, transactions }) => {
    return { name: name, value: R.reduce((acc, curr) => acc + R.prop('value', curr), 0)(transactions) }
  })(data)
}

export const getAllDataSummed = createSelector(
  [getCategories, getTransactions],
  (categories, transactions) => {
    const allData = (categories && transactions) ? matchAll(categories, transactions) : null;
    // console.log('allData: ', allData);
    const summingData = (allData) ? sumAllData(allData) : null;
    // console.log('sum: ', summingData);
    return summingData;
  },
);
