export default function(state = [], action) {
  switch (action.type) {
    case 'FETCH_MEETINGS_FULFILLED':
      return [...state, action.payload.data]
    case 'FETCH_MEETINGS_PENDING':
      return state;
    case 'FETCH_MEETINGS_REJECTED':
      error: action.payload
  }
  return state;
}
