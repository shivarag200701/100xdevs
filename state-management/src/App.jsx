import "./App.css";
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom, evenSelector } from "./store/atoms/count";

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
  // const isEven = useMemo(() => {
  //   return count % 2 == 0;
  // }, [count]);
  const isEven = useRecoilValue(evenSelector);

  return <div>{isEven ? "It is even" : ""}</div>;
}

export default App;
