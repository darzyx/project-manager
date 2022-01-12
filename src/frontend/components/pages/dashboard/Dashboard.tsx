import { useState } from "react";
import { Header, Divider } from "semantic-ui-react";

import { dashboardColumnSorts } from "api/dashboard";

import DashboardMenu from "frontend/components/pages/dashboard/DashboardMenu";
import Stories from "frontend/components/stories/Stories";
import { getKeys } from "frontend/utils";
import StoryColumnGroup from "./stories/StoryColumnGroup";

const Dashboard = () => {
  const [activeSort, setActiveSort] = useState({
    key: getKeys(dashboardColumnSorts)[0],
    value: Object.values(dashboardColumnSorts)[0],
  });

  return (
    <div>
      <Header as="h2" inverted>
        Dashboard
        <Header.Subheader>March 6th, 2022</Header.Subheader>
      </Header>
      <Divider hidden />
      <DashboardMenu
        activeSort={activeSort}
        setActiveSort={setActiveSort}
        dashboardColumnSorts={dashboardColumnSorts}
      />
      <Divider hidden />
      <StoryColumnGroup />
      <Divider hidden />
      <Stories activeSort={activeSort} />
    </div>
  );
};

export default Dashboard;
