import "./App.css";
import MainContent from "./Components/MainContent";
import Sidebar from "./Components/sidebar";

function App() {
  return (
    <>
      <div className="flex h-screen">
        <Sidebar />
        <MainContent />
      </div>
    </>
  );
}

export default App;
