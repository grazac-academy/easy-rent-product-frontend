import axios from 'axios';

// const url = 'https://murmuring-caverns-19178.herokuapp.com/api/v1';
const url = 'https://eazy-rent.herokuapp.com/api/v1';
// const url = 'localhost:4000/api/v1';

export const baseUrl = axios.create({
  baseURL: `${url}`,
  // headers: {
  //   'Content-Type': 'application/json',
  // },
  timeout: 100000,
  timeoutErrorMessage: 'Request timed out, pls try again later',
});
