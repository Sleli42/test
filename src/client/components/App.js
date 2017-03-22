import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { toggleMode } from '../actions';
import { getAllDataSummed } from '../selectors';
import ListData from './ListData';

const Wrapper = styled.div`

`;

const App = ({ toggleMode, allDataSummed, mode }) => {
  return (
    <Wrapper>
      <div>
        <button value="depenses" onClick={() => toggleMode('depenses')}>Dépenses</button>
        <button value="revenus" onClick={() => toggleMode('revenus')}>Revenus</button>
      </div>
      {(allDataSummed) ? <ListData data={allDataSummed} mode={mode} /> : null}
    </Wrapper>
  )
}

const mapStateToProps = state => ({
  allDataSummed: getAllDataSummed(state),
  mode: state.mode,
});
const actions = { toggleMode };
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
