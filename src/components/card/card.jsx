import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import moment from 'moment';

import { DataActions, PopupActions } from '../../redux/actions';

import ButtonEdit from '../button-edit/button-edit';
import IconArrow from '../icons/icon-arrow';
import IconLink from '../icons/icon-link';
import IconRotation from '../icons/icon-rotation';
import IconBin from '../icons/icon-bin';
import IconClose from '../icons/icon-close';

const CompanyType = {
  agent: 'агент',
  contractor: 'подрядчик',
};

const getCompanyType = (array) => {
  array.map((it, idx) => array.splice(idx, 1, CompanyType[it]));
  return array.join(', ');
};

const getPhoneFormated = (phone) => `+7 (${phone.substr(1, 3)}) ${phone.substr(4, 3)}-${phone.substr(7, 2)}-${phone.substr(9, 2)}`;

const Card = ({
  company,
  contact,
  showPopup,
  deleteCard,
  deletePhoto,
}) => {
  if (!company || !contact) {
    return <></>;
  }

  const phone = getPhoneFormated(contact.phone);
  const companyType = getCompanyType(company.type);

  const renderPhoto = (photo) => (
    <li className="card__photo" key={photo.name}>
      <div className="card__photo-img" style={{backgroundImage: `url(${photo.thumbpath})`}}>
        <button
          className="card__photo-delete"
          type="button"
          aria-label="удалить фото"
          onClick={() => deletePhoto(company.id, photo.name)}
        >
          <IconClose />
        </button>
      </div>
      <p className="card__photo-title">{photo.name}</p>
      <p className="card__photo-date">11 июня 2018</p>
    </li>
  );

  return (
    <div className="card">
      <div className="card__navigation card-navigation">
        <Link className="card-navigation__back" to='/companies'>
          <IconArrow />
          <span>К списку юридических лиц</span>
        </Link>
        <ul className="card-navigation__buttons">
          <li className="card-navigation__item">
            <button className="card-navigation__button  card-navigation__button--link" type='button' aria-label="Получить ссылку">
              <IconLink />
            </button>
            <button className="card-navigation__button  card-navigation__button--refresh" type='button' aria-label="Обновить">
              <IconRotation />
            </button>
            <button
              className="card-navigation__button  card-navigation__button--delete"
              type='button'
              aria-label="Удалить карточку"
              onClick={() => {
                showPopup('DeleteCardPopup', {
                  title: 'Удалить карточку',
                  text: 'Отправить карточку организации  в архив?',
                  propsForBasePopup: {
                    actionBtnText: 'Удалить',
                    onActionBtnClick: () => deleteCard(company.id),
                  },
                });
              }}
            >
              <IconBin />
            </button>
          </li>
        </ul>
      </div>
      <article className="card__content">
        <h2 className="card__title">
          <span>{company.shortName}</span>
          <ButtonEdit onClick={() => {
            showPopup('EditCompanyNamePopup', {
              propsForBasePopup: {
                actionBtnText: 'Сохранить',
              },
            });
          }}
          />
        </h2>
        <div className="card__section">
          <p className="card__section-title card__section-title--edit">
            Общая информация
            <ButtonEdit onClick={() => {
              showPopup('EditCompanyPopup', {
                propsForBasePopup: {
                  actionBtnText: 'Сохранить',
                },
              });
            }}
            />
          </p>
          <div className="card__section-info">
            <div className="card__section-row">
              <p className="card__section-key">Полное название</p>
              <p className="card__section-value">{company.name}</p>
            </div>
            <div className="card__section-row">
              <p className="card__section-key">Договор</p>
              <p className="card__section-value">{company.contract.no} от <time dateTime={moment(company.contract.date).format('YYYY-MM-DD')}>{moment(company.contract.issue_date).format('DD.MM.YYYY')}</time></p>
            </div>
            <div className="card__section-row">
              <p className="card__section-key">Форма</p>
              <p className="card__section-value">{company.businessEntity}</p>
            </div>
            <div className="card__section-row">
              <p className="card__section-key">Тип</p>
              <p className="card__section-value  card__section-value--capitalized">{companyType}</p>
            </div>
          </div>
        </div>
        <div className="card__section">
          <p className="card__section-title card__section-title--edit">
            Контактные данные
            <ButtonEdit onClick={() => {
              showPopup('EditContactPopup', {
                propsForBasePopup: {
                  actionBtnText: 'Сохранить',
                },
              });
            }}
            />
          </p>
          <div className="card__section-info">
            <div className="card__section-row">
              <p className="card__section-key">ФИО</p>
              <p className="card__section-value">{contact.lastname} {contact.firstname} {contact.patronymic}</p>
            </div>
            <div className="card__section-row">
              <p className="card__section-key">Телефон</p>
              <p className="card__section-value">{phone}</p>
            </div>
            <div className="card__section-row">
              <p className="card__section-key">Эл.почта</p>
              <p className="card__section-value card__section-value--colored"><a href="mailto:grigoriev@funeral.com">{contact.email}</a></p>
            </div>
          </div>
        </div>
        <div className="card__section">
          <p className="card__section-title">Приложенные фото</p>
          <ul className="card__photos">
            {
              company.photos.map((photo) => renderPhoto(photo))
            }
          </ul>
          <button
            className="button  button--add"
            type="button"
            onClick={() => {
              showPopup('FileUploadPopup', {});
            }}
          >
            <span>Добавить изображение</span>
          </button>
        </div>
      </article>
    </div>
  );
};

export default connect(
  () => ({
  }),
  (dispatch) => ({
    showPopup: (popupId, popupData = {}, closeOtherPopups = true) => {
      dispatch(PopupActions.showPopup(popupId, popupData, closeOtherPopups));
    },
    closePopup: (popupId) => {
      dispatch(PopupActions.closePopup(popupId));
    },
    deleteCard: (companyId) => {
      dispatch(DataActions.deleteCard(companyId));
    },
    deletePhoto: (companyId, photoName) => {
      dispatch(DataActions.deletePhoto(companyId, photoName));
    },
  }),
)(Card);
