import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { PopupActions } from '../redux/actions';

import Popup from '../components/popup';

const DeleteCardPopup = (
  {
    popupId = 'DeleteCardPopup',
    popupData: {
      title,
      text,
      propsForBasePopup: {
        closeCallBack = () => {},
      } = {},
      propsForBasePopup = {},
    },
  },
) => (
  <Popup
    popupId={popupId}
    closeCallBack={closeCallBack}
    {...propsForBasePopup}
  >
    <p className='popup__title'>{title}</p>
    <p className='popup__text'>{text}</p>
  </Popup>
);

Popup.defaultProps = {
  title: null,
  text: null,
};

Popup.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};

export default connect(
  () => ({}),
  (dispatch) => ({
    closePopup: (popupId) => {
      dispatch(PopupActions.closePopup(popupId));
    },
  }),
)(DeleteCardPopup);
