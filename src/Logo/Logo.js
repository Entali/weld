import React from 'react';
import {logo} from './base64svg';
import './Logo.scss';

function Logo() {
  return (
      <span className="Logo">
        <img src={logo} className="Logo__img" alt=""/>
      </span>
  );
}

export {Logo};
