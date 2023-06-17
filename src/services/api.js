import axios from 'axios';

const APIHeaders = {
  Accept: 'application/json',
  'Content-type': 'multipart/form-data',
};

const APIHeadersJson = {
  Accept: 'application/json',
  'Content-type': 'application/json',
};

export const API = axios.create({
  baseURL: process.env.REACT_APP_BACK_URL,
  headers: APIHeaders,
});

export const APIJson = axios.create({
  baseURL: process.env.REACT_APP_BACK_URL,
  headers: APIHeadersJson,
});


