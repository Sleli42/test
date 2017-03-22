import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import loadData from '../actions';

const App = ({ loadData, data }) =>
  <div />
  ;

App.propTypes = {
  loadData: PropTypes.func,
  data: PropTypes.array,
};

const mapStateToProps = state => state;
const actions = { loadData };
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
