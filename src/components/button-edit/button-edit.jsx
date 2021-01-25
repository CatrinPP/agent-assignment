import React from 'react';
import IconPencil from '../icons/icon-pencil';

const ButtonEdit = ({onClick}) => (
  <button className="edit" type="button" onClick={onClick}>
    <IconPencil />
  </button>
);

export default ButtonEdit;
