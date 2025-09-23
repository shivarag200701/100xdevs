import React from "react";
import { useState, useEffect } from "react";
const RenderTodo = () => {
  //   const [todos, setTodos] = useState([{}]);

  //   const update = async (id) => {
  //     await fetch(`http://localhost:3000/update-todo/${id}`, {
  //       method: "POST",
  //     });
  //   };
  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const response = await fetch("http://localhost:3000/todos");
  //       const data = await response.json();
  //       console.log(data.todo);

  //       setTodos(data.todo);
  //     };
  //     fetchData();
  //   }, []);
  //   return (
  //     <div>
  //       {todos.map((todo) => {
  //         return (
  //           <div>
  //             <h1>{todo.title}</h1>
  //             <h2>{todo.description}</h2>
  //             <button
  //               onClick={() => {
  //                 update(todo._id);
  //               }}
  //             >
  //               {todo.completed ? "completed" : "complete"}
  //             </button>
  //           </div>
  //         );
  //       })}
  //     </div>
  //   );

  const [counter, setCounter] = useState(0);
  const [num, setNum] = useState(0);
  const [sum, setSum] = useState(0);

  useEffect(() => {
    let count = 0;
    for (let i = 1; i < num; i++) {
      count = count + i;
      setSum(count);
    }
  }, [num]);
  return (
    <div>
      <input type="text" onChange={(e) => setNum(e.target.value)} />
      <div>Sum is {sum}</div>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Counter {counter}
      </button>
    </div>
  );
};

export default RenderTodo;
