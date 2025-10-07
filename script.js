import React from "./react";
import { render } from "./react-dom";

const root = document.getElementById("root");
const div = (
  <div className="black" id="myDiv" title="div" style={{ background: "red" }}>
    Hello, <b style={{ color: "red" }}>how are you</b>
  </div>
);
const div2 = <div>Div 2</div>;

function MyComp({ children }) {
  return (
    <div className="black" id="myDiv" title="div" style={{ background: "red" }}>
      Hello, <b style={{ color: "red" }}>how are you</b>
      {children}
    </div>
  );
}

render(
  <MyComp name="Mahesh">
    <h1>Hello to child</h1>
  </MyComp>,
  root
);
