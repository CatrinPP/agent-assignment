import {
  createReducer,
  createHandlers,
} from './reducerCreator';

import ActionsConstants from '../../constants';
import {AuthorizationStatus} from '../../constants/common';

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  token: '',
};

const handlers = createHandlers({
  [ActionsConstants.Auth.AUTH_SUCCESS]: (state, { token }) => ({
    ...state,
    authorizationStatus: AuthorizationStatus.AUTH,
    token,
  }),
  [ActionsConstants.Auth.AUTH_FAIL]: (state) => ({
    ...state,
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    token: '',
  }),
});

export default (state = initialState, action) => createReducer(state, action, handlers);
