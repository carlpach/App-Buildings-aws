import axios from 'axios';

export const APIHeaders = {
  Accept: 'application/json',
  'Content-type': 'application/json',
};

const API = axios.create({
  baseURL: process.env.REACT_APP_BACK_URL,
  headers: APIHeaders,
});


export default API;
