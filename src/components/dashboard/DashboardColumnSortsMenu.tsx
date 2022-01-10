import { Menu, Input } from "semantic-ui-react";

import {
  DashboardColumnSortsKeyType,
  DashboardColumnSortsType,
  DashboardColumnSortsValueType,
} from "api/dashboard";

const getKeys = Object.keys as <T extends object>(obj: T) => Array<keyof T>;

type DashboardColumnSortsMenuPropsType = {
  activeSort: {
    key: DashboardColumnSortsKeyType;
    value: DashboardColumnSortsValueType;
  };
  setActiveSort: (arg: {
    key: DashboardColumnSortsKeyType;
    value: DashboardColumnSortsValueType;
  }) => void;
  dashboardColumnSorts: DashboardColumnSortsType;
};

const DashboardColumnSortsMenu = ({
  activeSort: { key: activeSortKey, value: activeSortValue },
  setActiveSort,
  dashboardColumnSorts,
}: DashboardColumnSortsMenuPropsType) => {
  return (
    <Menu inverted pointing secondary>
      {Object.keys(dashboardColumnSorts).map((sortName, index) => (
        <Menu.Item
          key={index}
          name={sortName}
          active={activeSortKey === sortName}
          onClick={() =>
            setActiveSort({
              key: getKeys(dashboardColumnSorts)[index],
              value: Object.values(dashboardColumnSorts)[index],
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

export default DashboardColumnSortsMenu;
