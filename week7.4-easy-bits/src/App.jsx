import { RecoilRoot, useRecoilValue } from "recoil";
import "./App.css";
import {
  jobsAtom,
  messagingAtom,
  networkAtom,
  notificationAtom,
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
  const messages = useRecoilValue(messagingAtom);
  const network = useRecoilValue(networkAtom);
  const jobs = useRecoilValue(jobsAtom);

  return (
    <>
      <button>Home</button>
      <button>My Network ({network})</button>
      <button>Jobs ({jobs})</button>
      <button>Messaging ({messages > 100 ? "99+" : messages})</button>
      <button>
        Notifications ({notifications > 100 ? "99+" : notifications})
      </button>
      <button>Me</button>
    </>
  );
}

export default App;
