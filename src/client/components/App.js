import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import loadDatas from '../actions';
// import Panel from './Panel';

const Wrapper = styled.div`

`;

const App = ({ actions, datas }) =>
  <Wrapper>
    {/* <Panel /> */}
  </Wrapper>
  ;

App.PropTypes = {
  actions: PropTypes.object.isRequired,
  datas: PropTypes.object.isRequired,
};

const mapStateToProps = state => state;
const actions = { loadDatas };
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
