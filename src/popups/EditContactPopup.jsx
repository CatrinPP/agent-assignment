import React from 'react';
import { connect } from 'react-redux';

import { DataActions } from '../redux/actions';

import Popup from '../components/popup';

class EditContactPopup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lastname: null,
      firstname: null,
      patronymic: null,
      phone: null,
      email: null,
    };
  }

  render() {
    const {
      lastname,
      firstname,
      patronymic,
      phone,
      email,
    } = this.state;
    const {
      popupId = 'EditContactPopup',
      popupData: {
        propsForBasePopup: {
          closeCallBack = () => {},
        } = {},
        propsForBasePopup = {},
      },
      contact,
      updateContact,
    } = this.props;

    const value = {};
    if (lastname && lastname !== contact.lastname) {
      value.lastname = lastname;
    }
    if (firstname && firstname !== contact.firstname) {
      value.firstname = firstname;
    }
    if (patronymic && patronymic !== contact.patronymic) {
      value.patronymic = patronymic;
    }
    if (phone && phone !== contact.phone) {
      value.phone = phone;
    }
    if (email && email !== contact.email) {
      value.email = email;
    }

    return (
      <Popup
        popupId={popupId}
        closeCallBack={closeCallBack}
        onActionBtnClick={() => {
          updateContact(contact.id, value);
        }}
        {...propsForBasePopup}
      >
        <div className="popup__form">
          <label htmlFor="lastname" className="input-block">
            <span className="input-block__label">Фамилия</span>
            <input
              id="lastname"
              className="input-block__field"
              type='text'
              placeholder={contact.lastname}
              onChange={(evt) => {
                this.setState({
                  lastname: evt.target.value,
                });
              }}
            />
          </label>
          <label htmlFor="firstname" className="input-block">
            <span className="input-block__label">Имя</span>
            <input
              id="firstname"
              className="input-block__field"
              type='text'
              placeholder={contact.firstname}
              onChange={(evt) => {
                this.setState({
                  firstname: evt.target.value,
                });
              }}
            />
          </label>
          <label htmlFor="patronymic" className="input-block">
            <span className="input-block__label">Отчество</span>
            <input
              id="patronymic"
              className="input-block__field"
              type='text'
              placeholder={contact.patronymic}
              onChange={(evt) => {
                this.setState({
                  patronymic: evt.target.value,
                });
              }}
            />
          </label>
          <label htmlFor="contactPhone" className="input-block">
            <span className="input-block__label">Телефон</span>
            <input
              id="contactPhone"
              className="input-block__field"
              type='tel'
              placeholder={contact.phone}
              onChange={(evt) => {
                this.setState({
                  phone: evt.target.value,
                });
              }}
            />
          </label>
          <label htmlFor="contactEmail" className="input-block">
            <span className="input-block__label">Эл.почта</span>
            <input
              id="contactEmail"
              className="input-block__field"
              type='email'
              placeholder={contact.email}
              onChange={(evt) => {
                this.setState({
                  email: evt.target.value,
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
    contact: state.DataReducer.contact,
  }),
  (dispatch) => ({
    updateContact: (contactId, params) => {
      dispatch(DataActions.updateContact(contactId, params));
    },
  }),
)(EditContactPopup);
