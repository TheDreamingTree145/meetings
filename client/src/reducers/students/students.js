export default function(state = {
  name: null,
  meetings: [],
  students: [],
}, action) {
  switch (action.type) {
    case 'FETCH_STUDENTS_FULFILLED':
      return [...state, action.payload.data]
    case 'FETCH_STUDENTS_PENDING':
      return state;
    case 'FETCH_STUDENTS_REJECTED':
      error: action.payload
  }
  return state;
}
