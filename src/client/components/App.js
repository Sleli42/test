import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { toggleMode, DEPENSES_MODE, RECETTES_MODE } from '../actions';
import { getAllDataSummed, getTransactionsFiltered, getSkills } from '../selectors/retry';
import ListData from './ListData';

const App = ({ toggleMode, filteredData, testData, mode }) => {
  // console.log('filtered: ', filteredData);
  console.log('testData: ', testData);
  return (
    <div>
      {/* <div>
        <button disabled={mode === DEPENSES_MODE} value="depenses" onClick={() => toggleMode()}>Dépenses</button>
        <button disabled={mode === RECETTES_MODE} value="revenus" onClick={() => toggleMode()}>Revenus</button>
      </div> */}
      {/* <ListData data={filteredData} /> */}
    </div>
  )
}

const data = {
 people: [
   { id: 1, firstName: 'Sofiane', lastName: 'Khatir' },
   { id: 2, firstName: 'Raphael', lastName: 'Le Minor' },
   { id: 3, firstName: 'Lucas', lastName: 'Baujard' },
   { id: 4, firstName: 'Matthias', lastName: 'Leconte' },
 ],

 courses: [
   { id: 1, name: 'JavaScript Road Trip Part 1', skillPoints : [ { skill: 'javascript', points: 5 }]},
   { id: 2, name: 'JavaScript Road Trip Part 2', skillPoints : [ { skill: 'javascript', points: 7 }, { skill: 'es6', points: 3 }]},
   { id: 3, name: 'React', skillPoints : [ { skill: 'javascript', points: 2 }, { skill: 'es6', points: 1 }, { skill: 'react', points: 10 }]},
   { id: 4, name: 'Redux', skillPoints : [ { skill: 'javascript', points: 3 }, { skill: 'es6', points: 5 }, { skill: 'redux', points: 10 }]},
   { id: 5, name: 'Redux', skillPoints : [ { skill: 'javascript', points: 3 }, { skill: 'es6', points: 5 }, { skill: 'redux', points: 10 }, { skill: 'fp', points: 4 }]},
   { id: 6, name: 'Functionnal Programming', skillPoints : [ { skill: 'javascript', points: 3 }, { skill: 'fp', points: 10 }]},
 ],

 trainingSessions: [
   { userId: 1, courseId: 1 },
   { userId: 1, courseId: 2 },
   { userId: 1, courseId: 4 },
   { userId: 1, courseId: 6 },
   { userId: 2, courseId: 1 },
   { userId: 2, courseId: 5 },
   { userId: 3, courseId: 4 },
   { userId: 3, courseId: 5 },
   { userId: 3, courseId: 6 },
   { userId: 3, courseId: 1 },
   { userId: 4, courseId: 1 },
   { userId: 4, courseId: 1 },
   { userId: 4, courseId: 3 },
   { userId: 4, courseId: 5 },
   { userId: 4, courseId: 4 },
 ]
};

const mapStateToProps = state => ({
  // filteredData: getTransactionsFiltered(state),
  testData: getSkills(data),
  mode: state.mode,
});
const actions = { toggleMode };
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
