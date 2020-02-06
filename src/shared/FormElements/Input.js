import React, { useReducer, useState } from "react";
import "./Input.css";

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.val,
        isValid: true
      };
    default:
      return state;
  }
};

const Input = props => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: "",
    isValid: false
  });

  const changeHandler = event => {
    dispatch({ type: "CHANGE", val: event.target.value });
  };

  const element =
    props.element === "input" ? (
      <input
        id={props.id}
        type={props.type}
        onChange={changeHandler}
        placeholder={props.placeholder}
        value={inputState.value}
      />
    ) : (
      <textarea
        value={inputState.value}
        onChange={changeHandler}
        id={props.id}
        rows={props.rows || 3}
      />
    );
  return (
    <div className={`form-control ${!inputState.isValid && 'form-control--invalid'}`}>
      <label htmlFor={props.id}>{props.label}</label>
      {element}
        {!inputState.isValid && props.errorText}
    </div>
  );
};

export default Input;
