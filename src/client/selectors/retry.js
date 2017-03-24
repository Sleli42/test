import { createSelector } from 'reselect';
import R from 'ramda';

const getPeople = data => data.people;
const getCourses = data => data.courses;
const getTrainingSessions = data => data.trainingSessions;

const getSkillsPoints = skills => R.reduce((acc, skill) => acc += skill.points, 0)(skills)

const getHPeople = R.reduce((acc, person) => ({ ...acc, [person.id]: person.lastName }), {});
const getHCourses = R.reduce((acc, lesson) => ({ ...acc, [lesson.id]: getSkillsPoints(lesson.skillPoints) }), {});

const matchPersonAndCourses = (people, courses) => trainingSessions => {
  const hPeople = getHPeople(people);
  const hCourses = getHCourses(courses);
  return R.reduce((acc, session) => {
    const personName = hPeople[session.userId];
    const coursePoints = hCourses[session.courseId];
    if (acc[personName]) acc[personName] += coursePoints;
    else acc[personName] = coursePoints;
    return acc;
  }, [])(trainingSessions)
}

const doSort = R.sortBy(R.prop(1));

const convertData = R.map(person => ({ name: person[0], points: person[1] }));

const getSkillsByPerson = (people, courses, trainingSessions) => R.compose(convertData, doSort, R.toPairs, matchPersonAndCourses(people, courses))(trainingSessions)

export const getSkills = createSelector(
  [getPeople, getCourses, getTrainingSessions],
  (people, courses, trainingSessions) => getSkillsByPerson(people, courses, trainingSessions),
);
