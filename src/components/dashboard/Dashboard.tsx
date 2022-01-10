import { useState } from "react";
import { Header, Divider } from "semantic-ui-react";

import { dashboardColumnSorts } from "api/dashboard";

import DashboardColumnSortsMenu from "components/dashboard/DashboardColumnSortsMenu";
import Stories from "components/stories/Stories";

const getKeys = Object.keys as <T extends object>(obj: T) => Array<keyof T>;

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
      <DashboardColumnSortsMenu
        activeSort={activeSort}
        setActiveSort={setActiveSort}
        dashboardColumnSorts={dashboardColumnSorts}
      />
      <Divider hidden />
      <Stories activeSort={activeSort} />
    </div>
  );
};

export default Dashboard;
