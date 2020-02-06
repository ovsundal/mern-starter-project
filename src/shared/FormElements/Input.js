import React, { useReducer } from "react";
import "./Input.css";
import { validate } from "../util/validators";

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators)
      };
    case "TOUCH": {
      return {
        ...state,
        isTouched: true
      };
    }
    default:
      return state;
  }
};

const Input = props => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: "",
    isValid: false,
    isTouched: false
  });

  const changeHandler = event => {
    dispatch({
      type: "CHANGE",
      val: event.target.value,
      validators: props.validators
    });
  };

  const touchHandler = () => {
    dispatch({
      type: "TOUCH"
    });
  };

  const element =
    props.element === "input" ? (
      <input
        id={props.id}
        type={props.type}
        onChange={changeHandler}
        onBlur={touchHandler}
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
    <div
      className={`form-control ${!inputState.isValid &&
        inputState.isTouched &&
        "form-control--invalid"}`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      {element}
      {!inputState.isValid && props.errorText}
    </div>
  );
};

export default Input;
