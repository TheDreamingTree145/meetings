import { combineReducers } from 'redux';
import studentReducer from './students/student';
import studentsReducer from './students/students';
import projectsReducer from './projects/project';

const rootReducer = combineReducers({
  student: studentReducer,
  students: studentsReducer,
  project: projectsReducer
});

export default rootReducer;
