import React from 'react';
import PropTypes from 'prop-types';

const Popup = (
  {
    children,
    popupId,
    actionBtnText,
    onActionBtnClick,
    closePopup,
  },
) => (
  <div className='popup'>
    <div className={`popup__block ${popupId}`}>
      <div className='popup__in'>
        <div className='popup__content'>
          {children}
        </div>
        <div className="popup__buttons">
          <button className="popup__button  popup__button--cancel" type="button" onClick={() => closePopup(popupId)}>Отмена</button>
          <button
            className="popup__button  popup__button--action"
            type="button"
            onClick={() => {
              onActionBtnClick();
              closePopup(popupId);
            }}
          >{actionBtnText}
          </button>
        </div>
      </div>
    </div>
  </div>
);

Popup.defaultProps = {
  onActionBtnClick: () => {},
};

Popup.propTypes = {
  popupId: PropTypes.string.isRequired,
  actionBtnText: PropTypes.string.isRequired,
  onActionBtnClick: PropTypes.func,
};

export default Popup;
