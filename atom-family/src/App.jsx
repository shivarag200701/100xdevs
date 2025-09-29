import "./App.css";
import { useRecoilValue, RecoilRoot, useSetRecoilState } from "recoil";
import { todosAtomFamily } from "./atom";
import { useEffect } from "react";

function App() {
  return (
    <>
      <RecoilRoot>
        <AtomStateUpdate />
        <Todo id={2} />
        <Todo id={1} />
        <Todo id={2} />
      </RecoilRoot>
    </>
  );
}

function AtomStateUpdate() {
  const updateTodo2 = useSetRecoilState(todosAtomFamily(2));
  useEffect(() => {
    setTimeout(() => {
      updateTodo2({
        id: 2,
        title: "New todo",
        description: "I added a new todo",
      });
    }, 5000);
  }, []);
}

function Todo({ id }) {
  const todo = useRecoilValue(todosAtomFamily(id));
  return (
    <>
      <div>{todo.title}</div>
      <div>{todo.description}</div>
      <br />
    </>
  );
}
export default App;
