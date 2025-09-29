import "./App.css";
import { useRecoilValue, RecoilRoot } from "recoil";
import { todosAtomFamily } from "./atom";

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
  return (
    <>
      <div>{todo.title}</div>
      <div>{todo.description}</div>
      <br />
    </>
  );
}
export default App;
