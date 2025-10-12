import React, { useState } from "react";

const CreateTodo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addTodo = async () => {
    fetch("http://localhost:3000/todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        description,
        completed: false,
      }),
    });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "300px",
        gap: "10px",
      }}
    >
      <input
        type="text"
        placeholder="title"
        style={{ padding: "10px", margin: "10px" }}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="description"
        style={{ padding: "10px", margin: "10px" }}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={addTodo} style={{ padding: "10px", margin: "10px" }}>
        Add todo
      </button>
    </div>
  );
};

export default CreateTodo;
