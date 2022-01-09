import { useState } from "react";
import { Menu, Input } from "semantic-ui-react";

import { dashboardColumnSorts } from "api/dashboard";

const DashboardMenu = () => {
  const [activeItem, setActiveItem] = useState(
    Object.values(Object.values(dashboardColumnSorts)[0])[0].name
  );

  return (
    <Menu inverted pointing secondary>
      {Object.keys(dashboardColumnSorts).map(
        (dashboardColumnSortName, index) => (
          <Menu.Item
            name={dashboardColumnSortName}
            active={activeItem === dashboardColumnSortName}
            onClick={() => setActiveItem(dashboardColumnSortName)}
          />
        )
      )}
      <Menu.Menu position="right">
        <Menu.Item>
          <Input inverted icon="search" placeholder="Search..." />
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

export default DashboardMenu;
