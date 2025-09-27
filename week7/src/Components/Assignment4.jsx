import React from "react";
import { useState } from "react";
import { loremIpsum } from "lorem-ipsum";

const Assignment4 = () => {
  const [paragraph, setParagraph] = useState("");
  const [count, setCount] = useState(0);

  const handleClick = (c) => {
    console.log(c);

    const generated = loremIpsum({
      count,
      units: "words",
    });
    console.log(generated);

    setParagraph(generated);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <h1>Para Generator</h1>
      <div style={{ display: "flex", gap: "10px" }}>
        <input
          type="number"
          placeholder="Enter number of words"
          style={{ padding: "10px", width: "400px" }}
          onChange={(e) => setCount(e.target.value)}
        />
        <button
          style={{ borderRadius: "8px" }}
          onClick={() => handleClick(count)}
        >
          Generate
        </button>
      </div>
      <div>{paragraph}</div>
    </div>
  );
};

export default Assignment4;
