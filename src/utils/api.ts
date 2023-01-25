import axios from 'axios';

export const API_URL = process.env.REACT_APP_API_URL;

// this is temporary. this must be a token from an authenticated user
export const AUTH_TOKEN = process.env.REACT_APP_AUTH_TOKEN;

// axios instance for users and content mngt
export const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});
