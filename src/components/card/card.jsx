import React from 'react';
import {Link} from 'react-router-dom';

const Card = () => (
  <div className="card">
    <div className="card__navigation card-navigation">
      <Link className="card-navigation__back" to='/companies'>К списку юридических лиц</Link>
      <ul className="card-naviagtion__buttons">
        <li className="card-navigation__item">
          <button className="card-navigation__button  card-navigation__button--link" type='button' aria-label="Получить ссылку"/>
          <button className="card-navigation__button  card-navigation__button--refresh" type='button' aria-label="Обновить"/>
          <button className="card-navigation__button  card-navigation__button--delete" type='button' aria-label="Удалить карточку"/>
        </li>
      </ul>
    </div>
    <article className="card__content">
      <h2 className="card__title">Перспективные захоронения</h2>
      <div className="card__section">
        <p className="card__section-title">Общая информация</p>
        <div className="card__section-info">
          <div className="card__section-row">
            <p className="card__section-key">Полное название</p>
            <p className="card__section-value">ООО Фирма “Перспективные захоронения”</p>
          </div>
          <div className="card__section-row">
            <p className="card__section-key">Договор</p>
            <p className="card__section-value">12345 от 12.03.2015</p>
          </div>
          <div className="card__section-row">
            <p className="card__section-key">Форма</p>
            <p className="card__section-value">ООО</p>
          </div>
          <div className="card__section-row">
            <p className="card__section-key">Тип</p>
            <p className="card__section-value">Агент, подрядчик</p>
          </div>
        </div>
      </div>
      <div className="card__section">
        <p className="card__section-title">Контактные данные</p>
        <div className="card__section-info">
          <div className="card__section-row">
            <p className="card__section-key">ФИО</p>
            <p className="card__section-value">Григорьев Сергей Петрович</p>
          </div>
          <div className="card__section-row">
            <p className="card__section-key">Телефон</p>
            <p className="card__section-value">+7 (916) 216-55-88</p>
          </div>
          <div className="card__section-row">
            <p className="card__section-key">Эл.почта</p>
            <p className="card__section-value">grigoriev@funeral.com</p>
          </div>
        </div>
      </div>
      <div className="card__section">
        <p className="card__section-title">Приложенные фото</p>
        <ul className="card__photos">
          <li className="card__photo">
            <img className="card__photo-img" src="../../assets/img/img1.jpg" alt=""/>
            <p className="card__photo-title">Надгробный камень.jpg</p>
            <p className="card__photo-date">11 июня 2018</p>
          </li>
          <li className="card__photo">
            <img className="card__photo-img" src="../../assets/img/img2.jpg" alt=""/>
            <p className="card__photo-title">Общий вид.jpg</p>
            <p className="card__photo-date">11 июня 2018</p>
          </li>
          <li className="card__photo">
            <img className="card__photo-img" src="../../assets/img/img3.jpg" alt=""/>
            <p className="card__photo-title">Пример ограды.jpg</p>
            <p className="card__photo-date">11 июня 2018</p>
          </li>
        </ul>
        <button type="button">Добавить изображение</button>
      </div>
    </article>
  </div>
);

export default Card;
