import ActionsConstants from '../../constants';

const showPopup = (popupId, popupData = {}, closeOtherPopups = true) => (dispatch, getState) => {
  const popupListFromStore = getState().PopupReducer.activePopupList;

  const filteredPopups = popupListFromStore.filter(({ popupId: id }) => id === popupId);

  const popupKey = filteredPopups.length > 0 ? `${popupId}-${filteredPopups.length + 1}` : popupId;

  document.body.style.position = 'fixed';
  document.body.style.width = '100%';
  document.body.style.height = '100%';
  document.body.style.overflow = 'hidden';

  const activePopupList = closeOtherPopups
    ? [{ popupKey, popupId, popupData }]
    : [...popupListFromStore, { popupKey, popupId, popupData }];

  dispatch({
    type: ActionsConstants.Popup.SHOW_POPUP,
    payload: {
      activePopupList,
    },
  });
};

const closePopup = (popupId = null) => (dispatch) => {
  dispatch({
    type: ActionsConstants.Popup.CLOSE_POPUP,
    payload: {
      popupId,
    },
  });
};

export default {
  showPopup,
  closePopup,
};
