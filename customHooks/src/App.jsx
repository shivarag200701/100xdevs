import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function useResize() {
  const [size, setSize] = useState({ width: 0, height: 0 });

  function handleResize(e) {
    setSize({ width: window.innerWidth, height: window.innerHeight });
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  return size;
}

function App() {
  const size = useResize();

  return (
    <>
      <div>{size.width}</div>
      <div>{size.height}</div>
    </>
  );
}

export default App;
