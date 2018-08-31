import _ from 'lodash';

export default function(state = {
  name: null,
  meetings: [],
  students: []
}, action) {
  switch (action.type) {
    case 'FETCH_PROJECT_FULFILLED':
    const meetings = action.payload.data.included.filter(el => el.type === 'meeting')
    const students = action.payload.data.included.filter(el => el.type === 'student')
      return Object.assign({}, state, {
        name: action.payload.data.data.attributes.name,
        meetings: meetings,
        students: students
      })
    case 'FETCH_PROJECT_PENDING':
      return state;
    case 'FETCH_PROJECT_REJECTED':
      error: action.payload
  }
  return state;
}
