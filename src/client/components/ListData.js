import React, { PropTypes } from 'react';
import R from 'ramda';
import Data from './data';

const ListData = ({ data, mode }) => {
  return (mode === 'depenses')
  ? <ul>{Object.values(R.filter(d => d.value < 0)(data)).map(d => <Data key={d.name} data={d} />)}</ul>
  : <ul>{Object.values(R.filter(d => d.value > 0)(data)).map(d => <Data key={d.name} data={d} />)}</ul>
};

export default ListData;
