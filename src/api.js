// import axios from 'axios';
// import {TIMEOUT, BASE_URL} from './const';

// const createAPI = () => {
//   const api = axios.create({
//     baseURL: BASE_URL,
//     timeout: TIMEOUT,
//     withCredentials: true,
//   });

//   const onSuccess = (response) => response;

//   const onFail = (error) => {
//     throw error;
//   };

//   api.interceptors.response.use(onSuccess, onFail);

//   return api;
// };

// export default createAPI;

import baseAxios from 'axios';

import {BASE_URL} from './const';

const api = baseAxios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

api.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error),
);

export default api;
