import axios from 'axios';

const url = 'http://localhost:3001/projects/'

export function fetchProjectMeetings(term) {
  const request = axios.get(url + term)
  return {
    type: 'FETCH_PROJECT',
    payload: request
  }
}
