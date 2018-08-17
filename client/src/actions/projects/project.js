import axios from 'axios';

const url = '/projects/'

export function fetchProject(term) {
  const request = axios.get(url + term)
  return {
    type: 'FETCH_PROJECTS',
    payload: request
  }
}
