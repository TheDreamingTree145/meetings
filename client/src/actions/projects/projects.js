import axios from 'axios';

const url = 'http://localhost:3001/projects/3'

export function fetchProjects() {
  const request = axios.get(url)
  return {
    type: 'FETCH_PROJECTS',
    payload: request
  }
}
