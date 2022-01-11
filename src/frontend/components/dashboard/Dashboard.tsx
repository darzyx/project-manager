import { useState } from "react";
import { Header, Divider } from "semantic-ui-react";

import { dashboardColumnSorts } from "api/dashboard";

import DashboardColumnSortsMenu from "frontend/components/dashboard/DashboardColumnSortsMenu";
import Stories from "frontend/components/stories/Stories";
import { getKeys } from "frontend/utils";

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
