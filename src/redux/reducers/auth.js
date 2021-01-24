import {
  createReducer,
  createHandlers,
} from './reducerCreator';

import ActionsConstants from '../../constants';

const initialState = {
  authorizationStatus: 'NO_AUTH',
  token: '',
};

const handlers = createHandlers({
  [ActionsConstants.Auth.AUTH_SUCCESS]: (state, { token }) => ({
    ...state,
    authorizationStatus: 'AUTH',
    token,
  }),
  [ActionsConstants.Auth.AUTH_FAIL]: (state) => ({
    ...state,
    authorizationStatus: 'NO_AUTH',
    token: '',
  }),
});

export default (state = initialState, action) => createReducer(state, action, handlers);
