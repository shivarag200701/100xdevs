import React, { useRef } from "react";

const UseRef = () => {
  const inputRef = useRef(null);
  const handleClick = () => {
    inputRef.current.focus();
  };
  return (
    <div>
      <input type="text" ref={inputRef} />
      <br />
      <button onClick={handleClick}>Click me to focus on input</button>
    </div>
  );
};

export default UseRef;
