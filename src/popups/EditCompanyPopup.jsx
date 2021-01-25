import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';

import { DataActions } from '../redux/actions';

import Popup from '../components/popup';

const CompanyType = {
  агент: 'agent',
  подрядчик: 'contractor',
};

class EditCompanyNamePopup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: null,
      businessEntity: null,
      contract: null,
      type: null,
    };
  }

  render() {
    const {
      name,
      contract,
      businessEntity,
      type,
    } = this.state;
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

    const value = {};
    if (name && name !== company.name) {
      value.name = name;
    }
    if (businessEntity && businessEntity !== company.businessEntity) {
      value.businessEntity = businessEntity;
    }
    if (type) {
      const formatedType = type.split(', ').map((it) => CompanyType[it.toLowerCase()]);
      value.type = formatedType;
    }
    if (contract && contract.no && contract.no !== company.contract.no) {
      value.contract = {...company.contract, no: contract.no};
    }
    if (contract && contract.issue_date && contract.issue_date !== company.issue_date) {
      value.contract = {...company.contract, issue_date: contract.issue_date};
    }

    return (
      <Popup
        popupId={popupId}
        closeCallBack={closeCallBack}
        onActionBtnClick={() => {
          updateCompany(company.id, value);
        }}
        {...propsForBasePopup}
      >
        <div className="popup__form">
          <label htmlFor="companyName" className="input-block">
            <span className="input-block__label">Полное название</span>
            <input
              id="companyName"
              className="input-block__field"
              type='text'
              placeholder={company.name}
              onChange={(evt) => {
                this.setState({
                  name: evt.target.value,
                });
              }}
            />
          </label>
          <label htmlFor="contractNumber" className="input-block">
            <span className="input-block__label">Номер договора</span>
            <input
              id="contractNumber"
              className="input-block__field"
              type='text'
              placeholder={company.contract.no}
              onChange={(evt) => {
                this.setState({
                  contract: {
                    no: evt.target.value,
                  },
                });
              }}
            />
          </label>
          <label htmlFor="contractIssueDate" className="input-block">
            <span className="input-block__label">Дата договора</span>
            <input
              id="contractIssueDate"
              className="input-block__field"
              type='date'
              placeholder={moment(company.contract.issue_date).format('DD.MM.YYYY')}
              onChange={(evt) => {
                this.setState({
                  contract: {
                    issue_date: evt.target.value,
                  },
                });
              }}
            />
          </label>
          <label htmlFor="businessEntity" className="input-block">
            <span className="input-block__label">Форма</span>
            <input
              id="businessEntity"
              className="input-block__field"
              type='text'
              placeholder={company.businessEntity}
              onChange={(evt) => {
                this.setState({
                  businessEntity: evt.target.value,
                });
              }}
            />
          </label>
          <label htmlFor="companyType" className="input-block">
            <span className="input-block__label">Тип</span>
            <input
              id="companyType"
              className="input-block__field"
              placeholder={company.type}
              onChange={(evt) => {
                this.setState({
                  type: evt.target.value,
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
