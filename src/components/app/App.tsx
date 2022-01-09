import { Header, Divider } from "semantic-ui-react";

import AppMenu from "./AppMenu";
import DashboardMenu from "components/dashboard/DashboardMenu";
import Stories from "components/stories/Stories";

const App = () => {
  return (
    <div>
      <AppMenu />
      <div className="App-content">
        <Header as="h2" inverted>
          Dashboard
          <Header.Subheader>March 6th, 2022</Header.Subheader>
        </Header>
        <Divider hidden />
        <DashboardMenu />
        <Divider hidden />
        <Stories />
      </div>
    </div>
  );
};

export default App;
