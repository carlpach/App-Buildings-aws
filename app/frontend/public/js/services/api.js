import axios from 'axios';

var APIHeaders = {
  Accept: 'application/json',
  'Content-type': 'multipart/form-data'
};

var APIHeadersJson = {
  Accept: 'application/json',
  'Content-type': 'application/json'
};

export var API = axios.create({
  baseURL: process.env.REACT_APP_BACK_URL,
  headers: APIHeaders
});

export var APIJson = axios.create({
  baseURL: process.env.REACT_APP_BACK_URL,
  headers: APIHeadersJson
});