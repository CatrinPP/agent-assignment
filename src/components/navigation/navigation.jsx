import React from 'react';
import {Link} from 'react-router-dom';
import IconHome from '../icons/icon-home';
import IconMarket from '../icons/icon-market';
import IconSearch from '../icons/icon-search';
import IconSettings from '../icons/icon-settings';
import IconChat from '../icons/icon-chat';
import IconExit from '../icons/icon-exit';

const Navigation = () => (
  <nav className="main-nav">
    <div className="main-nav__top">
      <Link className="main-nav__link" to='/home' aria-label='На главную'>
        <IconHome />
      </Link>
      <Link className="main-nav__link  main-nav__link--active" to='/catalogue' aria-label='Организации'>
        <IconMarket />
      </Link>
      <Link className="main-nav__link" to='/search' aria-label='Поиск'>
        <IconSearch />
      </Link>
    </div>
    <div className="main-nav__bottom">
      <Link className="main-nav__link" to='/settings' aria-label='Настройки'>
        <IconSettings />
      </Link>
      <Link className="main-nav__link" to='/chat' aria-label='Чат'>
        <IconChat />
      </Link>
      <Link className="main-nav__link" to='/logout' aria-label='Выход'>
        <IconExit />
      </Link>
    </div>
  </nav>
);

export default Navigation;
