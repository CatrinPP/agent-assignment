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

const deleteCardAction = () => createAction(
  ActionsConstants.Data.DELETE_CARD,
);

const updateContactAction = () => createAction(
  ActionsConstants.Data.UPDATE_CONTACT,
);

const updateCompanyAction = () => createAction(
  ActionsConstants.Data.UPDATE_COMPANY,
);

const addPhotoAction = () => createAction(
  ActionsConstants.Data.ADD_PHOTO,
);

const deletePhotoAction = (name) => createAction(
  ActionsConstants.Data.DELETE_PHOTO,
  {
    name,
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

const deleteCard = (id) => (dispatch, getState) => {
  api.delete(`companies/${id}`, {
    headers: {
      Authorization: getState().AuthReducer.token,
    },
  })
    .then(() => {
      dispatch(deleteCardAction());
    });
};

const updateContact = (id, params) => (dispatch, getState) => {
  api.patch(`contacts/${id}`, {
    params,
    headers: {
      Authorization: getState().AuthReducer.token,
    },
  })
    .then(() => {
      dispatch(updateContactAction());
    });
};

const updateCompany = (id, params) => (dispatch, getState) => {
  api.patch(`companies/${id}`, {
    params,
    headers: {
      Authorization: getState().AuthReducer.token,
    },
  })
    .then(() => {
      dispatch(updateCompanyAction());
    });
};

const deletePhoto = (id, name) => (dispatch, getState) => {
  api.delete(`companies/${id}/image/${name}`, {
    headers: {
      Authorization: getState().AuthReducer.token,
    },
  })
    .then(() => {
      dispatch(deletePhotoAction(name));
    });
};

const addPhoto = (id, file) => (dispatch, getState) => {
  api.post(`companies/${id}/image/`, {
    file,
    headers: {
      Authorization: getState().AuthReducer.token,
    },
  })
    .then(() => {
      dispatch(addPhotoAction());
    });
};

export default {
  loadCompanyData,
  loadContactData,
  deleteCard,
  updateContact,
  updateCompany,
  deletePhoto,
  addPhoto,
};
