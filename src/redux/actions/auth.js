import api from '../../api';
import createAction from './actionCreator';

import ActionsConstants from '../../constants';

// Actions
const authSuccessAction = (token) => createAction(
  ActionsConstants.Auth.AUTH_SUCCESS,
  {
    token,
  },
);

const authFailAction = () => createAction(
  ActionsConstants.Auth.AUTH_FAIL,
);

// Api requests

const checkAuth = () => (dispatch) => (
  api.get('/auth', {
    params: {
      user: 'USERNAME',
    },
  })
    .then((response) => {
      const token = response.headers.authorization;
      dispatch(authSuccessAction(token));
    })
    .catch((error) => {
      console.error(error);
      dispatch(authFailAction());
    })
);

export default {
  checkAuth,
};
