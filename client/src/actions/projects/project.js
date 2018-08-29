import axios from 'axios';

const url = 'http://localhost:3001/projects/'

export function fetchProject(term) {
  const request = axios.get(url + term)
  return {
    type: 'FETCH_PROJECT',
    payload: request
  }
}
