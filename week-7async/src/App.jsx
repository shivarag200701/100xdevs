import "./App.css";
import { notificationAtom, totalNotificationSelector } from "./atom";
import { useRecoilValue, RecoilRoot } from "recoil";

function App() {
  return (
    <>
      <RecoilRoot>
        <MainApp />
      </RecoilRoot>
    </>
  );
}

function MainApp() {
  const notifications = useRecoilValue(notificationAtom);

  const totalNotifications = useRecoilValue(totalNotificationSelector);
  return (
    <>
      <button>network ({notifications.network})</button>
      <button>jobs ({notifications.jobs})</button>
      <button>network ({notifications.notifications})</button>
      <button>notifcations ({notifications.posts})</button>
      <button>Total ({totalNotifications})</button>
    </>
  );
}

export default App;
