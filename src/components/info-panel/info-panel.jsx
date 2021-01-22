import React from 'react';
import IconBuilding from '../icons/icon-building';

const InfoPanel = () => (
  <div className="info-panel">
    <div className="info-panel__heading">
      <h1 className="info-panel__title">Честный агент</h1>
      <p className="info-panel__text">Менеджер процесса</p>
    </div>
    <ul className="info-panel__menu">
      <li className="info-panel__menu-item">
        <IconBuilding />
        <span>Организации</span>
      </li>
    </ul>
  </div>
);

export default InfoPanel;
