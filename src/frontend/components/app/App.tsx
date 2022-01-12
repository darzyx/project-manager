import AppMenu from "./AppMenu";
import Dashboard from "frontend/components/pages/dashboard/Dashboard";

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
