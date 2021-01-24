import React from 'react';
import {Link} from 'react-router-dom';
import ButtonEdit from '../button-edit/button-edit';
import IconArrow from '../icons/icon-arrow';
import IconLink from '../icons/icon-link';
import IconRotation from '../icons/icon-rotation';
import IconBin from '../icons/icon-bin';
import IconClose from '../icons/icon-close';
import Img1 from '../../assets/img/img1.jpg';
import Img2 from '../../assets/img/img2.jpg';
import Img3 from '../../assets/img/img3.jpg';

// const CompanyType = {
//   agent: 'агент',
//   contractor: 'подрядчик',
// };

const Card = ({company, contact}) => {
  if (!company || !contact) {
    return <></>;
  }

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
            <button className="card-navigation__button  card-navigation__button--delete" type='button' aria-label="Удалить карточку">
              <IconBin />
            </button>
          </li>
        </ul>
      </div>
      <article className="card__content">
        <h2 className="card__title">
          <span>{company.shortName}</span>
          <ButtonEdit />
        </h2>
        <div className="card__section">
          <p className="card__section-title card__section-title--edit">
            Общая информация
            <ButtonEdit />
          </p>
          <div className="card__section-info">
            <div className="card__section-row">
              <p className="card__section-key">Полное название</p>
              <p className="card__section-value">{company.name}</p>
            </div>
            <div className="card__section-row">
              <p className="card__section-key">Договор</p>
              <p className="card__section-value">{company.contract.no} от 12.03.2015</p>
            </div>
            <div className="card__section-row">
              <p className="card__section-key">Форма</p>
              <p className="card__section-value">{company.businessEntity}</p>
            </div>
            <div className="card__section-row">
              <p className="card__section-key">Тип</p>
              <p className="card__section-value">Агент, подрядчик</p>
            </div>
          </div>
        </div>
        <div className="card__section">
          <p className="card__section-title card__section-title--edit">
            Контактные данные
            <ButtonEdit />
          </p>
          <div className="card__section-info">
            <div className="card__section-row">
              <p className="card__section-key">ФИО</p>
              <p className="card__section-value">{contact.lastName} {contact.firstName} {contact.patronymic}</p>
            </div>
            <div className="card__section-row">
              <p className="card__section-key">Телефон</p>
              <p className="card__section-value">+7 (916) 216-55-88</p>
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
            <li className="card__photo">
              <div className="card__photo-img" style={{backgroundImage: `url(${Img1})`}}>
                <button className="card__photo-delete" type="button" aria-label="удалить фото">
                  <IconClose />
                </button>
              </div>
              <p className="card__photo-title">Надгробный камень.jpg</p>
              <p className="card__photo-date">11 июня 2018</p>
            </li>
            <li className="card__photo">
              <div className="card__photo-img" style={{backgroundImage: `url(${Img2})`}}>
                <button className="card__photo-delete" type="button" aria-label="удалить фото">
                  <IconClose />
                </button>
              </div>
              <p className="card__photo-title">Общий вид.jpg</p>
              <p className="card__photo-date">11 июня 2018</p>
            </li>
            <li className="card__photo">
              <div className="card__photo-img" style={{backgroundImage: `url(${Img3})`}}>
                <button className="card__photo-delete" type="button" aria-label="удалить фото">
                  <IconClose />
                </button>
              </div>
              <p className="card__photo-title">Пример ограды.jpg</p>
              <p className="card__photo-date">11 июня 2018</p>
            </li>
          </ul>
          <button className="button  button--add" type="button"><span>Добавить изображение</span></button>
        </div>
      </article>
    </div>
  );
};

export default Card;
