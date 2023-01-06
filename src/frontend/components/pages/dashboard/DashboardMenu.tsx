import { Menu, Input } from "semantic-ui-react";

import {
  DashboardMenuKeyType,
  DashboardMenuType,
  DashboardMenuValueType,
} from "api/dashboard";
import { getKeys } from "frontend/utils";

type DashboardMenuPropsType = {
  activeMenuItem: {
    key: DashboardMenuKeyType;
    value: DashboardMenuValueType;
  };
  onSelectMenuItem: (arg: {
    key: DashboardMenuKeyType;
    value: DashboardMenuValueType;
  }) => void;
  dashboardMenu: DashboardMenuType;
};

const DashboardMenu = ({
  activeMenuItem: { key: activeSortKey, value: activeSortValue },
  onSelectMenuItem,
  dashboardMenu,
}: DashboardMenuPropsType) => {
  return (
    <Menu inverted pointing secondary>
      {Object.keys(dashboardMenu).map((sortName, index) => (
        <Menu.Item
          key={index}
          name={sortName}
          active={activeSortKey === sortName}
          onClick={() =>
            onSelectMenuItem({
              key: getKeys(dashboardMenu)[index],
              value: Object.values(dashboardMenu)[index],
            })
          }
        />
      ))}
      <Menu.Menu position="right">
        <Menu.Item>
          <Input
            id="search-input"
            inverted
            icon="search"
            placeholder="Search..."
          />
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

export default DashboardMenu;
