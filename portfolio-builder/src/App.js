import Sidebar from "./components/Sidebar";
import ThemePicker from "./components/ThemePicker";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <ThemePicker />
    </div>
  );
}

export default App;
