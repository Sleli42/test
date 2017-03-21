import React, { PropTypes } from 'react';
import styled from 'styled-components';
import Category from './category';

const Wrapper = styled.div`

`;

const Line = styled.p`
  border-top : 1px solid #000;
`;

const ListCategories = ({ categories, transactions, mode }) =>
  <Wrapper>
    {
      categories.map((category, index) =>
        <Line key={index}>
          <Category category={category} transactions={transactions} mode={mode} />
        </Line>
      )
    }
  </Wrapper>

ListCategories.propTypes = {
  categories: PropTypes.array.isRequired,
  transactions: PropTypes.array.isRequired,
};

export default ListCategories;
