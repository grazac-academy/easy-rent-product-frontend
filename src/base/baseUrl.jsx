import axios from 'axios';

export const url =
  process.env.NODE_ENV === 'development'
    ? 'https://eazy-rent.herokuapp.com/api/v1'
    : 'api.eazy-rent.com/api/v1';

export const baseUrl = axios.create({
  baseURL: `${url}`,
  // headers: {
  //   'Content-Type': 'application/json',
  // // },
  // timeout: 100000,
  // timeoutErrorMessage: 'Request timed out, pls try again later',
});
