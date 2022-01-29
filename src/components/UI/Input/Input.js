import React from 'react';

import classes from './Input.module.css';

const Input = (props) => {
  return (
    <div
      className={`${classes.control} ${
        props.state.isValid === false ? classes.invalid : ''
      }`}
    >
      <label htmlFor={props.label}>{props.text}</label>
      <input
        type={props.type}
        id={props.id}
        value={props.state.value}
        onChange={props.onChangeHandler}
        onBlur={props.onBlurHandler}
      />
    </div>
  );
};

export default Input;
