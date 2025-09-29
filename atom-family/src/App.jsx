import "./App.css";
import { useRecoilValueLoadable, RecoilRoot } from "recoil";
import { todosAtomFamily } from "./atom";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <RecoilRoot>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/landing" element={<Landing />} />
            <Route path="/todos" element={<RenderTodo />} />
          </Routes>
        </RecoilRoot>
      </BrowserRouter>
    </>
  );
}

function Dashboard() {
  return <div>Dashboard Page</div>;
}

function Landing() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div>
        <ul style={{ display: "flex", gap: "30px" }}>
          <li>
            <Link to="/landing">Home</Link>
          </li>
          <li>
            <Link to="/dashboard">dashboard</Link>
          </li>
          <li>
            <Link to="/todos">todos</Link>
          </li>
        </ul>
      </div>
      <div>Landing Page</div>
    </div>
  );
}
function RenderTodo() {
  return (
    <>
      <Todo id={2} />
      <Todo id={1} />
      <Todo id={2} />
    </>
  );
}

function Todo({ id }) {
  const todo = useRecoilValueLoadable(todosAtomFamily(id));
  console.log(todo);

  if (todo.state == "loading") {
    return (
      <>
        <div>Loading......</div>
      </>
    );
  } else if (todo.state == "hasValue") {
    return (
      <>
        <div>{todo.contents.title}</div>
        <div>{todo.contents.description}</div>
        <br />
      </>
    );
  }
}
export default App;
