import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import loadDatas from '../actions';
// import Panel from './Panel';

const App = ({ actions, datas }) =>
  <div>
    {/* <Panel /> */}
  </div>
  ;

App.propTypes = {
  actions: PropTypes.object,
  datas: PropTypes.object,
};

const mapStateToProps = state => state;
const actions = { loadDatas };
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
