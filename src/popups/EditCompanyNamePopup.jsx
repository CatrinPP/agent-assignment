import React from 'react';
import { connect } from 'react-redux';

import { DataActions } from '../redux/actions';

import Popup from '../components/popup';

class EditCompanyNamePopup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: null,
    };
  }

  render() {
    const {value} = this.state;
    const {
      popupId = 'EditCompanyNamePopup',
      popupData: {
        propsForBasePopup: {
          closeCallBack = () => {},
        } = {},
        propsForBasePopup = {},
      },
      company,
      updateCompany,
    } = this.props;

    return (
      <Popup
        popupId={popupId}
        closeCallBack={closeCallBack}
        onActionBtnClick={() => {
          if (value && value !== company.shortName) {
            updateCompany(company.id, {shortName: value});
          }
        }}
        {...propsForBasePopup}
      >
        <div className="popup__form">
          <label htmlFor="shortName" className="input-block">
            <span className="input-block__label">Название</span>
            <input
              id="shortName"
              className="input-block__field"
              placeholder={company.shortName}
              onChange={(evt) => {
                this.setState({
                  value: evt.target.value,
                });
              }}
            />
          </label>
        </div>
      </Popup>
    );
  }
}

export default connect(
  (state) => ({
    company: state.DataReducer.company,
  }),
  (dispatch) => ({
    updateCompany: (companyId, params) => {
      dispatch(DataActions.updateCompany(companyId, params));
    },
  }),
)(EditCompanyNamePopup);
