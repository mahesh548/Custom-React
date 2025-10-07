import { MyComp } from "./script";
import { render } from "./reactdom.js";
import React from "react";
function createElement(type, props, ...children) {
  const reactElement = {
    type,
    props: { ...props },
  };
  if (children.length) reactElement.props.children = children;
  return reactElement;
}
let state = [];
let stateIndex = 0;
export const useState = (initialState) => {
  let localIndex = stateIndex;
  state[localIndex] = state[localIndex] || initialState;
  const setState = (newState) => {
    state[localIndex] = newState;
    stateIndex = 0;
    render(<MyComp name="Mahesh"></MyComp>, document.getElementById("root"));
  };
  stateIndex++;
  return [state[localIndex], setState];
};

export default { createElement };
