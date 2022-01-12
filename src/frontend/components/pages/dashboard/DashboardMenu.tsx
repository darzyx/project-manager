import { Menu, Input } from "semantic-ui-react";

import {
  DashboardMenuKeyType,
  DashboardMenuType,
  DashboardMenuValueType,
} from "api/dashboard";
import { getKeys } from "frontend/utils";

type DashboardMenuPropsType = {
  activeSort: {
    key: DashboardMenuKeyType;
    value: DashboardMenuValueType;
  };
  setActiveSort: (arg: {
    key: DashboardMenuKeyType;
    value: DashboardMenuValueType;
  }) => void;
  dashboardMenu: DashboardMenuType;
};

const DashboardMenu = ({
  activeSort: { key: activeSortKey, value: activeSortValue },
  setActiveSort,
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
            setActiveSort({
              key: getKeys(dashboardMenu)[index],
              value: Object.values(dashboardMenu)[index],
            })
          }
        />
      ))}
      <Menu.Menu position="right">
        <Menu.Item>
          <Input inverted icon="search" placeholder="Search..." />
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

export default DashboardMenu;
