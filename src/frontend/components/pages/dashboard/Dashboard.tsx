import { useState } from "react";
import { Header, Divider } from "semantic-ui-react";

import stories, { priorities } from "api/stories";
import {
  dashboardMenu,
  DashboardMenuKeyType,
  DashboardMenuValueType,
} from "api/dashboard";

import DashboardMenu from "frontend/components/pages/dashboard/DashboardMenu";
import { getKeys } from "frontend/utils";
import StoryColumnGroup from "./stories/StoryColumnGroup";

export type ActiveSortStateType = {
  key: DashboardMenuKeyType;
  value: DashboardMenuValueType;
};
type SetActiveSortStateType = (arg: ActiveSortStateType) => void;

const Dashboard = () => {
  const [activeMenuItem, setActiveMenuItem]: [
    ActiveSortStateType,
    SetActiveSortStateType
  ] = useState({
    key: getKeys(dashboardMenu)[0],
    value: Object.values(dashboardMenu)[0],
  });

  return (
    <div>
      <Header as="h1" inverted>
        Dashboard
        <Header.Subheader>March 6th, 2022</Header.Subheader>
      </Header>
      <Divider hidden />
      <DashboardMenu
        activeMenuItem={activeMenuItem}
        setActiveMenuItem={setActiveMenuItem}
        dashboardMenu={dashboardMenu}
      />
      <Divider hidden />
      <StoryColumnGroup
        activeMenuItem={activeMenuItem}
        stories={stories}
        priorities={priorities}
      />
      <Divider hidden />
    </div>
  );
};

export default Dashboard;
