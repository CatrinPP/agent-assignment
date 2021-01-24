import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { PopupActions } from '../redux/actions';

import {
  Popup,
  Button,
  ButtonDefaultLink,
  ButtonRouterLink,
} from '../components';

const InfoPopup = (
  {
    popupId = 'InfoPopup',
    popupData: {
      text,
      title,
      subtitle,
      typeBig = false,
      propsForBasePopup: {
        btnClick = () => {},
        closeCallBack = () => {},
        withButton,
        withSingleButton,
        btnText = '',
        btnLink = '',
        btnType = 'DEFAULT',
      } = {},
      propsForBasePopup = {},
    },
    closePopup,
    variables: { RESOURCES_PATH } = {},
  },
) => (
  <Popup
    popupId={popupId}
    closeCallBack={closeCallBack}
    {...propsForBasePopup}
  >
    {/* eslint-disable-next-line react/no-danger */}
    <p className={`t-uppercase InfoPopup__title ${typeBig && 'InfoPopup__title--big'}`} dangerouslySetInnerHTML={{ __html: title }}/>
    <p className={`t-uppercase InfoPopup__subtitle ${typeBig && 'InfoPopup__subtitle--big'}`} dangerouslySetInnerHTML={{ __html: subtitle }}/>
    <p className='InfoPopup__text' dangerouslySetInnerHTML={{ __html: text }}/>
    {
      (withButton) && (
        <>
          {
            btnType === 'ROUTER' ? (
              <ButtonRouterLink
                classNameCustom='button'
                text={btnText}
                to={btnLink}
                onClick={() => {
                  closePopup(popupId);
                  closeCallBack();
                }}
              />
            ) : (
              <ButtonDefaultLink
                classNameCustom='button'
                text={btnText}
                to={`${RESOURCES_PATH}${btnLink}`}
                onClick={() => btnClick()}
              />
            )
          }
          <span>.</span>
        </>
      )
    }
    {
      (withSingleButton) || (
        <Button
          style={{ marginTop: '1em' }}
          text='ок'
          onClick={() => {
            closePopup();
            closeCallBack();
          }}
        />
      )
    }
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
  (state) => ({
    variables: state.VariablesReducer.variables,
  }),
  (dispatch) => ({
    closePopup: (popupId) => {
      dispatch(PopupActions.closePopup(popupId));
    },
  }),
)(InfoPopup);
