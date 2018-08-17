import axios from 'axios';

const url = 'http://localhost:3001/students'

export function fetchStudents() {
  const request = axios.get(url)
  return {
    type: 'FETCH_STUDENTS',
    payload: request
  }
}
