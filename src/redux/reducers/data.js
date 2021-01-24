import {
  createReducer,
  createHandlers,
} from './reducerCreator';

import ActionsConstants from '../../constants';

const initialState = {
  company: null,
  contact: null,
};

const handlers = createHandlers({
  [ActionsConstants.Data.LOAD_COMPANY_DATA_SUCCESS]: (state, { company }) => ({
    ...state,
    company,
  }),
  [ActionsConstants.Data.LOAD_CONTACT_DATA_SUCCESS]: (state, { contact }) => ({
    ...state,
    contact,
  }),
  [ActionsConstants.Data.DELETE_CARD]: (state) => ({
    ...state,
    company: null,
  }),
  [ActionsConstants.Data.UPDATE_CONTACT]: (state, { contact }) => ({
    ...state,
    contact,
  }),
  [ActionsConstants.Data.UPDATE_COMPANY]: (state, { company }) => ({
    ...state,
    company,
  }),
  [ActionsConstants.Data.DELETE_PHOTO]: (state) => ({
    ...state,
  }),
  [ActionsConstants.Data.ADD_PHOTO]: (state) => ({
    ...state,
  }),
});

export default (state = initialState, action) => createReducer(state, action, handlers);
