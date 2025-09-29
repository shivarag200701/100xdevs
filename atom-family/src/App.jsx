import "./App.css";
import { useRecoilValue, RecoilRoot, useSetRecoilState } from "recoil";
import { todosAtomFamily } from "./atom";
import { useEffect } from "react";

function App() {
  return (
    <>
      <RecoilRoot>
        <Todo id={2} />
        <Todo id={1} />
        <Todo id={2} />
      </RecoilRoot>
    </>
  );
}

function Todo({ id }) {
  const todo = useRecoilValue(todosAtomFamily(id));
  console.log(todo);

  return (
    <>
      <div>{todo.title}</div>
      <div>{todo.description}</div>
      <br />
    </>
  );
}
export default App;
