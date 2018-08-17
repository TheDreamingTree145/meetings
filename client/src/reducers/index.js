import { combineReducers } from 'redux';
import studentReducer from './students/student';
import studentsReducer from './students/students';
import meetingReducer from './meetings/meeting';
import meetingsReducer from './meetings/meetings';
import projectsReducer from './projects/projects';

const rootReducer = combineReducers({
  student: studentReducer,
  students: studentsReducer,
  meeting: meetingReducer,
  meetings: meetingsReducer,
  projects: projectsReducer
});

export default rootReducer;
