import "./App.css";
import {
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { countAtom } from "./store/atoms/count";
import { useMemo } from "react";

function App() {
  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  );
}

function Count() {
  console.log("redenered");

  return (
    <div>
      <CountRenderer />
      <Buttons />
      <Iseven />
    </div>
  );
}
function CountRenderer() {
  const count = useRecoilValue(countAtom);
  return <div>{count}</div>;
}
function Buttons() {
  console.log("buttomn rendered");

  const setCount = useSetRecoilState(countAtom);
  return (
    <div>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setCount((prev) => prev - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
}
function Iseven() {
  const count = useRecoilValue(countAtom);
  const isEven = useMemo(() => {
    return count % 2 == 0;
  }, [count]);

  return <>{isEven ? "It is even" : ""}</>;
}

export default App;
