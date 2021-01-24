import api from '../../api';
import createAction from './actionCreator';
import ActionsConstants from '../../constants';

// Actions
const loadCompanyDataSuccessAction = (company) => createAction(
  ActionsConstants.Data.LOAD_COMPANY_DATA_SUCCESS,
  {
    company,
  },
);

const loadContactDataSuccessAction = (contact) => createAction(
  ActionsConstants.Data.LOAD_CONTACT_DATA_SUCCESS,
  {
    contact,
  },
);

// Api requests

const loadCompanyData = (id = 12) => (dispatch, getState) => {
  const { token } = getState().AuthReducer;
  return api.get(`companies/${id}`, {
    headers: {
      Authorization: token,
    },
  })
    .then((response) => {
      dispatch(loadCompanyDataSuccessAction(response.data));
      return api.get(`contacts/${response.data.contactId}`, {
        headers: {
          Authorization: token,
        },
      });
    })
    .then((response) => {
      dispatch(loadContactDataSuccessAction(response.data));
    });
};

const loadContactData = (id, token) => (dispatch) => {
  api.get(`contacts/${id}`, {
    headers: {
      Authorization: token,
    },
  })
    .then((response) => {
      dispatch(loadContactDataSuccessAction(response.data));
    });
};

export default {
  loadCompanyData,
  loadContactData,
};
