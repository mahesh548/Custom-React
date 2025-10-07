import React from "./react";
import { render } from "./react-dom";

const root = document.getElementById("root");
const div = (
  <div className="black" id="myDiv" title="div" style={{ background: "red" }}>
    Hello, <b style={{ color: "red" }}>how are you</b>
  </div>
);
const div2 = <div>Div 2</div>;

const fruits = ["apple", "banana", "grapes"];

function MyComp({ children }) {
  return (
    <div className="black" id="myDiv" title="div">
      Hello, <b style={{ color: "red" }}>how are you</b>
      {children}
      <ul>
        {fruits.map((fruit) => (
          <li>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

render(
  <MyComp name="Mahesh">
    <h1>Hello to child</h1>
  </MyComp>,
  root
);
