// import axios from 'axios';
import {extend} from '../../utils';
import {getToken} from '../user/selectors';
// import {FavoriteRequiredAction, AppRoute, Error} from '../../const';

const initialState = {
  company: null,
  contact: null,
};

const ActionType = {
  GET_COMPANY_DATA: 'GET_COMPANY_DATA',
  GET_CONTACT_DATA: 'GET_CONTACT_DATA',
};

const ActionCreator = {
  getCompanyData: (company) => ({
    type: ActionType.GET_COMPANY,
    payload: company,
  }),
  getContactData: (contact) => ({
    type: ActionType.GET_CONTACT,
    payload: contact,
  }),
};

const Operation = {
  loadCompany: (id = 12) => (dispatch, getState, api) => (
    api.get(`companies/${id}`, {
      headers: {
        Authorization: getToken(),
      },
    })
      .then((response) => {
        dispatch(ActionCreator.loadCompany(response.data));
      })
  ),

  loadContact: (id = 16) => (dispatch, getState, api) => (
    api.get(`contacts/${id}`, {
      headers: {
        Authorization: getToken(),
      },
    })
      .then((response) => {
        dispatch(ActionCreator.loadContact(response.data));
      })
  ),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_COMPANY:
      return extend(state, {
        company: action.payload,
      });

    case ActionType.GET_CONTACT:
      return extend(state, {
        contact: action.payload,
      });

    default:
      return state;
  }
};

export {
  reducer,
  ActionType,
  ActionCreator,
  Operation,
};
