import React from "react";
import { useState, useEffect } from "react";
const RenderTodo = () => {
  const [todos, setTodos] = useState([{}]);

  const update = async (id) => {
    await fetch(`http://localhost:3000/update-todo/${id}`, {
      method: "POST",
    });
  };
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/todos");
      const data = await response.json();
      console.log(data.todo);

      setTodos(data.todo);
    };
    fetchData();
  }, []);
  return (
    <div>
      {todos.map((todo) => {
        return (
          <div>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
            <button
              onClick={() => {
                update(todo._id);
              }}
            >
              {todo.completed ? "completed" : "complete"}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default RenderTodo;
