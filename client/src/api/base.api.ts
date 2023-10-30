import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;
const BASE_URL = `${API_URL}/api`;

export const Axios = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});
export const AuthAxios = Axios;

AuthAxios.interceptors.request.use(function (config) {
  config.headers.Authorization = `Bearer ${sessionStorage.getItem('accessToken')}`;
  return config;
});

Axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

// Add a response interceptor
Axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  },
);
