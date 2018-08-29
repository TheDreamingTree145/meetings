import axios from 'axios';

const url = 'http://localhost:3001/meetings'

export function fetchMeetings(term) {
  const request = axios.get(url, {
    params: {
      project_name: term
    }
  })
  return {
    type: 'FETCH_MEETINGS',
    payload: request
  }
}
