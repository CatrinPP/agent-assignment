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
  [ActionsConstants.Data.DELETE_PHOTO]: (state, name) => {
    state.company.photos.splice(state.company.photos.findIndex((it) => it.name === name), 1);
    const updatedCompany = {...state.company};
    return {...state, company: updatedCompany};
  },
  [ActionsConstants.Data.ADD_PHOTO]: (state, photo) => ({
    ...state,
    company: {
      ...state.company,
      photos: [...state.company.photos, photo],
    },
  }),
});

export default (state = initialState, action) => createReducer(state, action, handlers);
