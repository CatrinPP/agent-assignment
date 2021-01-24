import React from 'react';
import PropTypes from 'prop-types';

import PopupHeader from './popupComponents/PopupHeader';

const Popup = (
  {
    children,
    popupId,
    classCustom,
    headerText,
    actionBtnText,
    onActionBtnClick,
    closePopup,
  },
) => (
  <div className='popup'>
    <div className={`popup-block ${popupId} ${classCustom}`}>
      <div className='popup-in'>
        <PopupHeader popupId={popupId} text={headerText}/>
        <div className='popup-content'>
          {children}
        </div>
        <div className="popup__buttons">
          <button type="button" onClick={closePopup}>Отмена</button>
          <button type="button" onClick={onActionBtnClick}>{actionBtnText}</button>
        </div>
      </div>
    </div>
  </div>
);

Popup.defaultProps = {
  classCustom: '',
  headerText: '',
  onActionBtnClick: () => {},
};

Popup.propTypes = {
  classCustom: PropTypes.string,
  popupId: PropTypes.string.isRequired,
  headerText: PropTypes.string,
  onActionBtnClick: PropTypes.func,
};

export default Popup;
