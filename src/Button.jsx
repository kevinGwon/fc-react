import React from 'react';
// import { test } from './Button.module.css';
import classNames from 'classnames';
import style from './Button.module.scss';

function Button() {
  console.log(style);
  return (
    <button type='button' className={style}>
      Button
    </button>
  );
}

export default Button;
