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
});

export default (state = initialState, action) => createReducer(state, action, handlers);
