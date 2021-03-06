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

const updateContactAction = (contact) => createAction(
  ActionsConstants.Data.UPDATE_CONTACT,
  {
    contact,
  },
);

const updateCompanyAction = (company) => createAction(
  ActionsConstants.Data.UPDATE_COMPANY,
  {
    company,
  },
);

const addPhotoAction = (photo) => createAction(
  ActionsConstants.Data.ADD_PHOTO,
  photo,
);

const deletePhotoAction = (name) => createAction(
  ActionsConstants.Data.DELETE_PHOTO,
  name,
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
  api.patch(`contacts/${id}`, {...params}, {
    headers: {
      Authorization: getState().AuthReducer.token,
    },
  })
    .then((response) => {
      dispatch(updateContactAction(response.data));
    });
};

const updateCompany = (id, params) => (dispatch, getState) => {
  api.patch(`companies/${id}`, {...params}, {
    headers: {
      Authorization: getState().AuthReducer.token,
    },
  })
    .then((response) => {
      dispatch(updateCompanyAction(response.data));
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

const addPhoto = (id, formData) => (dispatch, getState) => {
  api.post(`companies/${id}/image/`, formData, {
    headers: {
      Authorization: getState().AuthReducer.token,
      'Content-Type': 'multipart/form-data',
    },
  })
    .then((response) => {
      dispatch(addPhotoAction(response.data));
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
