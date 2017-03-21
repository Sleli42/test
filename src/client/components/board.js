import React, { PropTypes, Component } from 'react';
import { Button, Radio } from 'antd';
import ListCategories from './listCategories';

const Board = ({ categories, transactions }) => {
  const mode = 'depenses';
  return (
    <div>
      <Radio.Group>
        <Button value="default">Dépenses</Button>
        <Button value="default">Revenus</Button>
      </Radio.Group>
      <ListCategories categories={categories} transactions={transactions} mode={mode} />
    </div>
  );
}

Board.propTypes = {
  categories: PropTypes.array.isRequired,
  transactions: PropTypes.array.isRequired,
};

export default Board;
