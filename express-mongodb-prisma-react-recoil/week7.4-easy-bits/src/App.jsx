import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import "./App.css";
import {
  jobsAtom,
  messagingAtom,
  networkAtom,
  notificationAtom,
  totalSelector,
} from "./atoms";

function App() {
  return (
    <RecoilRoot>
      <Navbar />
    </RecoilRoot>
  );
}

function Navbar() {
  const notifications = useRecoilValue(notificationAtom);
  const [messages, setMessages] = useRecoilState(messagingAtom);
  const network = useRecoilValue(networkAtom);
  const jobs = useRecoilValue(jobsAtom);
  const total = useRecoilValue(totalSelector);

  return (
    <>
      <button>Home</button>
      <button>My Network ({network})</button>
      <button>Jobs ({jobs})</button>
      <button>Messaging ({messages > 100 ? "99+" : messages})</button>
      <button>
        Notifications ({notifications > 100 ? "99+" : notifications})
      </button>
      <button>Me({total})</button>
    </>
  );
}

export default App;
