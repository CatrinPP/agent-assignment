import React from 'react';
import {Link} from 'react-router-dom';

const Navigation = () => (
  <nav className="main-nav">
    <div className="main-nav__top">
      <Link to='/home' aria-label='На главную'/>
      <Link to='/catalogue' aria-label='Организации'/>
      <Link to='/search' aria-label='Поиск'/>
    </div>
    <div className="main-nav__bottom">
      <Link to='/settings' aria-label='Настройки'/>
      <Link to='/chat' aria-label='Чат'/>
      <Link to='/logout' aria-label='Выход'/>
    </div>
  </nav>
);

export default Navigation;
