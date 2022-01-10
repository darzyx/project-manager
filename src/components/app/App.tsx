import AppMenu from "./AppMenu";
import Dashboard from "components/dashboard/Dashboard";

const App = () => {
  return (
    <div>
      <AppMenu />
      <div style={{ padding: "20px" }}>
        <Dashboard />
      </div>
    </div>
  );
};

export default App;
