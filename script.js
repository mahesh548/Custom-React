import React, { useState } from "./react";
import { render } from "./reactdom";

const fruits = ["apple", "banana", "grapes"];

export function MyComp() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(10);
  const [name, setName] = useState("Mahesh");

  return (
    <div className="black" id="myDiv" title="div">
      Custom React App.
      <br /> <h1 style={{ color: "red" }}>This is custom useState</h1>
      <br />
      <button onclick={() => setCounter(counter + 1)}>{counter}</button>
      <br />
      <button onclick={() => setCounter2(counter2 + 1)}>{counter2}</button>
      <br /> <h2 style={{ color: "red" }}>Input is using custom useState</h2>
      <br />
      <b style={{ color: "greenyellow" }}>{name}</b>
      <br />
      <input
        type="text"
        value={name}
        onchange={(e) => setName(e.target.value)}
      />
    </div>
  );
}
function MyComp2({ name, children }) {
  return (
    <div className="black" style={{ marginTop: "50px" }} id="myDiv" title="div">
      <h1 style={{ color: "red" }}>{name}</h1>
      {children}
      <ul>
        <b>-: Rendered list :-</b>
        {fruits.map((fruit) => (
          <p>{fruit}</p>
        ))}
      </ul>
    </div>
  );
}

render(
  <MyComp2 name="Component with props">
    <p>Component with childrens</p>
  </MyComp2>,
  document.getElementById("root2")
);
render(<MyComp></MyComp>, document.getElementById("root"));
