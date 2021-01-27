import baseAxios from 'axios';

import {BASE_URL} from './constants/common';

const api = baseAxios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

api.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error),
);

export default api;
