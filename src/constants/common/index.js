const BASE_URL = 'http://localhost:3000/';
const RADIX = 10;
const TIMEOUT = 5000;

const AppRoute = {
  FAVORITES: '/favorites',
  LOGIN: '/login',
  OFFER: '/offer',
  ROOT: '/',
};

const AuthorizationStatus = {
  AUTH: 'AUTH',
  NO_AUTH: 'NO_AUTH',
};

const Error = {
  BAD_REQUEST: 400,
  SERVER_ERROR: 500,
  UNAUTHORIZED: 401,
};

const FavoriteRequiredAction = {
  ADD: 1,
  DELETE: 0,
};

export {
  AppRoute,
  AuthorizationStatus,
  BASE_URL,
  Error,
  FavoriteRequiredAction,
  RADIX,
  TIMEOUT,
};
