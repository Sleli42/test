import React, { PropTypes } from 'react';
import styled from 'styled-components';

const Line = styled.p`
  border-top : 1px solid #000;
`;

const getTotal = (transactions) => {
  let total = 0;
  transactions.map(t => {
    total = total + t.value;
  });
  return total;
}

const Category = ({ category, transactions, mode }) => {
  const filtered = transactions.filter(t => t.category.id === category._id);
  const finalTransac =  (mode === 'depenses') ? filtered.filter(t => t.value < 0) : filtered.filter(t => t.value > 0);
  const total = getTotal(finalTransac);
  return (
    <div>
      <h1>{category.name}</h1>
      {finalTransac.map((t, index) =>
        <div key={index}>{t.value}</div>
      )}
      <h3>Total: {total}</h3>
    </div>
  );
}

Category.propTypes = {
  category: PropTypes.object.isRequired,
  transactions: PropTypes.array.isRequired,
};

export default Category;
