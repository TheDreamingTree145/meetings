export default function(state = [], action) {
  switch (action.type) {
    case 'FETCH_PROJECT_FULFILLED':
      return [...state, action.payload.data]
    case 'FETCH_PROJECT_PENDING':
      return state;
    case 'FETCH_PROJECT_REJECTED':
      error: action.payload
  }
  return state;
}
