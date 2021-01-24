import React from 'react';
import { connect } from 'react-redux';
import {
  CSSTransition,
  SwitchTransition,
} from 'react-transition-group';

import { PopupActions } from '../redux/actions';

import InfoPopup from './InfoPopup';

const popupComponents = () => ({
  InfoPopup: () => InfoPopup,
});

const popupComponentProps = {};

const createKey = (popupId, idx) => `popup-key-${popupId}-${idx}`;

class Popups extends React.Component {
  renderActivePopup = () => {
    const {
      activePopupList,
      closePopup,
      showPopup,
      variables,
    } = this.props;

    if (activePopupList.length === 0) {
      return <></>;
    }

    const { popupId, popupData } = activePopupList[0];

    let popupComponentGeneratorProps = {};
    const popupComponentPropsArray = popupComponentProps[popupId] || [];
    popupComponentPropsArray.forEach((prop) => {
      const { props } = this;
      popupComponentGeneratorProps = {
        ...popupComponentGeneratorProps,
        [prop]: props[prop],
      };
    });

    const popupComponentGenerator = popupComponents(popupComponentGeneratorProps)[popupId];
    if (!popupComponentGenerator) {
      return <></>;
    }

    popupData.propsForBasePopup = {
      ...popupData.propsForBasePopup,
      closePopup,
      showPopup,
    };

    const PopupComponent = popupComponentGenerator();
    if (PopupComponent) {
      return (
        <PopupComponent
          key={createKey(popupId, 0)}
          popupId={popupId}
          popupData={popupData}
          closePopup={closePopup}
          showPopup={showPopup}
          variables={variables}
        />
      );
    }

    return <></>;
  };

  render() {
    const { activePopupList } = this.props;

    return (
      <SwitchTransition>
        <CSSTransition
          key={activePopupList[0] ? activePopupList[0].popupId : null}
          timeout={300}
          classNames='popup-animation'
        >
          {this.renderActivePopup()}
        </CSSTransition>
      </SwitchTransition>
    );
  }
}

export default connect(
  (state) => ({
    activePopupList: state.PopupReducer.activePopupList,
    variables: state.VariablesReducer.variables,
  }),
  (dispatch) => ({
    showPopup: (popupId, popupData = {}, closeOtherPopups = true) => {
      dispatch(PopupActions.showPopup(popupId, popupData, closeOtherPopups));
    },
    closePopup: (popupId) => {
      dispatch(PopupActions.closePopup(popupId));
    },
  }),
)(Popups);