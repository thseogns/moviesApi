/** @format */

import React, { useReducer, useContext } from "react";
import { ValueContext, ValueDispatchContext } from "./reducerbasic";

const ValuePro = ({ children }) => {
  const [value, disfatch] = useReducer(valueReducer, initialState);

  console.log("콘텍스트에 있는 값", value);
  return (
    <ValueContext.Provider value={value}>
      <ValueDispatchContext.Provider value={disfatch}>
        {children}
      </ValueDispatchContext.Provider>
    </ValueContext.Provider>
  );
};

export function useValue() {
  return useContext(ValueContext);
}
export function useValueDispatch() {
  return useContext(ValueDispatchContext);
}

let number = Math.random();
number = number * 3;
number = Math.floor(number);

const initialState = {
  name: "바탕화면",
  toggle: "",
  number: number,
};

function valueReducer(state = initialState, action) {
  console.log("보내기전값", state.number);
  switch (action.type) {
    case "바탕화면":
      return { ...state, name: "바탕화면", toggle: false };
    case "내정보":
      return { ...state, name: "내정보", toggle: action.toggle };
    case "기술":
      return { ...state, name: "기술", toggle: action.toggle };
    case "프로젝트":
      return { ...state, name: "프로젝트", toggle: action.toggle };
    case "서브프로젝트":
      return { ...state, name: "서브프로젝트", toggle: action.toggle };
    case "PUSH BUTTON":
      if (state.number === action.number) {
        let newNumber = Math.floor(Math.random() * 3);
        while (newNumber === action.number) {
          newNumber = Math.floor(Math.random() * 3);
        }
        return {
          ...state,
          number: newNumber,
          toggle: action.toggle,
        };
      } else {
        return {
          ...state,
          number: action.number,
          toggle: action.toggle,
        };
      }
    default:
      return state;
  }
}

export default ValuePro;
