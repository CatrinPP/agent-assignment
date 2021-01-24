import {
  createReducer,
  createHandlers,
} from './reducerCreator';

import ActionsConstants from '../../constants';

const initialState = {
  activePopupList: [],
};

const handlers = createHandlers({
  [ActionsConstants.Popup.SHOW_POPUP]: (state, { activePopupList }) => ({
    ...state,
    activePopupList,
  }),
  [ActionsConstants.Popup.CLOSE_POPUP]: (state, { popupId }) => {
    const indexDeletePopup = popupId ? state.activePopupList.findIndex(({ popupId: id }) => id === popupId) : 0;

    const activePopupList = indexDeletePopup > -1 ? [...state.activePopupList.slice(0, indexDeletePopup), ...state.activePopupList.slice(indexDeletePopup + 1)] : state.activePopupList;

    return {
      ...state,
      activePopupList,
    };
  },
});

export default (state = initialState, action) => createReducer(state, action, handlers);
