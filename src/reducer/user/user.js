import {AuthorizationStatus} from '../../const';
// import {extend, transformCommentShape} from '../../utils.js';
import {extend} from '../../utils';
// import {getCurrentId} from '../data/selectors.js';

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  token: '',
};

const ActionType = {
  SET_TOKEN: 'SET_TOKEN',
  SET_AUTHORIZATION_STATUS: 'SET_AUTHORIZATION_STATUS',
};

const ActionCreator = {
  setToken: (token) => ({
    type: ActionType.SET_TOKEN,
    payload: token,
  }),

  setAuthorizationStatus: (status) => ({
    type: ActionType.SET_AUTHORIZATION_STATUS,
    payload: status,
  }),
};

const Operation = {
  checkAuth: () => (dispatch, getState, api) => (
    api.get('/auth', {
      params: {
        user: 'USERNAME',
      },
    })
      .then((response) => {
        dispatch(ActionCreator.setToken(response.headers.authorization));
        dispatch(ActionCreator.setAuthorizationStatus(AuthorizationStatus.AUTH));
      })
      .catch((error) => {
        console.error(error);
        dispatch(ActionCreator.setAuthorizationStatus(AuthorizationStatus.NO_AUTH));
      })
  ),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_AUTHORIZATION_STATUS:
      return extend(state, {
        authorizationStatus: action.payload,
      });

    case ActionType.SET_TOKEN:
      return extend(state, {
        token: action.payload,
      });
    default:
      return state;
  }
};

export {
  reducer,
  ActionCreator,
  ActionType,
  Operation,
};
