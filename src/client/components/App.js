import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { loadCategories, loadTransactions } from '../actions';
import Board from './board';

const Wrapper = styled.div`
  
`;

const App = ({ actions, categories, transactions }) => {
  return (
    <Wrapper>
      <Board categories={categories} transactions={transactions} />
    </Wrapper>
  )
}

  const mapStateToProps = state => state;
  const actions = { loadCategories, loadTransactions };
  const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actions, dispatch) });

  export default connect(mapStateToProps, mapDispatchToProps)(App);
