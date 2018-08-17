import axios from 'axios';

const url = 'http://localhost:3001/meetings'

export function fetchMeetings() {
  const request = axios.get(url)
  return {
    type: 'FETCH_MEETINGS',
    payload: request
  }
}
