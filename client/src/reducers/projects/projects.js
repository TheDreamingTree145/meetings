export default function(state = [], action) {
  switch (action.type) {
    case 'FETCH_PROJECTS_FULFILLED':
      return [...state, action.payload.data]
    case 'FETCH_PROJECTS_PENDING':
      return state;
    case 'FETCH_PROJECTS_REJECTED':
      error: action.payload
  }
  return state;
}
