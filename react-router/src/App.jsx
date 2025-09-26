import React, { useState } from "react";
import "./App.css";
import { CountContext } from "./context";
import { useContext } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <CountContext.Provider value={{ count, setCount }}>
        <Count />
      </CountContext.Provider>
    </div>
  );
}

function Count() {
  return (
    <div>
      <CountRenderer />
      <Buttons />
    </div>
  );
}
function CountRenderer() {
  console.log("countRenderer called");

  const { count } = useContext(CountContext);
  return <div>{count}</div>;
}
function Buttons() {
  const { setCount, count } = useContext(CountContext);

  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
}

export default App;
