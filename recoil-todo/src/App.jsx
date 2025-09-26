import { useState } from "react";
import "./App.css";
import { todoAtom, filterAtom, isFilter } from "./store/atoms/todo";
import { useSetRecoilState, useRecoilValue, RecoilRoot } from "recoil";
function App() {
  return (
    <>
      <RecoilRoot>
        <TodoInput />
        <Todo />
        <br />
        <br />
        <Filter />
        <br />
        <RenderFiltered />
      </RecoilRoot>
    </>
  );
}

function TodoInput() {
  const setTodo = useSetRecoilState(todoAtom);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleClick() {
    setTodo((prev) => [...prev, { title, description }]);
  }

  return (
    <>
      <input
        type="text"
        placeholder="title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="description"
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />
      <button onClick={handleClick}>Submit todo</button>
    </>
  );
}
function Filter() {
  const setFilter = useSetRecoilState(filterAtom);
  return (
    <input
      type="text"
      placeholder="Filter"
      onChange={(e) => setFilter(e.target.value)}
    />
  );
}

function RenderFiltered() {
  const filteredTodos = useRecoilValue(isFilter);
  return (
    <>
      {filteredTodos.map((todo) => {
        return (
          <>
            <div>Title:{todo.title}</div>
            <div>Description:{todo.description}</div>
          </>
        );
      })}
    </>
  );
}

function Todo() {
  const todo = useRecoilValue(todoAtom);

  return (
    <>
      {todo.map((to) => {
        return (
          <div key={to.title}>
            {to.title}
            <br />
            {to.description}
          </div>
        );
      })}
    </>
  );
}

export default App;
